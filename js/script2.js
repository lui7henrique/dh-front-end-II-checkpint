let div = document.querySelector('div');

async function tarefas(){

    let url = `https://jsonplaceholder.typicode.com/todos/`;

    let resposta = await fetch(url);

    let arrayTarefas = await resposta.json();
    
    arrayTarefas.forEach(tarefa => {        
        if (tarefa.completed === true){
            div.innerHTML += `<div><p>${tarefa.id}: <del>${tarefa.title}</del></p></div>`
        } else {
            div.innerHTML += `<div><p>${tarefa.id}: <b>${tarefa.title}</b></p></div>`
        }
    });
}

tarefas();