import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import data from "./data";
import Column from "./column";

const App = () => {
  const [taskData, setTaskData] = useState(data);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = taskData.columns[source.droppableId];
    const newTaskIds = column.taskIds.slice();
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newTaskData = {
      ...taskData,
      columns: {
        ...taskData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setTaskData(newTaskData);
  };

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
