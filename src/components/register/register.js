import React, { useEffect, useState } from "react";
import Nav from "../nav/nav";
import { Button } from "react-bootstrap";
import { Autenticacao } from "../../hooks/autenticacao/autenticacao";
import $ from "jquery";
function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [error, setError] = useState("");

  const { cadastrarUsuario, error: authError, loading } = Autenticacao();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const user = {
      nome,
      email,
      senha,
    };
    if (senha !== confirmaSenha) {
      setError("As senhas precisam sem iguais");
      return;
    }

    const res = await cadastrarUsuario(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <>
      <Nav></Nav>
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            {" "}
            Nome:{" "}
            <input
              type="text"
              required
              onChange={(e) => {
                setNome(e.target.value);
              }}
              value={nome}
            />
          </span>
        </label>
        <label>
          <span>
            {" "}
            Email:{" "}
            <input
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </span>
        </label>
        <label>
          <span>
            {" "}
            Senha:{" "}
            <input
              type="password"
              required
              onChange={(e) => {
                setSenha(e.target.value);
                console.log(e.target.value.length);
                if (e.target.value.length < 6 || e.target.value === " ") {
                  $("#error").html(
                    `<h1>A senha precisa ser maior que 6 caracteres<h1/>`
                  );
                } else if (e.target.value.length >= 6) {
                  $("#error").html("");
                  $("#buttonSubmit").attr("disabled", false);
                }
              }}
              value={senha}
            />
          </span>
        </label>
        <label>
          <span>
            {" "}
            Confirme a Senha:{" "}
            <input
              type="password"
              required
              onChange={(e) => {
                setConfirmaSenha(e.target.value);
              }}
              value={confirmaSenha}
            />
          </span>
        </label>
        {!loading && <Button type="submit">Cadastrar</Button>}{" "}
        {loading && <Button type="submit" disabled>  Aguarde...</Button>}{" "}
           
        <p id="error" className="error">
          {error}
        </p>
      </form>
    </>
  );
}

export default Register;
