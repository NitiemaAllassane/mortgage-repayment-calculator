import type { mortgageType } from "../types/types";

interface MortgageTypeOptionProps {
    name: string;
    id: string;
    checked: boolean;
    onOptionChange: (value: string) => void;
    optionType: mortgageType;
}

export default function MortgageTypeOption({
    name, 
    id, 
    checked,
    onOptionChange,
    optionType
}: MortgageTypeOptionProps
) {

    const labelMap = {
        repayment: "Repayment",
        interestOnly: "Interest Only"
    };
    
    return (
        <div 
            className="flex items-center gap-2 border border-slate-500 p-3 rounded-md
            hover:border-lime cursor-pointer has-checked:border-0 has-checked:outline-2 has-checked:outline-lime
    has-checked:bg-lime/30"
        >
            <input 
                type="radio" 
                name={name} 
                id={id} 
                checked={checked}
                value={optionType}
                onChange={() => onOptionChange(optionType)}
                className="w-5 h-5"
            />
            <label htmlFor={id} className="font-bold text-slate-700 cursor-pointer">
                {labelMap[optionType]}
            </label>
        </div>
    )
}