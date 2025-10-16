import Cabecera from "../Components/Cabecera";
import Footer from "../Components/Footer";
import Aside from "../Components/Aside"
import "./Home.css";

function Home() {
    return (
        
            < div class="divHome" >
                <Cabecera />
                <main>
                <h1>Hola mundo</h1>
                </main>
                <Aside />
                <Footer />
            </div >
           

    );
}
export default Home;