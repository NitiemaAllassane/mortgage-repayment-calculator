import emptyImage from "../assets/images/illustration-empty.svg"

function EmptyState() {
    return (
        <div>
            <figure>
                <img src={emptyImage} alt="Empty illustration" />
            </figure>
            <h2>Results shown here</h2>
            <p>
                Complete the form and click “calculate repayments” to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default EmptyState;