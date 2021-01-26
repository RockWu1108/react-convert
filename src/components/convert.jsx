import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Convert = (props) =>{

    const {setValue , inputValue , outputValue} = props;

    return(
        <div className="converter">
            <div className="flex-1">
                <div className="converter-title">Set</div>
                <input type="number" className="input-number" onChange={(e)=>{setValue(e, "input")}} value={inputValue}/>
            </div>
            <span className="angle-icon fa-2x" style={{marginTop: "30px"}}>
        <FontAwesomeIcon icon={['fas' , 'angle-right']}/>
      </span>
            <div className="text-right flex-1">
                <div className="converter-title">Show</div>
                <input type="text" className="input-number text-right" onChange={(e)=>{setValue(e,"output")}} value={outputValue}/>
            </div>
        </div>
    );
}

export default Convert
