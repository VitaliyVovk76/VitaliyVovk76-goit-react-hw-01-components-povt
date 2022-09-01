import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friends.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            status={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
