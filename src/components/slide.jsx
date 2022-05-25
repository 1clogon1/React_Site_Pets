import React from 'react';
import foto_dog from "./images/pets/собака.jpg";
import foto_muh from "./images/pets/мышь.jpg";
import foto_gorula from "./images/pets/горилла.jpg";

const Slide = (props) => {
    return (
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="http://pets.сделай.site/storage/images/fXk6cXXxtggt6BDMa4y48WPheXTjwX5MengoQ5s3.png" className="d-block" alt="Собака" style={{"width": "300px"}}/>
            <h2 className="text-center">Кошка</h2>
            <p>Кошка рыжая</p>
        </div>
    <div className="carousel-item">
        <img src="http://pets.сделай.site/storage/images/4bcCb3YJb1LYWlGvcsH34awHirecQAgrcS4M4AiR.png"className="d-block" alt="Мышь" style={{"width": "300px"}}/>
        <h2 className="text-center">Собака</h2>
        <p>Собака большая, грустная</p>
    </div>
    <div className="carousel-item">
        <img src="http://pets.сделай.site/storage/images/symr3O4IscuApnUGf3Ckwv8o4iQeoMypKW66Afol.png" className="d-block" alt="Горилла" style={{"width": "300px"}}/>
        <h2 className="text-center">Зебра</h2>
        <p>Зебра полосатая, высокая.</p>
    </div>
    <div className="carousel-item">
        <img src="http://pets.сделай.site/storage/images/0gomO3BsWcTSeUqU5BjX4WSFexiD0zNeF1r2CjlP.png" className="d-block" alt="Горилла" style={{"width": "300px"}}/>
        <h2 className="text-center">Крокодил</h2>
        <p>Крокодил зеленый, любит людей.</p>
    </div>
    <div className="carousel-item">
        <img src="http://pets.сделай.site/storage/images/3mIjJpch6XhxejTqATZdDPTOmiHOr9qZfCwF3LHQ.png" className="d-block" alt="Горилла" style={{"width": "300px"}}/>
        <h2 className="text-center">Кенгуру</h2>
        <p>Кенгуру из Бразилии, любит прыгать, ласковая</p>
    </div>
        </div>
    );
};

export default Slide;