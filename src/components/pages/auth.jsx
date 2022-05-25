import React, {useEffect, useId, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Request from "../../request";



const Auth = () => {


    const [user, setUser]=useState({'email':'', 'password':''})

    global.user=user
    localStorage.token=''
    let history=useNavigate()
    console.log(user)


    function send(e) {
        e.preventDefault()
        registr_req(user)

        async function registr_req(user) {
            let body = JSON.stringify(user)
            let url = 'http://pets.сделай.site/api/login'
            let response = await Request(url, body, 'POST')
            let result = await response
           // if (response.error.code === 401) return
            localStorage.token = await response.data.token

        }
        //history('/profile')
    }
    return (
        <main style={{"minHeight": "70vh"}}>

            <div className="chast_1 ">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Аутентификация</h2></a></div>
                </div>
            </div>
            <div className={'bg-info border-3'} style={{display: 'none'}} id={'message_regustr'}><p className={'text-center'}>Вы успешно зарегистрировались</p></div>
            <div className="chast_2">
                <div className="tablica_individ tablica2">
                    <form className="row g-3" method='POST'onSubmit={send}>
                        <div className="mb-3">
                        <div className="col-md-10">
                            <label htmlFor="validationDefault01" className="form-label">Имя</label>
                            <input type="text" className="form-control" id="emaill" required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                        </div>
                        <div className="col-md-10">
                            <label htmlFor="validationDefault02" className="form-label">Телефон</label>
                            <input type="text" className="form-control" id="passwordd" required onChange={(e)=>setUser({...user, password:e.target.value})}/>
                        </div>
                        </div>
                        <div className="mb-3">
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Войти</button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>

        </main>

);
};

export default Auth;