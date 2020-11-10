// js_08_array.js

var a=[1,2,3];
a.push('one'); //뒤에다가 추가
console.log(a);
a.shift(); //앞에서부터 삭제
console.log(a);
a.push('three');
a.push('four');
console.log(a);
a.pop(); // 뒤에부터 삭제
a.pop(); 
console.log(a);
a.unshift('before'); // 앞에다가 추가
console.log(a);

var b = [1,2,3];
var c = [4,5,6];0.

var d;
d = b.concat(c); //합치기
console.log(b);
console.log(c);
console.log(d);

// ===============================================

var ar;
//ar= new Array
// new Array 새로 만들겠다고 선언하기(js쓰지않음)

//권장하는 방법:
ar=[];
ar[4]='in string';
console.log(ar);
//앞에 값을 비워두어도 값은 필요한 자리에 생성된다.
//undifined(empty)*4 'insting 과 같은 결과가 나올 수 있다.

// ===============================================

var arrQ_01 = [];
var i = 0
for(; i < 100 ;i += 1){
    arrQ_01[i] = i+1;
};
console.log(arrQ_01);


var arrQ_02 = [];
var j = 0, k, l;
for(; j < 100 ; j += 1){
    k = j % 2;
    if (k === 0){
        continue;
    }else if (k !== 0){
        arrQ_02.push(j);
    }
    //l = parseInt(j/2);
    //arrQ_02[l] = j;
};
console.log(arrQ_02);


/*
var arrQ_03 = [];
var o = 0
for(; o < 100 ;o += 1){
    arrQ_03[o] = o+1;
};
arrQ_03.reverse();
console.log(arrQ_03);
*/
var arrQ_03 = [];
var o = 0
for(o=0; o < 100 ; o += 1){
    arrQ_03[o] = 100-o;
};
console.log(arrQ_03);


var arrQ_04 = [];
var p = 0
for(; p < 101 ; p += 2){
    if (p === 0){
        continue;
    }else if (p !== 0){
        arrQ_04.push(p);
    }
};
arrQ_04.reverse();
console.log(arrQ_04);

// ===============================================
var list = ['nav_01','nav_02','nav_03','nav_04']
var nav = document.getElementsByClassName('nav')[0];
var b = 0, li, link;
var listLen = list.length;

for(b=0;b<listLen;b+=1){
    li = document.createElement('li');
    link = document.createElement('a');
    li.classList.add(list[b]);
    link.innerText = '글쓰기' + (b+1);
    link.setAttribute('href','#')
    li.append(link);
    nav.append(li);
};
  

/*    
var li = document.createElement('li');
nav.append(li);
li.classList.add(list[0]);
li.innerText = "글쓰기";

var li2 = document.createElement('li');
nav.append(li2);
li2.classList.add(list[1]);
li2.innerText = "글쓰기";

var li3 = document.createElement('li');
nav.append(li3);
li3.classList.add(list[2]);
li3.innerText = "글쓰기";

var li4 = document.createElement('li');
nav.append(li4);
li4.classList.add(list[3]);
li4.innerText = "글쓰기";
*/