import React, {useEffect, useId, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Request from "../request";

const Edit_Phone= () => {

    let [user, setUser]=useState({'phone':''})
    function send(e){
        e.preventDefault()
        let body = JSON.stringify(user)
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.token}`);
    myHeaders.append("Content-Type", "application/json");
    let request_options = {headers: myHeaders, body:body, method:'PATCH'}
        fetch('http://pets.сделай.site/api/users/phone', request_options)
            .then(response=>{let status=response.status
            switch (status){
                case 200: document.getElementById('message').style.display='block'
                          document.getElementById('error').style.display='none'
                    break
                case 401: document.getElementById('message').style.display='none'
                          document.getElementById('error').style.display='block'
                    break
            }}
            )}

    return (
        <div className="chast_2">
        <div className="tablica2">
            <form className="" method='Patch'onSubmit={send}>
                <div className="mb-3">

                    <label htmlFor="exampleInputEmail1" className="form-label">Введите номер телефона</label>
                    <input type="text" className="form-control" id="emaill" required onChange={(e)=>setUser({...user, phone:e.target.value})}/>

                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="submit">Заменить</button>
                </div>
            </form>
        </div>
        </div>


    );
};

export default Edit_Phone;