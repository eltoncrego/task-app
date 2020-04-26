import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Column from './column';

const App = () => {
  const [taskData, setTaskData] = useState(data);

  return taskData.columnOrder.map((columnId) => {
    const column = taskData.columns[columnId];
    const tasks = column.taskIds.map(taskId => taskData.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks}/>;
  });
};

ReactDOM.render(<App />, document.getElementById('root'));