import React , {useState} from 'react';


const CardFooter = (props) =>{
   const {inputValue} = props ;

   //初始化數據
   let material ={
      color : "white",
      title : "Send"
   };
   if(inputValue <10){
      material = {
         color: "green" ,
         title: "Slow"
      }
   }
   else if (inputValue <20){
      material = {
         color: "blue" ,
         title: "General"
      }
   }
   else{
      material = {
         color: "red" ,
         title: "Fast"
      }
   }
   return (
       <div className="card-footer" style={{backgroundColor :material.color}}>{material.title}</div>
   );

}

export  default  CardFooter;
