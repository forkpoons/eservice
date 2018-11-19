let price = [[{name:'бампер', cost:'9 000 р'},{name:'крыло', cost:'3 888 р'},{name:'дверь', cost:'4 555 р'},{name:'бампер', cost:'5 777 р'}],
    [{name:'крыло', cost:'4 999 р'},{name:'крыло', cost:'5 333 р'},{name:'бампер', cost:'7 444 р'},{name:'дверь', cost:'3 999 р'},{name:'бампер', cost:'8 000 р'}],
    [{name:'дверь', cost:'7 666 р'},{name:'крыло', cost:'4 888 р'},{name:'дверь', cost:'5 555 р'},{name:'бампер', cost:'2 000 р'}],
    [{name:'стекло', cost:'1 222 р'},{name:'крыло', cost:'9 777 р'},{name:'крыло', cost:'2 666 р'},{name:'бампер', cost:'9 333 р'}]];

const select = document.getElementById('price');
const items = document.getElementById('price-items');
let b = '';
for (let i = 0; i < price[0].length; i++)
{
    b += "<div class='price-item'><div class='price-item-1'>"+ price[0][i].name +"</div><div class='price-item-2'>от "+ price[0][i].cost +"</div></div>"
}
items.innerHTML = b;

select.onchange = function () {
    let a = select.value;
    b = '';
    for (let i = 0; i < price[a].length; i++)
    {
        b += "<div class='price-item'><div class='price-item-1'>"+ price[a][i].name +"</div><div class='price-item-2'>от "+ price[a][i].cost +"</div></div>"
    }
    items.innerHTML = b;
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