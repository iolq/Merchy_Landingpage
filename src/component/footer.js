import styled from "styled-components";
import { Link } from 'react-router-dom';


const Container = styled.div`
	max-width: auto;
	padding: 50px;
    /* align-items: center; */
    @media (max-width: 1000px) {
    padding: 70px 30px;
  }
    
`
const Row = styled.div`
	/* display: flex; */
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 0px;
    @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const Footered = styled.div`
    background-color: #0f0f0f;
    font-family: 'Poppins', sans-serif;
`
const Col = styled.div`
    display: flex;
`

const FooterCol = styled.div`
   padding: 0 150px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   h4{
	font-size: 18px;
	color: #ffffff;
	text-transform: capitalize;
	/* margin-bottom: 35px; */
	font-weight: 1000;
   }
    h4::before{
	content: '';
	left:0;
	bottom: -10px;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
    }
    ul li:not(:last-child){
	margin-bottom: 10px;
    }
    ul li a{    
	font-size: 16px;
	text-transform: capitalize;
	color: #ffffff;
	text-decoration: none;
	font-weight: 500;
    /* display: block; */
	transition: all 0.3s ease;
    }
    ul li a:hover{
	color: #E85137;
	padding-left: 8px;
    }
    a{
	text-align: center;
	line-height: 40px;
	color: #ffffff;
	transition: all 0.5s ease;
    text-decoration: none;
    }
    p{
        color: #ffffff;
    }
    a:hover{
	color: #E85137;
    }
    /*responsive*/
    /* @media(max-width: 768px){
    width: 50%;
    margin-bottom: 30px;
    }
    @media(max-width: 574px){
    width: 100%;
    padding-right: 20%;
    } */
`

const SocialLinks = styled.a`
	display: inline-block;
	height: 40px;
	width: 40px;
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: #ffffff;
	transition: all 0.5s ease;
    a:hover{
	color: #E85137;
	background-color: #ffffff;
}
`
const WhiteLogo = styled.img`
    width: 75%;
`

const Title = styled.p`
    font-size: 14px;
    font-family: 'Bai Jamjuree', sans-serif;
    color: #FFF;
`
const Address = styled.p`
    font-family: 'Bai Jamjuree', sans-serif;
`
const Icon = styled.img`
    width: 100%;
`
const FooterMiddleColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;

    /* @media(max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    } */

`
const Footer = () => {
    return (
        <>
            <Footered>
                <Container>
                    <Row>
                        <FooterCol>
                            <ul>
                                <WhiteLogo src="\assets\Logo White text.png" />
                            </ul>
                            <Title>
                                © 2022 Getto Co. All Rights Reserved.
                            </Title>
                        </FooterCol>
                        <FooterCol>
                            <Col>
                                <FooterMiddleColumn> <p><a>What can we do?</a></p></FooterMiddleColumn>
                                <FooterMiddleColumn><p><a>Partners</a></p></FooterMiddleColumn>
                                <FooterMiddleColumn><p><a href="\page\Merchant"></a>Merchant</p></FooterMiddleColumn>


                            </Col>
                        </FooterCol>
                        <FooterCol>
                            <p><a>contact us</a></p>
                        </FooterCol>
                    </Row>
                </Container>
            </Footered>
        </>
    )

}

export default Footer;