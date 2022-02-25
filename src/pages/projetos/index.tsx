import Header from '../../components/Header';
import ShowProjects from '../../components/ShowProjects';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ShowProjects
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
        />

        <ShowProjects
          title="Projeto 02"
          type="Website"
          slug="teste"
          imgUrl="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
        />

        <ShowProjects
          title="Projeto 03"
          type="Website"
          slug="teste"
          imgUrl="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
        />

        <ShowProjects
          title="Projeto 04"
          type="Website"
          slug="teste"
          imgUrl="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
        />
      </main>
    </ProjectsContainer>
  );
}
