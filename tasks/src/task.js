import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const Task = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided) => (
      <Container {...provided.draggableProps} {...provided.dragHandleProps} innerRef={provided.innerRef}>
        {task.content}
      </Container>
    )}
  </Draggable>
);

export default Task;
