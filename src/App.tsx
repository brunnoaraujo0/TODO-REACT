import { useState } from 'react';
import * as C from './App.styles'; 
import { Item } from './types/Item'; //TYPE DE UMA TAREFA
import { ListItem } from './components/ListItem'; //COMPONENTE DE UM ITEM
import { AddArea } from './components/AddArea'; //COMPONENTE DE ADICIONAR UMA TAREFA

const App = () => {
  const [list, setList] = useState<Item[]>([ //LISTA DO TIPO ITEM
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => { //FUNCAO PRA QUANDO CLICAR ENTER
    let newList = [...list]; //FAZ UMA COPIA DA LISTA
    newList.push({ //ACRESCENTA NA LISTA
      id: list.length + 1, //UM ID +1 DO TAMANHO
      name: taskName, //O NOME QUE VEM COM DO INPUT
      done: false //E UM DONE COM FALSE
    });
    setList(newList); //ATUZLIA A LISTA
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    	<C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index)=>(
            <ListItem
              key={index}
              item={item}
              onChange={handleTaskChange}
            />
          ))}

        </C.Area>
      </C.Container>
  );
}

export default App;