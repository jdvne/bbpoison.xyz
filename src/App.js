import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Gallery from './pages/Gallery'
// import NotFound from './pages/NotFound'
import All from './pages/All'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/a' element={<All />} />
      {/* <Route path='g/:gallery' element={<Gallery />} /> */}
      {/* <Route path='art/:slug' element={<Home />} /> */}
      {/* <Route exact path='404' element={<NotFound />} />
      <Route path=':gallery/:art' element={<Art />} /> */}
    </Routes>
  )
}

export default App;
