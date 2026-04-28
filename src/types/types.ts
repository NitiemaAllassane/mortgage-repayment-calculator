export interface Results {
    monthlyPayment: number; 
    totalPayment: number;
}

export type mortgageType = "repayment" | "interestOnly";

export interface Error {
    amount: string;
    term: string;
    interest: string;
    mortgageType: string;
}