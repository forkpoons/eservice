let price = [[{name:'Покраска бампера (снятие/установка + покраска + расходные материалы)', cost:'7 000 руб'},{name:'Ремонт и покраска кузовных элементов легкой степени повреждения', cost:'7 000 руб'},{name:'Ремонт и покраска капота', cost:'от 8 000 руб'},{name:'Покраска капота (без ремонта)', cost:'8 000 руб'},{name:'Покраска крыши (без ремонта)', cost:'10 000 руб'},{name:'Ремонт и покраска крыши ', cost:'от 15 000 руб'}],
             [{name:'Полировка одной фары', cost:'500 руб'},{name:'Абразивная полировка деталей (1 шт)', cost:'1000 руб'}],
             [{name:'Замена лобового/заднего стекла', cost:'от 3 500 руб'},{name:'Замена бокового стекла двери', cost:'от 800 руб'},{name:'Замена бокового зеркала', cost:'от 400 руб'}],
             [{name:'Демонтаж+монтаж двери', cost:'от 700 руб'},{name:'Демонтаж+монтаж капота/крышки багажника', cost:'от 700 руб'},{name:'Демонтаж+монтаж бампера', cost:'от 500 руб'}],
             [{name:'Ремонт лонжерона', cost:'от 7 000 руб'},{name:'Ремонт средней стойки', cost:'от 7 000 руб'},{name:'Ремонт порога', cost:'от 7 000 руб'},{name:'Замена порога', cost:'от 12 000 руб'},{name:'Комплексный ремонт передней части автомобиля', cost:'от 20 000 руб'}]
            ];

const select = document.getElementById('price');
const items = document.getElementById('price-items');
let b = '';
for (let i = 0; i < price[0].length; i++)
{
    b += "<div class='price-item'><div class='price-item-1'>"+ price[0][i].name +"</div><div class='price-item-2'> "+ price[0][i].cost +"</div></div>"
}
items.innerHTML = b;

select.onchange = function () {
    let a = select.value;
    b = '';
    for (let i = 0; i < price[a].length; i++)
    {
        b += "<div class='price-item'><div class='price-item-1'>"+ price[a][i].name +"</div><div class='price-item-2'> "+ price[a][i].cost +"</div></div>"
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