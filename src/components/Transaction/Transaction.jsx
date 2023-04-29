import PropTypes from "prop-types";

const Transaction = ({ type, amount, currency }) => {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}

export default Transaction;

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}