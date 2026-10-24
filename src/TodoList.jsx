import React, { useState } from "react";
import "./TodoList.css";

function TodoList(){
    return(
        <div className="TodoList">
            <h1>Lista De Tarefas</h1>
            <form>
                <input type="text" placeholder="Adicione uma tarefa..."/>
                <button className="add" type="submit">Adicionar</button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de Exemplo</span>
                    <button className="del">Deletar</button>
                </div>
                <div className="itemCompleto">
                    <span>Tarefa de Exemplo</span>
                    <button className="del">Deletar</button>
                </div>
                <button className="delAll">Deletar Tudo</button>
            </div>
        </div>
    )
}

export default TodoList;
