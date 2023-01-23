import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainComponent}>
        <div className={styles.circle}></div>
        <div className={styles.hoverText}>
          <h2>{`Let's`} Work Together</h2>
        </div>
      </div>
      <div className={styles.linksConatiner}>
        <div>
          <p>Linkedin</p>
        </div>
        <div>
          <p>Twitter</p>
        </div>
        <div>
          <p>Github</p>
        </div>
        <div>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
