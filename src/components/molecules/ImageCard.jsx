import Button from '../atoms/Button';
import Pill from '../atoms/Pill';
import StarIcon from '../ui/StarIcon';
import BookIcon from '../ui/BookIcon';
import './ImageCard.scss';

function ImageCard({ score = null, last_chapter = null, max_chapters = null, image = null, rank = null, onClick = null }) {
    if (!score && !last_chapter && !max_chapters && !onClick && !rank) {
        return (
            <div className="image-card">
                <div className="image-card__image">
                    <img src={image} alt="Card image" />
                </div>
            </div>
        );
    }

    return (
        <div className="image-card">
            <div className="image-card__image">
                <img src={image} alt="Card image" />
            </div>
            <div className="image-card__content">
                <div className={`image-card__info ${score ? 'image-card__info--score' : 'image-card__info--rank'}`}>
                    {score ? (
                        <Pill variant="score">
                            <StarIcon /> {score}
                        </Pill>
                    ) : (
                        <Pill variant={rank == 1 ? "rank-gold" : rank == 2 ? "rank-silver" : rank == 3 ? "rank-bronze" : "rank"}>
                            {rank}
                        </Pill>
                    )}

                    {last_chapter && max_chapters && (
                        <Pill variant="chapters">
                            <BookIcon /> {last_chapter} de {max_chapters}
                        </Pill>
                    )}
                </div>
                <Button modifier="primary" onClick={onClick}>
                    {rank ? "Empezar a leer" : "Continuar leyendo"}
                </Button>
            </div>
        </div>
    );
}

export default ImageCard;