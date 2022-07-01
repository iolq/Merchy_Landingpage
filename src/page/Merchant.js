
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
const WhiteText = styled.div`
   color: white;
   font-size: 24px;
   font-family: 'Poppins';
   text-align: center;
`
const OrangeText = styled.div`
   color: #FB5607;
   font-size: 48px;
   font-family: 'Poppins';
   text-align: center;
`


function Merchant() {
    return (

        <div>
            <Navbar></Navbar>
            <DarkBackground>
                <Image src="\assets\honey-fangs-ZpZ_YYfQPy4-unsplash.jpg"></Image>
                <Container><WhiteText>What is</WhiteText>
                    <OrangeText>Merchant?</OrangeText>
                </Container>

                <Image src='\assets\kayle-kaupanger-J8ksCswaBYo-unsplash.jpg'></Image>

            </DarkBackground>




        </div>


    )
}
export default Merchant;