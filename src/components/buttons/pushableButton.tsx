import styles from './pushableButton.module.css';
export default function PushableButton(props: { label: string }) {
    return (
        <button className={`${styles.pushable}`}>
            <span className={`${styles.shadow}`}></span>
            <span className={`${styles.edge}`}></span>
            <span className={`${styles.front}`}>{props.label}</span>
        </button>
    );
}