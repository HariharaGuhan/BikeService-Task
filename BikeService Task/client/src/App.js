import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Form } from './Component/form';
import { Navbar } from './Component/Navbar';
import { Home } from './Component/home';
import { Service } from './Component/service';
import { BookingTable } from './Component/booking';
import { Footer } from './Component/footer';
import Update from './Component/update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Navbar/>,<Home/>,<Service/>,<BookingTable/>,<Footer/>,<Form/>]}/>
          <Route path='/update/:id' element={<Update/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
