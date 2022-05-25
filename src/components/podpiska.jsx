import React, {useEffect, useId, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Request from "../request";

const Podpiska = () => {

    let [user, setUser]=useState({'email':''})

    let history=useNavigate()
    console.log(user)
    function send(e){
        e.preventDefault()
        podpuska_reg(user)
        async function podpuska_reg(user) {
            let body = JSON.stringify(user)
            let url = 'http://pets.сделай.site/api/subscription'
            let response = await Request(url, body, 'POST')
            let result = await response
            if (result.status===204) document.getElementById('message').style.display='block'
            if (result.status !== 204) return
        }
    }

    return (
        <div className="chast_2">
        <div className="tablica2">
            <form className="" method='POST'onSubmit={send}>
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
                    <input type="text" className="form-control" id="emaill" required onChange={(e)=>setUser({...user, email:e.target.value})}/>

                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Отправить форму</button>
                </div>
            </form>
        </div>
        </div>


    );
};

export default Podpiska;