import { styled } from "styled-components"

const ItemListaEstilizado = styled.li`
    display: flex;
    align-items: center;
    gap: 22px;

    margin-bottom: 30px;

    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-size: 24px;
    font-weight: ${ props => props.$ativo ? '700' : '400'};
    line-height: 29px;
    
    cursor: pointer;
`

const ItemNavegacao = ({texto, iconeAtivo, iconeInativo, ativo = false}) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {texto}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao