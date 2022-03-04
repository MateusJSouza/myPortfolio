import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { getPrismicClient } from '../../../services/prismic';
import { ContainerProject } from '../../../styles/ContainerProject';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  project: IProject;
}

export default function Project({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ContainerProject>
        <Head>
          <title>{project.title} | Meu portfólio</title>
          <meta
            name="description"
            content="Estes foram alguns dos projetos que desenvolvi durante meus estudos de programação."
          />
          <meta name="description" content={project.description} />
          <meta property="og:image" content={project.thumbnail} />
          <meta property="og:image:secure_url" content={project.thumbnail} />
          <meta name="twitter:image" content={project.thumbnail} />
          <meta name="twitter:image:src" content={project.thumbnail} />
          <meta property="og:description" content={project.description} />
        </Head>
        <Header />
        <BannerProject
          title={project.title}
          type={project.type}
          imgUrl={project.thumbnail}
        />

        <main>
          <p>{project.description}</p>
          <button type="button">
            <a href={project.link}>Ver projeto online</a>
          </button>
        </main>
      </ContainerProject>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projects = await prismic.query([
    Prismic.Predicates.at('document.type', 'projetos')
  ]);

  const paths = projects.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projetos', String(slug), {});

  // Formatando os dados utilizando o map para retornar um novo objeto
  const project = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    // Revalidate => em quanto tempo essa informação vai durar, diminuindo as chamadas a API
    revalidate: 86400 // 24 horas
  };
};
