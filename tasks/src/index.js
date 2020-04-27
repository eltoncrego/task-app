import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import data from "./data";
import Column from "./column";

const App = () => {
  const [taskData, setTaskData] = useState(data);

  const onDragEnd = (result) => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {taskData.columnOrder.map((columnId) => {
        const column = taskData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => taskData.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
