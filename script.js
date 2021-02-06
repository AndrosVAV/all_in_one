//Циклы

//Возвести число ___ в степень____

var num = 2;//число
var exp = 10;//степень
var result = 1;
var cnt = 1;

while(cnt <= exp){
    result *= num;
    cnt++;
}
console.log(result);