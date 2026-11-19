import './NovelChaptersSection.scss';
function NovelChaptersSection() {
    return (
        <div className="novel-chapters">
            <h2 className="section-title">Capítulos</h2>

            <div className="novel-chapters__list">
                <div className="novel-chapters__header">
                    <span className="novel-chapters__header-item">#</span>
                    <span className="novel-chapters__header-item">Título</span>
                    <span className="novel-chapters__header-item">Fecha</span>
                    <span className="novel-chapters__header-item">Estado</span>
                </div>
                <div className="novel-chapters__body">
                    <div className="novel-chapters__item">
                        <span className="novel-chapters__item-number">1</span>
                        <span className="novel-chapters__item-title">El artefacto perdido</span>
                        <span className="novel-chapters__item-date">2023-01-01</span>
                        <span className="novel-chapters__item-status">Publicado</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovelChaptersSection;