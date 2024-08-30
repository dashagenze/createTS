import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import UnexpectedError from "./pages/UnexpectedError.tsx";
import EmptyCart from "./pages/Cart/EmptyCart.tsx";
import Error from "./pages/Error.tsx";
import ItemPage from "./pages/ItemPage.tsx";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Login from "./pages/Login/Login.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ItemPage />} />
          <Route path="/error/404" element={<Error />} />
          <Route path="/error/emptycart" element={<EmptyCart />} />
          <Route path="/superError" element={<UnexpectedError />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
