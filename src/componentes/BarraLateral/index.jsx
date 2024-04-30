import { styled } from 'styled-components'
import ItemNavegacao from './ItemNavegacao'

const ListaEstilizada = styled.ul`
    list-style: none;
    width: 212px;
    padding: 0;
    margin: 0;
`
const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao 
                        iconeAtivo="icones/home-ativo.png"
                        iconeInativo="icones/home-inativo.png"
                        texto="Inicio"
                        ativo={true}
                    />
                    <ItemNavegacao 
                        iconeAtivo="icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        texto="Mais vistas"
                    />
                    <ItemNavegacao 
                        iconeAtivo="icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        texto="Mais curtidas"
                    />
                    <ItemNavegacao 
                        iconeAtivo="icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                        texto="Novas"
                    />
                    <ItemNavegacao 
                        iconeAtivo="icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        texto="Surpreenda-me"
                    />
                </ListaEstilizada>
            </nav>
        </aside>
    )
} 

export default BarraLateral