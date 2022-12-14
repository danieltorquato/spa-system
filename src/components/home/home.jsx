import React from "react";
import { useState } from "react";
import Nav from "../nav/nav";
const Home = ({ user }) => {
  const [nome, setNome] = useState(user ? user.nome : "");
  const [genero, setGenero] = useState(user ? user.genero : "");
  const [telefone, setTelefone] = useState(user ? user.telefone : "");
  const [telefoneOp, setTelefoneOp] = useState(user ? user.telefoneOp : "");
  const [estrangeiro, setEstrangeiro] = useState(user ? user.estrangeiro : "");
  const [cep, setCep] = useState(user ? user.cep : "");
  const [endereco, setEndereco] = useState(user ? user.endereco : "");
  const [numeroRua, setNumeroRua] = useState(user ? user.numeroRua : "");
  const [complemento, setComplemento] = useState(user ? user.complemento : "");
  const [bairro, setBairro] = useState(user ? user.bairro : "");
  const [uf, setUf] = useState(user ? user.uf : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [cpf, setCpf] = useState(user ? user.cpf : "");
  console.log(
    nome,
    genero,
    telefone,
    telefoneOp,
    estrangeiro,
    cep,
    endereco,
    numeroRua,
    complemento,
    bairro,
    uf,
    email,
    cpf
  );
  return (
    <>
      <Nav></Nav>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log("Enviando...");
          }}
        >
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="Nome"
              onChange={(e) => {
                setNome(e.target.value);
              }}
              value={nome}
            />
          </label>
          <label>
            <select
              name="genero"
              id=""
              onChange={(e) => {
                setGenero(e.target.value);
              }}
              value={genero}
            >
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
                setTelefone(e.target.value);
              }}
              value={telefone}
            />
          </label>
          <label>
            <span>Telefone:</span>
            <input
              type="number"
              name="Telefoneop"
              onChange={(e) => {
                setTelefoneOp(e.target.value);
              }}
              value={telefoneOp}
            />
          </label>
          <label>
            <span>Estrangeiro</span>
            <input
              type="checkbox"
              name="estrangeiro"
              id="estrangeiro"
              onChange={(e) => {
                setEstrangeiro(e.target.value);
              }}
              value={estrangeiro}
            />
          </label>
          <label>
            <span>CEP:</span>
            <input
              type="number"
              name="cep"
              onChange={(e) => {
                setCep(e.target.value);
              }}
              value={cep}
            />
          </label>
          <label>
            <span>Endereço:</span>
            <input
              type="text"
              name="endereco"
              onChange={(e) => {
                setEndereco(e.target.value);
              }}
              value={endereco}
            />
          </label>
          <label>
            <span>Número:</span>
            <input
              type="number"
              name="numeroRua"
              onChange={(e) => {
                setNumeroRua(e.target.value);
              }}
              value={numeroRua}
            />
          </label>
          <label>
            <span>Complemento:</span>
            <input
              type="text"
              name="complemento"
              onChange={(e) => {
                setComplemento(e.target.value);
              }}
              value={complemento}
            />
          </label>
          <label>
            <span>Bairro:</span>
            <input
              type="text"
              name="bairro"
              onChange={(e) => {
                setBairro(e.target.value);
              }}
              value={bairro}
            />
          </label>
          <label>
            <span>UF:</span>
            <input
              type="text"
              name="uf"
              onChange={(e) => {
                setUf(e.target.value);
              }}
              value={uf}
            />
          </label>
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
          <label>
            <span>CPF:</span>
            <input
              type="text"
              name="cpf"
              onChange={(e) => {
                setCpf(e.target.value);
              }}
              value={cpf}
            />
          </label>
          <label>
            <input type="submit" value="Enviar" />
          </label>
        </form>
      </div>
    </>
  );
};

export default Home;
