import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}}/>
      <hr />
      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {

  const githubUser = 'fellipedepalma';
  const devsFavoritos = [
    'juunegreiros', 
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'vanessametonini'
  ];
  const comunidades = [
    'Alurakut',
    'Queria Sorvete, mas era feijão',
    'Tocava Campainha e Corria',
    'Eu Abro a Geladeira pra Pensar',
    'Nietzsche for Speed',
    'Lenin, de Três'
  ]
  
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>

      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">Bem-Vindo(a), </h1>
          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>

          <form onSubmit={function handleCriaComunidade(e){
            e.preventDefault();

          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usarmos de capa"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa"
              />
              <button>
                Criar comunidade
              </button>
            </div>
          </form>
        </Box>
      </div>
      
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Devs Mais que Friends ({devsFavoritos.length})
          </h2>

          <ul>
          {devsFavoritos.map((itemAtual) => {
            return (
              <li>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
                </a>
              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="SmallTitle">Comunidades</h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li>
                  <a href={`/comunidades/${itemAtual}`} key={itemAtual}>
                    <img src={`http://placehold.it/300x300`} alt=""/>
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
