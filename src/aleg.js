async function my_request(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    let res=await fetch("http://tickets.сделай.site/api/order/O86VAWZKUP", requestOptions)
        .then(response => response.json());
    document.write(`<p><h1>Информация о бронировании</h1><p>`);

    document.write(`<p><b>Данные о билете:<b><p>`);
    document.write(`<p>Имя:${res.ticket.name_concert}</p>`);
    document.write(`<p>Дата концерта: ${res.ticket.date_concert}</p>`);
    document.write(`<p>Время начала: ${res.ticket.time_start}</p>`);
    document.write(`<p>Время окончания: ${res.ticket.time_finish}</p>`);
    document.write(`<p>Продолжительность: ${res.ticket.duration}</p>`);
    document.write(`<p>Место проведения: ${res.ticket.venue}</p>`);

    document.write(`<br><br>`);

    document.write(`<p><b>Данные о госте:<b><p>`);
    document.write(`<p>ID: ${res.guest[0].id}</p>`);
    document.write(`<p>Имя: ${res.guest[0].first_name}</p>`);
    document.write(`<p>Фамилия: ${res.guest[0].last_name}</p>`);
    document.write(`<p>День рождения: ${res.guest[0].birth_date}</p>`);
    document.write(`<p>Паспорт: ${res.guest[0].document_number}</p>`);
    document.write(`<p>Место в зале: ${res.guest[0].place_from}</p>`);

}