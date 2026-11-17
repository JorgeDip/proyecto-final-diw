import './NuevasNovelasSection.scss';

import ImageCardSmall from '../molecules/ImageCardSmall';
import BookOpenIcon from '../ui/BookOpenIcon';
import VerMasButton from '../atoms/VerMasButton';
const books = [
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/a_will_eternal.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/against_the_gods.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/renacimiento_del_venerable_demonio.png",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/amor_y_espadas_en_la_nieve.png",
    }, {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/battle_through_the_heavens.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/circle_of_inevitability.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/soul_land_ii.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/desolate_era.jpg",
    }, {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/el_dominio_del_emperador_alquimista.png",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/emperors_domination.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/ghost_blows_out_the_light.jpg",
    },
    {
        image: "https://pfygdubgszqehygueykn.supabase.co/storage/v1/object/public/media/grandmaster_of_demonic_cultivation.jpg",
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