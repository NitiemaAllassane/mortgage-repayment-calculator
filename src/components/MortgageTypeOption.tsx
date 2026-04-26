interface MortgageTypeOptionProps {
    name: string;
    id: string;
    optionType: "repayment" | "interestOnly";
}

export default function MortgageTypeOption({name, id, optionType}: MortgageTypeOptionProps) {

    const labelMap = {
        repayment: "Repayment",
        interestOnly: "Interest Only"
    };
    
    return (
        <div>
            <input 
                type="radio" 
                name={name} 
                id={id} 
                value={optionType}
            />
            <label htmlFor={id}>
                {labelMap[optionType]}
            </label>
        </div>
    )
}