import { styled } from 'styled-components'
import Titulo from '../Titulo'
import Tags from './Tags'
import Populares from './Populares'
import Imagem from './Imagem'

const GaleriaContainer = styled.div`
    display: flex;
    column-gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const FotosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
`

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <FotosContainer>
                        {fotos.map(foto => <Imagem foto={foto} key={foto.id} aoZoomSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} />)}
                    </FotosContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
