import Button from './components/atoms/Button'
import ImageCard from './components/molecules/ImageCard'
import ProfileCard from './components/molecules/profile-card'
import Header from './components/organisms/Header'
import './styles/main.scss'

function App() {

  return (
    <>
      <Header />

      <main className="container body-container mt-1">
        <ProfileCard />

        <ImageCard image="https://newlnbookshelf.vercel.app/_next/image?url=https%3A%2F%2Fpfygdubgszqehygueykn.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fmedia%2Freverend_insanity_1.jpeg&w=256&q=75" score="3.5" btn_text="Continuar leyendo" last_chapter="55" max_chapters="100" />
      </main>


      <Button onClick={() => alert('test')} variant="icon" modifier="primary">
        Leer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Button>

    </>
  )
}

export default App
