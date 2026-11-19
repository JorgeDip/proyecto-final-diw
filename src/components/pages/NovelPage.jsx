import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PageTemplate from '../templates/PageTemplate';

import NovelInfoSection from '../organisms/novel/NovelInfoSection';
import NovelSynopsisSection from '../organisms/novel/NovelSynopsisSection';
import NovelChaptersSection from '../organisms/novel/NovelChaptersSection';
function NovelPage({ setPage }) {
    return <PageTemplate header={<Header setPage={setPage} />} footer={<Footer />}>
        <NovelInfoSection />
        <NovelSynopsisSection />
        <NovelChaptersSection />
    </PageTemplate >;
}

export default NovelPage;