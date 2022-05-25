import React, {useEffect, useId, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Request from "../request";
import header from "./header";

const AddPetOtpravka = () => {


    let history=useNavigate()

    function send(e){
        e.preventDefault()
        add_req()
        async function add_req() {
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "multipart/form-data");
            let form = new FormData(document.getElementById('form'))
            console.log(form.getAll('password'))
            let url = 'http://pets.сделай.site/api/pets'
            let response = await Request(url, form, 'POST')
            let result = await response
            if (result.status !== 204) return
        }

    }

    return (

        <form onSubmit={send} id={'form'}>
            <div className="col-md-4">
                <label htmlFor="validationDefault01" className="form-label">Имя</label>
                <input type="text" className="form-control" id="name" required name={'name'}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationDefault02" className="form-label">Телефон</label>
                <input type="text" className="form-control" id="phone" required name={'phone'}/>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" className="form-control" id="email" aria-describedby="inputGroupPrepend2" required name={'email'}/>
                </div>
            </div>

            <div className="col-md-4">
                <label htmlFor="validationDefault02" className="form-label">Порода</label>
                <input type="text" className="form-control" id="kind" required name={'kind'}/>
            </div>

            <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label">Пароль</label>
                <input type="text" className="form-control" id="password" required name={'password'}/>
            </div>

            <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label"> Повторите пароль</label>
                <input type="text" className="form-control" id="password_confirmation" required name={'password_confirmation'}/>
            </div>


            <div className="mb-3 p-3 border ocryglen_ramcu col-md-6">
                <label htmlFor="image1" className="form-label">Выберите файлы изображений:</label>
                <input type="file" className="form-control" id="photo1"
                       required name={'photo1'}/>
                <div className="form-text">Обязательное поле</div>
                <input type="file" className="form-control mb-3" id="photo2" name={'photo2'}/>
                <input type="file" className="form-control mb-3" id="photo3" name={'photo3'}/>

            </div>

            <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label"> Эл. чип</label>
                <input type="text" className="form-control" id="markk" required name={'mark'}/>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label"> Описание</label>
                <input type="text" className="form-control" id="descriptionn" required name={'description'}/>
            </div>

            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="confirmm" required name={'confirm'}/>
                    <label className="form-check-label" htmlFor="invalidCheck2">
                        Согласие с обработкой данных
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Отправить форму</button>
            </div>
        </form>

    );
};

export default AddPetOtpravka;