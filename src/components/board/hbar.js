import React from "react";

export const hbar = props => { 
    const style = {
        background: background
      };
    
  let background =  props.filled ? "black" : "transparent";
  if(props.lastBar === props.address){
    background = "orange";
  }
}
