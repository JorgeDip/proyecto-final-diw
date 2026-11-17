import Button from "../atoms/Button";
import './ImageCard.scss';

function ImageCard({ score = null, btn_text = null, last_chapter = null, max_chapters = null, image = null, rank = null }) {
    return (
        <div className="image-card">
            <div className="image-card__image">
                <img src={image} alt="Card image" />
            </div>
            <div className="image-card__content">
                <div className={`image-card__info ${score ? 'image-card__info--score' : 'image-card__info--rank'}`}>
                    {score ? (
                        <div className="image-card__score">
                            {score}
                        </div>
                    ) : (
                        <div className="image-card__rank">
                            {rank}
                        </div>
                    )}

                    {last_chapter && max_chapters && (
                        <div className="image-card__chapters">
                            {last_chapter} de {max_chapters}
                        </div>
                    )}
                </div>
                <Button modifier="primary">
                    {btn_text}
                </Button>
            </div>
        </div>
    );
}

export default ImageCard;