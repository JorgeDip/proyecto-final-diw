import './NuevasNovelasSection.scss';

import ImageCardSmall from '../molecules/ImageCardSmall';
import BookOpenIcon from '../ui/BookOpenIcon';
import VerMasButton from '../atoms/VerMasButton';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/the_legendary_mechanic.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/lord_of_the_misteries.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/renacimiento_del_venerable_demonio.png",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/reverend_insanity_1.jpeg",
    },
];
function NuevasNovelasSection() {
    return (
        <section className="nuevas-novelas">
            <h2 className="section-title"><BookOpenIcon /> Nuevas novelas</h2>
            <div className="grid grid__6">
                {books.map((book, index) => (
                    <ImageCardSmall key={index} image={book.image} />
                ))}
            </div>
            <VerMasButton />
        </section>
    );
}

export default NuevasNovelasSection;