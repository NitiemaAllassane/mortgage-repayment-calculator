import clsx from "clsx";
interface MortgageInputFieldProps {
    label: string;
    fieldType: "amount" | "term" | "interest";
    suffixPosition?: "left" | "right";
}


export default function MortgageInputField({
    label,
    fieldType,
    suffixPosition = "left"
}: MortgageInputFieldProps
) {

    const suffixMap = {
        amount: "£",
        term: "years",
        interest: "%"
    };
    
    return (
        <>
            <label 
                htmlFor={fieldType}
                className="text-slate-500 font-medium inline-block mb-3"
            >
                {label}
            </label>
            <div className={clsx(
                "flex border border-slate-500 rounded-md overflow-hidden hover:outline-1 hover:outline-slate-700",
                suffixPosition === "right" && "flex-row-reverse"
            )}>
                <div className="bg-slate-100 text-slate-500 font-bold flex items-center justify-center px-4">
                    {suffixMap[fieldType]}
                </div>
                <input 
                    type="number" 
                    name={fieldType} 
                    id={fieldType} 
                    className="py-3 pl-4 w-full outline-none font-bold text-slate-700"
                />
            </div>
        </>
    )
}