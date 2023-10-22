import React from 'react';

export default function Button(props) {
    return (
        <button onClick={props.func} style={{height:'50px',minWidth:'80px',borderColor:'grey',borderRadius:'10px',marginRight:"10px",backgroundColor:'#5a5a5aff',cursor:'pointer',fontSize:"20px",color:'white'}}>{props.children}</button>
    )
}