import './Pill.scss';
function Pill({ children, variant = "primary" }) {
    return (
        <div className={`pill pill--${variant}`}>
            {children}
        </div>
    );
}

export default Pill;