import { Button, Card, Input, Space } from "antd";
import styled from "styled-components";
import React , { useState , useEffect } from 'react';

function MyApp(props) {

  const isDone = props.isDone;
  const title = props.title;


  if (isDone){
    return (
      <Card
        title={title}
        style={{ width: 600, textDecoration: "line-through" }}
      >
        <Button style={{ marginRight: "16px" }} type="primary">
          Duplicate
        </Button>
        <Button style={{ marginRight: "16px" }}>Undone</Button>
        <Button danger>Delete</Button>
      </Card>
    );
  } else {
      return (
        <Card title={title} style={{ width: 600 }}
        >
          <Button style={{ marginRight: "16px" }} type="primary">Duplicate</Button>
          <Button style={{ marginRight: "16px" }} >Done</Button>
          <Button danger>Delete</Button>

        </Card>
      );
  }

}
export default MyApp;
