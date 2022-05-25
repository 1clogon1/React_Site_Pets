import React from 'react';
import foto_koza from '../images/pets/коза.jpeg';
import foto_cat from '../images/pets/кошка.jpg';
import {Link} from "react-router-dom";

import Edit_Email from "../edit_Email";
import Edit_Phone from "../edit_Phone";


const Profile = () => {
    return (
        <main style={{"minHeight": "70vh"}}>


            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Личный кабинет</h2></a></div>
                </div>
            </div>

            <div className="chast_2">
                <div className="tablica2">


                    <div className="test-3-code">
                        <div className="gh1"><a>id:</a></div>
                        <div className="gh2"><a>14</a></div>
                    </div>

                    <div className="test-3-d1">
                        <div className="gh1"><a>Телефон:</a></div>
                        <div className="gh2"><a>+7-911-456-78-78</a></div>
                    </div>

                    <div className="test-3-t1">
                        <div className="gh1"><a>email:</a></div>
                        <div className="gh2"><a>leonid@yandex.ru</a></div>
                    </div>

                    <div className="test-3-t2">
                        <div className="gh1"><a>Имя:</a></div>
                        <div className="gh2"><a>Леонид</a></div>
                    </div>

                    <div className="test-3-from">
                        <div className="gh1"><a>Дата регистрации:</a></div>
                        <div className="gh2"><a>26-06-2015</a></div>
                    </div>

                    <div className="test-3-to">
                        <div className="gh1"><a>Количество найденных животных:</a></div>
                        <div className="gh2"><a>2</a></div>
                    </div>

                    <div className="test-3-to">
                        <div className="gh1"><a>Количество объявлений:</a></div>
                        <div className="gh2"><a>4</a></div>
                    </div>

                </div>
            </div>


            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Изменить адрес электронной почты</h2></a></div>
                </div>
            </div>

            <div className={'bg-info border-3'} style={{display: 'none'}} id={'message_email'}><p className={'text-center'}>Вы успешно заменили почту</p></div>
            <Edit_Email/>


            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Изменить номер телефона</h2></a></div>
                </div>
            </div>
            <div className={'bg-info border-3'} style={{display: 'none'}} id={'message_phone'}><p className={'text-center'}>Вы успешно заменили телефон</p></div>
            <Edit_Phone/>

            <div className="chast_1">
                <div className="tablica1">
                    <div className="Nazva_razdel"><a><h2>Добавленные объявления</h2></a></div>
                </div>
            </div>

            <form>

                <div className="tabb1_individ">
                    <div className="tabb22">
                        <div className="tablica_individ_5 rodutel_dla_knopku">
                            <div className="d-flex flex-row flex-wrap justify-content-around  ocryglen_ramcu">
                                <img src={foto_cat} className="w-75 border" alt="рисунок животного"/>
                                    <div className="position-absolute text-danger"
                                         style={{"top":"15px","right":" 15px"," cursor": "pointer"}} >&#10060;</div>
                            </div>

                            <div className="Soderj_yheicu rodutel_dla_knopku">

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>id:</a></div>
                                    <div className="gh22"><a>14</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Имя:</a></div>
                                    <div className="gh22"><a> Кошка </a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Описание:</a></div>
                                    <div className="gh22"><a>Потерялась кошка, пушистая, серая. Любит играть,
                                        ласковая.</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Номер чипа:</a></div>
                                    <div className="gh22"><a>ca-001-spb</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Район:</a></div>
                                    <div className="gh22"><a>Василиостровский</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Дата:</a></div>
                                    <div className="gh22"><a>24-03-2020</a></div>
                                </div>


                                <div className="mb-3">

                                    <a href="#" className="button7 button7_individ_3">Редактировать объявление</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tabb22">
                        <div className="tablica_individ_5 rodutel_dla_knopku">
                            <div className="d-flex flex-row flex-wrap justify-content-around   ocryglen_ramcu">
                                <img src={foto_koza} className="w-75 border" alt="рисунок животного"/>
                                    <div className="position-absolute text-danger"
                                         style={{"top":"15px","right":" 15px"," cursor": "pointer"}}>&#10060;</div>
                            </div>

                            <div className="Soderj_yheicu rodutel_dla_knopku">

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>id:</a></div>
                                    <div className="gh22"><a>18</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Имя:</a></div>
                                    <div className="gh22"><a> Коза </a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Описание:</a></div>
                                    <div className="gh22"><a>Потерялась коза, последний раз видели в здании Московского
                                        вокзала
                                        г. Санкт-Петербург. Коза белая, пуховая.</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Номер чипа:</a></div>
                                    <div className="gh22"><a>go-011-spb</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Район:</a></div>
                                    <div className="gh22"><a>Центральный</a></div>
                                </div>

                                <div className="Stroka_s_razdel_50">
                                    <div className="gh11"><a>Дата:</a></div>
                                    <div className="gh22"><a>14-03-2022</a></div>
                                </div>

                                <div className="mb-3">

                                    <a href="#" className="button7 button7_individ_3">Редактировать объявление</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>

            <div className="polojen_pagunatora">
                <nav aria-label="Page navigation example " className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
    );
};

export default Profile;