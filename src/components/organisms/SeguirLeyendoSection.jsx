import ImageCard from '../molecules/ImageCard';
import EyeIcon from '../ui/EyeIcon';
import './SeguirLeyendoSection.scss';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        score: "3.5",
        last_chapter: "55",
        max_chapters: "100"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_2.jpeg",
        score: "3.5",
        last_chapter: "55",
        max_chapters: "100"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_3.jpeg",
        score: "3.5",
        last_chapter: "55",
        max_chapters: "100"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_4.jpeg",
        score: "3.5",
        last_chapter: "55",
        max_chapters: "100"
    },
];
function SeguirLeyendoSection() {
    return (
        <section>
            <h2 className="section-title"><EyeIcon /> Seguir leyendo</h2>
            <div className="grid">
                {books.map((book, index) => (
                    <ImageCard
                        key={index}
                        image={book.image}
                        score={book.score}
                        last_chapter={book.last_chapter}
                        max_chapters={book.max_chapters}
                    />
                ))}
            </div>
        </section>
    );
}

export default SeguirLeyendoSection;