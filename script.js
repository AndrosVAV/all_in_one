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
//обьявление на уровне блоков операторы let и const

/*
var a = 2;
(function ife(){
	var a = 3;
	console.log(a);
})();
console.log(a);



var a = 2;
//Разграничиваем область видимости
{
let a = 5; //let a = 5, b= 6, c = 7;
console.log(a);
}
console.log(a);



//const(константа);
const a = 2;
a = 3;
console.log(a);//ошибка



const obj = {};
//obj = 1;
//console.log(obj);//ошибка

obj.field = 1;
//console.log(obj);//Object { field: 1 }
console.log(JSON.stringify(obj));//{"field":1}
//Менять можно только поля обьекта







// - 2 - 
//Операторы spread и rest  (...);  Для присвоения для работы с параметрами

//spread  разделяем массив на элементы
function n(a,b,c){
	console.log(`${a} ${b}${c}`);
}
n(...["Hello","word","!"]);


//rest   группирует в массив

function n(...args){
	console.log(args);
}
n("Hello","word","!");


function n(...args){
	console.log(args);//Array(6) [ "Hello", "word", "!", 5, 55, 555 ]
}
n("Hello","word","!",5,55,555);

*/


/*
let obj1 = {
	field1 : "value1",
	field2 : "value2"
};
console.log(obj1);// Object { field1: "value1", field2: "value2" }


let obj2 = {
	...obj1,//все поля обьекта obj1
	fieldN : "valueN"
};
console.log(obj2);//Object { field1: "value1", field2: "value2", fieldN: "valueN" }

*/


/*
let obj2 = {
    ...obj1,
	field1 : "value fixed",  //если мы хотим поменять значение
	fieldN : "valueN"
};
console.log(obj2);
*/




// - 3 -
//Параметры по умолчанию

/*
function n(a,b){
	a = a || 10;
	b = b || 20;
console.log(a,b);
};
n();
n(15,16);


function n2(a = 12,b = 14){
return console.log(a,b);
};
n2();
*/



/*
const w = 11;

function n (a = 10,b = w + 12){
	console.log(a,b);
};
n();
*/

//Операции в значениях по умолчанию
/*
const w = 11;

function plus(arg){
	return arg + 10;
};

function n(a = 100,b = plus(w + 12)){
	console.log(a,b);
};
n();
*/



// - 4 -
//Диструктурирующее присвоение

/*
function func1(){
    return [1,2,3];
};

function func2(){
    return {a : 4,b : 5,c :6};
};

*/

/*
//Структурное присвоение
let tmp1 = func1(),
a1 = tmp1[0],b1 = tmp1[1],c1 = tmp1[2];

let tmp2 = func2(),
a2 = tmp2.a,b2 = tmp2.b,c2 = tmp2.c;

//console.log("tmp1: ",a1,b1,c1);
//console.log("tmp2: ",a2,b2,c2);
*/

/*
let [a1,b1,c1] = func1();
console.log("tmp1: ",a1,b1,c1);

//let {a,b,c} = func2();
//console.log("tmp2: ",a,b,c);

let {b} = func2();
console.log("tmp2: ",b);

function test({c} = func2()){
    console.log("tmp2: ",c);
    }
    test();
*/







// - 5 -   Cтрелочные функции

/*
let func = function(){console.log("Hello world")};
let func2 = () =>(console.log("Hello world!"));

func();
func2();
*/


/*
let func = function(msg){console.log(msg)};
let func2 = msg2 =>console.log(msg2);
//Если аргументов несколько нужны скобки
func("мир");
func2("Мир");
*/

//  => означает функция возвращает результат выполнения

/*
    let func = function(msg){
    console.log(msg);
    return msg;
    };
    let func2 = msg2 =>{
    console.log(msg2)
    return msg2
    };
    
    func("Петя");
    func2("Василий");
  */


/*
const plus = (a,b) => a + b;
console.log(plus(50,50));
*/

//Если возвращает обьект то в круглых скобках
//const plus = (a,b) => ({"a : hello"});








// - 6 -   КЛАССЫ

/*
function P(FirstName,LastName){
	this.FirstName = FirstName;
	this.LastName = LastName;
};
const person1 = new P("Василий","Теркин");
console.log(person1);

class Person{
	constructor(FirstName,LastName){
	this.FirstName = FirstName;
	this.LastName = LastName;
	}
};
const person2 = new Person("Вася","Пупкин");
console.log(person2);


class Children extends Person{
	constructor(FirstName,LastName,Age){
	super(FirstName,LastName);
	this.Age = Age;
	}
};
const child = new Children("Вася","Пупкин",12);
console.log(child);



class Boy extends Children{
    constructor(FirstName,LastName,Age,male){
        super(FirstName,LastName,Age);
        this.gender = "male";
        }
    get FullName(){
        return `${this.LastName} ${this.FirstName}`;
    }
    setAge(age){
        this.Age = Age;
    }
    setName(name){
        this.FirstName = name;
        return this.FullName;
    }
    static SayHello(){
        return "Hello everyone";
    }
    }
    
    const boy = new Boy("Вася","Пупкин",12);
    console.log(boy);

    

console.log(boy.FullName);//Пупкин Вася
//console.log(boy.FullName());//ошибка

boy.setAge(15);
console.log(boy);//Object { FirstName: "Вася", LastName: "Пупкин", Age: 15, gender: "male" }

console.log(Boy.SayHello());//Hello everyone
    
 console.log(boy.setName("Алекс")); //Пупкин Алекс 

*/







// - 7 -   Шаблонные строки

/*
let str1 = "Hello";
console.log("str1: ",str1);//str1:  Hello

let str2 = "world";
console.log("str2: ",str2);//str2:  world

//let str3 = `${str1} ${str2 }`;
//console.log("str3: ",str3);//str3:  Hello world


const getStr1 = () => srt1;
const getStr2 = () => srt2;

let str3 = `${str1} ${str2 }`;
console.log("str3: ",str3);//str3:  Hello world

*/







//Е Ковальчук Перебирающие методы массивов
//фУНКЦИИ ВЫСШЕГО ПОРЯДКА

//    - 1 - (forEach)

var response = [
    {
        index : 0,
        isActive : true,
        age : 20,
        name : "Langley Morton",
        gender : "male",
        email : "langleyMorton@gmail.com"

    },
    {
        index : 1,
        isActive : true,
        age : 20,
        name : "Terry Cook",
        gender : "female",
        email : "terrycook@gmail.com"

    },
    {
        index : 2,
        isActive : false,
        age : 36,
        name : "Tricia Meadows",
        gender : "female",
        email : "triciameadows@gmail.com"

    },
    {
        index : 3,
        isActive : true,
        age : 37,
        name : "Logan Huff",
        gender : "male",
        email : "loganhuff@gmail.com"

    },
    {
        index : 4,
        isActive : false,
        age : 40,
        name : "Elsa Hogan",
        gender : "famale",
        email : "elsahogan@gmail.com"

    },
    {
        index : 5,
        isActive : true,
        age : 22,
        name : "Frances Mosley",
        gender : "male",
        email : "francesmosley@gmail.com"

    }
];



var array = [1,2,3,4,5,6,7,8,9,10];
var newArray = [];
var counter = 0;
var flattened = [[0,1],[2,3],[4,5]];


/*
array.forEach(function(elem){
    newArray.push(elem *= elem);
});
console.log(newArray);
*/

/*
newArray = array.forEach(function(elem){
	return elem *= elem;
    //newArray.push(elem *= elem);
});
console.log(newArray);
*/




/*
newArray = array.forEach(function(elem){
	counter += elem;
    
});
console.log(counter);
*/


var getNames = function(elem){
    newArray.push(elem.name);
}


//response.forEach(getNames);
//console.log(newArray);





//    - 2 -  map



/*
newArray = array.map(function(elem){
    return elem *= elem;
});

 //console.log(newArray);//Array(10) [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]


*/




/*
 newArray = response.map(function(elem){
    return{
         name : elem.name,
         email : elem.mail
    }
});

//console.log(newArray);

*/





//  - 3 -    filter




/*
newArray = array.filter(function(elem){
    return elem % 2;
});

 //console.log(newArray);//Array(5) [ 1, 3, 5, 7, 9 ]
*/




/*
newArray = array.filter(function(elem){
    return elem % 3 && elem !== 1;
});

//console.log(newArray);//Array(6) [ 2, 4, 5, 7, 8, 10 ]

*/



/*
newArray = response.filter(function(elem){
//return elem.isActive;
return elem.age > 30;
})

//console.log(newArray);

*/







//  - 4 - every  some

/*
newArray = array.some(function(elem){
return elem > 0;
})
//console.log(newArray);//true




newArray = array.every(function(elem){
return elem > 0;
})
//console.log(newArray);//false

*/



/*
newArray = response.every(function(elem){
return elem.email;
})
console.log(newArray);//true т.к. почта есть у всех

//если закоментировать почту одного usera
//console.log(newArray);//false т.к. почты у одного usera нет 

*/






//  - 5 -  reduce  reduceRight


/*
newArray = array.reduce(function(sum,elem){
    return sum += elem;
    })
    console.log(newArray);//49
    
*/


/*
newArray = array.reduce(function(sum,elem){
    return sum += elem;
    },0)
    console.log(newArray);//49
 */

 

 

/*
newArray = array.reduce(function(sum,elem){
    return sum += elem;
    },10)
    console.log(newArray);//59
 */



//Очень похоже на spread оператор в ES6
/*
newArray = flattened.reduce(function(sum,elem){
    return sum.concat(elem);
    })
    console.log(newArray);//Array(6) [ 0, 1, 2, 3, 4, 5 ]
 */





 
var friends = [
    {name : "Anna",books : ["Bible","Harry Potter"]},
    {name : "Bob",books : ["War and peace","Romeo and juliet"]},
    {name : "Alice",books : ["The Lord of the Rings","Shining"]}
    ];
    
    
    
    /*
    newArray = friends.reduce(function(sum,elem){
        //console.log(sum);//Object { name: "Anna", books: (2) […] }
        return sum.concat(elem);
        })
        console.log(newArray);//ошибка
     */

/*
     newArray = friends.reduce(function(sum,elem){
        
        return sum.concat(elem.books);
        },["1984"])
        console.log(newArray);

*/


/*

        newArray = friends.reduceRight(function(sum,elem){
        
            return sum.concat(elem.books);
            },["1984"])
            console.log(newArray);
*/




    
    
    
    








 




























