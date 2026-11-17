import PageTemplate from '../templates/PageTemplate';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProfileCard from '../molecules/ProfileCard';
import SeguirLeyendoSection from '../organisms/SeguirLeyendoSection';
import NovelasPopularesSection from '../organisms/NovelasPopularesSection';
import NuevasNovelasSection from '../organisms/NuevasNovelasSection';

function HomePage() {
    return (
        <PageTemplate header={<Header />} footer={<Footer />}>
            <ProfileCard />
            <SeguirLeyendoSection />
            <NovelasPopularesSection />
            <NuevasNovelasSection />
        </PageTemplate>
    );
}

export default HomePage;