import styled from 'styled-components'
import '../App.css';

const GalleryWrapper = styled.div`
    display: flex;
    margin-top: 5rem;
    flex-direction: row;
    height: auto;
    width: 100%;
    justify-content: center;
`;



function Gallery() {
    return (
        <GalleryWrapper>
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src="image1.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image3.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image4.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image5.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image1.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image4.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image5.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                    <div className="slide">
                        <img src="image2.png" alt="" />
                    </div>
                    <div className="slide">
                        <img src="image4.png" style={{ marginTop: "70px" }} alt="" />
                    </div>
                </div>
            </div>
        </GalleryWrapper>
    );
}
export default Gallery;
