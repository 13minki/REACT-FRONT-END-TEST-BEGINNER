import { Button, Card, Input, Space } from "antd";
import styled from "styled-components";
import React , { useState , useEffect } from 'react';

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
      console.log(newItemList);
      console.log(todoList);
  }

  const CheckIsDone = (props) => {
    console.log(props);
    const isDone = props.isDone;
    if(isDone) {
      <h1>me true</h1>
    } else {
        <h1>me false</h1>
    }
  }

  useEffect (() => {
    console.log("effect");
    }, [])

  const MyMinki = () => {
    console.log("my Minki");
  }

  return (
    <Container>
      <Space>
        <Input type="text" style={{ width: 400 }} placeholder="Enter Task Name" onChange={event => setItem(event.target.value)} />
        <Button type="primary" onClick={ () => addNewItem() }>Create Task</Button>
      </Space>
      
      <div className="tasks">
        {todoList.map((item, index) => (
            <div>
              <Space direction="vertical" style={{ marginTop: 24 }}>
                <Card title={item.title} style={{ width: 600 }}>
                  <Button style={{ marginRight: "16px" }} type="primary">Duplicate</Button>
                  <Button style={{ marginRight: "16px" }} >Done</Button>
                  <Button danger>Delete</Button>
                </Card>
              </Space>

            </div>
        ))}
      </div>

      <Space direction="vertical" style={{ marginTop: 24 }}>
        <Card
          title="Sample Task (Done)"
          style={{ width: 600, textDecoration: "line-through" }}
        >
          <Button style={{ marginRight: "16px" }} type="primary">
            Duplicate
          </Button>
          <Button style={{ marginRight: "16px" }}>Undone</Button>
          <Button danger>Delete</Button>
        </Card>
      </Space>


    </Container>
  );


}

export default App;
