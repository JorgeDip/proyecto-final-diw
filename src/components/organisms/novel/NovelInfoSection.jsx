import ImageCard from '../../molecules/ImageCard';

import Pill from '../../atoms/Pill';
import StarIcon from '../../ui/StarIcon';
import EyeIcon from '../../ui/EyeIcon';
import BookmarkIcon from '../../ui/BookmarkIcon';
import Button from '../../atoms/Button';

import './NovelInfoSection.scss';

function NovelInfoSection() {
    return (
        <div className="novel-page-info">
            <div className="novel-page-info__image">
                <div className="novel-page-info__image-container" style={{ width: '265px' }}>
                    <ImageCard image="https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/the_grave_robbers_chronicles.jpg" />
                </div>
            </div>
            <div className="novel-page-info__content">
                <div className="novel-page-info__header">
                    <h1 className="novel-page-info__title">The Grave Robbers Chronicles</h1>
                    <div className="novel-page-info__author-container">
                        <p className="novel-page-info__author">
                            <span className="novel-page-info__author-label">Creador</span>
                            <span className="novel-page-info__author-name">Mo Xuanling</span>
                        </p>
                        <p className="novel-page-info__frequency">
                            <span className="novel-page-info__frequency-label">Cadencia</span>
                            <span className="novel-page-info__frequency-value">Semanal</span>
                        </p>
                    </div>
                    <div className="novel-page-info__genre-container">
                        <Pill variant="genre">
                            Aventura
                        </Pill>
                        <Pill variant="genre">
                            Fantasía
                        </Pill>
                        <Pill variant="genre">
                            Misterio
                        </Pill>
                        <Pill variant="genre">
                            Romance
                        </Pill>
                        <Pill variant="genre">
                            Suspenso
                        </Pill>

                    </div>
                </div>
                <div className="novel-page-info__stats-buttons">
                    <div className="novel-page-info__stats">
                        <div className="novel-page-info__stat">
                            <span className="novel-page-info__stat-value"><StarIcon /> 4.6 / 5</span>
                            <span className="novel-page-info__stat-label">3.567 valoraciones</span>
                        </div>
                        <div className="novel-page-info__stat">
                            <span className="novel-page-info__stat-value"><EyeIcon /> 300K</span>
                            <span className="novel-page-info__stat-label">Visualizaciones totales</span>
                        </div>
                        <div className="novel-page-info__stat">
                            <span className="novel-page-info__stat-value"><BookmarkIcon /> 74k</span>
                            <span className="novel-page-info__stat-label">Guardados en favoritos</span>
                        </div>
                    </div>
                    <div className="novel-page-info__buttons">
                        <Button variant="icon" modifier="primary">Comenzar a leer (Cap. 1)</Button>
                        <Button variant="icon" modifier="primary"><EyeIcon /> Continuar leyendo (Cap. 99)</Button>
                        <Button variant="icon" modifier="secondary"><BookmarkIcon /> Guardar a favoritos</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovelInfoSection;