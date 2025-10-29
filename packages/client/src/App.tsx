import { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Loading from './components/loading/loading'

const Home = lazy(() => 
  import('./pages/home').then(({ Homepage }) => ({default: Homepage})
))

const Page404 = lazy(() => 
  import('./pages/404').then(({ Page404}) => ({default: Page404})
))

const Page500 = lazy(() => 
  import('./pages/500').then(({ Page500 }) => ({default: Page500})
))

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Page500 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App