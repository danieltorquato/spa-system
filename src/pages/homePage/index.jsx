import React, { Component } from 'react'
import Home from '../../components/home/home'

export default class HomePage extends Component {
  render() {
    return (
      <Home user={{nome: 'Daniel', genero: 'Feminino'}}></Home>
    )
  }
}
