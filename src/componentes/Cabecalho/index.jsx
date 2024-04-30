import { styled } from 'styled-components'
import CampoTexto from '../CampoTexto'

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;

    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return(
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Logo" />
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho