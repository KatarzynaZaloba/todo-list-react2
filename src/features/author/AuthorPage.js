import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze strony" />
    <Section
      title="O mnie"
      body={
        <>
          <p>
            Lorem ipsum 
          </p>
        </>
      }
    />
  </Container>
);