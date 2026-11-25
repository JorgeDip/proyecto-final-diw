
import './Button.scss';
function Button({ children, element, onClick, variant = 'primary', modifier, disabled = false, type = 'button' }) {

    const buttonClass = `btn ${modifier ? `btn__${variant}` : ''} ${`btn--${modifier}`}`;

    if (element === 'a') {
        return <a
            href="#"
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </a>;
    }

    return <button
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}>
        {children}
    </button>;
}

export default Button;