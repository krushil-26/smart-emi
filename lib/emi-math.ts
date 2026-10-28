export interface EMICalculationResult {
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principalAmount: number;
  annualInterestRate: number;
  tenureMonths: number;
  amortizationSchedule: AmortizationMonth[];
  yearlySchedule: AmortizationYear[];
}

export interface AmortizationMonth {
  month: number;
  year: number;
  beginningBalance: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  endingBalance: number;
}

export interface AmortizationYear {
  year: number;
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  endingBalance: number;
}

/**
 * Calculates Equated Monthly Installment (EMI) and full amortization table
 */
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureYearsOrMonths: number,
  isTenureInYears: boolean = true
): EMICalculationResult {
  const principalAmount = Math.max(0, principal);
  const annualInterestRate = Math.max(0, annualRate);
  const tenureMonths = Math.max(
    1,
    isTenureInYears ? Math.round(tenureYearsOrMonths * 12) : Math.round(tenureYearsOrMonths)
  );

  const monthlyRate = annualInterestRate / 12 / 100;

  let emiExact = 0;
  let monthlyEMI = 0;
  if (monthlyRate === 0) {
    emiExact = principalAmount / tenureMonths;
  } else {
    // E = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const factor = Math.pow(1 + monthlyRate, tenureMonths);
    emiExact = (principalAmount * monthlyRate * factor) / (factor - 1);
  }

  // Display EMI rounded to nearest rupee
  monthlyEMI = Math.round(emiExact);

  let currentBalance = principalAmount;
  const amortizationSchedule: AmortizationMonth[] = [];
  const yearlyMap = new Map<number, { principal: number; interest: number; balance: number }>();

  for (let m = 1; m <= tenureMonths; m++) {
    const year = Math.ceil(m / 12);
    // Round interest to nearest rupee each month
    const interestPaid = Math.round(currentBalance * monthlyRate);
    let principalPaid = monthlyEMI - interestPaid;

    // Last month: pay off exact remaining balance
    if (m === tenureMonths || currentBalance < principalPaid) {
      principalPaid = Math.round(currentBalance);
    }

    const endingBalance = Math.max(0, Math.round(currentBalance) - principalPaid);

    amortizationSchedule.push({
      month: m,
      year,
      beginningBalance: Math.round(currentBalance),
      emi: principalPaid + interestPaid,
      principalPaid,
      interestPaid,
      endingBalance,
    });

    // Accumulate yearly data
    const existing = yearlyMap.get(year) || { principal: 0, interest: 0, balance: 0 };
    yearlyMap.set(year, {
      principal: existing.principal + principalPaid,
      interest: existing.interest + interestPaid,
      balance: endingBalance,
    });

    currentBalance = endingBalance;
  }

  const yearlySchedule: AmortizationYear[] = Array.from(yearlyMap.entries()).map(
    ([year, data]) => ({
      year,
      principalPaid: Math.round(data.principal),
      interestPaid: Math.round(data.interest),
      totalPayment: Math.round(data.principal + data.interest),
      endingBalance: data.balance,
    })
  );

  // Use exact (unrounded) EMI to derive total interest — matches reference calculator
  // totalInterest = round(exactEMI × n − principal)
  const totalInterest = Math.round(emiExact * tenureMonths - principalAmount);
  const totalPayment = principalAmount + totalInterest;

  return {
    monthlyEMI,
    totalInterest,
    totalPayment,
    principalAmount,
    annualInterestRate,
    tenureMonths,
    amortizationSchedule,
    yearlySchedule,
  };
}

/**
 * Currency formatter with symbol support
 */
export function formatCurrency(
  amount: number,
  currencyCode: string = "INR"
): string {
  const isINR = currencyCode === "INR";
  const locale = isINR ? "en-IN" : "en-US";
  const currencySymbolMap: Record<string, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const formattedNumber = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));

  const symbol = currencySymbolMap[currencyCode] || currencyCode;
  return `${symbol} ${formattedNumber}`;
}

/**
 * Large numbers shorthand formatter (e.g. 50L, 1.2Cr or 500k, 1M)
 */
export function formatCompactNumber(
  amount: number,
  currencyCode: string = "INR"
): string {
  if (currencyCode === "INR") {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
    }
    if (amount >= 100000) {
      return `₹ ${(amount / 100000).toFixed(2).replace(/\.00$/, "")} Lakh`;
    }
    if (amount >= 1000) {
      return `₹ ${(amount / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return `₹ ${amount}`;
  } else {
    const symbol = currencyCode === "USD" ? "$" : currencyCode === "EUR" ? "€" : "£";
    if (amount >= 1000000) {
      return `${symbol}${(amount / 1000000).toFixed(2).replace(/\.00$/, "")}M`;
    }
    if (amount >= 1000) {
      return `${symbol}${(amount / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return `${symbol}${amount}`;
  }
}
