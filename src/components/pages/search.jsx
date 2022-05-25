import React from 'react';
import {Link} from "react-router-dom";
import Search1 from "../search1";

const Search = () => {
    return (
        <main style={{"minHeight": "70vh"}}>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Поиск по объявлениям</h2></a></div>
                </div>
            </div>

            <div className="chast_2">

            </div>
<Search1/>

        </main>
    );
};

export default Search;