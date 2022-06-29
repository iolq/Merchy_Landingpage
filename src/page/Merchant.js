import NavbarHome from "../component/NavbarHome";

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


function Merchant() {
    return (

        <div>
            <NavbarHome></NavbarHome>
            <DarkBackground>
                <Image src="\assets\honey-fangs-ZpZ_YYfQPy4-unsplash.jpg"></Image>
                <Container>What is
                    <div>Merchant?</div>
                </Container>

                <Image src='\assets\kayle-kaupanger-J8ksCswaBYo-unsplash.jpg'></Image>

            </DarkBackground>




        </div>


    )
}
export default Merchant;