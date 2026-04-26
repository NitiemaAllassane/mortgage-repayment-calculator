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
            <label htmlFor={fieldType}>{label}</label>
            <div>
                <div>
                    {suffixMap[fieldType]}
                </div>
                <input type="number" name={fieldType} id={fieldType} />
            </div>
        </>
    )
}