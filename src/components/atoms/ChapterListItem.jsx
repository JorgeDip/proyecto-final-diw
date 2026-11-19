import './ChapterListItem.scss';
function ChapterListItem({ number, title, date, status = "pendiente", isHeader = false }) {
    return (
        <div className={`novel-chapters__item ${isHeader ? 'novel-chapters__item--header' : ''}`}>
            <span className="novel-chapters__item-number">{number}</span>
            <span className="novel-chapters__item-title">{title}</span>
            <span className="novel-chapters__item-date">{date}</span>
            <span className="novel-chapters__item-status">{status}</span>
        </div>);
}

export default ChapterListItem;