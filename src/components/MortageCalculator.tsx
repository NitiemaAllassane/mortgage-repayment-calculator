import { useState } from "react"
import MortgageInputField from "./MortgageInputField"
import MortgageTypeOption from "./MortgageTypeOption"
import EmptyState from "./EmptyState"
// import ResultDisplayer from "./ResultDisplayer"
import ActionButton from "./ActionButton"
import type { Error } from "../types/types"




export default function MortgageCalculator() {
    const [ amountValue, setAmountValue ] = useState('');
    const [ termValue, setTermValue ] = useState('');
    const [ interestValue, setInterestValue ] = useState('');
    const [ mortageTypeValue, setMortageTypeValue ] = useState('');
    const [ error, setError ] = useState<Error>({
        amount: "This field is required",
        term: "This field is required",
        interest: "This field is required",
        mortgageType: "This field is required"
    });


    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
    }


    return (
        <article className="w-5xl bg-white rounded-3xl shadow-2xs">
            <div className="md:flex">
                {/* Mortgage Form */}
                <form className="md:w-1/2" onSubmit={(e) => handleSubmit(e)}>
                    <div className="p-6 md:p-12">
                        <div className="md:flex md:items-center md:justify-between mb-8">
                            <h1 className="font-bold text-2xl text-slate-900 mb-3 md:mb-0">Mortgage Calculator</h1>
                            <button 
                                type="reset" 
                                className="text-slate-500 underline underline-offset-3 cursor-pointer
                                hover:text-slate-700"
                            >
                                Clear All
                            </button>
                        </div>

                        {/* Amount field */}
                        <div className="mb-6">
                            <MortgageInputField  
                                label="Mortgage Amount"
                                fieldType="amount"
                                suffixPosition="left"
                                value={amountValue}
                                onValueChange={setAmountValue}
                                error={error.amount}
                            />
                        </div>

                        {/* Term and Interest fields */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <MortgageInputField  
                                    label="Mortgage Term"
                                    fieldType="term"
                                    suffixPosition="right"
                                    value={termValue}
                                    onValueChange={setTermValue}
                                    error={error.term}
                                />
                            </div>
                            <div>
                                <MortgageInputField  
                                    label="Interest Rate"
                                    fieldType="interest"
                                    suffixPosition="right"
                                    value={interestValue}
                                    onValueChange={setInterestValue}
                                    error={error.interest}
                                />
                            </div>
                        </div>

                        {/* Type options */}
                        <div className="mb-8">
                            <label 
                                htmlFor="mortageType"
                                className="text-slate-500 font-medium inline-block mb-3"
                            >
                                Mortgage Type
                            </label>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <MortgageTypeOption  
                                        optionType="repayment"
                                        name="mortageType"
                                        id="repayment"
                                    />
                                </li>
                                <li>
                                    <MortgageTypeOption  
                                        optionType="interestOnly"
                                        name="mortageType"
                                        id="interestOnly"
                                    />
                                </li>
                                <p className="text-sm font-normal text-red mt-2">{error.mortgageType}</p>
                            </ul>
                        </div>

                        <div>
                            <ActionButton  
                                text="Calculate Repayments"
                            />
                        </div>
                    </div>
                </form>


                <div className="md:w-1/2 p-6 md:p-12 bg-slate-700 md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-[100px]">
                    <div className="flex items-center justify-center max-h-full h-full">
                        <EmptyState  />
                    </div>
                    {/* <ResultDisplayer 
                        monthlyPayment={1797.74} 
                        totalPayment={539322.94}
                    /> */}
                </div>
            </div>
        </article>
    )
}