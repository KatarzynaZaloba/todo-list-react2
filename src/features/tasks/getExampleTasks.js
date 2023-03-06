export const getExampleTasks = async () => {
    const response = await fetch("/todo-list-react2/exampleTasks.json");
  
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.json();
  };