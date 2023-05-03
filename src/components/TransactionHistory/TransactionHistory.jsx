import PropTypes from "prop-types";
import Transaction from "components/Transaction/Transaction";
import css from 'components/TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <Transaction type={item.type} amount={item.amount} currency={item.currency} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
}