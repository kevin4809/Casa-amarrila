import React from 'react'
import { useNavigate } from "react-router-dom";
//Stylist
import "../css/thankYouPage.css"
//Assets
import logoHouse from "../Assets/Recursos web/casafestamarillo.png"
import logoPersons from "../Assets/Recursos web/img_registroexitoso.png"
import Footer from '../components/Footer';
const ThankYouPage = () => {
    const navigate = useNavigate();
    return (

        <div className="container-fluid">
            <div className='container'>
                <div className="all-content-thank">
                    <div className="img-success-one">
                        <img className='img-fluid' src={logoHouse} alt="" />
                    </div>
                    <div className="content-message-success">
                        <p>¡TUS DATOS SE HAN REGISTRADO EXITOSAMENTE!</p>
                    </div>
                    <div className="content-message-success-two">
                        <p>Conoce mas sobre Amarillo y descubre grandes tips que te ayudaran en el proceso que hoy inicias con nosotros </p>
                    </div>

                    <div className="button-back">
                        <button type="button" onClick={() => navigate("/")}>REGRESAR</button>
                    </div>
                    <div className="img-success-two">
                        <img className='img-fluid' src={logoPersons} alt="" />
                    </div>

                </div>


            </div>

            <Footer />
        </div>
    )
}

export default ThankYouPage