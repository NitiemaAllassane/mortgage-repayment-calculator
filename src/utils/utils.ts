export function calulateRepayment(
    amout: number, 
    interest: number, 
    term: number
): number {
    const monthly = (amout * (interest * Math.pow(1 + interest, term))) / (Math.pow(1 + interest, term) - 1);
    return monthly;
}
