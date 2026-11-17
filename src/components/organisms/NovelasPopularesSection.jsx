import Button from "../atoms/Button";
import ImageCard from "../molecules/ImageCard";
import StarIcon from "../ui/StarIcon";
import ChevronLeftIcon from "../ui/ChevronLeftIcon";
import ChevronRightIcon from "../ui/ChevronRightIcon";
import './NovelasPopularesSection.scss';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/the_legendary_mechanic.jpg",
        rank: "1",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/lord_of_the_misteries.jpg",
        rank: "2",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/renacimiento_del_venerable_demonio.png",
        rank: "3",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
        rank: "4",
    },
];
function NovelasPopularesSection() {
    return (
        <section className="novelas-populares">
            <h2 className="section-title"><StarIcon /> Novelas populares</h2>
            <div className="grid">
                {books.map((book, index) => (
                    <ImageCard
                        key={index}
                        image={book.image}
                        rank={book.rank}
                    />
                ))}
            </div>
            <div className="novelas-populares__pagination">
                <Button variant="icon" modifier="primary">
                    <ChevronLeftIcon />
                </Button>

                <div className="pagination-circles">
                    <span className="pagination-circles__circle pagination-circles__circle--active"></span>
                    <span className="pagination-circles__circle"></span>
                    <span className="pagination-circles__circle"></span>
                </div>

                <Button variant="icon" modifier="primary">
                    <ChevronRightIcon />
                </Button>
            </div>
        </section>
    );
}

export default NovelasPopularesSection;