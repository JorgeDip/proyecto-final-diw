import CircleIcon from '../ui/CircleIcon';
import CircleCheckIcon from '../ui/CircleCheckIcon';
import './ChapterListItem.scss';
function ChapterListItem({ number, title, date, visto = false, isHeader = false }) {

    if (isHeader) {
        return (
            <div className="novel-chapters__item novel-chapters__item--header">
                <span className="novel-chapters__item-number">Capítulo</span>
                <span className="novel-chapters__item-title">Título</span>
                <span className="novel-chapters__item-date">Fecha</span>
                <span className="novel-chapters__item-status">Estado</span>
            </div>);
    }

    return (
        <div className="novel-chapters__item">
            <span className="novel-chapters__item-number novel-chapters__item-number--yellow">Capítulo {number}</span>
            <span className="novel-chapters__item-title">{title}</span>
            <span className="novel-chapters__item-date novel-chapters__item-date--purple">{date}</span>
            <span className={`novel-chapters__item-status ${visto ? 'novel-chapters__item-status--pending' : 'novel-chapters__item-status--viewed'}`}>
                {visto ? <CircleIcon /> : <CircleCheckIcon />} {!visto ? "Visto" : "Pendiente"}
            </span>
        </div>);
}

export default ChapterListItem;