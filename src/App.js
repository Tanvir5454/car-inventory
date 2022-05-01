import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import MyItems from './component/MyItems/MyItems';
import Registration from './component/Registration/Registration';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewItems from './component/AddNewItems/AddNewItems';
import NotFound from './component/NotFound/NotFound';
import Product from './component/Product/Product'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<Product></Product>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/addNewItems' element={<AddNewItems></AddNewItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
