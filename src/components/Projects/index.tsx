import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: IProjects[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" description="" />

      <section>
        {/* Slice (0, 3) -> Pega os três projetos mais recentes do Prismic */}
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
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
