import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';
import UrukaFullBody from '../Images/uruka-full-body.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../Components/Body.css'

const Body = () => {

  return (
    <Container fluid="true" className="d-flex flex-xl-row flex-column-reverse justify-content-center align-items-center vh-100 body-container">    

      <Container className="col-lg-6 h-auto text-center d-lg-block">
        <Image className="d-lg-block m-auto d-none" src={UrukaFullBody} width="45%" height="100%" fluid/>
        {/*<Image className="d-lg-none" src={UrukaFullBody} width="65%" height="100%" fluid/>*/}
      </Container>

      <Container fluid="true" className="col-lg-6 col-auto h-auto text-center d-flex flex-column text-light fs-5" style={{fontFamily: "'Open Sans', sans-serif"}}>
        <h1>Fujikura Uruka</h1>
        <p>Other World Academy dropout turned dumpster diving trash bear and... musician? 
          <br/>Come visit me under my rock! Everyone is welcome! Also it's probably public property!
        </p>

        <Container fluid="true" className="col-xl-6 col-lg-10 col-12 m-auto d-flex flex-sm-row flex-column align-items-center justify-content-evenly">
          <a href="https://www.youtube.com/@FujikuraUruka" target="_blank" rel="noreferrer"><i className="bi bi-youtube text-danger" style={{fontSize : "4rem"}}/></a>
          <a href="https://twitter.com/fujikurauruka" target="_blank" rel="noreferrer"><i className="bi bi-twitter text-info" style={{fontSize : "4rem"}}/></a>
          <a href="https://www.reddit.com/r/PhaseConnect" target="_blank" rel="noreferrer"><i className="bi bi-reddit" style={{color: "#ff4500", fontSize : "4rem"}}/></a>
          <a href="https://discord.gg/phaseconnect" target="_blank" rel="noreferrer"><i className="bi bi-discord" style={{color: "#7289d9", fontSize : "4rem"}}></i></a>
        </Container>

      </Container>

    </Container>
  )
}

export default Body