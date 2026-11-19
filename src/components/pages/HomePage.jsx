import PageTemplate from '../templates/PageTemplate';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProfileCard from '../molecules/ProfileCard';
import SeguirLeyendoSection from '../organisms/SeguirLeyendoSection';
import NovelasPopularesSection from '../organisms/NovelasPopularesSection';
import NuevasNovelasSection from '../organisms/NuevasNovelasSection';

function HomePage({ setPage }) {
    return (
        <PageTemplate header={<Header setPage={setPage} />} footer={<Footer />}>
            <ProfileCard />
            <SeguirLeyendoSection setPage={setPage} />
            <NovelasPopularesSection />
            <NuevasNovelasSection />
        </PageTemplate>
    );
}

export default HomePage;