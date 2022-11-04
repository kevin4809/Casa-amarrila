import React from 'react'

//Stylist
import "../css/footer.css"

//Assets
import logo from "../Assets/logoFooter.PNG"
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import Media from "react-media";

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className="content-footer">
                {/*---------------- content-col-one if the page has a minimum resolution of 760px  ---------------------------- */}
                <Media query="(max-width: 760px)">
                    {(resolution) => {
                        return resolution ? (
                            <div className="content-col-one">
                                <img src={logo} alt="" />
                                <p>Contact Center 601 634 0000</p>
                                <p>Linea Gratuita 01 8000 122442</p>
                                <p><strong>servicioalcliente@amarilo.com</strong></p>
                                <p>Calle 90# 11A-27, Bogotá-Colomia</p>
                                <p>@ Amarilo 2022</p>

                                <div className="icons">
                                    <div className="content-icon">
                                        <AiFillYoutube className='icon-footer' />
                                    </div>
                                    <div className="content-icon">
                                        <FaFacebookF className='icon-footer' />
                                    </div>
                                    <div className="content-icon">
                                        <AiOutlineInstagram className='icon-footer' />
                                    </div>
                                    <div className="content-icon">
                                        <GrLinkedinOption className='icon-footer' />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="content-all-colums">
                                {/*---------------- content-all-colums if the page has a maximum  resolution of 760px  ---------------------------- */}
                                <div className="row">
                                    <div className="col-3">
                                        <div className="content-col-one">
                                            <img src={logo} alt="" />
                                            <p>Contact Center 601 634 0000</p>
                                            <p>Linea Gratuita 01 8000 122442</p>
                                            <p><strong>servicioalcliente@amarilo.com</strong></p>
                                            <p>Calle 90# 11A-27, Bogotá-Colomia</p>
                                            <p>@ Amarilo 2022</p>

                                            <div className="icons">
                                                <div className="content-icon">
                                                    <AiFillYoutube className='icon-footer' />
                                                </div>
                                                <div className="content-icon">
                                                    <FaFacebookF className='icon-footer' />
                                                </div>
                                                <div className="content-icon">
                                                    <AiOutlineInstagram className='icon-footer' />
                                                </div>
                                                <div className="content-icon">
                                                    <GrLinkedinOption className='icon-footer' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="content-col-two">
                                            <h5><strong>Sobre amarilo</strong></h5>
                                            <p>Quienes somos </p>
                                            <p>Vecinos</p>
                                            <p>Informes de sostenibilidad</p>
                                            <p>Programa de Acompañameinto social (P.A.S)</p>
                                            <p>Linea Etica</p>
                                            <p>Compra de vivienda desde el exterior</p>
                                            <p>Talento Amarilo </p>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="content-col-three">
                                            <h5><strong>Acceso</strong></h5>
                                            <p>Proveedores</p>
                                            <p>Registrar Predios</p>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="content-col-four">
                                            <h5><strong>Legal</strong></h5>
                                            <p>Politica de tratamiendo de datos personales</p>
                                            <p>Reglamentos</p>
                                            <p>Manual SSTA</p>
                                            <p>Politica SSTA</p>
                                            <p>Protocolo Retoma de Labores</p>
                                            <p>Cartilla Protocolo </p>
                                        </div>
                                    </div>

                                    <div className="col-2">
                                        <div className="content-col-five">
                                            <h5><strong>Contactenos</strong></h5>
                                            <p>Servicio al Cliente</p>
                                            <p>Posventa</p>
                                            <p>Peticiones, Quejas y Reclamos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    }}
                </Media>


            </div>
        </div>
    )
}

export default Footer