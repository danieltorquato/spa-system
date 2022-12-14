import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import Register from './components/register/register';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LoginPage></LoginPage>}></Route>
    <Route path='/home' element={<HomePage></HomePage>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
