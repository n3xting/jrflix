import React, { useState } from 'react';
import PageDefault from '../../../pages/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange(infosDoEvento){
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'),
      value
      );
  }

  function HandleSubmit(infosDoEvento){
    infosDoEvento.preventDefault();
    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresIniciais)
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={HandleSubmit}>

          <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField 
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField 
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          {/* <div>
            <label>
              Descrição:
              <textarea
                type="text" 
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Cor:
              <input
                type="color" 
                value={values.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div> */}

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;