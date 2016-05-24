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
    evaluated = false;
});

$(".number").on('click', function(event) {
    var btnText = $(this).text(); // текст нажатой кнопки

    // если значение уже вычислили
    isEval();

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

    isEval();
    // проверить, ввёл ли пользователь число
    if(value[value.length - 1] != '.') {
        dump += value + op;
        input.attr('value', '0'); // очищать input
        label.text(dump); // записываем в метку все что ввёл пользователь
    }
});

$('#evaluate').on('click', function(event){
    value = input.attr('value');

    if(value[value.length - 1] != '.' && !evaluated) {
        dump += value;
        var res = eval(dump);

        label.text(dump + " = " + res);
        input.attr('value', res)
        dump = '';

        evaluated = true; // вычислено
    }

});

$('#delChar').on('click', function(event){
    value = input.attr('value');

    isEval();
    if (value.length > 1) {
        input.attr('value', value.slice(0, value.length - 1));
    }
});

// вычислено ли значение
function isEval() {
    if(evaluated) {
        label.text('Empty');
        input.attr('value', '0');
        evaluated = false;
        return true;
    }
    return false;
}
