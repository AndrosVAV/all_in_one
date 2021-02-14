//Оглавление:
//Циклы
//ES6 









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





//Цикл в цикле     Курс Е.Попова - Javascript

/*
var students = ["Илья","Greg","Алина"];

for(var i = 0;i < students.length;i++){
    for(var j = 0;j < students[i].length;j++){
        if(students[i].charCodeAt(j) < 1040 || students[i].charCodeAt(j) > 1103)
        document.write("Найден символ кот не попадает в диапазон русских букв.Это символ: " + 
        students[i].charAt(j) + " в элементе " + students[i] + "</br>")
    }

}


*/















// JS Code - ES6

//-1-
//обьявление на уровне блоков
/*
var a = 2;
(function ife(){
    var a = 3;
    console.log(a);
})();
console.log(a);
*/


/*
var a = 2;
//Разграничиваем обл видимости
{
    let a = 3;
    console.log(a);
}
console.log(a);
*/



//-6-
//Классы

function P(FirstName,LastName){
    this.FirstName = FirstName;
    this.LastName = LastName;
}

const person1 = new P("Василий","Теркин");
console.log(person);

class Person{
    constructor(FirstName,LastName){
        this.FirstName = FirstName;
        this.LastName = LastName; 
    }
}

const person2 = new Person("Вася","Пупкин");
console.log(person2);

class Children extends Person{
    constructor(FirstName,LastName,Age){
        super(FirstName,LastName);
        this.Age = Age;
}
}

const child = new Children("Вася","Пупкин",12);
console.log(child);

class Boy extends Children{
    constructor(FirstName,LastName,Age,male){
        super(FirstName,LastName,Age);
        this.gender = "male";
    }
    get FullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
    setAge(age){
        this.Age = age;
    }
    setName(name){
        this.FirstName = name;
        return this.FirstName;
    }
    static SayHello(){
        return "Hello everyone"
    }
}
const boy = new Boy("Вася","Пупкин",12);
console.log(boy);

console.log(boy.getFullName);
//console.log(boy.FullName());//ошибка

console.log(Boy.SayHello());

boy.setAge(15);
console.log(boy);

console.log(boy.setName("Алекс"));











