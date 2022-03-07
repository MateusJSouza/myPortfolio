import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Knowledges from '../components/Knowledges';
import Projects from '../components/Projects';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css'; // injetando as animações css

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProjects[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 }); // 0,5 segundos
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects projects={projects} />
        <Knowledges />
        <FormContact />
      </main>
      <Footer />
    </HomeContainer>
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
    slug: project.uid,
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
