//Циклы

//Возвести число ___ в степень____ с использованием цикла while
/*
var num = 2;//число
var exp = 10;//степень
var result = 1;
var cnt = 1;

while(cnt <= exp){
    result *= num;
    cnt++;
}
console.log(result);
*/


//Прямоугольный треугольник из символов #
//используя цикл while

/*
var lines = 5;
var line = " ";
var cnt = 0;

while(cnt < lines){
    line = line + "#";
    console.log(line);
    cnt++;
}
*/




/*
//Равнобедренный треугольник из символов *

//allLines - curLine     кол-во пробелов
//curLine * 2 - 1   кол-во звездочек
var Lines = 4;
var star,space;
var stars,spaces;

for(var curLine = 1;curLine <= Lines;curLine++){//бегает по строкам
    space = Lines - curLine;
    spaces = "";
        for(var i = 0;i < space;i++){//собирает пробелы
            spaces += " ";
        }
        star = curLine * 2 - 1;
        stars = "";
            for(var i = 0;i < star;i++){//собирает звездочки
                stars += "*";
            }
            console.log(spaces + stars);
}

*/




/* 
//четные числа с нулем

for(var i = 0;i < 10;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/


//четные числа без нуля 
/*
for(var i = 0;i < 10;i++){
    if(i % 2 == 0 && i!= 0){
        console.log(i);
    }
}
*/


// нечетные числа
/*
for(var i = 0;i < 10;i++){
    if(i % 2 == 1 && i!= 0){
        console.log(i);
    }
}
*/




//Четные и нечетные числа;
/*
for(var i = 0;i < 10;i++){
    if(i % 2 == 0 && i != 0){
        console.log(i + " четные числа");
    }else if(i == 0){
        console.log(i + " это ноль");
    }
    else{
        console.log(i + " нечетные числа");
    }
}

*/





// Тернарный оператор
/*
var x = 1;
var y;

if(x === 1){
    console.log(y = "one");
}else{
    console.log(y = "zero");
}
*/


//var x = 1;
//var y;
//y = (x === 1) ? console.log("one") : console.log("zero");


// Числа делящиеся на 3

/*
for(var i = 25;i < 100;i++){
    if(i % 3 != 0)
        continue;
        console.log(i + " делится на 3");
        
}
*/




// Находим первое число кот делится на 3 и прерываем выходим из цикла
/*
for(var i = 251;i < 423;i++){
    if(i % 3 != 0)
        continue;
        console.log(i + " делится на 3");
        break;
}
*/



// Переключатель SWITCH

//Выведет  два три четыре 
/*
var x = 2;
switch(x){
    case 0 : console.log("ноль");
    case 1 : console.log("один");
    case 2 : console.log("два");
    case 3 : console.log("три");
    case 4 : console.log("четыре");

}
*/

// Выведет  два
/*
var x = 2;
switch(x){
    case 0 : console.log("ноль");break;
    case 1 : console.log("один");break;
    case 2 : console.log("два");break;
    case 3 : console.log("три");break;
    case 4 : console.log("четыре");break;

}

*/



// Выведет  много-много
/*
var x = 20;
switch(x){
    case 0 : console.log("ноль");break;
    case 1 : console.log("один");break;
    case 2 : console.log("два");break;
    case 3 : console.log("три");break;
    case 4 : console.log("четыре");break;
    default : console.log("много-много");
}

*/