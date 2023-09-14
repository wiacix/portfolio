import './style/Gallery.css';
import { projects_img } from '../data/Projects';
import { useRef, useState } from 'react';
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';


function Gallery(props) {
    const [whatGalleryVisible, setwhatGalleryVisible] = useState(projects_img);
    const [whichIMG, setwhichIMG] = useState(0);
    const divRef = useRef(null);

    const closeGallery = (event) => {
        if(event.target === divRef.current){
            let newGalleryVisible = [...projects_img];
            newGalleryVisible[props.project_img]['visible'] = false;
            setwhatGalleryVisible(newGalleryVisible);
        }
    };

    function nextIMG(value){
        const leng = projects_img[props.project_img]['img'].length;
        if(value==='-'){
            if(whichIMG<1) setwhichIMG(leng-1);
            else setwhichIMG(whichIMG-1);
        }else{
            if(whichIMG<(leng-1)) setwhichIMG(whichIMG+1);
            else setwhichIMG(0);
        }
    }

    function setIMG(Id){
        setwhichIMG(Id);
    }

    return (
        <>
            {whatGalleryVisible[props.project_img]['visible'] ? (
                <div id='Gallery' ref={divRef} onClick={closeGallery}>
                    <div id='mainGallery'>
                        <button className='changIMG_BTN' style={{marginRight: '-50px'}} onClick={() => nextIMG('-')}>&lt;</button>
                        <img src={require('../IMG/'+projects_img[props.project_img]['img'][whichIMG])} alt='obraz' />
                        <button className='changIMG_BTN' style={{marginLeft: '-50px'}} onClick={() => nextIMG('+')}>&gt;</button>
                    </div>
                    <div id='describeImage'><h3>{lastSingleLetterToNewLine(projects_img[props.project_img]['describeIMG_'+props.lang][whichIMG])}</h3></div>
                    <div id='AllIMG'>
                        {projects_img[props.project_img]['img'].map((img, index) =>{
                            return (
                                <img src={require('../IMG/'+img)} key={index} id={'img_'+index} alt='img' className={index===whichIMG ? 'img_watch' : null} onClick={() => setIMG(index)}/>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Gallery;