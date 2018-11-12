// Проверка загружаемых файлов //
const R_ACCEPT_IMAGE = /\.(gif|jpe?g|png|bmp)$/i;
const input = document.getElementById('uploaded-file1');
input.onchange = function () {
    let status = true;
    let a = true;
    let i = 0;
    while (a){
        status = R_ACCEPT_IMAGE.test(input.files[i].name);
        if(!status || i === input.files.length-1)
            a = false;
        i++;
    }

    if(!status)
        alert('Выберите только изображения');
    else {
        const file = document.getElementById('uploaded-file1').files[0];
        if (file) {
            if (document.getElementById('uploaded-file1').files.length === 1) {
                if (file.name.length < 30)
                    document.getElementById('texts').innerHTML = '' + file.name;
                else
                    document.getElementById('texts').innerHTML = file.name.slice(0, 5) + ' ... ' + file.name.slice(-20);
            }
            else
                document.getElementById('texts').innerHTML = 'Выбранно изображений: ' + document.getElementById('uploaded-file1').files.length;
        }
    }
};

$('#demo').daterangepicker({
    "singleDatePicker": true,
    "timePicker": true,
    "timePicker24Hour": true,
    "timePickerIncrement": 20,
    "locale": {
        "format": "DD/MM/YYYY HH:mm",
        "separator": " - ",
        "applyLabel": "Ок",
        "cancelLabel": "Отмена",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    },
    "startDate": "12/11/2018 09:00",
    "endDate": "12/11/2018"
}, function(start, end, label) {
    console.log("New date range selected: '" + start.format('YYYY-MM-DD-HH-mm') + "' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});