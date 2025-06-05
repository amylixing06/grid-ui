import { FcInfo } from "react-icons/fc";
import styles from "./Empty.module.scss";

function Empty() {
   return (
      <div className={styles.empty}>
         <div className={styles.empty__icon}>
            <FcInfo />
         </div>
         <h3 className={styles.empty__title}>选择一个项目</h3>
         <p className={styles.empty__text}>请选择一个项目进行编辑</p>
      </div>
   );
}

export default Empty;
