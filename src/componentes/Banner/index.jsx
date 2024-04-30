import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$bannerBackground})`};
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    margin-bottom: 56px;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({texto, bannerBackground}) => {
    return (
    <FigureEstilizada $bannerBackground={bannerBackground}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
    )
}

export default Banner
