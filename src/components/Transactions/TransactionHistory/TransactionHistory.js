import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr className={s.headList}>
          <th className={s.headItem}>Type</th>
          <th className={s.headItem}>Amount</th>
          <th className={s.headItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
