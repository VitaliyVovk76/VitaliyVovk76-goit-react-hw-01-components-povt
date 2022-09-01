import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendListItem({ avatar, name, status }) {
  return (
    <>
      {status ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.isOfnline}></span>
      )}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
