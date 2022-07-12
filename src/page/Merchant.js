
import Navbar from "../component/Navbar";

import styled from "styled-components";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    justify-content: center;
`
const DarkBackground = styled.div`
    background-color: #0f0f0f;
`
const JoinDiscordBtn = styled.a`
    font-family: 'Poppins', sans-serif;
    background: transparent;
    display: inline-block;
    padding: .5rem 3rem;
    text-decoration: none;
    color: #FB5607;
    border: 1px solid ;
    transition: 0.3s;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 12px;
    
    cursor: pointer;
   
`
const BannerBtn = styled.a`
    background: #FB5607;
    display: inline-block;
    padding: .5rem 3rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 12px;
    
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
padding: 1rem ;
align-items: center;
justify-content: center;
text-align: center;
width: 85%;
    h1, h2{
        font-family: 'Poppins', sans-serif;
    }
img{
    width: 100%;
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
        font-family: 'Poppins', sans-serif;
    }
    img{
    width: 90%;
    border-radius: 10px;
}
`
const For = styled.h3`
    color:  #FB5607;
`
const WhiteTextLeft = styled.div`
   color: white;
   font-size: 22px;
   font-family: 'Poppins', sans-serif;;
   text-align: left;
`
const WhiteText = styled.div`
   color: white;
   font-size: 22px;
   font-family: 'Poppins', sans-serif;;
   text-align: center;
`
const OrangeText = styled.div`
   color: #FB5607;
   font-size: 48px;
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
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

max-width: 24%;

margin: 15px;
`
const MerchantText = styled.div`
   color: #fff;
   font-size: 108px;
   font-family: 'Poppins';
   font-weight: bold;
   text-align: left;
   
   
   
`
const Row = styled.div`
    display: flex;
    justify-content: left;
    text-align: left;

   
    
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`
const SmallWhiteText = styled.div`
color: white;
font-size: 16px;
font-family: 'Poppins', sans-serif;;
text-align: left;
`
const SmallOrangeText = styled.div`
   color: #FB5607;
   font-size: 22px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
`
const ButtonCenter = styled.div`
text-align: center;

`
function Merchant() {
    return (

        <div>
            <Navbar></Navbar>
            <DarkBackground>
                <BackgroundImage><ContentCon>
                    <ContentR>
                        <Row><MerchyLogo src="/assets/Logo White text.png"></MerchyLogo>
                            <For>for</For></Row>
                        <MerchantText>Merchant</MerchantText>
                        <WhiteTextLeft>Support beginning of living with sustainablity and</WhiteTextLeft>
                        <Row><WhiteText>grow together.</WhiteText>
                            <SmallOrangeText>Are coming soon!</SmallOrangeText></Row>

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
                        <Row><MerchyLogo src="/assets/Logo White text.png"></MerchyLogo>
                            <For>for</For></Row>
                        <MerchantText>Merchant</MerchantText>


                    </ContentR>
                    <ContentL>
                        <SmallWhiteText>A wallet and platform to connect with Merchy to help local shop in the local area through quests, events, and ranking then earn the cryptocurrency for using by be our partners. You can be our partner easily! Just pre-register with us.</SmallWhiteText>
                    </ContentL>

                </ContentCon>
                    <ButtonCenter><BannerBtn>Pre-register!</BannerBtn></ButtonCenter>
                </OpenAreaMarketBG>

            </DarkBackground>




        </div>


    )
}
export default Merchant;