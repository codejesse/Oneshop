import styled from 'styled-components'
import "../App.scss"
import Fade from 'react-reveal/Fade';

const PreWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin: 7rem;
   margin-bottom: 12rem;
   @media (max-width: 600px) {
       margin: 1rem;
       margin-top: 5rem;
       margin-bottom: 5rem;
   }
`;

const Card = styled.div`
    justify-content: center;
   width: 1205px;
   height: 530px;
   background: #000000;
   border-radius: 40px;
   background-image: url("arc.png");
   background-repeat: no-repeat;
   background-position: right;
   background-position-y: -4rem;
   @media (max-width: 600px) {
       width: 100%;
   }
`;

const CardHeader = styled.h1`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 700;
   font-size: 90px;
   line-height: 135px;
   color: #FFFFFF;
   text-align: center;
   @media (max-width: 600px) {
       font-size: 50px;
       line-height: 50px;
   }
`;

const CardPara = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #FFFFFF;
  text-align: center;
  margin-top: -3rem;
  @media (max-width: 600px) {
      margin-top: 4rem;
   }
`;

const CardImages = styled.div`
   display: flex;
   justify-content: center;
`;

const ImageWrapper = styled.div`
   width: 55%;
   height: auto;
   margin: auto;
`;

function PreFooter() {
    return (
        <PreWrapper>
            <Card>
                <Fade bottom><CardHeader>Start selling</CardHeader></Fade>
                <Fade bottom><CardPara>Lorem ipsum dolor sit amet, consectetur </CardPara></Fade>
                <CardImages>
                    <ImageWrapper>
                        <Fade bottom><img className='device-img' src='bg.png' alt='background' /></Fade>
                    </ImageWrapper>
                </CardImages>
            </Card>
        </PreWrapper>
    )
}
export default PreFooter;