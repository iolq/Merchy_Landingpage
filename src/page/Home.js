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
const GreyBg = styled.div`
    background-color: #E8E8E8;
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
    font-family: 'Prompt';
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
    background: #2B39AF;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 30px;
    text-transform: uppercase;
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

const VideoBg = styled.video`
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    /* width: 100%; */
    height: inherit;
    background-size: cover;
    overflow: hidden;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        background-color: #000;
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
padding: 2rem ;
align-items: center;
justify-content: center;
text-align: center;
width: 85%;
    h1, h2{
        font-family: 'Prompt';
    }
img{
    width: 90%;
    border-radius: 10px;
}
`

const ContentR = styled.div`
    padding: 2rem ;
    text-align: center;
    justify-content: center;
    width: 85%;
    font-family: 'bai jamjuree';
    h1, h2{
        font-family: 'Prompt';
    }
    img{
    width: 90%;
    border-radius: 10px;
}
`
const Power = styled.h2`
    color: #2B39AF;
`
const Kid = styled.h2`
    color: #F48C06;
`
const Discript = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-family: 'Bai Jamjuree';
`
const TrialBtn = styled.a`
    font-family: 'Prompt';
    background: #E85137;
    display: inline-block;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.3s;
    margin-top: 1rem;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        /* border: 2px solid #fff; */
        background: #2B39AF;
        color: #fff;
}
`
const ImgRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 15%;
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

const CourseCard = styled.a`
    margin: 1vh;
`

let bannerData = {
    title1: "ติดอาวุธให้ลูกคุณพร้อมตั้งเเต่วันนี้",
    title2: "เรียนทักษะเเห่งอนาคต เริ่มต้นที่ PowerKid",
}
function Home() {
    return (
        <div>
            <NavbarHome />
            <Header>
                <BannerBg>
                    <VideoBg autoPlay="autoplay" loop="loop" muted>
                        <source src="/assets/production ID_4709300.mp4" type="video/mp4" />
                    </VideoBg>
                    <Container>
                        <BannerCon>
                            <BannerText>
                                <h1>{bannerData.title1}</h1>
                                <h1>{bannerData.title2}</h1>
                                <Row>
                                    <BannerBtn href="/TechCourse">หลักสูตรเทคโนโลยี</BannerBtn>
                                    <BannerBtn href="/FinanceCourse">หลักสูตรการลงทุน</BannerBtn>
                                    <BannerBtn href="/EnterpCourse">หลักสูตรการเป็นผู้ประกอบการ</BannerBtn>
                                </Row>
                            </BannerText>
                        </BannerCon>
                    </Container>
                </BannerBg>
            </Header>
            <Container>
                <MiddleCon>
                    <MiddleText>
                        <Row>
                            <Power>Power</Power><Kid>Kid</Kid><h2> คืออะไร</h2>
                        </Row>
                        <Discript>
                            เพราะเรารู้ดีว่าโลกในศตวรรษที่ 21 มีการเปลี่ยนแปลงอย่างรวดเร็ว เเละมีทักษะใหม่ๆเกิดขึ้นอีกมากมาย เราเรียกทักษะเหล่านั้นว่า "ทักษะเเห่งอนาคต"
                            ซึ่งการเรียนในห้องเรียนเพียงอย่างเดียว อาจไม่ได้สร้างทักษะเเห่งอนาคตให้กับบุตรหลานของท่านอย่างทันท่วงที  ด้วยเหตุนี้เอง Powerkid จึงสร้างหลักสูตรเรียนทักษะแห่งอนาคตทั้งแบบ
                            สอนสด (ออนไลน์)เเละรูปแบบวีดีโอขึ้นมาสำหรับน้องๆ ตั้งเเต่อายุ 8 -15 ปีทุกคนได้เรียนรู้ทักษะเเห่งอนาคตตั้งเเต่วันนี้
                        </Discript>
                    </MiddleText>
                </MiddleCon>
            </Container>
            <GreyBg>
                <Container>
                    <ContentCon>
                        <ContentR>
                            <Row>
                                <Power>เตรียมลูกของคุณให้พร้อมตั้งเเต่วันนี้เพราะการเรียนรู้เริ่มต้นได้เสมอ</Power>
                            </Row>
                            เด็กไทยยังขาดทักษะเเห่งอนาคตที่สามารถนําไปใช้
                            ได้จริง เพราะเราถูกสอนเสมอมาว่าทักษะเหล่านั้น
                            เป็นเรื่องไกลตัว วันนี้โลกของเรามีข้อมูลที่เคลื่อนที่เเละ
                            ถูกเข้าถึงอย่างรวดเร็วเเละง่ายดาย วิธีรับมือที่ดีที่สุดคือ
                            การเตรียมพร้อมบุตรหลานของท่านให้พร้อมสําหรับ
                            โลกที่ เทคโนโลยี ,การเงินและการลงทุน
                            รวมถึงการเป็นผู้ประกอบการ คือสิ่งสําคัญ
                        </ContentR>
                        <ContentL>
                            <img src="/assets/งานออกแบบที่ไม่มีชื่อ (8).png" alt="" />
                        </ContentL>
                    </ContentCon>
                </Container>
            </GreyBg>
            <Container>
                <MiddleCon>
                    <MiddleText>
                        <Row>
                            <h2>หลักสูตรของเรา<br />Our course</h2>
                        </Row>
                        <CourseCardRow>
                            <CourseCard href="/TechCourse">
                                {/* <img src="/assets/ชื่อคอร์ส ราคา/1.png" /> */}
                            </CourseCard>
                            <CourseCard href="/TechCourse">
                                {/* <img src="/assets/ชื่อคอร์ส ราคา/2.png" /> */}
                            </CourseCard>
                            <CourseCard href="/TechCourse">
                                {/* <img src="/assets/ชื่อคอร์ส ราคา/3.png" /> */}
                            </CourseCard>
                            {/* <CourseCard href="/FinanceCourse">
                                        <img src="/assets/ชื่อคอร์ส ราคา/2.png" />
                                    </CourseCard>
                                    <CourseCard href="/EnterpCourse">
                                        <img src="/assets/ชื่อคอร์ส ราคา/3.png" />
                                    </CourseCard> */}
                        </CourseCardRow>
                    </MiddleText>
                </MiddleCon>
                <MiddleCon>
                    <MiddleText>
                        <Row>
                            <h2>ทำไมต้อง</h2><Power>Power</Power><Kid>Kid</Kid>
                        </Row>
                        <Discript>
                            เพราะด้วยเหตุผลมากมายที่คุณควรให้บุตรหลานได้เรียนกับ PowerKid
                        </Discript>
                    </MiddleText>
                </MiddleCon>
                <ContentCon>
                    <ContentR>
                        <Power>รายแรกในไทยที่เปิดสอน</Power><Kid>ทักษะแห่งอนาคต</Kid><Power>ทั้ง3ด้าน</Power>
                        <p>
                            เราทราบดีว่า ทักษะทั้ง 3 ด้าน ล้วนเป็นทักษะที่สำคัญเเละมีความเกี่ยวเนื่องกันเป็นอย่างมาก จะเห็นได้จากตัวอย่าง เช่น กรณีน้องๆ
                            อยากทำ Start Up เป็นของตัวเอง ความรู้ด้านการเป็นผู้ประกอบการจะสำคัญเป็นอันดับเเรก เพราะการมี framework ในการสร้างธุรกิจจะช่วยลดความเสี่ยงเเละเพิ่มโอกาสในการทำธุรกิจให้ประสบความ
                            สำเร็จ ตามมาด้วยความรู้ด้านเทคโนโลยีซึ่งเป็นหัวใจของธุรกิจในสมัยใหม่โดเฉพาะอย่างยิ่ง Start Up เเละสุดท้ายด้านการเงินเเละการลงทุน เพื่อทำให้น้องๆสามารถสร้างพอร์ตการออมเเละการลงทุน
                            ของตนเองเพื่ออิสรภาพทางการเงิน ตามลำดับ
                        </p>
                    </ContentR>
                    <ContentL>
                        {/* <img src="/assets/1.png" alt="" /> */}
                    </ContentL>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        {/* <img src="/assets/Group 3.png" alt="" /> */}
                    </ContentL>
                    <ContentR>
                        <Row>
                            <Power>ทีมงาน</Power><Kid>ผู้เชี่ยวชาญ</Kid>
                        </Row>
                        <p>ทีมงานคือผู้เชี่ยวชาญในการออกเเบบการเรียนการสอน
                            เเละที่สำคัญทีมงานของเรามี passion เดียวกันคือ
                            เราอยากให้เด็กไทยมีความพร้อมด้วยทักษะเเห่งอนาคต
                            ในโลกที่เปลี่ยนเเปลงไปอย่างรวดเร็ว </p>
                    </ContentR>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        {/* <img src="/assets/Group 4.png" alt="" /> */}
                    </ContentL>
                    <ContentR>
                        <Row>
                            <Power>ทีมผู้สอน</Power><Kid>ผู้เชี่ยวชาญ</Kid>
                        </Row>
                        <p>เพราะการเรียนรู้จากบุคคลที่เชี่ยวชาญในด้านนั้นๆ นอกจากจะได้ความรู้ที่ถูกต้องเเละครบถ้วนเเล้ว
                            เด็ก ๆ ยังได้รับแรงบันดาลใจจากบุคคลเหล่านี้อีกด้วย </p>
                    </ContentR>
                </ContentCon>
                <ContentCon>
                    <ContentR>
                        <Kid>Learning By Doing</Kid><Power>การเรียนรู้ผ่านการลงมือทำ</Power>
                        <p>
                            เพราะการเรียนรู้ที่ดีที่สุด คือการมีส่วนร่วมในการเรียนรู้ เราจึงออกเเบบ
                            รูปแบบการเรียนเรียนการสอนเเบบเน้นการมีส่วนร่วมของน้อง ๆ ทุกคน
                            รวมถึงการเรียนรู้ผ่านการทำ Project หรือ Project Based Learning
                        </p>
                    </ContentR>
                    <ContentL>
                        {/* <img src="/assets/งานออกแบบที่ไม่มีชื่อ (11).png" alt="" /> */}
                    </ContentL>
                </ContentCon>
                <ContentCon>
                    <ContentL>
                        {/* <img src="/assets/ติดตามเราเพื่อรับเเนวทางการสอนทักษะเเห่งอนาคต ฟรี! (2).png" className="width:30%" alt="" /> */}
                    </ContentL>
                    <ContentR>
                        <Power>เรียนได้หลากหลายรูปแบบ</Power><Kid>ทั้งเรียนสด(ออนไลน์) และเรียนผ่านคลิปวิดีโอ</Kid>
                        <p>เพราะการเรียนรู้จากบุคคลที่เชี่ยวชาญในด้านนั้นๆ นอกจากจะได้ความรู้ที่ถูกต้องเเละครบถ้วนเเล้วเด็ก ๆ ยังได้รับแรงบันดาลใจจากบุคคลเหล่านี้อีกด้วย </p>
                    </ContentR>
                </ContentCon>
                <MiddleText>
                    <TrialBtn href="/Trial">ทดลองเรียนฟรี</TrialBtn>
                </MiddleText>
                <ContentCon>
                    <ContentL>
                        {/* <img src="/assets/5224588.jpg" alt="" /> */}
                    </ContentL>
                    <ContentR>
                        <h1>ไม่รู้ว่าเริ่มจากคอร์สไหน?</h1>
                        <BannerBtn>ทำแบบทดสอบ</BannerBtn>
                        <p>(สำหรับผู้ปกครอง) </p>
                    </ContentR>
                </ContentCon>
                <MiddleCon>
                    <MiddleText>
                        <Row>
                            <h2>ทีมงานได้รับความไว้วางใจจาก</h2>
                        </Row>
                        <ImgRow>
                            {/* <img src="/assets/โลโก้หน่วยงาน/62b396b6-6c71-4e0f-b8d9-4ae528ef3cc0..jpg" />
                            <img src="/assets/โลโก้หน่วยงาน/depa-logo.png" />
                            <img src="/assets/โลโก้หน่วยงาน/Emblem_of_the_Ministry_of_Digital_Economy_and_Society_of_Thailand.png" />
                            <img src="/assets/โลโก้หน่วยงาน/kris-logo.png" />
                            <img src="/assets/โลโก้หน่วยงาน/LOGO_NIA.jpeg" />
                            <img src="/assets/โลโก้หน่วยงาน/StartupThailand logoกลาง.png" />
                            <img src="/assets/โลโก้หน่วยงาน/sysi.jpeg" />
                            <img src="/assets/โลโก้หน่วยงาน/สสส.png" /> */}
                        </ImgRow>
                    </MiddleText>
                </MiddleCon>
            </Container>

        </div>
    )
}

export default Home;