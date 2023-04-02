$(document).ready(function () {  
    $.ajax({  
        type: "GET",  
        url: "https://api.bluelytics.com.ar/v2/latest",    
        dataType: "json", 
    }).done((data) => {
        let dol = data.blue.value_avg;
            var row = $('<tr>');
            row.append($(`<th> 1 u$s </th>`));
            row.append($(`<th>$ ${ dol }</th>`));
            $('#tablaApi tbody').append(row);}
    );
})