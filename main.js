const counter=document.getElementById('counter');
const butonPlus=document.getElementById('plus');
const butonMinus=document.getElementById('minus');
let counterValue=0;
const applePrice=0.97;
const total=document.getElementById('total');


butonPlus.addEventListener('click', function(){
    counterValue++;

    counter.innerHTML=counterValue+' articles';
    if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    
    else{
        counter.innerHTML=counterValue+' articles';
    }
    document.getElementById("total").
    innerHTML=counterValue*applePrice;

}
);

butonMinus.addEventListener('click', function(){
    counterValue--;

    if(counterValue<=0){
        counterValue=0 ;
        counter.innerHTML=counterValue+' article';
    }
    else if(counterValue== 1){
        counter.innerHTML=counterValue+' article';
    }
    
    else{
        counter.innerHTML=counterValue+' articles';
    }
    
    document.getElementById("total").
    innerHTML=counterValue*applePrice;

}
);

