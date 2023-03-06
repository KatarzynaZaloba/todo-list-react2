import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Form from "./Form";
import TaskList from "./TaskList";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <Header 
      title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section
       title="Wyszukiwarka"
       body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;