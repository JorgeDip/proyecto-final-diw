import EyeIcon from '../ui/EyeIcon';
import './ImageCardSmall.scss';

function ImageCardSmall({ image = null }) {
    return (
        <div className="image-card-small">
            <div className="image-card-small__image">
                <img src={image} alt="Small Card image" />
            </div>
            <div className="image-card-small__hover">
                <EyeIcon />
            </div>
        </div>
    );
}

export default ImageCardSmall;