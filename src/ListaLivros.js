import React from "react";
import axios from "axios";

export default class ListaLivros extends React.Component {
  state = {
    livros: [],
  };

  //Executa o código após o componente ser colocado no DOM
  componentDidMount() {
    axios.get("http://localhost:8080/books").then((res) => {
      const dadosLivros = res.data;
      this.setState({ livros: dadosLivros });
    });
  }

  // Map retorna uma função que exibe cada elemento de um determinado array
  // Exibe na tela os dados iniciando pelo ID do livro até o Autor
  render() {
    return (
      <div>
        {this.state.livros.map((livro) => (
          <div key={livro.title}>
            {livro.id} - {livro.author}
          </div>
        ))}
      </div>
    );
  }
}
