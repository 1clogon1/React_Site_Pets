import React, {useEffect, useId, useState} from 'react';
import Slide from "./slide";
import foto_dog from "./images/pets/собака.jpg";
import Button from "./button";
import Buttons from "./buttons";
const Slider = () => {

     function my_request(setSlides) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let i = 0

        let requestOptions = {
            method: 'GET',
            headers: myHeaders

        };

        let res = fetch("http://pets.сделай.site/api/pets/slider", requestOptions)
            .then(response=>response.json())
            .then(response=>setPets(response))

    }
        let [pets, setPets] = useState({data:{pets:[]}});
        useEffect(() => my_request(()=>setPets(), pets), [])

    let slides=pets.data.pets.map((pet, index)=>{
        return (
            index===0 ? (<div className="carousel-item active">
                <img src={"http://pets.сделай.site/"+pet.image} className="d-block" alt="Собака" style={{"width": "300px"}}/>
                <h2 className="text-center">{pet.kind}</h2>
                <p>{pet.description}</p>
            </div>)
                :
                (<div className="carousel-item">
                    <img src={"http://pets.сделай.site/"+pet.image} className="d-block" alt="Собака" style={{"width": "300px"}}/>
                    <h2 className="text-center">{pet.kind}</h2>
                    <p>{pet.description}</p>
                </div>)

        )

    });console.log(slides)

let [buttons, setButtons]=useState([])
    return (
        <div className="carousel-inner">
                {slides}
        </div>
    );
};

export default Slider;