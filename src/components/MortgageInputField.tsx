import clsx from "clsx";
interface MortgageInputFieldProps {
    label: string;
    fieldType: "amount" | "term" | "interest";
    suffixPosition?: "left" | "right";
    value: string;
    error: string;
    onValueChange: (value: string) => void;
}


export default function MortgageInputField({
    label,
    fieldType,
    value,
    error,
    onValueChange,
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
                `flex border rounded-md overflow-hidden hover:outline-1 group `,
                suffixPosition === "right" && "flex-row-reverse",
                !error && `border-slate-500 hover:outline-slate-700
               focus-within:border-2 focus-within:border-lime focus-within:outline-none`,
               error && `outline-none border-red`
            )}>
                <div 
                    className={clsx(
                        `font-bold flex items-center justify-center px-4`,
                        !error && `bg-slate-100 text-slate-500 group-focus-within:bg-lime 
                        group-focus-within:text-slate-900`,
                        error && "bg-red text-white"
                    )}
                >
                    {suffixMap[fieldType]}
                </div>
                <input 
                    type="number" 
                    name={fieldType} 
                    id={fieldType} 
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    className="py-3 pl-4 w-full outline-none font-bold text-slate-700"
                />
            </div>
            <p className="text-sm font-normal text-red mt-2">{error}</p>
        </>
    )
}