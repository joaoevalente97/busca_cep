import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Toast from 'react-bootstrap/Toast'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import logo from './images/cep.png'

function App() {
  const [cepP, setCEPP] = useState('')  //cepPesquisa
  const [cepR, setCEPR] = useState('')  //cepResposta
  const [rua, setRua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUF] = useState('')
  const [ddd, setDDD] = useState('')
  const [erroCEP, setErroCEP] = useState('')

  const verificaEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault()
      buscaCEP(cepP)
    }
  }


  async function buscaCEP(cepP) {
    let url = `https://viacep.com.br/ws/${cepP}/json/`
    await fetch(url)
      .then(response => response.json())
      .then(data => {

        //Define todas as variaveis de acordo com a resposta da API
        setCEPR(data.cep)
        setRua(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setUF(data.uf)
        setDDD(data.ddd)
        setCEPP('') //Limpa a variavel cepP para limpar a barra de pesquisa em caso de uma pesquisa concluida com sucesso

        //Valida se existe um complemento para não mostrar um campo vazio no card
        if (data.complemento) {
          setComplemento(data.complemento)
        }
        else
          setComplemento('Não tem.')

        // Em alguns casos a api retorna um json porem contendo um erro, por isso essa tratativa se faz necessaria
        if (data.erro) {
          setErroCEP('CEP não encontrado, verifique a digitação!')
        }
      })
      //Captura o erro
      .catch(function (error) {
        console.error(`Erro ao obter o endereço: ${error.message}`)
        setErroCEP('CEP não encontrado, verifique a digitação!')
        setCEPR('') //Limpa a variavel cepR para ão continuar exibindo o card vazio em caso de erro
        setCEPP('') //Limpa a variavel cepP para tirar o valor que retornou erro do campo de pesquisa
      })
  }
  return (
    <>
      <Container className="justify-content-md-center">
        <Col>
          <Row className="justify-content-md-center">
            <img alt="logo" src={logo} />
          </Row>
          <Row className="justify-content-md-center">
            <h1>Busca CEP</h1>
          </Row>

          <Row className="justify-content-md-center">

            <Form inline>
              <FormControl type="text" value={cepP}
                onChange={event => setCEPP(event.target.value)}
                placeholder="Digite o CEP..." onKeyDown={(e) => verificaEnter(e)}
              />
              &nbsp;
              <Button variant="info" onClick={() => buscaCEP(cepP)}>Buscar CEP</Button>
            </Form>
          </Row>
          <Row>&nbsp;</Row>

          {isNaN(cepP) &&
            setCEPP('')
          }

          <Row className="justify-content-md-center">
            {erroCEP &&
              <Toast onClose={() => setErroCEP(null)} delay={3000} autohide className="bg-danger">
                <Toast.Header><strong className="mr-auto">Erro</strong></Toast.Header>
                <Toast.Body className="bg-white text-danger">{erroCEP}</Toast.Body>
              </Toast>
            }
          </Row>

          {cepR &&
            <Card variant="info">
              <Card.Body>
                <Card.Title>CEP: {cepR}</Card.Title>
                <Card.Text>
                  <h4>Rua: {rua}</h4>
                  <h4>Complemento: {complemento}</h4>
                  <h4>Bairro: {bairro}</h4>
                  <h4>Cidade: {cidade}</h4>
                  <h4>Estado: {uf}</h4>
                  <h4>DDD: {ddd}</h4>
                </Card.Text>
                <Row className="justify-content-md-center"><Button variant="dark" onClick={() => setCEPR('')} >Limpar</Button></Row>
              </Card.Body>
            </Card>
          }

        </Col>
      </Container>
    </>
  )
}
export default App