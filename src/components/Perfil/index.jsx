import './perfil.css'

const Perfil = ({nome, endereco}) => {
    return (
        <div>
            <img className='perfil-avatar' src={endereco} />
            <h3 className='perfil-titulo'>{nome}</h3>
        </div>
    )
}

export default Perfil