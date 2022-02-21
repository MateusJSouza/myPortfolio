/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Mateus</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">Mateus,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Jesus,</span>
            </div>
            {'\u007d'}
          </CodeItem>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Função: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">-x-,</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
