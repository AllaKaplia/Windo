import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Advantages from '../../Components/Advantages/Advantages';
import About from '../../Components/About/About';
import Assortment from '../../Components/Assortment/Assortment';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Footer from '../../Components/Footer/Footer';
import Miscount from '../../Components/Miscount/Miscount';
import Discount from '../../Components/Discount/Discount';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero />
            <Advantages />
            <About />
            <Assortment />
            <Miscount />
            <Discount />
            <Portfolio />
            <Footer />
            
            <ToastContainer />
        </div>
    )
}

export default Home;