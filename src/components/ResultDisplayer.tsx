import type { Results } from "../types/types"

export default function ResultDisplayer({ monthlyPayment, totalPayment }: Results) {
    
    return (
        <div>
            <header className="mb-12">
                <h2 className="text-2xl text-white font-bold mb-3">Your results</h2>
                <p className="text-slate-300">
                    Your results are shown below based on the information you provided. 
                    To adjust the results, edit the form and click “calculate repayments” again.
                </p>
            </header>

            <div className="bg-slate-900 border-t-4 border-t-lime rounded-md px-8">
                <div className="py-8 border-b border-slate-500">
                    <h3 className="text-slate-300 mb-3">Your monthly repayments</h3>
                    <p className="text-4xl md:text-6xl font-bold text-lime">
                        <span className="wrap-break-word">
                            {monthlyPayment.toLocaleString("en-GB", {
                                style: "currency",
                                currency: "GBP"
                            })}
                        </span>
                    </p>
                </div>
                <div className="py-8">
                    <h3 className="text-slate-300 mb-3">Total you'll repay over the term</h3>
                    <p className="text-xl text-white font-bold">
                        <span>
                            {totalPayment.toLocaleString("en-GB", {
                                style: "currency",
                                currency: "GBP"
                            })}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}