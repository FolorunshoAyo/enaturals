import React, {useState} from 'react';
import styled from 'styled-components';
import {galleryImages, galleryVideos} from '../../data';
import ReactPlayer from "react-player";
import {SRLWrapper} from 'simple-react-lightbox';
import {smallPhone, medPhone, res700, medDesktop, bigDesktop, res480} from '../../responsive';
import "./Video.css";

const Container = styled.div`
    padding: 5rem 2rem;

    ${bigDesktop({width: "1400px", margin: " 0 auto"})}
    ${medDesktop({width: "100%", margin: "0 auto"})}
`;

const GalleryWrapper = styled.div`
    padding: 0 2rem;

    ${medPhone({padding: "0"})}
`;

const FilterButtons = styled.div`
    text-align: center;
`;

const FilterButton = styled.button`
    padding: 1.5rem 2rem;
    background-color: #f2eeec;
    color: ${props => props.active? '#fff' : '#7e8485'};
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    background-color: ${props => props.active? '#4B5354' : '#f2eeec'};
    cursor: pointer;
    transition: all .5s ease;
    
    &:not(:last-child){
        margin-right: 10px;
        ${res480({marginRight: "auto"})}
    }

    &:last-child{
        ${res480({marginBottom: "0"})} 
    }

    &:hover{
        background-color: #acbfa3;
        color: #fff;
    }

    ${res480({display: "block", width: "40%", margin: "0 auto 1rem"})}
`;

const ImagesGrid = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    ${medPhone({flexFlow: "column nowrap"})}
    ${smallPhone({padding: "2rem 0"})}
`;

const VideosGrid = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    ${medPhone({flexFlow: "column nowrap"})}
    ${smallPhone({padding: "2rem 0"})}
`;

const ImageContainer = styled.div`
    flex: 0 0 31%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 230px;
    margin-bottom: 2rem;

    ${res700({flex: "0 0 48%", height: "350px"})}
    ${medPhone({flex: "0 0 350px"})}
`;

const VideoContainer = styled.div`
    flex: 0 0 31%;
    height: 400px;
    margin-bottom: 4rem;

    ${res700({flex: "0 0 48%", height: "350px"})}
    ${medPhone({flex: "0 0 350px"})}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    opacity: 0;
`;

const options = {
    settings: {
      overlayColor: "rgba(30, 30, 30, 0.9)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      backgroundColor: "#b8a398",
      iconColor: "#fff",
    },
    caption: {
      captionColor: "#fff",
      captionFontFamily: "Lato, sans-serif",
      captionFontWeight: "700",
      captionTextTransform: "uppercase",
    }
  };


const GridGallery = () => {
    const [images, setImages] = useState(galleryImages);
    const [activeTag, setActiveTag] = useState('all');

    const filterItem = (category) => {
        if(category !== "videos"){
            const updatedItems = galleryImages.filter(image => category === 'all'? true : image.category === category);
            setImages(updatedItems);
            setActiveTag(category);
        }else{
            setActiveTag(category);
        }
    };

    return (
        <Container>
            <GalleryWrapper>
                <FilterButtons>
                    <FilterButton active={activeTag === 'all'? true : false} onClick={() => filterItem("all")}>Filter - All</FilterButton>
                    <FilterButton active={activeTag === 'skin care'? true : false} onClick={() => filterItem("skin care")}>Skin Care</FilterButton>
                    <FilterButton active={activeTag === 'natural soap'? true : false} onClick={() => filterItem("results")}>Results</FilterButton>
                    <FilterButton active={activeTag === 'videos'? true : false} onClick={() => filterItem("videos")}>Videos</FilterButton>
                </FilterButtons>
                {
                    activeTag === "videos"? 
                    <VideosGrid>
                        {
                            galleryVideos.map(video => (
                                <VideoContainer>
                                    <ReactPlayer url={video.vid} light={video.previewImg} width="100%" controls/>
                                </VideoContainer>
                            ))
                        }
                    </VideosGrid>
                    :
                    <SRLWrapper options={options}>
                    <ImagesGrid>    
                            {
                                images.map(image => (
                                    <ImageContainer key={image.id} image={image.img}>
                                        <a href={image.img} style={{width: '100%', display: 'block', height: '100%'}}>
                                            <Image src={image.img} alt={image.caption} />
                                        </a>
                                    </ImageContainer>
                                ))
                            }
                    </ImagesGrid>
                </SRLWrapper>
                }
            </GalleryWrapper>
        </Container>
    );
};


export default GridGallery;