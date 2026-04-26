import calculatorIcon from "../assets/images/icon-calculator.svg"

export default function ActionButton({ text }: { text: string }) {
    return (
        <button 
            type="submit"
            className="bg-lime flex items-center justify-center gap-3 p-3 px-6 rounded-4xl cursor-pointer"
        >
            <span>
                <img src={calculatorIcon} alt="Calculator Icon" />
            </span>
            <span className="font-bold text-slate-900">{text}</span>
        </button>
    )
}