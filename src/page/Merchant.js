import NavbarHome from "../component/NavbarHome";
import Footer from "../component/footer";
import styled from "styled-components";

const Image = styled.img`
  
  width: 75%;
`;

function Merchant() {
    return (
        <div>
            <NavbarHome />
            <Image src="\assets\honey-fangs-ZpZ_YYfQPy4-unsplash.jpg"></Image>
            <Footer />
        </div>


    )
}
export default Merchant;