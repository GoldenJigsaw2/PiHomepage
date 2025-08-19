import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.opener}>
    <h1>Mark Jensen</h1>
    <h2>App Development & Emerrging Technologies</h2>
    <h2>Fort Hays Tech | Northwest</h2> 
    
      </div> 
      <div className={styles.container}>
        <div className={styles.hover}>
      <div className={styles.content}>
      <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+/?\|[]{}`~"</p>
      </div>
      </div>

      <div className={styles.hover}>
      <div className={styles.content}>
      <p>demo</p>
      </div>
      </div>

      <div className={styles.hover}>
      <div className={styles.content}>
      <p>demo</p>
      </div>
      </div>

      <div className={styles.hover}>
     <div className={styles.content}>
      <p>demo</p>
      </div>
      </div>

      <div className={styles.hover}>
      <div className={styles.content}>
      <p>demo</p>
      </div>
      </div>

      <div className={styles.hover}>
      <div className={styles.content}>
      <p>demo</p>
      </div>
      </div>
      
      
      
      <div className={styles.hovering}>
      <div className={styles.closer}>
    <h3>My assignments</h3>
     </div>
     </div>
     <div className={styles.hovering}>
     <div className={styles.closer}>
    <h3>My challenges</h3>
    </div>
    </div>
    <div className={styles.hovering}>
    <div className={styles.closer}>
    <h3>Final challenges</h3>
    </div>
     </div>
    </div>
    </div>
  );
}
