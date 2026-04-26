import MortgageInputField from "./MortgageInputField"
import MortgageTypeOption from "./MortgageTypeOption"
import EmptyState from "./EmptyState"
import ActionButton from "./ActionButton"




export default function MortgageCalculator() {
    
    return (
        <article className="w-5xl bg-white rounded-3xl shadow-2xs">
            <div className="flex">
                {/* Mortgage Form */}
                <form className="w-1/2">
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="font-bold text-2xl text-slate-900">Mortgage Calculator</h1>
                            <button 
                                type="reset" 
                                className="text-slate-500 underline underline-offset-3 cursor-pointer">
                                Clear All
                            </button>
                        </div>

                        {/* Amount field */}
                        <div className="mb-6">
                            <MortgageInputField  
                                label="Mortgage Amount"
                                fieldType="amount"
                                suffixPosition="left"
                            />
                        </div>

                        {/* Term and Interest fields */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <MortgageInputField  
                                    label="Mortgage Term"
                                    fieldType="term"
                                    suffixPosition="right"
                                />
                            </div>
                            <div>
                                <MortgageInputField  
                                    label="Interest Rate"
                                    fieldType="interest"
                                    suffixPosition="right"
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
                            </ul>
                        </div>

                        <div>
                            <ActionButton  
                                text="Calculate Repayments"
                            />
                        </div>
                    </div>
                </form>


                <div className="w-1/2">
                    <div>
                        <EmptyState  />
                    </div>
                </div>
            </div>
        </article>
    )
}