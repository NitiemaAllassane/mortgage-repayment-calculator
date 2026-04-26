import calculatorIcon from "../assets/images/icon-calculator.svg"

export default function ActionButton({ text }: { text: string }) {
    return (
        <button type="submit">
            <span>
                <img src={calculatorIcon} alt="Calculator Icon" />
            </span>
            <span>{text}</span>
        </button>
    )
}