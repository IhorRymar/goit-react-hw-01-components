import PropTypes from 'prop-types';
import css from '../03_Friend List/FriendList.module.css';

const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendlistItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendlistItem;
