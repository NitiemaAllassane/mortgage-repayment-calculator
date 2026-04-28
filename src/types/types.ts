export interface Results {
    monthlyPayment: number; 
    totalPayment: number;
}

export interface Error {
    amount: string;
    term: string;
    interest: string;
    mortgageType: string;
}