import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Header from '../../components/Header';
import ShowProjects from '../../components/ShowProjects';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProjects[];
}

export default function Projetos({ projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        {projects.map(project => (
          <ShowProjects
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  // Formatando os dados utilizando o map para retornar um novo objeto
  const projects = projectResponse.results.map(project => ({
    slug: project.id,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    // Revalidate => em quanto tempo essa informação vai durar, diminuindo as chamadas a API
    revalidate: 86400 // 24 horas
  };
};
