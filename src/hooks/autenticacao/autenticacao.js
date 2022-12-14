import { db } from "../../services/firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

export const Autenticacao = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(null);

  const auth = getAuth();

  function checarCancelamento() {
    if (cancelled) {
      return;
    }
  }

  const cadastrarUsuario = async (dados) => {
    checarCancelamento();
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        dados.email,
        dados.senha
      );
      await updateProfile(user, { displayName: dados.nome });
      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let mensagemDeErro = "";

      if (error.message.includes("auth/weak-password")) {
         mensagemDeErro = "A Senha precisa conter pelo menos 6 caracteres";
      }else if(error.message.includes("email-already")){
        mensagemDeErro = "E-mail já Cadastrado";
      }else{
        mensagemDeErro = "Ocorreu um erro, tente novamente mais tarde";
      }
      setError(mensagemDeErro);
    }
   
    
  };
  useEffect(() => {
    return () => setCancelled(true);
  }, []);
  return {auth, cadastrarUsuario, error, loading};
};
