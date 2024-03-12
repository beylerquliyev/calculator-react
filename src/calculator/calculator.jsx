

import { useState } from "react"
import style from "../calculator/calculator.module.css"
import { Battery } from "../Battery/Battery";


export function Calculator (){
    const[Numbers,SetNumbers]=useState({num1:"",num2:"",operator:"",TotalResult:"",num3:"",show:""})
  

console.log(Numbers);

 
    function chooseNumber(e){

        if(Numbers.operator.length===0){
           
            SetNumbers(prev => ({
                ...prev,
                num1: prev.num1 + e.target.value,
                show: prev.num1 + e.target.value
              }));
              
        }
        else if (Numbers.num1.length !== 0 && Numbers.operator.length !== 0 &&Numbers.TotalResult ===""){
            SetNumbers(prev => ({
                ...prev,
                num2: prev.num2 + e.target.value,
                show: prev.num2 + e.target.value
              }));
             

        }
        else if(Numbers.num1.length !== 0 && Numbers.TotalResult.length !==0 &&Numbers.num2.length !==0){
            console.log("ss");
            SetNumbers(prev => ({
                ...prev,
                num3: prev.num3 + e.target.value,
                show: prev.num3 + e.target.value
              }));
        }
    }
    function ChooseOperator(z){
      
        if(Numbers.operator=== ""&&Numbers.num1.length !==0){
            SetNumbers(prev => ({
                ...prev,
                operator:z.target.textContent ,
           
            }));
        }
        else if(Numbers.num1.length !== 0 && Numbers.operator.length !== 0&& Numbers.num2.length ===0){
            SetNumbers(prev => ({
                ...prev,
                operator:z.target.textContent,
              
            }));
        }
      
       
        else if(Numbers.num1.length !== 0 && Numbers.operator.length !== 0&& Numbers.num2.length !==0&&Numbers.num3===""&&Numbers.TotalResult.length===0){
            console.log("ss");
            let dd
        if(Numbers.operator==="-"){
            dd=parseInt(Numbers.num1)-parseInt(Numbers.num2)
           }
  
            else if(Numbers.operator==="+"){
               dd=parseInt(Numbers.num1)+(Numbers.num2)
  
  
           }
           else if(Numbers.operator==="×"){
               dd=parseInt(Numbers.num1)*(Numbers.num2)
  
  
           }
           else if(Numbers.operator==="÷"){
               dd=parseInt(Numbers.num1)/(Numbers.num2)
  
  
           }
           console.log("dd");
           SetNumbers(prev => ({
            ...prev,
            TotalResult:dd,
            operator:z.target.textContent,
            show:dd,
          
           

        }));
        }

        else if(Numbers.num1.length !== 0 && Numbers.operator.length !== 0&& Numbers.num2.length !==0&&Numbers.num3.length===0 &&Numbers.TotalResult.length !==0){
            console.log("ssp[[");
            SetNumbers(prev => ({
                ...prev,
               
                operator:z.target.textContent,
          
               
    
            }));

        }
        else if(Numbers.num1.length !== 0 && Numbers.operator.length !== 0&& Numbers.num2.length !==0&&Numbers.num3.length !==0 &&Numbers.TotalResult.length !==0){
        
            let dd
            if(Numbers.operator==="-"){
                dd=parseInt(Numbers.TotalResult)-parseInt(Numbers.num3)
               }
      
                else if(Numbers.operator==="+"){
                   dd=parseInt(Numbers.TotalResult)+parseInt(Numbers.num3)
               }
               else if(Numbers.operator==="×"){
                   dd=parseInt(Numbers.TotalResult)*parseInt(Numbers.num3)
               }
               else if(Numbers.operator==="÷"){
                   dd=parseInt(Numbers.TotalResult)/parseInt(Numbers.num3)
               }
               SetNumbers(prev => ({
                ...prev,
                TotalResult:dd,
                operator:z.target.textContent,
                show:dd,
               
                num3:""
            }));   
        }
    }

    function ShowResult(){
        if(Numbers.num1.length !==0&&Numbers.num2.length !==0&&Numbers.TotalResult.length===0){
            let dd
            if(Numbers.operator==="-"){
                dd=parseInt(Numbers.num1)-parseInt(Numbers.num2)
               }
      
                else if(Numbers.operator==="+"){
                   dd=parseInt(Numbers.num1)+parseInt((Numbers.num2))
               }
               else if(Numbers.operator==="×"){
                   dd=parseInt(Numbers.num1)*(Numbers.num2)
               }
               else if(Numbers.operator==="÷"){
                   dd=parseInt(Numbers.num1)/(Numbers.num2)
               }
               console.log("dd");
               SetNumbers(prev => ({
                ...prev,
                TotalResult:dd,
                show:dd,
                operator:""
                
            }));
        }
        else if((Numbers.num1.length !==0&&Numbers.num2.length !==0)&&Numbers.num3.length !==0){
            let dd
            if(Numbers.operator==="-"){
                dd=parseInt(Numbers.TotalResult)-parseInt(Numbers.num3)
               }
      
                else if(Numbers.operator==="+"){
                   dd=parseInt(Numbers.TotalResult)+parseInt(Numbers.num3)
               }
               else if(Numbers.operator==="×"){
                   dd=parseInt(Numbers.TotalResult)*parseInt(Numbers.num3)
               }
               else if(Numbers.operator==="÷"){
                   dd=parseInt(Numbers.TotalResult)/parseInt(Numbers.num3)
               }
               SetNumbers(prev => ({
                ...prev,
                TotalResult:dd,
                show:dd,
                num3:"",
                operator:""
            }));
        }
    
    
    }
    function ClearObj(){
        SetNumbers(prev => ({
            
            num1: "",
            num2: "",
            operator: "",
            TotalResult: "",
            num3: "",
            show: ""
        }));
    }


    function chooseMinus (){
      
       if (
           
       Numbers.num1 !=="0"&&Numbers.operator.length===0&& Numbers.num2.length === 0 && Numbers.num3.length === 0 && Numbers.TotalResult.length === 0
          ){
            if(Numbers.num1.includes("-")===false){
                SetNumbers(prev => ({
                    ...prev,
                    num1:"-"+prev.num1,
                    show:"-"+prev.num1
                }));
            }
            else{
              
                SetNumbers(prev => ({
                    ...prev,
                    num1:prev.num1.slice(1),
                    show:prev.num1.slice(1),
                   
                }));
    
            }
      
       }

       else if(
           
       Numbers.num2 !=="0"&& Numbers.operator.length !==0&& Numbers.num1.length !== 0 && Numbers.num3.length === 0 && Numbers.TotalResult.length === 0
       ){
        if(Numbers.num2.includes("-")===false){
            SetNumbers(prev => ({
                ...prev,
                num2:"-"+prev.num2,
                show:"-"+prev.num2
            }));
        }
        else{
          
            SetNumbers(prev => ({
                ...prev,
                num2:prev.num2.slice(1),
                show:prev.num2.slice(1),
            }));

        }
  

   
    }
    else if(
           
      Numbers.TotalResult !=="0" && Numbers.operator.length !==0&& Numbers.num1.length !== 0 && Numbers.num2.length !== 0 && Numbers.TotalResult.length !== 0 && Numbers.num3.length === 0
       ){
    

        if(String(Numbers.TotalResult).includes("-")===false){
            SetNumbers(prev => ({
                ...prev,
                TotalResult:prev.TotalResult * -1,
                show:prev.TotalResult * -1,
            }));
           
        }
        else{

            SetNumbers(prev => ({
                ...prev,
                TotalResult:prev.TotalResult * -1,
                show:prev.TotalResult * -1,
            }));
        }

      

    }

    else if(
           
        Numbers.TotalResult !=="0" && Numbers.operator.length !==0&& Numbers.num1.length !== 0 && Numbers.num2.length !== 0 && Numbers.TotalResult.length !== 0 && Numbers.num3.length !== 0
         ){
            if(String(Numbers.num3).includes("-")===false){
                SetNumbers(prev => ({
                    ...prev,
                    num3:"-"+prev.num3,
                    show:"-"+prev.num3
                }));
            }
            else{
              
                SetNumbers(prev => ({
                    ...prev,
                    num3:prev.num3.slice(1),
                    show:prev.num3.slice(1),
                }));
    
            }

         }



        
       
}



     return(

        <div className={style.FullDivCalc}>
          

             <div className={style.divv} >
               <Battery/>
            <div className={style.HeaderDiv}>
          
               <h1>{Numbers.show}</h1>
            </div>

            <div className={style.BtnsDiv} >
               
               <button value={"0"} onClick={chooseNumber}>
                0
               
               </button>
               <button value={"1"} onClick={chooseNumber}>
               1
               </button>
               <button value={"2"} onClick={chooseNumber}>
                2
               </button>
               <button value={"3"} onClick={chooseNumber}>
               3
               </button>
               <button value={"4"} onClick={chooseNumber}>
               4
               </button>
               <button value={"5"} onClick={chooseNumber}>
               5
               </button>
               <button value={"6"} onClick={chooseNumber}>
               6
               </button>
               <button value={"7"} onClick={chooseNumber}>
               7
               </button>
               <button value={"8"} onClick={chooseNumber}>
               8
               </button>
               <button value={"9"} onClick={chooseNumber}>
               9
               </button>
              
               <button onClick={ShowResult} >
               =
               </button>
               <button onClick={chooseMinus} value={"-"} >
               +/-
               </button>
               <button className={Numbers.operator==="÷"?style.ChooseBtn:style.Btn} onClick={ChooseOperator} >
                  ÷
               </button>
               <button className={Numbers.operator==="×"?style.ChooseBtn:style.Btn}  onClick={ChooseOperator} >
               ×
                  
               </button>
               <button className={Numbers.operator==="-"?style.ChooseBtn:style.Btn} onClick={ChooseOperator}>
               -
                
               </button>
               <button className={Numbers.operator==="+"?style.ChooseBtn:style.Btn} onClick={ChooseOperator}  >
               +
                
               </button>
        


            </div>
            <div>
           <button className={style.ACbtn} onClick={ClearObj}>
                    AC
                </button>
              
           </div>

        </div>

        </div>
       
    )
}