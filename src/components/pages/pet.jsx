import React from 'react';
import kyrica1 from '../images/pets/курица1.jpg';
import kyrica2 from '../images/pets/курица2.jpg';
import kyrica3 from '../images/pets/курица3.jpg';
import {Link} from "react-router-dom";
import Pet1 from "../pet1";


const Pet = () => {

    return (
        <main style={{"minHeight": "70vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Карточка животного</h2></a></div>
                </div>
            </div>


            <Pet1/>


        </main>
    );
    };

export default Pet;