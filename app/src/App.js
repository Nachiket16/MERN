import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Signin from './pages/signin';
import Home from './pages/home'
import Signup from './pages/signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
