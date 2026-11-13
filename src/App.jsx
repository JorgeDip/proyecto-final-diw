import Button from './components/atoms/Button'
import Header from './components/organisms/Header'
import './styles/main.scss'

function App() {

  return (
    <>
      <Header />
      <Button onClick={() => alert('test')} variant="icon" modifier="primary">
        Leer
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
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
