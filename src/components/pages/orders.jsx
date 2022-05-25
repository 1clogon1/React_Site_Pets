import React, {useEffect, useId, useState} from 'react';
import foto_koza from '../images/pets/коза.jpeg';
import foto_cat from '../images/pets/кошка.jpg';
import Header from "../header";
import {Link} from "react-router-dom";
import Search1 from "../search1";



const Orders = () => {
    return (

            <main style={{"minHeight": "70vh"}}>
            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Результаты поиска</h2></a></div>
                </div>
            </div>
                <form>



                            <Search1/>


            </form>




        </main>
    );
};

export default Orders;