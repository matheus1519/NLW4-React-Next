import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/2254731?s=400&u=4fcc8ca9672eeb41ea800271831b7c687bc17054&v=4"
        alt="Diego Fernandes"
      />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
