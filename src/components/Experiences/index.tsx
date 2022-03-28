import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperiencieItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="03 meses" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Plin Soluções"
          description="Trabalhei desenvolvendo aplicações em ReactJS e Typescript para uma administradora de condomínios."
        />
      </section>
    </Container>
  );
}

export default Experiences;
