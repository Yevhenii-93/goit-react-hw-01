import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <div>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
      {friend.isOnline && <p className={css.isOnline}>Online</p>}
      {!friend.isOnline && <p className={css.isOffline}>Offline</p>}
    </div>
  );
}
