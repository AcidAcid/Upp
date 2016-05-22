var input = $('#result');
var label = $('label');

$('#clearBtn').on('click',function(event) {
    // очищает текст метки
    // и переменную содержащую введенные данные
    label.text("Empty");
    input.attr('value', "0");
    entered = false;
});

$(".number").on('click', function(event) {
    var btnText = $(this).text(); // текст нажатой кнопки
    var value = input.attr('value');

    if (value == '0'){
        if (btnText == '0' || btnText == '00' ) {
            value = '0';
        } else if (btnText == '.') {
            value += btnText;
        } else {
            value = btnText;
        }
    } else if (btnText == '.' && value.indexOf('.') != -1) {
         return;
    } else {
        value += btnText;
    }


    input.attr('value', value);
});

$(".operators").on('click', function(event){
    // проверить, ввёл ли пользователь число
    // в значение метки записать число
    // очищать input
});
