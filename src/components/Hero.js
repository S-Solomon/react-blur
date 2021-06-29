import styled from 'styled-components' ;
import Tilt from 'react-tilt'
import HeroImage from '../assets/hero.png' ;
import BgImage from '../assets/bg.png' ;


const Hero = () => {
    return (
        <>
            <Container BgImage={BgImage}>
                <Wrapper>
                    <InnerWrapper>
                        <Left>
                            <h1>Hero</h1>
                        </Left>
                        <TiltWrapper  options={{ max : 25 }}>
                            <img src={HeroImage} alt="" />
                        </TiltWrapper>
                    </InnerWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Hero

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${({ BgImage }) => BgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

`;
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        -webkit-backdrop-filter: blur(35px);
        backdrop-filter: blur(35px);
        background-color: rgba(255, 255, 255, 0.5);
    }
`;

const InnerWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 100%;
    }
`;
const Left = styled.div`
    width: 40%;
    @media (max-width: 670px) {
        width: 100%;
    }
`;

const TiltWrapper = styled(Tilt)`
    width: 60%;
    @media (max-width: 670px) {
        display: none;
    }
`;
