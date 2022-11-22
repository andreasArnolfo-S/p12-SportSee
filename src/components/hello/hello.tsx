import { User } from '../../models/models';
import styles from './hello.module.css';


const Hello = () => {
  const info = User();
  
  return (
    <div className={styles.Hello}>
      <div className={styles.Bonjour}>
        <h1>
          Bonjour <span className={styles.firstname}>{info?.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
    </div>
  );
}

export default Hello;
