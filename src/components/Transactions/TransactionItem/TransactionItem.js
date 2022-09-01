import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <>
      <td className={s.bodyItem}>{type}</td>
      <td className={s.bodyItem}>{amount}</td>
      <td className={s.bodyItem}>{currency}</td>
    </>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
