import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom"
import MiProvider from "./components/Contexto/CartContext";



const App = () => {
    return (
        <MiProvider>
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
        </MiProvider>
    )
}

export default App