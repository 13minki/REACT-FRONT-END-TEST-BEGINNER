import { Button, Card, Input, Space } from "antd";
import styled from "styled-components";

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
  return (
    <Container>
      <Space>
        <Input style={{ width: 400 }} placeholder="Enter Task Name" />
        <Button type="primary">Create Task</Button>
      </Space>
      <Space direction="vertical" style={{ marginTop: 24 }}>
        <Card title="Sample Task" style={{ width: 600 }}>
          <Button style={{ marginRight: "16px" }} type="primary">
            Delete
          </Button>
          <Button style={{ marginRight: "16px" }}>Done</Button>
          <Button danger>Delete</Button>
        </Card>
      </Space>
      <Space direction="vertical" style={{ marginTop: 24 }}>
        <Card
          title="Sample Task (Done)"
          style={{ width: 600, textDecoration: "line-through" }}
        >
          <Button style={{ marginRight: "16px" }} type="primary">
            Delete
          </Button>
          <Button style={{ marginRight: "16px" }}>Undone</Button>
          <Button danger>Delete</Button>
        </Card>
      </Space>
    </Container>
  );
}

export default App;
