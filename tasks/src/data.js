const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Whats up I'm task 1" },
    "task-2": { id: "task-2", content: "Whats up I'm task 2" },
    "task-3": { id: "task-3", content: "Whats up I'm task 3" },
    "task-4": { id: "task-4", content: "Whats up I'm task 4" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};

export default data;