import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Start from './components/Start';
import Main from './components/Main';
import $ from 'jquery';
import pl from './IMG/pl.png';
import en from './IMG/gb.png';
import Cookies from 'js-cookie';

function App() {
  const [isStartVisible, setisStartVisible] = useState(true);
  const [isMainVisible, setisMainVisible] = useState(false);
  const [isButtonVisible, setisButtonVisible] = useState(false);
  const lang_cookies = (Cookies.get('lang') ? Cookies.get('lang') : 'en');
  const [whatLanguage, setwhatLanguage] = useState(lang_cookies);
  const LangPickerRef = useRef(null);
  const [elementStyle, setelementStyle] = useState(null);
  const [pageLoad, setpageLoad] = useState(false);
  const intro_time = 120; //12000

  useEffect(() => {
    if(whatLanguage==='pl'){
      setelementStyle({right: 'auto', left: '0'});
    }else{
      setelementStyle({right: '0', left: 'auto'});
    }
    const element = LangPickerRef.current;
    if(element){
      setpageLoad(true);
    }
  }, [LangPickerRef]);

  setTimeout(() => {
    $('#intro').slideUp(1500);
    setisMainVisible(true);
    $('#nav').slideDown(1500);
    setTimeout(() => {
      setisStartVisible(false);
      setisButtonVisible(true);
      $('body').css({'overflow-y': 'scroll'});
    }, 1500);
  }, intro_time);

  function change_lang(){
    let lang_pom = (whatLanguage==='pl'?'en':'pl');
    if(lang_pom==='pl'){
      $('#selector').css({'width': '100%'});
      setTimeout(()=>{
        $('#selector').css({'left': '0', 'right': 'auto'});
        $('#selector').css({'width': '60px'});
      },200)
    }
    else{
      $('#selector').css({'width': '100%'});
      setTimeout(()=>{
        $('#selector').css({'right': '0', 'left': 'auto'});
        $('#selector').css({'width': '60px'});
      },200)
    }
    setwhatLanguage(lang_pom);
    Cookies.set('lang', lang_pom, {expires: 0.1})
  }

  return (
    <>
      {isButtonVisible ? <div id={'Language_picker'} onClick={() => change_lang()} ><img src={pl} alt='pl' id='img_pl'/><div id='selector' ref={LangPickerRef} style={!pageLoad ? elementStyle : null}></div><img src={en} alt='en' id='img_en'/></div> : null}
      {isStartVisible ? <Start lang={whatLanguage} /> : null}
      {isMainVisible ? <Main lang={whatLanguage} /> : null}
    </>
  );
}

export default App;
