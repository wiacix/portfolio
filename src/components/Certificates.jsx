import './style/Slidebar.css';
import { text } from '../data/Dictionary'

function Certificates(props) {
  return (
    <>
        <h2>{text[8][props.lang]}</h2>
        <div id={'certificates'}>
        <div className='cert' id='cert_1'>

        </div>
        <div className='cert' id='cert_2'>
          
        </div>
        <div className='cert' id='cert_3'>
          
        </div>
      </div>
    </>
  );
}

export default Certificates;
