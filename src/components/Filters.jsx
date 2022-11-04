import React, { useEffect } from 'react'
import { useState } from 'react';

//Styles
import "../css/filter.css"

//Assets
import logoCity from "../Assets/Recursos web/ciudad.png";
import logoHouse from "../Assets/Recursos web/tipo.png";
import logoArea from "../Assets/Recursos web/area.png";
import logoPrice from "../Assets/Recursos web/valor.png"
import Cards from './Cards';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";



const Filters = () => {
    //States from cities
    const [allInfoCities, setAllInfoCities] = useState([]);
    const [selectCity, setSelectCity] = useState(true);
    const [valueCity, setValueCity] = useState("Ciudades");

    //States from type
    const [AllInfoTypes, setAllInfoTypes] = useState([]);
    const [selectType, setSelectType] = useState(true);
    const [valueTypes, setValueTypes] = useState("Tipo");

    //States from area
    const [allInfoArea, setAllInfoArea] = useState([]);
    const [selectArea, setSelectArea] = useState(true);
    const [valueArea, setValueArea] = useState("Area");

    //States from price
    const [allinfoPrice, setAllinfoPrice] = useState([]);
    const [selectPrice, setSelectPrice] = useState(true);
    const [valuePrice, setValuePrice] = useState("Precio");


    // function with all the information of the filters
    const AllInformation = () => {
        let infoCities = [
            {
                id: 1,
                nameCity: "Bogotá",
            },

            {
                id: 2,
                nameCity: "Costa",
            },
            {
                id: 3,
                nameCity: "Sabana de Bogotá",
            },
            {
                id: 4,
                nameCity: "Resto del país",
            }
        ];

        let infoTypes = [
            {
                id: 1,
                type: "Vivienda propia"
            },
            {
                id: 2,
                type: "Inversión"
            },
            {
                id: 3,
                type: "Vacacional"
            }
        ]

        let infoArea = [
            {
                id: 1,
                area: "24m2 a 40m2"
            },
            {
                id: 2,
                area: "41m2 a 70m2"
            },
            {
                id: 3,
                area: "71m2 a 100m2"
            },
            {
                id: 4,
                area: "Más de 101m2"
            },

        ]

        let infoPrice = [
            {
                id: 1,
                price: "$197.000.000 - $300.000.000 COP"
            },
            {
                id: 2,
                price: "$301.000.000 - $500.000.000 COP"
            },
            {
                id: 3,
                price: "$501.000.000 - $900.000.000 COP"
            },
            {
                id: 4,
                price: "Más de $901.000.000 COP"
            }
        ]

        setAllInfoCities(infoCities);
        setAllInfoTypes(infoTypes);
        setAllInfoArea(infoArea);
        setAllinfoPrice(infoPrice);
    };

    //when starting the page the usestates  is filled with the information of the filters
    useEffect(() => {
        AllInformation()
    }, [])

    return (

        <div className="container">
            {/*--------------------------------------statement----------------------------------------- */}
            <p className="text-title mt-5">
                <strong>
                    Encuentra tu proyecto y aprovecha nuestros grandes bonos
                </strong>
            </p>
            <div className="selects">
                <div className="row">
                    <div className="col-sm-6">
                        {/*-------------------------------------- Select cities----------------------------------------- */}
                        <div className={`content-default-select ${!selectCity ? "content-defaul-select-border" : ""}`}
                            onClick={() => setSelectCity(!selectCity)} >
                            <div className="content-img">
                                <img className="img-fluid" src={logoCity} alt="logocity" />
                            </div>
                            <h5>{valueCity}</h5>
                            {selectCity ? <BsChevronDown className='arrow-dropdown' /> : <BsChevronUp className='arrow-dropdown' />}
                        </div>
                        <div className={`select-active ${selectCity ? "select-disable" : ""}`}>
                            {
                                allInfoCities.map((res) => (
                                    <div key={res.id}>
                                        <p
                                            onClick={() => {
                                                setValueCity(res.nameCity);
                                                setSelectCity(!selectCity)
                                            }}>{res.nameCity}</p> <hr />
                                    </div>
                                ))
                            }

                        </div>
                    </div>


                    <div className="col-sm-6">
                        {/*-------------------------------------- Select type----------------------------------------- */}

                        <div className={`content-default-select ${!selectType ? "content-defaul-select-border" : ""}`}
                            onClick={() => setSelectType(!selectType)} >
                            <div className="content-img">
                                <img className="img-fluid" src={logoHouse} alt="logocity" />
                            </div>
                            <h5>{valueTypes}</h5>
                            {selectType ? <BsChevronDown className='arrow-dropdown' /> : <BsChevronUp className='arrow-dropdown' />}
                        </div>
                        <div className={`select-active ${selectType ? "select-disable" : ""}`}>
                            {
                                AllInfoTypes.map((res) => (
                                    <div key={res.id}>
                                        <p onClick={() => { setValueTypes(res.type); setSelectType(!selectType) }}>{res.type}</p> <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-6">
                        {/*-------------------------------------- Select area----------------------------------------- */}

                        <div className={`content-default-select ${!selectArea ? "content-defaul-select-border" : ""}`}
                            onClick={() => setSelectArea(!selectArea)} >
                            <div className="content-img">
                                <img className="img-fluid" src={logoArea} alt="logocity" />
                            </div>
                            <h5>{valueArea}</h5>
                            {selectArea ? <BsChevronDown className='arrow-dropdown' /> : <BsChevronUp className='arrow-dropdown' />}
                        </div>
                        <div className={`select-active ${selectArea ? "select-disable" : ""}`}>
                            {
                                allInfoArea.map((res) => (
                                    <div key={res.id}>
                                        <p onClick={() => { setValueArea(res.area); setSelectArea(!selectArea) }}>{res.area}</p> <hr />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="col-sm-6">
                        {/*-------------------------------------- Select price----------------------------------------- */}

                        <div className={`content-default-select ${!selectPrice ? "content-defaul-select-border" : ""}`}
                            onClick={() => setSelectPrice(!selectPrice)} >
                            <div className="content-img">
                                <img className="img-fluid" src={logoPrice} alt="logocity" />
                            </div>
                            <h5>{valuePrice}</h5>
                            {selectPrice ? <BsChevronDown className='arrow-dropdown' /> : <BsChevronUp className='arrow-dropdown' />}
                        </div>
                        <div className={`select-active ${selectPrice ? "select-disable" : ""}`}>
                            {
                                allinfoPrice.map((res) => (
                                    <div key={res.id}>
                                        <p onClick={() => { setValuePrice(res.price); setSelectPrice(!selectPrice) }}>{res.price}</p> <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>



            </div>

            {/*------------------------------- content-cards-with-props-to-apply-the-filters-------------------------------- */}
            <Cards
                filterCities={valueCity}
                filterPrices={valuePrice}
                filterTypes={valueTypes}
                filterAreas={valueArea}
            />
        </div>
    )
}

export default Filters