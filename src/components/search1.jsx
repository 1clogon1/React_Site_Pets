import React, {useEffect, useId, useState} from 'react';
import foto_cat from "./images/pets/кошка.jpg";
import {Link} from "react-router-dom";

const Search1 = () => {


    const [result, setResult] = useState();
    const [spusok, setSpusok] = useState();

    function my_request(setSlides) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");



        var requestOptions = {
            method: 'GET',
            headers: myHeaders

        };

        let res = fetch("http://pets.сделай.site/api/pets", requestOptions)
            .then(response=>response.json())
            .then(response=>setPets(response))

    }



    let [orders, setPets] = useState({data:{orders:[]}});
    useEffect(() => my_request(()=>setPets(), result), [])

    let c1=orders.data.orders.filter((d)=>{if (d.kind===result || d.district===spusok) return d;});

    let iheuca_search=c1.map((pet_id, index)=>{
        return (
            <div className="tablica_individ_3">
                <div  className="d-flex flex-row flex-wrap justify-content-around   ocryglen_ramcu">
                    <img src={"http://pets.сделай.site"+pet_id.photos} className="w-25 p-3" style={{"minWidth":" 250px"}}  alt="Изображения животного"/>
                </div>

                <div className="Soderj_yheicu">

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>id:</a></div>
                        <div className="gh2"><a>{pet_id.id}</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Имя:</a></div>
                        <div className="gh2"><a> {pet_id.name} </a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Телефон:</a></div>
                        <div className="gh2"><a>{pet_id.phone}</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>E-mail:</a></div>
                        <div className="gh2"><a>---</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Вид животного:</a></div>
                        <div className="gh2"><a>{pet_id.kind}</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Описание:</a></div>
                        <div className="gh2"><a>{pet_id.description}</a>
                        </div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Номер чипа:</a></div>
                        <div className="gh2"><a>{pet_id.mark}</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Район:</a></div>
                        <div className="gh2"><a>{pet_id.district}</a></div>
                    </div>

                    <div className="Stroka_s_razdel_50">
                        <div className="gh1"><a>Дата:</a></div>
                        <div className="gh2"><a>{pet_id.date}</a></div>
                    </div>
                </div>

            </div>
        )

    });
    console.log(iheuca_search)

    let [buttons, setButtons]=useState([])

    return (
<div>
        <div className="chast_2">
        <div className="tablica_individ">

            <div className="mb-3">
                <label htmlFor="district" className="form-label">Выберите район:</label>
                <select id="district" className="form-select" value={spusok} onChange={event => setSpusok(event.target.value) }>
                    <option>Приморский</option>
                    <option>Петроградский</option>
                    <option>Василиостровский</option>
                    <option>Центральный</option>
                    <option>Красногвардейский</option>
                    <option>Выборгский</option>
                    <option>Калининский</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Введите вид животного:</label>
                <input className="form-control" value={result} onChange={event => setResult(event.target.value) }/>

            </div>
            <div className="mb-3">
                <a href="#" className="button7 button7_individ_3" onClick={() => setResult("")}>Отправить</a>
            </div>
        </div>
        </div>

        <div className="chast_2">
                {iheuca_search}
    </div>

</div>

    );
};

export default Search1;