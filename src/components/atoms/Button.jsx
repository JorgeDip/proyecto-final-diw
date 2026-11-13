
import styles from './Button.module.scss';
function Button({ children, onClick, variant = 'primary', modifier, disabled = false, type = 'button' }) {

    const buttonClass = `${styles.btn} ${modifier ? styles[`btn__${variant}`] : ''} ${styles[`btn--${modifier}`]}`;

    return <button
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>;
}

export default Button;