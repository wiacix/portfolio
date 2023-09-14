import './style/Start.css';
import { text } from '../data/Dictionary'
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';

function Start(props) {
  return (
    <div id={'intro'}>
        <div id={'first'} className='slide'>
            <h1>{lastSingleLetterToNewLine(text[0][props.lang])}</h1>
        </div>
        <div id={'second'} className='slide'>
            <h1>{lastSingleLetterToNewLine(text[1][props.lang])}</h1>
        </div>
        <div id={'third'} className='slide'>
            <h1>{lastSingleLetterToNewLine(text[2][props.lang])}</h1>
        </div>
    </div>
  );
}

export default Start;
