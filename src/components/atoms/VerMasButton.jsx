import './VerMasButton.scss';
import ChevronDownIcon from '../ui/ChevronDownIcon';
import Button from '../atoms/Button';
function VerMasButton({ onClick }) {
    return (
        <div className="ver-mas-button">
            <Button variant="icon" modifier="primary" onClick={onClick}>
                <span>Ver más</span>
                <ChevronDownIcon />
            </Button>
        </div>
    );
}

export default VerMasButton;