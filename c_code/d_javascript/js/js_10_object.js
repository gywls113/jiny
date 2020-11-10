// js_10_object.js
console.log(arrObj[0].company);

// var obj = new Object; (java에서 권장하지 않는 방법, 아래 방법으로 쓰자!)
var obj = {
    'samsung':'galaxy',
    'apple':'iphone',
    'google':'pixel',
    'lg':'belbet',
};
console.log(obj.google);
console.log(obj['google']);//두개 같은 결과를 가져옴

obj.nokia = 'banana'; 
obj.Fn = function(a){
    return a+'님 반가워요!';
}
console.log(obj);

var x = obj.Fn('jiny');
console.log(x);

// ===========================================


console.log(arrObj.length);
console.log(arrObj[0].serise);
var p=0;
for(; p < arrObj.length; p += 1){
    console.log((p+1) + '.' + arrObj[p].serise);
};

arrObj.forEach(function(data, idx){
   console.log( (idx + 1) + '.' + data.serise) 
});

// ===========================================

/*
var list = ['apple','samsung','lg','oneplus']
var link = ['http://apple.com','http://samsung.com','http://lg.com','http://oneplus.com']
var content = ['2020년 애플의 최신 아이폰 출시','갤럭시21 부품 유출','과거의 가로본능을 기억하게 하는 윙','삼성, 애플에 뒤쳐지지 않는 성능 하지만 중국거라는 슬픈  현실']
var img = ['../../img/']
var product = document.getElementsByClassName('product')[0];
var z = 0, h3;
var listLen = list.length;

for( z=0; z<listLen ; z+=1 ){
    div = document.createElement('div');
    h3 = document.createElement('h3');
    p = document.createElement('p');
    p2 = document.createElement('p');
    div.classList.add(list[z]);
    h3.innerText = list[z];
    p.innerText = list[z];
    p2.innerText = content[z];
    p.setAttribute('href',link[z]);
    product.append(div);
    div.append(h3);
    div.append(p);
    div.append(p2);
};
*/

var product = document.getElementsByClassName('product')[0];

var div, h3, par, par2, link, imgBox;
var url = '../img/';

for(var i=0; i<arrObj.length; i+=1 ){
var div = document.createElement('div');
var h3 = document.createElement('h3');
var imgBox = document.createElement('div');
var par = document.createElement('p');
var par2 = document.createElement('p');
var link = document.createElement('a');

div.classList.add(arrObj[i].company);
h3.innerText = arrObj[i].company;
imgBox.classList.add('product_img');
    
link.setAttribute('href',arrObj[i].site);
link.innerText = arrObj[i].serise;
par2.innerText = arrObj[i].content;

imgBox.style='background-image:url('+ url + arrObj[i].img +')';
    
product.append(div);
div.prepend(h3); //append의 반댓말은 prepend(앞에 넣겠다.)
div.prepend(imgBox); // 순서가 바뀌어도 prepend를 쓰면 앞으로 위치시킬 수 있다.
div.append(par2);
div.append(par); 
par.append(link);
};

