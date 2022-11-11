import {Route, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MainHeader from './MainHeader';
import Rent from './Rent'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<>
            <MainHeader/>
            <Rent/>
            </>
          } />

          <Route path="/rent" element={<>
            <MainHeader/>
            <Rent/>
            </>
          } />
          </Routes>
      </Router>
    </>
  );
}

export default App;