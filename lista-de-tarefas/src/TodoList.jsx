import React from 'react'
import './TodoList.css'
import { useState, useEffect } from 'react'
import icone from './assets/icon.png'


function TodoList() {

    const listaStogare = localStorage.getItem('Lista')
    const [lista, setLista] = useState(listaStogare?JSON.parse(listaStogare):[])
    const [novoItem, setNovoItem] = useState('')

    function adicionaItem(form) {
        form.preventDefault()
        if(novoItem.trim() === '') {
            alert('Digite uma tarefa')
            return
        }
        setLista([...lista, {text: novoItem, isCompleted: false}])
        setNovoItem('')
        document.getElementById('input-entrada').focus()

    }

    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista))
    },[lista])

    function clicou(index) {
        const listaAux = [...lista]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)

    }

    function deleta(index) {
        const listaAux = [...lista]
        listaAux.splice(index, 1)
        setLista(listaAux)
    }

    function deleteAll() {
        setLista([])
    }

    return (
        <div style={{textAlign:'center'}} >
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input 
                    id = "input-entrada"
                    value={novoItem}
                    type="text" 
                    placeholder="Adicione uma tarefa" 
                    onChange={(e) => setNovoItem(e.target.value)}
                />
                <button className="add" type="submit">Adicionar</button>
            </form>

            <div className="listaTarefas">
                {
                    lista.length < 1 
                    ? <img className="img" src={icone} alt="Nenhuma tarefa" />
                    : 
                    lista.map((item, index)=>(
                        <div 
                            key={index}
                            className={item.isCompleted?"item completo":"item"}>
                            <span
                                onClick={()=>{clicou(index)}}
                            >{item.text}</span>
                            <button 
                                onClick = {()=>{deleta(index)}}
                            className="del" >Remover</button>
                        </div>
                    ))
                    
                    // <div className="item">
                    //     <span>Estudar React</span>
                    //     <button className="del" >Remover</button>
                    // </div>
                }
                {/* <div className="item">
                    <span>Estudar React</span>
                    <button className="del" >Remover</button>
                </div>
                <div className="item completo">
                    <span>Estudar React</span>
                    <button className="del" >Remover</button>
                </div> */}
                {lista.length > 0
                    ? <button 
                        onClick={deleteAll}    
                        className="deleteAll">
                            Limpar Tudo
                      </button>
                    : null}
            </div>
        </div>
    )
}
export default TodoList