import BannerProject from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ContainerProject } from '../../../styles/ContainerProject';

export default function Project() {
  return (
    <>
      <ContainerProject>
        <Header />
        <BannerProject
          title="Projeto 01"
          type="Website"
          imgUrl="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png"
        />

        <main>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            consectetur ab sint dolor labore? Aliquam, mollitia fuga alias
            cumque eaque saepe placeat! Optio omnis perspiciatis nulla iste
            minima, consectetur voluptas minus nam consequatur dignissimos porro
            fuga eveniet tempore error maiores qui vitae aliquid velit sunt
            aspernatur reprehenderit, tenetur expedita eligendi. Distinctio
            perspiciatis numquam ratione recusandae. Omnis perspiciatis a quasi
            officia adipisci saepe in perferendis repellendus, alias temporibus
            minus vitae doloremque voluptates blanditiis atque illum voluptas
            cupiditate ut nam! Tenetur, maiores.
          </p>

          <button type="button">
            <a href="#">Ver projeto online</a>
          </button>
        </main>
      </ContainerProject>
    </>
  );
}
