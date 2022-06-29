import NavbarHome from "../component/NavbarHome";
import Footer from "../component/footer";
import styled from "styled-components";

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    justify-content: center;
`
const Image = styled.img`
  
  width: 75%;
`;

function Merchant() {
    return (
        <div>
            <NavbarHome />
            <Container> <Image src="\assets\honey-fangs-ZpZ_YYfQPy4-unsplash.jpg"></Image></Container>

            <Footer />
        </div>


    )
}
export default Merchant;