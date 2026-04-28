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
        amount: "",
        term: "",
        interest: "",
        mortgageType: ""
    });




    // * Handle changes

    function handleAmountChange(value: string) {
        setAmountValue(value);
        setError((prev) => ({
            ...prev,
            amount: ""
        }))
    }

    
    function handleTermChange(value: string) {
        setTermValue(value);
        setError((prev) => ({
            ...prev,
            term: ""
        }))
    }

    function handleInterestChange(value: string) {
        setInterestValue(value);
        setError((prev) => ({
            ...prev,
            interest: ""
        }))
    }

    function handleMortgageTypeChange(value: string) {
        setMortageTypeValue(value);
        setError(prev => ({
            ...prev,
            mortgageType: ""
        }));
    }



    function validateFormData(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const newError = {
            amount: "",
            term: "",
            interest: "",
            mortgageType: ""
        }

        const amount = Number(amountValue);
        const term = Number(termValue);
        const interest = Number(interestValue);

        // Amount
        if (!amountValue) {
            newError.amount = "This field is required";
        } else if (isNaN(amount) || amount <= 0) {
            newError.amount = "Enter a valid amount";
        }

        // Term
        if (!termValue) {
            newError.term = "This field is required";
        } else if (isNaN(term) || term <= 0) {
            newError.term = "Enter a valid term";
        } else if (term > 50) {
            newError.term = "Term is too long";
        }

        // Interest
        if (!interestValue) {
            newError.interest = "This field is required";
        } else if (isNaN(interest) || interest <= 0) {
            newError.interest = "Enter a valid interest rate";
        } else if (interest > 100) {
            newError.interest = "Interest rate is too high";
        }

        // Type
        if (!mortageTypeValue) {
            newError.mortgageType = "Please select a mortgage type";
        }

        setError(newError);
    }


    // Function to reset All
    function resetForm() {
        setAmountValue('');
        setTermValue('');
        setInterestValue('');
        setError({
            amount: "",
            term: "",
            interest: "",
            mortgageType: ""
        })
    }


    return (
        <article className="w-5xl bg-white rounded-3xl shadow-2xs">
            <div className="md:flex">
                {/* Mortgage Form */}
                <form className="md:w-1/2" onSubmit={(e) => validateFormData(e)}>
                    <div className="p-6 md:p-12">
                        <div className="md:flex md:items-center md:justify-between mb-8">
                            <h1 className="font-bold text-2xl text-slate-900 mb-3 md:mb-0">Mortgage Calculator</h1>
                            <button 
                                type="reset" 
                                className="text-slate-500 underline underline-offset-3 cursor-pointer
                                hover:text-slate-700"
                                onClick={resetForm}
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
                                onValueChange={handleAmountChange}
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
                                    onValueChange={handleTermChange}
                                    error={error.term}
                                />
                            </div>
                            <div>
                                <MortgageInputField  
                                    label="Interest Rate"
                                    fieldType="interest"
                                    suffixPosition="right"
                                    value={interestValue}
                                    onValueChange={handleInterestChange}
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
                                        checked={mortageTypeValue === "repayment"}
                                        onOptionChange={handleMortgageTypeChange}
                                    />
                                </li>
                                <li>
                                    <MortgageTypeOption  
                                        optionType="interestOnly"
                                        name="mortageType"
                                        id="interestOnly"
                                        checked={mortageTypeValue === "interestOnly"}
                                        onOptionChange={handleMortgageTypeChange}
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