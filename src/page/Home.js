import NavbarHome from "../component/NavbarHome";
import styled from "styled-components";

const Header = styled.div`
    font-family: 'Prompt';
`
const Container = styled.div`
    max-width: 960px;
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
const Row = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
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
        font-family: 'Poppins', sans-serif;;
    }
img{
    width: 90%;
    border-radius: 10px;
}
`

const ContentR = styled.div`
    padding: 1rem ;
    text-align: center;
    justify-content: center;
    width: 40%;
    font-family: 'Poppins', sans-serif;;
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

const JoinDiscordBtn = styled.a`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
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
   font-size: 24px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
`
const OrangeText = styled.div`
   color: #FB5607;
   font-size: 48px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
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
                            <Power>Beginning of living with sustainablity.</Power>
                            <p>
                                We believe that everbody has a potential to make this world better.
                            </p>
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


                    <PaddingText>  <Power>What is Merchy ?</Power>
                        <p>Getto is a startup, founded by passionate university students.
                            We are aiming to help local businesses and environmental issues,
                            therefore every product from us must contain these.</p></PaddingText>





                </Container>
            </Bgcolor>
            <Container>






                <MiddleCon>
                    <MiddleText>
                        <Row>
                            <h2>People who belive in us.</h2>
                        </Row>
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
                <NotdoneImage><OrangeText>We're not done yet...</OrangeText>
                    <WhiteText>Merchant</WhiteText>
                    <WhiteText>is coming soon</WhiteText>
                    <WhiteText>Learn more! {'>'}</WhiteText></NotdoneImage>

            </Container>



        </div>
    )
}

export default Home;