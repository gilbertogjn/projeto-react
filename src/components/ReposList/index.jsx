import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [erro404, setErro404] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('erro 404')
                }
                return res.json()
            })
            .then(resJson => {
                setTimeout(() => {
                    setLoading(false)
                    setRepos(resJson)
                }, 500)
            })
            .catch(e => {
                console.log(e.message)
                setErro404(true)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
            {loading ? (
                erro404 ? <h2>Nome de usuário não encontrado</h2> :
                <h2>Carregando...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList