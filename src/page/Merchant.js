
import Navbar from "../component/Navbar";

import styled from "styled-components";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    justify-content: center;
`
const Image = styled.img`
  
  width: 100%;
`;
const DarkBackground = styled.div`
    background-color: #0f0f0f;
`
const JoinDiscordBtn = styled.a`
    font-family: 'Poppins', sans-serif;;
    background: transparent;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #FB5607;
    border: 1px solid ;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 10px;
    
    cursor: pointer;
   
`
const BannerBtn = styled.a`
    background: #FB5607;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 10px;
    
    cursor: pointer;
    &:hover {
        /* border: 2px solid #fff; */
        background: #E85137;
        color: #fff;
}
`
const ContentCon = styled.section`
    display: flex;
    justify-content: space-between;
    &:first-child{
        padding: 5rem 0;
    }
    &:last-child{
        padding: 5rem 0;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
    &:nth-child(2) {
        order: 1;
    }
  }
`
const ContentL = styled.div`
padding: 10rem ;
align-items: center;
justify-content: center;
text-align: center;
width: 85%;
    h1, h2{
        font-family: 'Poppins', sans-serif;;
    }
img{
    width: 90%;
    border-radius: 10px;
}
`

const ContentR = styled.div`
    padding: 10rem ;
    text-align: center;
    justify-content: center;
    width: 85%;
    font-family: 'Poppins', sans-serif;
    h1, h2{
        font-family: 'Poppins', sans-serif;;
    }
    img{
    width: 90%;
    border-radius: 10px;
}
`
const Power = styled.h2`
    color: #2B39AF;
`
const WhiteText = styled.div`
   color: white;
   font-size: 24px;
   font-family: 'Poppins', sans-serif;;
   text-align: center;
`
const OrangeText = styled.div`
   color: #FB5607;
   font-size: 48px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
`
const BackgroundImage = styled.div`
    background-image: url("/assets/honey-fangs-ZpZ_YYfQPy4-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: cover;
   
    
`
const OpenAreaMarketBG = styled.div`
    background-image: url("/assets/kayle-kaupanger-J8ksCswaBYo-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: cover;
    
`
const PaddingText = styled.div`
   padding: 120px;
`
const MerchyLogo = styled.img`

max-width: 20%;
`


function Merchant() {
    return (

        <div>
            <Navbar></Navbar>
            <DarkBackground>
                <BackgroundImage><ContentCon>
                    <ContentR>
                        <MerchyLogo src="/assets/Logo White text.png"></MerchyLogo>
                        <Power>Beginning of living with sustainablity.</Power>
                        <WhiteText>Support beginning of living with sustainablity and grow together. Are comming soon!</WhiteText>

                        <BannerBtn>Pre-register!</BannerBtn>
                        <JoinDiscordBtn>Join our Discord!</JoinDiscordBtn>
                    </ContentR>
                    <ContentL>

                    </ContentL>
                </ContentCon></BackgroundImage>

                <Container><PaddingText><WhiteText>What is</WhiteText>
                    <OrangeText>Merchant?</OrangeText></PaddingText>
                </Container>

                <OpenAreaMarketBG><ContentCon>
                    <ContentR>
                        <MerchyLogo src="/assets/Logo White text.png"></MerchyLogo>
                        <Power>Beginning of living with sustainablity.</Power>
                        <WhiteText>Support beginning of living with sustainablity and grow together. Are comming soon!</WhiteText>



                    </ContentR>
                    <ContentL>
                        <WhiteText>A wallet and platform to connect with Merchy to help local shop in the local area through quests, events, and ranking then earn the cryptocurrency for using by be our partners. You can be our partner easily! Just pre-register with us.</WhiteText>
                    </ContentL>
                </ContentCon><BannerBtn>Pre-register!</BannerBtn>
                </OpenAreaMarketBG>

            </DarkBackground>




        </div>


    )
}
export default Merchant;