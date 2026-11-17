import ImageCard from "../molecules/ImageCard";
import StarIcon from "../ui/StarIcon";
import './NovelasPopularesSection.scss';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        rank: "1",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        rank: "2",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        rank: "3",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        rank: "4",
    },
];
function NovelasPopularesSection() {
    return (
        <section>
            <h2 className="section-title"><StarIcon /> Seguir leyendo</h2>
            <div className="grid">
                {books.map((book, index) => (
                    <ImageCard
                        key={index}
                        image={book.image}
                        rank={book.rank}
                    />
                ))}
            </div>
        </section>
    );
}

export default NovelasPopularesSection;