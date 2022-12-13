import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LoginPage></LoginPage>}></Route>
    <Route path='/home' element={<HomePage></HomePage>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
