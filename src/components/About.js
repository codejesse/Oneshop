import styled from 'styled-components'
import "../App.scss"
import Fade from 'react-reveal/Fade';

const AboutWrapper = styled.div`
   display: flex;
   margin: 1rem;
   margin-top: -10rem;
   @media (max-width: 768px) {
       flex-direction: column;
}
`;

const ImageBackground = styled.div`
   width: 700px;
   height: 700px;
   background: #FFEDD8; 
   border-radius: 360px;
   margin-left: -10rem;
   background-image: url("image7.png");
   background-position: center;
   background-repeat: no-repeat;
   background-position-y: 2rem;
   background-position-x: 24rem;
   @media (max-width: 768px) {
       width: 500px;
       height: 500px;
   }
`;

const AboutDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin: 1.1rem;
   margin: auto;
`;

const AboutHeader = styled.h1`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 65px;
`;

const AboutPara = styled.p`
   margin-top: -3rem;
   padding: 1rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   font-size: 22px;
   line-height: 42px;
   color: #4F4F4F;
`;

const AboutButton = styled.button`
   width: 299px;
   height: 90px;
   border-radius: 20px;
   border: none;
   color: white;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   font-size: 23px;
   background: #000000;
   cursor: pointer;
`;


function About() {
    return (
        <>
            <AboutWrapper>
                <Fade left><ImageBackground>
                    <Fade bottom><img className='about-image' src='image 6.png' alt='about' /></Fade>
                </ImageBackground></Fade>
                <AboutDetails>
                    <Fade bottom><AboutHeader>Create your own store</AboutHeader></Fade>
                    <Fade bottom><AboutPara>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. At non nec sit viverra duis
                        tortor non. Est fringilla a volutpat tortor
                        suspendisse malesuada </AboutPara></Fade>
                    <AboutButton>Get started</AboutButton>
                </AboutDetails>
            </AboutWrapper>
        </>
    )
}
export default About;