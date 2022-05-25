import React from 'react';
import Buttons from "./buttons";


const Button = (props) => {
    let j=[]
for (let i = 1; i <  props.col+1; i++) {
        j.push(i)
}
console.log(j)
    j.map((index)=>{<Buttons NN={j}/>})

    let butn=j.map((index)=>{<Buttons NN={j}/>})
    console.log(butn)
    console.log(j)

    return (

        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>

    );
};

export default Button;