import React, { useState } from 'react'
import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(props){
  
  return (
    <Box as="aside">
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
  const [comunidades, setComunidades] = React.useState([{
    id: '1234546789542454365465456345863459',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  const githubUser = 'fellipedepalma';
  const devsFavoritos = [
    'juunegreiros', 
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'vanessametonini'
  ];
  /* const comunidades = [
    'Alurakut',
    'Queria Sorvete, mas era feijão',
    'Tocava Campainha e Corria',
    'Eu Abro a Geladeira pra Pensar',
    'Nietzsche for Speed',
    'Lenin, de Três'
  ]*/
  
  return (
    <>
    <AlurakutMenu githubUser={githubUser}/>
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
            const dadosDoForm = new FormData(e.target);

            const comunidade = {
              id: new Date().toISOString,
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')
            }
            const comunidadesAtualizadas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizadas);
            
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
              <button style={{backgroundColor: '#6E92BB'}}>
                Criar comunidade
              </button>
            </div>
          </form>
        </Box>
      </div>
      
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Amigos ({devsFavoritos.length})
          </h2>

          <ul>
          {devsFavoritos.map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={`/users/${itemAtual}`}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                <span>{itemAtual}</span>
                </a>
              </li>
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
        
        <ProfileRelationsBoxWrapper>
          <h2 className="SmallTitle">
            Comunidades ({comunidades.length})
          </h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/comunidades/${itemAtual.title}`}>
                    <img src={itemAtual.image} alt=""/>
                    <span>{itemAtual.title}</span>
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
