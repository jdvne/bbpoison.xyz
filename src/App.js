import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import NotFound from './pages/NotFound'
// import Gallery from './pages/Gallery'
// import Art from './pages/Art'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='404' element={<NotFound />} />
      <Route path=':gallery' element={<Gallery />} />
      <Route path=':gallery/:art' element={<Art />} /> */}
    </Routes>
  )
}

export default App;
