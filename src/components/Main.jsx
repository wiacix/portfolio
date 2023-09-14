import './style/Main.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Certificates from './Certificates';

function Main(props) {
  return (
    <div id={'main'}>
        <AboutMe lang={props.lang}/>
        <div id={'Content_box'}>
          <Projects lang={props.lang}/>
          <Experience lang={props.lang}/>
          <Certificates lang={props.lang}/>
        </div>
    </div>
  );
}

export default Main;
