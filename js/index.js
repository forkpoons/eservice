
const select = document.getElementById('price');
select.onchange = function () {
    let a = document.getElementById('price').value;
    for (let i = 0; i < document.querySelectorAll('option.options').length; i++){
        document.getElementById('price-items-'+i).className = "price-items";
    }
    document.getElementById('price-items-'+a).className = "price-items show";
};


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
                if (file.name.length < 28)
                    document.getElementById('texts').innerHTML = '' + file.name;
                else
                    document.getElementById('texts').innerHTML = file.name.slice(0, 5) + ' ... ' + file.name.slice(-18);
            }
            else
                document.getElementById('texts').innerHTML = 'Выбранно изображений: ' + document.getElementById('uploaded-file1').files.length;
        }
    }
};