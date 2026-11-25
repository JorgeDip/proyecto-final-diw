import './ProfileCard.scss';
function ProfileCard() {
    return (
        <div className="profile-card">

            <div className="profile-card__content">
                <div className="card-content__image">
                    <img src="./images/perfil2.webp" alt="Jorge Rodríguez Rodríguez" />
                </div>
                <h3 className="card-content__name">
                    Jorge Rodríguez Rodríguez
                </h3>
            </div>

            <div className="profile-card__stats">
                <div className="stat-container">
                    <span className="stat-container__number">24</span>
                    <span className="stat-container__label">En Seguimiento</span>
                </div>
                <div className="stat-container stat-container--highlighted">
                    <span className="stat-container__number">7,423</span>
                    <span className="stat-container__label">Caps. Leídos</span>
                </div>
                <div className="stat-container">
                    <span className="stat-container__number">18</span>
                    <span className="stat-container__label">Días de Racha</span>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;