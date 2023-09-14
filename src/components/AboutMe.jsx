import './style/AboutMe.css';
import img_of_me from '../IMG/IMG_me.png';
import { text } from '../data/Dictionary';
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';

function AboutMe(props) {
  return (
    <div id='aboutme'>
        <img src={img_of_me} alt='Pic of me'/>
        <h2>{lastSingleLetterToNewLine(text[3][props.lang])}</h2>
    </div>
  );
}

export default AboutMe;
