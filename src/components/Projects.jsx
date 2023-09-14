import './style/Slidebar.css';
import { text } from '../data/Dictionary'
import { projects, projects_img } from '../data/Projects'
import magnifier from '../IMG/magnifier.png'
import $ from 'jquery'
import { useState } from 'react';
import Gallery from './Gallery';
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';

function Projects(props) {
  let [whatGalleryVisible, setwhatGalleryVisible] = useState(projects_img);

  $('.proj_img_div').on('mouseover', function(){
    $(this).children('.proj_img').css({'filter': 'grayscale(0.9)'});
    $(this).children('.magnifier').css({'opacity': '1'});
  });
  $('.proj_img_div').on('mouseout', function(){
    $(this).children('.proj_img').css({'filter': 'grayscale(0)'});
    $(this).children('.magnifier').css({'opacity': '0'});
  });

  function openGallery(id){
    let newGalleryVisible = [...whatGalleryVisible];
    newGalleryVisible[id]['visible'] = true;
    setwhatGalleryVisible(newGalleryVisible);
  }

  return (
    <>
      <h2>{text[4][props.lang]}</h2>
      <div id={'projects'}>
        {projects.map((proj) =>{
          return(
            <div id={'proj_'+proj.id} className='project' key={proj.id}>
              {whatGalleryVisible[proj.id]['visible'] ? <Gallery project_img={proj.id} lang={props.lang}/> : null}
              <h6>{text[proj.id_name][props.lang]}</h6>
              <div className='proj_img_div' onClick={() => openGallery(proj.id)}>
                  <img src={require('../IMG/'+proj.img)} alt='img' className='proj_img'/>
                  <img src={magnifier} alt='magnifier' className='magnifier' style={{width: '70%'}}/>
              </div>
              <div className='technologies'>
                {proj.technologies.map((tech, id) =>{
                  return (
                    <p className={tech} key={id}>{tech}</p>
                  )
                })}
              </div>
              <h4>{lastSingleLetterToNewLine(text[proj.id_description][props.lang])}</h4>
              <a href={proj.git} target='_blank' title={text[9][props.lang]} rel='noreferrer'><img src={require('../IMG/github.png')} alt={text[9][props.lang]}></img></a>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Projects;
