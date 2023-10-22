import React, { useState,useRef,useEffect } from "react";
import Button from "./Button";
import Navbar from "./Navbar";

export default function App() {
  const [text,setText] = useState('')
  const textRef = useRef();
  useEffect(()=>{
    getValue();
  },[])
  function lock() { 
    textRef.current.disabled = true;
  }
  function unlock() {
    textRef.current.disabled = false;
  }
  function handle() {
    setText(textRef.current.value);
  }
 function save() {
   localStorage.setItem('savedText',text);
  
 }
 function copy() {
  if(window.getSelection().toString() !== '') {
   navigator.clipboard.writeText(window.getSelection().toString())
 } else {
  navigator.clipboard.writeText(text)
 }
 }
 function getValue() {
   if(localStorage.getItem('savedText')) {
    textRef.current.value=localStorage.getItem('savedText')
   }
 }


  return (<>
    <Navbar/>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',marginTop:'1rem',marginBottom:'1rem' }}>
      <Button  func={lock}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" fill="white"/></svg> Lock</Button>
      <Button func={unlock}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z" fill="white"/></svg> Unlock</Button>
      <Button  func={save}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M48 96V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H309.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9L320.8 84.7c-.3-.3-.5-.5-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16zm80-16v80H272V80H128zm32 240a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" fill="white"/></svg> Save</Button>
      <Button  func={copy}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" fill="white"/></svg> Copy</Button>
    </div>
    <textarea onChange={handle} ref={textRef} style={{ minHeight: '500px', width: '80%', fontSize: '1rem', display: 'block', marginLeft: 'auto', marginRight: 'auto', resize: 'none', padding:'10px',backgroundColor:'#1d1e22',color:'white' }} />
  </>)
}