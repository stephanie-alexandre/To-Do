import React, { Component } from "react";
import styled from  "styled-components"
import { createGlobalStyle } from "styled-components";

const GlobalStyle= createGlobalStyle `
*{
  padding:0;
  margin:0;
  box-sizing: 0;
  list-style-type: circle;
}


body{
  background-color: #ffc4d8;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  
}


h1{
  color: #ff6f9c;
  font-size: 50px;
  padding-bottom: 25px;
}

input{
  font-size: 20px;
  border: 4px solid #d8bfd8;
  width: 120%
}
button{
  font-size: 20px;
  color: #fff;
  background-color: #ff6f9c;
  cursor: pointer;
  border-radius: 15%;
  box-shadow: 6px 4px 4px;
  border: 2px solid #fff;
}
li{
  font-size: 23px;
  color: #fff;
}
.incluir{
  display: flex;
  padding-bottom: 25px;
}
ul{
  display: flex;
  padding-left: 8%;
  justify-content: space-between;
}
img{
  width: 40px;
  height: 40px;
}
`

class Todo extends Component {
  state = {
    tarefa: '',
    lista: []
  }
  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  add = (event) => {
    if (this.state.tarefa != '') {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ''
      })
    }
    event.preventDefault();
  }
  remove = (id) => {
    let { lista } = this.state
    this.setState({
      lista: lista.filter((item) => {
        return item.id != id;
      })
    })
  }


  render() {
    return (
      <div>
        <GlobalStyle/>
        <h1> Lista de tarefas </h1>
        <form onSubmit={this.add}>
          <div class="incluir">
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.tarefa}
          />
          <button>Incluir</button>
          </div>
          <div>
            {this.state.lista.map((item) => (
              <ul>
                <li>{item.tarefa}</li>
                <img
                  onClick={() => {
                    this.remove(item.id);
                  }}
                  src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-trash-office-elements-soft-fill-soft-fill-juicy-fish.png"
                />
              </ul>
            ))}
          </div>
        </form>
      </div>
    );
  }
}
export default Todo;

