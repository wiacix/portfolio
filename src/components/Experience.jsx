import './style/Slidebar.css';
import { text } from '../data/Dictionary'
import { experience } from '../data/Experience';
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';

function Experience(props) {
  return (
    <>
      <h2>{text[7][props.lang]}</h2>
      <div id={'experience'}>
        {experience.map((exp)=>{
          return (
            <div id={'exp_'+exp.id} className='expr' key={exp.id}>
              <h6>{text[exp.id_name][props.lang]}</h6>
              <h5 className='company_name'>{exp.company}</h5>
              <h4 className='date_exp'>{exp.date_from+' - '+(exp.date_to?exp.date_to:text[16][props.lang])}</h4>
              <h3>{text[15][props.lang]+':'}</h3>
              <ul className={'list_exp'}>
                {exp.technologies.map((tech, index) =>{
                  return (
                    <li key={index}>{tech}</li>
                  )
                })}
              </ul>
              <h3>{lastSingleLetterToNewLine(text[exp.id_describe][props.lang])}</h3>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Experience;
