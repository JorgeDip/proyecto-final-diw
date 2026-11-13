
import './Button.scss';
function Button({ children, onClick, variant = 'primary', modifier, disabled = false, type = 'button' }) {

    const buttonClass = `btn ${modifier ? `btn__${variant}` : ''} ${`btn--${modifier}`}`;

    return <button
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>;
}

export default Button;