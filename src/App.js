import { Button, Card, Input, Space } from "antd";
import styled from "styled-components";
import React , { useState , useEffect } from 'react';
import "./index.css";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 16px 24px;
`;



function App() {

  const [todoList,setTodoList] = useState([
      {
         title: "Defualt1",
         isDone: false
      },
      {
         title: "Defualt2",
         isDone: true
      }
    ]);
  const [item,setItem]= useState('');

  const addNewItem = () => {
      //console.log(item);
      const newItem = [
        {
           title: item,
           isDone: false
         }
      ];
      //console.log(newItem);
      const newItemList = [
        ...todoList,
        ...newItem
      ];
      setTodoList(newItemList);
      console.log(todoList);
  }

  const completed = index => {
    const newTodos = [...todoList];
    if(newTodos[index].isDone) {
      newTodos[index].isDone = false;
    } else {
      todoList[index].isDone = true;
    }
    setTodoList(newTodos);
  }

  const duplicate = index =>{
    const dupItem = [
      {
         title: todoList[index].title,
         isDone: todoList[index].isDone
       }
    ];
    const newItemList = [
      ...todoList,
      ...dupItem
    ];
    setTodoList(newItemList);
  }

  const remove = index =>{
    const list = [...todoList] ;
    list.splice(index,1);
    setTodoList(list);
  }

  const ReadList=(props)=> {
    const isDone = props.isDone;
    const title = props.title;
    const index = props.index;

    return (
      <Card
        title={title}
        style={{ width: 600 ,  textDecoration: isDone ? "line-through" : "" }}
      >
        <Button style={{ marginRight: "16px" }} type="primary" onClick={() => duplicate(index)}>
          Duplicate
        </Button>
        <Button style={{ marginRight: "16px" }} onClick={() => completed(index)}>{ isDone ? "Undone" : "Done"}</Button>
        <Button danger onClick={() => remove(index)}>Delete</Button>
      </Card>
    );

  }

  useEffect (() => {
    console.log("effect");
    }, [])


  return (

    <Container>
      <Space>
        <Input type="text" style={{ width: 400 }} placeholder="Enter Task Name" onChange={event => setItem(event.target.value)} />
        <Button type="primary" onClick={ () => addNewItem() }>Create Task</Button>
      </Space>

      <div className="tasks">
        {todoList.map((item, index) => (
            <div key={index}>
              <ReadList
                isDone={item.isDone}
                title={item.title.toString()}
                index={index}
                />
            </div>
        ))}
      </div>

    </Container>

  );


}

export default App;
