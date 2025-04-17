import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.userProfile}>
        <img className={css.userPhoto} src={image} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li className={css.statsInfo}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.statsInfo}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.statsInfo}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
