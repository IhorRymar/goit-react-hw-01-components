import FriendListItem from './FriendListItem';
import css from '../03_Friend List/FriendList.module.css';

function FriendList({ friends }) {
  return (
    <>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <FriendListItem
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default FriendList;
