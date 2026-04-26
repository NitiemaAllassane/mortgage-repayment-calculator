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
        <div 
            className="flex items-center gap-2 border border-slate-500 p-3 rounded-md
            hover:border-lime cursor-pointer"
        >
            <input 
                type="radio" 
                name={name} 
                id={id} 
                value={optionType}
                className="w-5 h-5"
            />
            <label htmlFor={id} className="font-bold text-slate-700 cursor-pointer">
                {labelMap[optionType]}
            </label>
        </div>
    )
}