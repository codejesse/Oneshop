import styled from 'styled-components'
import "../App.scss"

const HomeWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   @media (max-width: 600px) {
      margin-top: 4rem;
   }
`;

const HeaderDetails = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
`;

const HeaderText = styled.h1`
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 600;
   font-size: 90px;
   /* line-height: 135px; */
   text-align: center;
   @media (max-width: 768px) {
      font-size: 40px;
      padding-bottom: 50px;
   }
`;

// const Highlighted = styled.h1`
//    font-family: 'Poppins';
//    font-style: normal;
//    font-weight: 700;
//    font-size: 90px;
//    line-height: 135px;
//    background: linear-gradient(180deg, #FFAC4B 0%, rgba(89, 86, 255, 0.94) 100%);
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
//    background-clip: text;
// `;

const HeaderPara = styled.p`
   margin-top: -26rem;
   margin-bottom: -21rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   padding: 23rem;
   font-size: 30px;
   text-align: center;
   color: #4F4F4F;
   @media (max-width: 768px) {
       padding: 1rem;
       margin-top: -3rem;
       font-size: 20px;
   }
`;

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

const HeaderButton = styled.button`
   color: white;
   width: 430px;
   height: 108px;
   background: #000000;
   border-radius: 70px;
   border: none;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   font-size: 33px;
   color: #FFFFFF;
   cursor: pointer;
   @media (max-width: 768px) {
      margin-top: 23rem;
      width: 300px;
      height: 90px;
      font-size: 23px;
   }
`;


function Home() {
    return (
        <HomeWrapper>
            <HeaderDetails>
                <HeaderText>Everything in one place</HeaderText>
                <HeaderPara>Create an online shop in 5 minutes or less
                curated to making selling online very easy for
                everyone without writing code.</HeaderPara>
                <ButtonWrapper>
                    <HeaderButton>Get Started</HeaderButton>
                </ButtonWrapper>
            </HeaderDetails>
        </HomeWrapper>
    )
}
export default Home;