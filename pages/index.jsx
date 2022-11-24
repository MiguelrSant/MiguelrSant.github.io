import Header from './components/Header'
import Main from './components/Main'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contact from './components/Contact'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfólio | Miguel Angelo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Portfolio of programmer Miguel Angelo to present his projects"></meta>
        <link rel="icon" type="image/x-icon" href="https://raw.githubusercontent.com/MiguelrSant/IMG/3e299ddd1ae659d3d9ce4c882abe0bfe07dcbf6c/M-Logo.svg"></link>
      </Head>
      <Header />
      <Main />
      <Habilidades />
      <Projetos />
      <Contact />
    </div>
  )
}
