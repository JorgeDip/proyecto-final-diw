import ChapterListItem from '../../atoms/ChapterListItem';
import Button from '../../atoms/Button';

import ChevronLeftIcon from '../../ui/ChevronLeftIcon';
import ChevronRightIcon from '../../ui/ChevronRightIcon';

import './NovelChaptersSection.scss';
function NovelChaptersSection() {
    return (
        <div className="novel-chapters">
            <h2 className="section-title">Capítulos</h2>

            <div className="novel-chapters__list">
                <div className="novel-chapters__header">
                    <ChapterListItem isHeader={true} />
                </div>
                <div className="novel-chapters__body">
                    <ChapterListItem number="1" title="El comienzo de la aventura" date="hace 1 día" visto={true} />
                    <ChapterListItem number="2" title="El misterio del bosque" date="hace 2 días" visto={false} />
                    <ChapterListItem number="3" title="El encuentro inesperado" date="hace 3 días" visto={true} />
                    <ChapterListItem number="4" title="El secreto revelado" date="hace 4 días" visto={false} />
                    <ChapterListItem number="5" title="El desafío final" date="hace 5 días" visto={true} />
                    <ChapterListItem number="6" title="El regreso a casa" date="hace 6 días" visto={false} />
                    <ChapterListItem number="7" title="El legado del héroe" date="hace 7 días" visto={true} />
                    <ChapterListItem number="8" title="El destino de los elegidos" date="hace 8 días" visto={false} />
                    <ChapterListItem number="9" title="El despertar de la magia" date="hace 9 días" visto={true} />

                </div>
                <div className="novel-chapters__footer">
                    <p>Mostrando 9 de 100 capítulos</p>
                    <div className="novel-chapters__footer-pagination">
                        <Button variant="icon" modifier="primary"><ChevronLeftIcon /></Button>
                        <Button variant="icon" modifier="primary"><ChevronRightIcon /></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovelChaptersSection;