var input = $('#result');
var label = $('label');

var value = ''; // операнд
var dump = ''; // store user input
var evaluated = false;

$('#clearBtn').on('click',function(event) {
    // очищает текст метки
    // и переменную содержащую введенные данные
    label.text("Empty");
    input.attr('value', "0");
    dump = '';
});

$(".number").on('click', function(event) {
    var btnText = $(this).text(); // текст нажатой кнопки

    // если значение уже вычислили
    if(evaluated) {
        label.text('Empty');
        input.attr('value', '0');
        evaluated = false;
    }

    value = input.attr('value');

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

$(".operation").on('click', function(event){
    var op = $(this).text(); // какой оператор используется
    value = input.attr('value');

    // проверить, ввёл ли пользователь число
    if(value[value.length - 1] != '.') {
        dump += value + op;
        input.attr('value', '0'); // очищать input
        label.text(dump); // записываем в метку все что ввёл пользователь
    }
});

$('#evalute').on('click', function(event){
    value = input.attr('value');

    if(value[value.length - 1] != '.' && !evaluated) {
        dump += value;
        var res = eval(dump);

        label.text(dump + "=" + res);
        input.attr('value', res)
        dump = '';

        evaluated = true; // вычислено
    }

});
