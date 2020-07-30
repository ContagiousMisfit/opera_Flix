import React from 'react';
import PageDefault from '../../../components/components/pageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria () {

 return (
    <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to= "/">
            Ir para Home
        </Link>
    </PageDefault>

    );

}
    

export default CadastroCategoria;