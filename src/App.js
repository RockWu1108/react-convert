import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import UnitControl from "./components/uint-control";
import CardFooter from "./components/card-footer";
import Convert from "./components/convert";
library.add(fab , fas , far);
function App() {

    const[inputValue , setInputValue] =  useState(0);
    const[outputValue , setOutputValue] =  useState(0);

    const setValue = (e,p) =>{

        const value = e.target.value;

        if( p === "input"){
            setInputValue(value);
            setOutputValue(value /8);
        }

        else if ( p === "output"){
            setOutputValue(value);
            setInputValue(value * 8);

        }
    };

  return (
      <div className="container">
        <div className="card-header">Network Speed Converter</div>
        <div className="card-body">
          <UnitControl/>
          <Convert setValue={setValue} inputValue={inputValue} outputValue={outputValue} />
        </div>
        <CardFooter inputValue={inputValue}/>
      </div>
  );
}

export default App;
