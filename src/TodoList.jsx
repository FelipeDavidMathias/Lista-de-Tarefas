import React, { useState } from "react";
import "./TodoList.css";
import { use } from "react";
import icone from "./assets/icon.png"

function TodoList() {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault(); //Não dispara o formulário automaticamente
        if (!novoItem) {
            return
        }

        setLista([...lista, { text: novoItem, isCompleted: false }]); //adiciona a variavel na lista
        setNovoItem(""); //zera o valor de input
        document.getElementById('input-entrada').focus();

    }
    function clicou(index){
        const listaAuxiliar = [...lista]
        listaAuxiliar[index].isCompleted = !listaAuxiliar[index].isCompleted; //IsCompleted se torna true.
        setLista(listaAuxiliar);

    }
    function deletou (index){
        const listaAuxiliar = [...lista]
        listaAuxiliar.splice(index, 1); //Metodo que apaga da lista.
        setLista(listaAuxiliar);

    }

    function deletouTudo (){
        setLista([]);
    }

    return (
        <div className="TodoList">
            <h1>Lista De Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input
                    id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e) => { setNovoItem(e.target.value) }}
                    placeholder="Adicione uma tarefa..." />
                <button className="add" type="submit">Adicionar</button>
            </form>
            <div className="listaTarefas">
                {
                    lista.length < 1
                        ?
                        <img src={icone} className="icon"/>
                        :
                        lista.map((item, index) => (
                            <div key={index}  className={item.isCompleted ? "item completo" : "item"}>
                                <span onClick={() => {clicou(index)}}>{item.text}</span>
                                <button onClick={() => {deletou(index)}} className="del">Deletar</button>
                            </div>
                        ))
                }
                {
                    lista.length > 0 &&
                    <button onClick={() => {deletouTudo()}} className="delAll">Deletar Tudo</button>
                }
            </div>
        </div>
    )
}

export default TodoList;
