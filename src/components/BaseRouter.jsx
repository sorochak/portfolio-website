import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'

const BaseRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default BaseRouter;