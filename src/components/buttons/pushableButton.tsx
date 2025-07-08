"use client";
import styles from './pushableButton.module.css';
export default function PushableButton(props: { label: string }) {
    const onClickHandler = () => {
        // find section with id regiter-section
        const section = document.getElementById('regiter-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }        

    }
    return (
        <button className={`${styles.pushable}`} onClick={onClickHandler}>
            <span className={`${styles.shadow}`}></span>
            <span className={`${styles.edge}`}></span>
            <span className={`${styles.front}`}>{props.label}</span>
        </button>
    );
}