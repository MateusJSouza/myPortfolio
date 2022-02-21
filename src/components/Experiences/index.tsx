import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperiencieItem';
import { Container } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="01 ano" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </section>
    </Container>
  );
}

export default Experiences;
