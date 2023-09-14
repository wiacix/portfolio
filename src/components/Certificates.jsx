import './style/Slidebar.css';
import { text } from '../data/Dictionary'
import { certificates } from '../data/Certificates'
import { useState, useRef } from 'react';
import lastSingleLetterToNewLine from '../scripts/LetterToNewLine';

function Certificates(props) {
  const [whatCertVisible, setwhatCertVisible] = useState(certificates);
  const divRef = useRef(null);

 function showCert(id){
  let newCertificates = [...certificates];
  newCertificates[id]['visible'] = true;
  setwhatCertVisible(newCertificates);
 }

 const closeCert = (event) => {
  if(event.target === divRef.current){
      let newCertificates = [...certificates];
      newCertificates[divRef.current.getAttribute('class')]['visible'] = false;
      setwhatCertVisible(newCertificates);
  }
};

  return (
    <>
        <h2>{text[8][props.lang]}</h2>
        <div id={'certificates'}>
          {certificates.map((cert) =>{
            return (
              <div className='cert' key={cert.id}>
                {whatCertVisible[cert.id]['visible']?(
                  <div className={cert.id} id='certIMG' onClick={closeCert} ref={divRef}>
                    <img src={require('../IMG/'+cert.img)} alt={text[cert.id_title][props.lang]} />
                  </div>
                ):null}
                <h6>{text[cert.id_title][props.lang]}</h6>
                <img src={require('../IMG/'+cert.img)} alt={text[cert.id_title][props.lang]} onClick={() => showCert(cert.id)}/>
                <h3>{lastSingleLetterToNewLine(text[cert.id_describe][props.lang])}</h3>
              </div>
            )
          })}
      </div>
    </>
  );
}

export default Certificates;
