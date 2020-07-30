import React from 'react';
import Menu from './components/components/Menu/index';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/components/BannerMain';
import Carousel from './components/components/Carousel';
import Footer from './components/components/Footer';

/* import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Crousel from './components/Carousel';
import Footer from './components/Footer'; */

/*Shift + Alt + A -> comenta várias linhas ao mesmo tempo*/
function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O salmo 51 é um dos salmos penitenciais. Uma das versões mais conhecidas é o Miserere composto no século XVII pelo compositor Gregorio Allegri, da escola romana."}
      />

      <Carousel
        /*Duplicaria o primeiro vídeo*/
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer>

      </Footer>
    </div>

  );
}

export default App;
