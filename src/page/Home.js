import NavbarHome from "../component/NavbarHome";
import styled from "styled-components";
import Slider from "../component/Slider";

const Header = styled.div`
    font-family: 'Prompt';
`
const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;
`
const BannerBg = styled.div`
    height: 760px;
    background-size: cover;
    overflow: hidden;
`
const BannerCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
`

const MiddleCon = styled.div`
    margin-bottom:10% ;
`
const Bgcolor = styled.div`
    background-color: #FDF7EE;
    
`
const BannerText = styled.div`
    margin-top: 100px;
    color: #fff;
    text-align: center;
    z-index: 2;
    @media screen and (max-width: 480px) {
        padding: 0 2rem;
        text-size-adjust: inherit;
    }
`

const MiddleText = styled.div`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    h1{
        color: #2B39AF;
        top: 10vh;
    }
    margin-top: 10vh;
    margin-left:10%;
    margin-right: 10%;
    justify-content: center;
    @media screen and (max-width: 480px) {
        padding: 0 2rem;
        text-size-adjust: inherit;
    }
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
    border-radius: 10px;
    
    cursor: pointer;
    &:hover {
        /* border: 2px solid #fff; */
        background: #E85137;
        color: #fff;
}
`
const Row = styled.div`
    display: flex;
    justify-content: left;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
    }
`



const ContentCon = styled.section`
    display: flex;
    justify-content: space-between;
    &:first-child{
        padding: 10rem 0;
    }
    &:last-child{
        padding: 10rem 0;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
    &:nth-child(2) {
        order: 1;
    }
  }
`

const ContentL = styled.div`

align-items: right;
justify-content: center;
text-align: center;
width: 55%;
    h1, h2{
        font-family: 'Poppins', sans-serif;;
    }
img{
    width: 90%;
    border-radius: 10px;
}
`

const ContentR = styled.div`
    
    text-align: left;
    justify-content: left;
    width: 100%;
    font-family: 'Poppins', sans-serif;;
    h1, h2{
        font-family: 'Poppins', sans-serif;;
    }
    img{
    width: 90%;
    border-radius: 10px;
}
`
const Power = styled.div`
    font-family: 'Poppins', sans-serif;
    color: #FB5607;
    margin-left: 210px;
    margin-top: 24px;
`

const JoinDiscordBtn = styled.a`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    background: transparent;
    display: inline-block;
    padding: .5rem 3rem;
    text-decoration: none;
    color: #FB5607;
    border: 2px solid ;
    transition: 0.3s;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    
    cursor: pointer;
   
`
const ImgRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 34%;
        margin: 3vh;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        img{
            max-width: 50%;
        }
    }
`

const CourseCardRow = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 100%;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            border: 2px solid #fff;
        }
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        img{
            max-width: 100%;
            border-radius: 10px;
        cursor: pointer;
        &:hover {
            border: 2px solid #fff;
        }
        }
    }
`
const BackgroundImage = styled.div`
    background-image: url("/assets/Krob.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: cover;
    
`
const NotdoneImage = styled.div`
   background-image: url("/assets/tim-mossholder-ZHfFvW2u93U-unsplash.jpg");
   background-repeat: no-repeat;
   
  background-size: cover;
  border-radius: 30px;
  margin: 100px;
  margin-left: 0px;
  
  width: 100%;
 
`
const WhiteText = styled.div`
   color: white;
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
   margin-left: 210px;
`
const LearnMore = styled.div`
   color: white;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   text-align: right;
   margin-right: 12px;
   padding: 16px;
  
`
const Merchant = styled.div`
   color: white;
   font-size: 72px;
   font-weight: bold;
   font-family: 'Poppins', sans-serif;
   text-align: center;
 
`
const BlackText = styled.span`
   color: #0f0f0f;
   font-size: 28px;
   font-family: 'Poppins';
   font-weight: bold;
   text-align: left;
`
const Beginning = styled.span`
   color: #0f0f0f;
   font-size: 58px;
   font-weight: bold;
   font-family: 'Poppins';
   text-align: center;
`
const Living = styled.span`
   color: #FB5607;
   font-size: 58px;
   font-weight: bold;
   font-family: 'Poppins';
   text-align: left;
   
`
const MerchyText = styled.span`
   color: #fb5607;
   font-size: 28px;
   font-family: 'Poppins';
   font-weight: bold;
   text-align: left;
 
`
const Text = styled.div`
   color: #575757;
   font-size: 25px;
   font-family: 'Poppins';
   text-align: left;
   padding-top:25px ;
   padding-bottom: 25px;
`
const Text1 = styled.div`
   color: #575757;
   font-size: 19px;
   font-family: 'Poppins';
   text-align: left;
   padding-top:25px ;
   padding-bottom: 25px;
`

const PaddingText = styled.div`
   padding: 120px;
`

const Image = styled.img`
  
  width: 100%;
`;
function Home() {
    return (
        <div>
            <NavbarHome />
            <BackgroundImage>
                <Container>
                    <ContentCon>
                        <ContentR>
                            <Beginning>Beginning of </Beginning>
                            <Living>living with sustainablity.</Living>
                            <Text>We believe that everbody has a potential to make this world better.</Text>


                            <BannerBtn>Get started!</BannerBtn>
                            <JoinDiscordBtn>Join our Discord!</JoinDiscordBtn>
                        </ContentR>
                        <ContentL>
                            <Image src="\assets\Hero.png"></Image>
                        </ContentL>
                    </ContentCon>

                </Container>
            </BackgroundImage>


            <Bgcolor>
                <Container>


                    <PaddingText>

                        <BlackText>What is</BlackText><MerchyText>Merchy</MerchyText><BlackText>?</BlackText>
                        <Text1>Getto is a startup, founded by passionate university students.
                            We are aiming to help local businesses and environmental issues,
                            therefore every product from us must contain these.</Text1></PaddingText>





                </Container>
            </Bgcolor>

            <Slider></Slider>

            <Container>






                <MiddleCon>
                    <MiddleText>

                        <h2>People who belive in us.</h2>

                        <ImgRow>
                            <img src="/assets/Rectangle 103.png"></img>
                            <img src="/assets/Rectangle 104.png"></img>
                            <img src="/assets/Rectangle 105.png"></img>
                            <img src="/assets/Treechit M..png"></img>
                        </ImgRow>
                    </MiddleText>
                </MiddleCon>
            </Container>
            <Image src="\assets\Roadmap.png"></Image>
            <Container>
                <NotdoneImage><PaddingText><Power>We're not done yet...</Power>
                    <Merchant>Merchant</Merchant>
                    <WhiteText>are coming soon!</WhiteText></PaddingText>
                    <LearnMore>Learn more! {'>'}</LearnMore></NotdoneImage>

            </Container>



        </div>
    )
}

export default Home;