import './style/Footer.css';
import GIT from '../IMG/github.png';
import CV from '../IMG/CV.png';
import CV_pdf from '../FILE/CV.pdf';
import { text } from '../data/Dictionary';

function Footer(props) {

  const ShowContact = () => {
    const element = document.querySelector('#footer');
    if(element.offsetWidth===25){
      document.querySelector('#Contact').style.display = 'block';
      element.style.width = '260px';
    }else{
      element.style.width = '25px';
      setTimeout(()=>{
        document.querySelector('#Contact').style.display = 'none';
      },500);
    }
  }

  return (
    <div id={'footer'} onClick={ShowContact}>
      <div id='ShowContact'>
        <p id='ShowContactText'>{text[41][props.lang]}</p>
      </div>
      <div id='Contact'>
        <h3>Kamil Wiącek</h3>
        <h4>{text[42][props.lang]}</h4>
        <p>+48 781 023 420</p>
        <hr/>
        <h4>{text[43][props.lang]}</h4>
        <a href='mailto: kamil.wiacek@zse.krakow.pl'>kamil.wiacek@zse.krakow.pl</a>
        <hr/>
        <h4>{text[29][props.lang]}</h4>
        <a href='http://www.wiacekhr.pl'>www.wiacekhr.pl</a>
        <hr/>
        <div id='Contact_a'>
          <a href='https://github.com/wiacix' target='_blank' rel="noreferrer"><img src={GIT} alt='GitHub'/></a>
          <a href={CV_pdf} target='_blank' rel="noreferrer"><img src={CV} alt='GitHub'/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
