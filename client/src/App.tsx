import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  useAppReducer  from './hooks/useAppReducer';
import { Container, Row, Col, Button, Form, Stack} from 'react-bootstrap';
// import { AUTO_LENGUAGE } from './utils/constants';
import { useDebounce } from './hooks/useDebounce';
import { ArrowIcon, CopyIcon, VoiceIcon } from './components/icons';
import { LenguageSelector } from './components/LenguageSelector';
import { Section_Types } from './types.d';
import { useEffect } from 'react';
import { fecthTranslate } from './utils/fecthTranslate';


function App() {

  const {fromText,result,fromLenguage, toLenguage,interchangeLenguages, setFromLenguage, setToLenguage, setFromText, setResult} = useAppReducer()
  const debounceFromText = useDebounce(fromText)


  useEffect(() => {
    if(debounceFromText === '') return
    fecthTranslate({fromLenguage, toLenguage, debounceFromText})
    .then(result => {
      if(result == null) return
      setResult(result)
    })
    .catch(error => console.log(error))

  }, [debounceFromText, fromLenguage, toLenguage]);


  const handleChangeText = (event: { target: { value: string; }; }) => {
    setFromText(event.target.value)
  }
  const handleChangeResult = (event: { target: { value: string; }; }) => {
    setResult(event.target.value)
  }

  // Manejador del boton de copiar
  const handleCopyIcon = () => {
    navigator.clipboard.writeText(result).then(()=> alert('Traducción copiada'))
    .catch(() => {})

  }
  // Manejador del boton de voz
  const handleVoiceIcon = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = toLenguage
    speechSynthesis.speak(utterance)

  }


  return (
    <Container fluid >
    
      <h1 style={{fontSize: '40px', fontStyle: 'oblique'}}> Google Translate</h1>
      <br />
      <Row>
        <Col >
          <Stack gap={2}>
          <LenguageSelector  type = {Section_Types.From} value = {fromLenguage} onChange = {setFromLenguage} />

          <Form.Control 
          as='textarea'
          placeholder='Ingresar texto'
          autoFocus
          style={{height: '200px', width: '300px'}}
          value={fromText}
          onChange={handleChangeText}
          
             
             />
          </Stack>
        </Col>

        <Col xs = 'auto'>
        <Button variant='link' 
        // disabled= { fromLenguage === AUTO_LENGUAGE}
         onClick={()=> interchangeLenguages()}>
           <ArrowIcon/>
        </Button>
        </Col>

        <Col>
          <Stack gap={2}>
          <LenguageSelector type = {Section_Types.To} value={toLenguage} onChange={setToLenguage}/>
          <div style={{position: 'relative'}}>

          <Form.Control 
          as='textarea' 
          placeholder={debounceFromText !== '' ? 'Traduciendo...' : 'Traducción'}
          style={{height: '200px', width: '300px'}} 
          disabled
          value={result} 
          onChange={handleChangeResult}
          />
          <div style={{position: 'absolute', left: 0, bottom: 0, display:'flex', opacity: 0.5}}>

          <Button 
          variant='link'
          onClick={handleCopyIcon}
          >
          {result !== '' && <CopyIcon/>}
          </Button>

          <Button     
          variant='link'
          onClick={handleVoiceIcon}
          >
          {result !== '' && <VoiceIcon />}
          </Button>

          </div>

          </div>
          
          </Stack>

        </Col>

      </Row>

      

    </Container>
  )
}

export default App;

















  // useEffect(() => {
  //   fetch('http://localhost:3001/translate',{
  //     method: 'POST',  
  //     headers: {
  //       'Content-Type': 'application/json', 
  //     },   
  //     body: JSON.stringify({
  //       fromLenguage,
  //       toLenguage,
  //       text: fromText
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setResult(data)
  //   })
  //   .catch(error => console.error(error))

  // }, [fromText])
