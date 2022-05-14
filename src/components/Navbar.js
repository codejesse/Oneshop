import styled from 'styled-components'
import "../App.scss"

const NavWrapper = styled.div`
   display: flex;
   overflow: hidden;
`;

const LogoWrapper = styled.div`
   margin: 2.5rem;
   @media (max-width: 768px) {
       margin: 1rem;
   }
`;

const ButtonWrapper = styled.div`
   margin-left: 48rem;
`;

const ActionButton = styled.button`
  width: 344px;
  height: 90px;
  border: none;
  color: white;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  background: linear-gradient(90deg, #FFAC4B -6.25%, rgba(89, 86, 255, 0.94) 111.77%);
  @media (max-width: 425px) {
       margin-left: -45rem;
       width: 244px;
       height: 70px;
       font-size: 15px;
   }
`;

function Navbar() {
    return (
        <NavWrapper>
            <LogoWrapper>
                <img src='Logo.png' alt='logo' />
            </LogoWrapper>
            <ButtonWrapper>
                <ActionButton>Log in to OneShop</ActionButton>
            </ButtonWrapper>
        </NavWrapper>
    )
}
export default Navbar