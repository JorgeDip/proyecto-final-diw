import ImageCard from '../molecules/ImageCard';
import EyeIcon from '../ui/EyeIcon';
import './SeguirLeyendoSection.scss';
import VerMasButton from '../atoms/VerMasButton';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        score: "3.5",
        last_chapter: "55",
        max_chapters: "100"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/the_kings_avatar.jpg",
        score: "3.7",
        last_chapter: "22",
        max_chapters: "154"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/super_gene.jpg",
        score: "4.3",
        last_chapter: "371",
        max_chapters: "1288"
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/the_grave_robbers_chronicles.jpg",
        score: "4.9",
        last_chapter: "2560",
        max_chapters: "3795"
    },
];
function SeguirLeyendoSection({ setPage }) {
    return (
        <section className="seguir-leyendo">
            <h2 className="section-title"><EyeIcon /> Seguir leyendo</h2>
            <div className="grid">
                {books.map((book, index) => (
                    <ImageCard
                        key={index}
                        image={book.image}
                        score={book.score}
                        last_chapter={book.last_chapter}
                        max_chapters={book.max_chapters}
                        onClick={() => setPage('novel')}
                    />
                ))}
            </div>
            <VerMasButton />
        </section>
    );
}

export default SeguirLeyendoSection;