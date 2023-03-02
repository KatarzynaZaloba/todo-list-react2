import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, RemoveButton, ToggleDoneButton, Content } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch(); 

  return (
    <List>
      {tasks.map((task) => (
        <Item 
          key={task.id} 
          hidden={task.done && hideDone}
          >
          <ToggleDoneButton 
            toggleDone 
            onClick={() => dispatch(toggleTaskDone(task.id))}
            >
            {task.done ? "✓" : ""}
          </ToggleDoneButton>
          <Content 
          done={task.done}
          >
            {task.content}
            </Content>
          <RemoveButton 
          remove 
          onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;