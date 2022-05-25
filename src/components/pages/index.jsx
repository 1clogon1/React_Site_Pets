import React from 'react';
import foto_koza from '../images/pets/коза.jpeg';
import foto_cat from '../images/pets/кошка.jpg';

import foto_gorula from '../images/pets/горилла.jpg';
import foto_muh from '../images/pets/мышь.jpg';
import foto_dog from '../images/pets/собака.jpg';
import {Link} from "react-router-dom";
import Slide from "../slide";
import Slider from "../slider";
import Iheuka from "../iheuka";
import Podpiska from "../podpiska";

const Index = () => {
    return (

        <main style={{"minHeight": "70vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Найденные животные</h2></a></div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
                 data-bs-ride="carousel" style={{"minHeight": "400px"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                </div>

                    <Slider/>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Результаты поиска</h2></a></div>
                </div>
            </div>

            <form>
                    <Iheuka/>
            </form>


            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Подписка на новости</h2></a></div>
                </div>
            </div>
                <div className={'bg-info border-3'} style={{display: 'none'}} id={'message'}><p className={'text-center'}>Вы успешно подписались на новости</p></div>



                   <Podpiska/>


        </main>

);
};

export default Index;