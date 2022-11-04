
//Styles css
import "../css/homePage.css";

//Assets
import logoOne from "../Assets/Recursos web/casafest2022.png";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import whatsapp from "../Assets/Recursos web/botonflotadowha.png"
const HomePage = () => {


  return (
    <div className="container-fluid">
      {/*-------------------------------------- top-page----------------------------------------- */}
      <div className="container-fluid top-page">
        <img className="img-fluid" src={logoOne} alt="" />
        <p>
          Llego el <strong>IMPULSO</strong> que necesitabas para cumplir el
          sueño de adquirir <strong>VIVIENDA NUEVA.</strong>
        </p>
        <p>
          <strong>DEL 7 AL 31 DE OCTUBRE</strong>
        </p>
      </div>


      {/*-------------------------------------- content-filters ----------------------------------------- */}
      <Filters />
      {/*-------------------------------------- content-footer ----------------------------------------- */}
      <Footer />
      {/*-------------------------------------- whatssap-button ----------------------------------------- */}
      <a href="https://wa.me/573133900209" target={"_blank"} rel="noopener noreferrer" >
        <img className="button-whatsapp" src={whatsapp} alt="" />
      </a>


    </div>
  );
};

export default HomePage;
