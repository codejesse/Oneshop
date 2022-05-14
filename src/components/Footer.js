import styled from 'styled-components'
import "../App.css"

const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  background: #000000;
  background-image: url("Frame2.png");
  background-repeat: no-repeat;
  background-position: right;
  background-position-y: 30rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;

const FooterDetails = styled.div` 
  padding: 10rem;
  column-count: 3;
  margin-top: -5rem;
  @media (max-width: 768px) {
    column-count: 1;
  }
`;

const FooterLinks = styled.li` 
   display: flex;
   justify-content: center;
  & a{
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
   }
   & a:hover{
       text-decoration: underline;
   }
`;

function Footer() {
    return (
        <FooterWrapper>
            <ImageWrapper>
                <img src='Logo2.png' alt='Footer-logo' />
            </ImageWrapper>
            <FooterDetails>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
                <FooterLinks><a href='https://jessex.vercel.app/'>Link</a></FooterLinks>
            </FooterDetails>
        </FooterWrapper>
    )
}
export default Footer;