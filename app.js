 const btns = document.querySelectorAll(".calc-btn");
 const dispExp = document.querySelector(".para");
 const dispAns = document.querySelector(".ans-para");
 let numCount = 0;
 let valueNum = ""
 let Count = 0;
 let firVal = "";
let value = "";
let textVal = "";
let StoreOper = ""
let prevOper = ""
let ScreenClar = 0
 btns.forEach(function(e){
     e.addEventListener("click",function(ele){
         if(numCount > 52){
             prompt("you have entered too many numbers ,please start over","ok")
             dispExp.textContent = 0;
             dispAns.textContent = "";
             valueNum = ""
             StoreOper = ""
             firVal = "";
             prevOper = ""
         }
         numCount ++;

         if(ScreenClar == 1){
             dispExp.textContent = 0;
             dispAns.textContent = "";
             ScreenClar = 0;
         }
         value = ele.target.classList.value;
         textVal = ele.target.textContent;
         console.log(textVal);
         calc(value);
     })
 })

 function calc(calcPara){
     if(calcPara == "calc-btn operator"){
         if(dispExp.textContent == 0){
             prompt("You are requested not to start with an operator, results wll be unexpected","ok");
         }
         else{
         StoreOper = textVal;
         dispExp.textContent += textVal;
          
         
         if(prevOper == ""){
             prevOper = StoreOper;
             firVal = valueNum;
             valueNum ="";
         }
         else{
             firVal = operation(firVal,valueNum,prevOper);
             prevOper = StoreOper;
             valueNum = ""
         }
        }


     }
     if(calcPara == "calc-btn"){
         if(dispExp.textContent == "0"){
             dispExp.textContent = textVal;
             valueNum += textVal;
         }
         else{
      dispExp.textContent += textVal;
      valueNum += textVal;
         }
       
     }
     if(calcPara == "calc-btn decimal"){
         dispExp.textContent += textVal;
         valueNum += textVal;
     }
     if(calcPara == "calc-btn Equals"){
         dispAns.textContent = operation(firVal,valueNum,StoreOper);
         prevOper = ""
         firVal = ""
         valueNum = ""
         ScreenClar++;
     }
     if(calcPara == "calc-btn Clear"){
         dispExp.textContent = 0;
         dispAns.textContent = "";
         firVal = "";
         valueNum = "";
         prevOper = "";
         StoreOper = "";
     }
 }



function operation(a,b,oper){
  a = parseFloat(a);
  b = parseFloat(b);
  if(oper == "+"){
      return Math.round((a + b) * 10)/10;
  }
  else if(oper == "-"){
      return Math.round((a - b) * 10)/10;
  }
  else if(oper == "*"){
      return Math.round((a * b) * 10)/10;
  }
  else if (oper == "/"){
      return Math.round((a / b) * 10)/10;
  }
  else{
      return 0;
  }
}