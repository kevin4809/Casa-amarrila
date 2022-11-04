import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ModalInfo from './ModalInfo'
//Styles css
import "../css/cards.css"
//InformationJson
import info from "../Listado proyectos.json"
//Assets
import logoHouse from "../Assets/Recursos web/casa.png"
import logoArea from "../Assets/Recursos web/area.png"
import logoValor from "../Assets/Recursos web/valor.png"
import logoBonus from "../Assets/Recursos web/bonodehasta.png"
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";


const Cards = ({ filterCities, filterPrices, filterTypes, filterAreas }) => {

    // status of the cards displayed on screen
    const [infoProyects, setInfoProyects] = useState([]);

    // status containing information on filtered and paginated cards
    const [infoForPages, setInfoForPages] = useState([])

    // states that control paging 
    const [currentPage, setCurrentPage] = useState(0);
    const [actualPage, setactualPage] = useState(1);

    //Starts with all available cards by default
    useEffect(() => {
        setInfoForPages(info?.allInfo)
    }, [])

    //Receives the information from the filter and takes care of paging 
    useEffect(() => {
        setInfoProyects(infoForPages.slice(currentPage, currentPage + 9));
    }, [actualPage, currentPage, infoForPages]);

    //Go to next page 
    const nextPage = () => {
        if (infoProyects.length >= 9) {
            setCurrentPage(currentPage + 9);
            setactualPage(actualPage + 1);
        }
    };

    //back to previous page
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 9);
            setactualPage(actualPage - 1);
        }
    };

    // function that will control all filters
    const applyFilters = () => {

        const resultFilter = info?.allInfo?.filter((res) => {
            //Filter city
            if (filterCities === "Ciudades" || res.filterCity === `${filterCities}`) {
                //Filter Price
                if (res.filterPrice === `${filterPrices}` || filterPrices === "Precio") {
                    //Filter Type
                    let resultSplitType = res.filterType.split(",");
                    for (let i = 0; i < resultSplitType.length; i++) {
                        if (resultSplitType[i] === `${filterTypes}` || filterTypes === "Tipo") {
                            //FilterArea
                            let resultSplitArea = res.filterArea.split(",");
                            for (let i = 0; i < resultSplitArea.length; i++) {
                                if (resultSplitArea[i] === `${filterAreas}` || filterAreas === "Area") {
                                    //Return the result all filters
                                    return res
                                }
                            }
                        }
                    }
                }
            }
            return null
        }
        )
        //saves the result of the filter in "InForPages" which will cause the "Usseffect" to be executed and the filter to be applied with the pagination. 
        setInfoForPages(resultFilter);

        //Reset the paging 
        setCurrentPage(0)
        setactualPage(1)
    }

    return (
        <div className='container'>
            {/*-------------------------------------- button submit filter ------------------------------------------- */}
            <div className="button-filter">
                <button onClick={() => applyFilters()}>BUSCAR</button>
            </div>
            <div className="row">
                {
                    infoProyects?.map((res) => (
                        <div key={res.id} className="col-sm-6 col-lg-4 all-content">
                            <div className="content-cards">
                                {/*-------------------------------------- Carousel imgs ------------------------------------------- */}
                                <div className="content-carousel">
                                    <div id={`${res.name}`} className="carousel slide carousel-fade" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active img-carousel">
                                                <img loading='lazy' src={res.imgOne} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item  img-carousel">
                                                <img loading='lazy' src={res.imgTwo} className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item img-carousel">
                                                <img loading='lazy' src={res.imgThre} className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#${res.name}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target={`#${res.name}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                    {/*-------------------------------------- Content-location ------------------------------------------- */}
                                    <div className="content-location">
                                        <img loading='lazy' className='img-fluid' src={logoHouse} alt="" />
                                        <p>{res.location}</p>
                                    </div>

                                    <div className="content-bonus">
                                        <img loading='lazy' className='img-fluid' src={logoBonus} alt="" />
                                        <div className="content-info-bonus">
                                            <p><strong>Bono de hasta </strong> {res.BonusHouseFest}</p>

                                        </div>
                                    </div>
                                </div>

                                {/*-------------------------------------- footer-card ------------------------------------------- */}
                                <div className="footer-card">
                                    <div className="content-info-card">
                                        <p><img className='img-fluid icons-info' src={logoValor} alt="" /> <strong> Precio desde:</strong>  {res.price} </p>
                                        <p><img className='img-fluid icons-info' src={logoArea} alt="" />  <strong>Area:</strong>  {res.area}</p>
                                    </div>
                                    <img className='img-fluid logo' src={res.logo} alt="" />
                                </div>
                            </div>
                            {/*-------------------------------------- Modal component with prop hidden field ------------------------------------------- */}
                            <ModalInfo nameproyect={res.namefront} />
                        </div>
                    ))
                }
            </div>
            {/*-------------------------------------- buttons paging ------------------------------------------- */}
            <div className="buttons-paging">
                <button onClick={prevPage}><BsArrowLeftCircle /></button>
                <h5>Pagina {actualPage}</h5>
                <button onClick={nextPage}><BsArrowRightCircle /></button>
            </div>
        </div>
    )
}

export default Cards