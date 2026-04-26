import emptyImage from "../assets/images/illustration-empty.svg"

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center">
            <figure className="mb-4">
                <img src={emptyImage} alt="Empty illustration" />
            </figure>
            <h2 className="text-xl font-bold text-white mb-3">Results shown here</h2>
            <p className="text-center text-white font-normal">
                Complete the form and click “calculate repayments” to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default EmptyState;