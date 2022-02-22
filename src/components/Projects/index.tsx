import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" description="" />

      <section>
        <ProjectItem
          img="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjectItem
          img="https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
