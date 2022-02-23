import Experiences from '../components/Experiences';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Knowledges from '../components/Knowledges';
import Projects from '../components/Projects';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledges />
      </main>
    </HomeContainer>
  );
}
