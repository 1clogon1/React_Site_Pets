import React, {useEffect, useId, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import Request from "../../request";
import Add_pet_otpravka from "../add_pet_otpravka";

const Add_pet = () => {


    return (
        <main style={{"minHeight": "70vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>ришлрн</h2></a></div>
                </div>
            </div>

            <div className="chast_2">
                <div className="tablica_individ">

                    <Add_pet_otpravka/>

                </div>
            </div>


        </main>
    );
};

export default Add_pet;