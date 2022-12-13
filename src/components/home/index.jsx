/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import Nav from "../nav";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      genero: "",
      dataNasc: "",
      telefone: "",
      telefoneOp: "",
      estrangeiro: "",
      cep: "",
      endereco: "",
      numeroRua: "",
      complemento: "",
      bairro: "",
      uf: "",
      email: "",
      cpf: "",
    };
  }
  
  render() {
    return (
      <>
        <Nav></Nav>
        <div>
          <form onSubmit={(event)=>{
            event.preventDefault();
            console.log('Enviando...')
            this.setState({nome: ""})
          }}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="Nome"
             
                onChange={(e)=>{
                    this.setState({nome: e.target.value})
                    console.log(this.state.nome)
                }}
                value={this.state.nome}
              />
            </label>
            <label>
              <select name="genero" id="">
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </label>
            <label>
              <input type="date" name="dataNasc" />
            </label>
            <label>
              <span>Telefone:</span>
              <input
                type="number"
                name="Telefone"
                onChange={(e) => {
                  this.setState({ telefone: e.target.value });
                  console.log(this.state.telefone);
                }}
              />
            </label>
            <label>
              <span>Telefone:</span>
              <input
                type="number"
                name="Telefoneop"
                onChange={(e) => {
                  this.setState({ telefoneOp: e.target.value });
                  console.log(this.state.telefoneOp);
                }}
              />
            </label>
            <label>
              <span>Estrangeiro</span>
              <input type="checkbox" name="estrangeiro" id="estrangeiro" />
            </label>
            <label>
              <span>CEP:</span>
              <input
                type="number"
                name="cep"
                onChange={(e) => {
                  this.setState({ cep: e.target.value });
                  console.log(this.state.cep);
                }}
              />
            </label>
            <label>
              <span>Endereço:</span>
              <input
                type="text"
                name="endereco"
                onChange={(e) => {
                  this.setState({ endereco: e.target.value });
                  console.log(this.state.endereco);
                }}
              />
            </label>
            <label>
              <span>Número:</span>
              <input
                type="number"
                name="numeroRua"
                onChange={(e) => {
                  this.setState({ numeroRua: e.target.value });
                  console.log(this.state.numeroRua);
                }}
              />
            </label>
            <label>
              <span>Complemento:</span>
              <input
                type="text"
                name="complemento"
                onChange={(e) => {
                  this.setState({ complemento: e.target.value });
                  console.log(this.state.complemento);
                }}
              />
            </label>
            <label>
              <span>Bairro:</span>
              <input
                type="text"
                name="bairro"
                onChange={(e) => {
                  this.setState({ bairro: e.target.value });
                  console.log(this.state.bairro);
                }}
              />
            </label>
            <label>
              <span>UF:</span>
              <input
                type="text"
                name="uf"
                onChange={(e) => {
                  this.setState({ uf: e.target.value });
                  console.log(this.state.uf);
                }}
              />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                type="email"
                name="Email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                  console.log(this.state.email);
                }}
              />
            </label>
            <label>
              <span>CPF:</span>
              <input
                type="text"
                name="cpf"
                onChange={(e) => {
                  this.setState({ cpf: e.target.value });
                  console.log(this.state.cpf);
                }}
              />
            </label>
            <label>
              <input type="submit" value="Enviar"/>
            </label>
          </form>
        </div>
      </>
    );
  }
}
