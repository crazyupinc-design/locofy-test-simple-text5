import { FunctionComponent } from "react";
import styles from "./simple-text5.module.css";
const SimpleText5: FunctionComponent = () => {
  return (
    <div className={styles.simpleText5}>
      <div className={styles.frameParent}>
        <div className={styles.topLeftAlignParent}>
          <div className={styles.topLeftAlign}>top-left-align</div>
          <div className={styles.topLeftAlign}>top-center-align</div>
          <div className={styles.topLeftAlign}>top-right-align</div>
        </div>
        <div className={styles.middleLeftAlignParent}>
          <div className={styles.topLeftAlign}>middle-left-align</div>
          <div className={styles.topLeftAlign}>middle-center-align</div>
          <div className={styles.topLeftAlign}>middle-right-align</div>
        </div>
        <div className={styles.middleLeftAlignParent}>
          <div className={styles.topLeftAlign}>bottom-left-align</div>
          <div className={styles.topLeftAlign}>bottom-center-align</div>
          <div className={styles.topLeftAlign}>bottom-right-align</div>
        </div>
      </div>
    </div>
  );
};

export default SimpleText5;
