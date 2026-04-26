import MortgageInputField from "./MortgageInputField"
import MortgageTypeOption from "./MortgageTypeOption"
import EmptyState from "./EmptyState"
import ActionButton from "./ActionButton"




export default function MortgageCalculator() {
    
    return (
        <article>
            <div>
                {/* Mortgage Form */}
                <form action="">
                    <div>
                        <h1>Mortgage Calculator</h1>
                        <button type="reset">Clear All</button>
                    </div>

                    <div>
                        <MortgageInputField  
                            label="Mortgage Amount"
                            fieldType="amount"
                            suffixPosition="left"
                        />
                    </div>

                    <div>
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

                    <div>
                        <label htmlFor="mortageType">Mortgage Type</label>
                        <MortgageTypeOption  
                            optionType="repayment"
                            name="mortageType"
                            id="repayment"
                        />

                        <MortgageTypeOption  
                            optionType="interestOnly"
                            name="mortageType"
                            id="interest"
                        />
                    </div>

                    <div>
                        <ActionButton  
                            text="Calculate Repayments"
                        />
                    </div>
                </form>


                <div>
                    <div>
                        <EmptyState  />
                    </div>
                </div>
            </div>
        </article>
    )
}