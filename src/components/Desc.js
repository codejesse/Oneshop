import styled from 'styled-components'
import "../App.scss"

const DescWrapper = styled.div`
   display: flex;
   margin: 3rem;
   padding-top: 4rem;
   @media (max-width: 768px) {
       flex-direction: column;
       margin: 0;
}
`;

const DescDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin: 1.1rem;
`;

const DescHeader = styled.h1`
    font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 65px;
`;

const DescPara = styled.p`
   margin-top: -3rem;
   padding: 1rem;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   font-size: 22px;
   line-height: 42px;
   color: #4F4F4F;
`;

const DescImage = styled.div`
   width: 85%;
   height: auto;
   margin: auto;
`;

const DescButton = styled.button`
   width: 299px;
   border: none;
   border-radius: 20px;
   color: white;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 300;
   font-size: 23px;
   height: 90px;
   background: #000000;
   cursor: pointer;
`;

function Desc() {
    return (
        <DescWrapper>
            <DescDetails>
                <DescHeader>Start selling in seconds</DescHeader>
                <DescPara>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. At non nec sit viverra duis
                    tortor non. Est fringilla a volutpat tortor
                    suspendisse malesuada </DescPara>
                    <DescButton>Learn More</DescButton>
            </DescDetails>
                <DescImage><img className="desc-image" src='image8.png' alt='desc' /></DescImage>
        </DescWrapper>
    )
}
export default Desc;