import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze strony" />
    <Section
      title="Katarzyna Żałoba"
      body={
        <>
          <p>
            Hej! </p>

              <p> Dziękuję, że zajrzałeś do tej części strony. Na imię mi <strong>Katarzyna</strong>. Pracuję w <strong>IT</strong> od ponad 3 lat jako <strong>IT Process Coordinator</strong>. Poza tym od listopada 2021 sprawuję funkcję <strong>Inspektora Ochrony Danych</strong>. Umysł ścisły i humanistyczny zarazem. Niemożliwe? Nic nie jest niemozliwe, jeśli jesteś faktycznie czymś zainteresowany!</p>
            <p>Jak widzisz, jestem otwarta i lubię uczyć się nowych rzeczy. Od grudnia 2022 poświęcam czas w zdobywaniu wiedzy jako <strong>Frontend Developer</strong> dzięki kursowi <i>YouCode</i>.
            Następnym etapem jest poznanie podstaw <i>PHP i MYSQLa.</i></p>

<p>W wolnym czasie biegam po lasach blisko mojego domu - według mnie to najlepsze rozwiązanie dla głowy i ciała!</p>
<p>To tyle ode mnie. Jeśli chcesz na bieżąco sledzić moje postępy, zapraszam na mój profil na <a href="https://github.com/KatarzynaZaloba">Githubie</a> lub <a href="https://www.linkedin.com/in/katarzyna-zaloba/">LinkedIn.</a>
          </p>
        </>
      }
    />
  </Container>
);