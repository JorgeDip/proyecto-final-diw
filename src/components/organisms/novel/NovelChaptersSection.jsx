import ChapterListItem from '../../atoms/ChapterListItem';
import './NovelChaptersSection.scss';
function NovelChaptersSection() {
    return (
        <div className="novel-chapters">
            <h2 className="section-title">Capítulos</h2>

            <div className="novel-chapters__list">
                <div className="novel-chapters__header">
                    <ChapterListItem number="Nº" title="Título" date="Fecha" status="Estado" isHeader={true} />
                </div>
                <div className="novel-chapters__body">
                    <ChapterListItem number="1" title="El comienzo de la aventura" date="hace 1 día" status="publicado" />
                </div>
            </div>
        </div>
    );
}

export default NovelChaptersSection;