import styles from "./DarkLayout.module.css";

export const DarkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.dark_div}>
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  );
};
