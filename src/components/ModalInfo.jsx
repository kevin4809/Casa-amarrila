import React from 'react'
import { useNavigate } from "react-router-dom";

//Styles
import "../css/modal.css"

//Assets
import logoCellphone from "../Assets/Recursos web/telefono.png"
import logoName from "../Assets/Recursos web/nombre.png"
import logoCellphoneTwo from "../Assets/Recursos web/telefonomovil.png"
import logoEmail from "../Assets/Recursos web/mail.png"
import logoEnterraste from "../Assets/Recursos web/enteraste.png"
import logoIcome from "../Assets/Recursos web/ingresos.png"
import logoHouse from "../Assets/Recursos web/proyecto.png"

const ModalInfo = ({ nameproyect }) => {
    const navigate = useNavigate();
    return (
        <div>
            {/*-------------------------------------- button open modal ------------------------------------------- */}
            <div className="button-quotation">
                {/*-------------------------------------- displays the hidden field in the console ------------------------------------------- */}
                <button onClick={() => console.log("Nombre oculto:" + nameproyect)}
                    type="button" data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                > SOLICITAR COTIZACIÓN
                </button>
            </div>

            <div className="modal fade  " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className=" content-model">
                            <div className="moda-top">
                                <button type="button"
                                    className="btn-close button-close-modal"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                                </button>
                                <p>COMPLETA YA ESTE FORMULARIO PARA SOLICITAR INFORMACION DEL
                                    <strong> INMUEBLE DE TUS SUEÑOS.</strong> </p>
                                <div className="cellphonenumber">
                                    <img loading='lazy' src={logoCellphone} alt="" />
                                    <p>601 6340000</p>
                                </div>
                            </div>

                            <div className="all-inputs">
                                {/*-------------------------------------- Form name ------------------------------------------- */}
                                <div className="mb-3 content-input">
                                    <label className="form-label">Nombre completo</label>
                                    <input type="text" className="form-control input-style" />
                                    <img loading='lazy' className='logo-name-modal' src={logoName} alt="" />
                                </div>
                                {/*-------------------------------------- Form phone ------------------------------------------- */}
                                <div className="mb-3 content-input">
                                    <label className="form-label">Teléfono</label>
                                    <input type="text" className="form-control input-style" />
                                    <img className='logo-cell-modal' src={logoCellphoneTwo} alt="" />
                                </div>
                                {/*-------------------------------------- Form email ------------------------------------------- */}
                                <div className="mb-3 content-input">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control input-style" />
                                    <img loading='lazy' className='logo-email-modal' src={logoEmail} alt="" />
                                </div>
                                {/*-------------------------------------- Form info ------------------------------------------- */}
                                <div className="mb-3 content-input">
                                    <label className="form-label">¿cómo te enteraste de casaFest?</label>
                                    <input type="text" className="form-control input-style" />
                                    <img loading='lazy' className='logo-f-modal' src={logoEnterraste} alt="" />
                                </div>
                                {/*-------------------------------------- Form hide proyect ------------------------------------------- */}
                                <div className="mb-3 content-input contet-input-hide">
                                    <label className="form-label">Proyecto</label>
                                    <input type="text" className="form-control input-style" />
                                    <img loading='lazy' className='logo-icome-modal' src={logoHouse} alt="" />
                                </div>
                                {/*-------------------------------------- Form family ------------------------------------------- */}
                                <div className="mb-3 content-input">
                                    <label className="form-label">Ingresos familiares</label>
                                    <input type="text" className="form-control input-style" />
                                    <img loading='lazy' className='logo-icome-modal' src={logoIcome} alt="" />
                                </div>
                            </div>
                            {/*-------------------------------------- button next page ------------------------------------------- */}
                            <div className="button-submit-quatation">
                                <button
                                    data-bs-dismiss="modal"
                                    type="button"
                                    onClick={() => navigate("/thankyoupage")}>
                                    SOLICITAR COTIZACIÓN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInfo