import { useState } from 'react'

import Perfil from './components/Perfil'
import ReposList from './components/ReposList'

import './global.css'

function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
    <div className='container-input-usuario'>
      <label htmlFor="input-usuario">
        Digite o nome do usuário do GitHub:
      </label>
      <input 
        id='input-usuario'
        className='input-usuario' 
        type="text" 
        onBlur={(e) => setNomeUsuario(e.target.value)} 
      />
    </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App