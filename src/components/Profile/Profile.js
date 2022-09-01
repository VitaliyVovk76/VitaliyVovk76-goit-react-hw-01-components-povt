import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultImg from './default.jpg';

export default function Profile({
  avatar = defaultImg,
  username,
  tag,
  location,
  stats,
}) {
  return (
    <div className={s.profileCard}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} width="200" />
        <div className={s.userInfo}>
          <p className={s.name}>{username}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers:</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views:</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes:</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};
