import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import MerchSlider from './Components/MerchSlider'
import Footer from './Components/Footer'
import LatestStream from './Components/LatestStream';
import ContactMeForm from './Components/ContactMeForm';


const App = () => {  
  return (
    <>
      <Header/>
      <Body/>
      <LatestStream/>
      <MerchSlider/>
      <ContactMeForm/>
      <Footer/>
    </>
  )
}

export default App