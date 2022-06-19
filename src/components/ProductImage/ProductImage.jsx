import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    height: 100%;
`;

const Image = styled.img.attrs((props) => ({
    src: props.source 
}))`
    height: 100%;
    width: 100%;
    opacity: ${props => props.opacity || 1};
`;

const Target = styled.img`
    position: absolute;
    left: ${props => props.offset.left}px;
    top: ${props => props.offset.top}px;
    opacity: ${props => props.opacity};
`;

const ProductImage = ({selectedProduct, source}) => {
    const sourceRef = useRef(null);
    const targetRef = useRef(null);
    const containerRef = useRef(null);

    const [opacity, setOpacity] = useState(0);
    const [offset, setOffset] = useState({left: 0, top: 0});


    const handleMouseEnter = () => {
        setOpacity(1);
    }

    const handleMouseLeave = () => {
        setOpacity(0);
    } 

    const handleMouseMove = (e) => {
        const targetRect = targetRef.current.getBoundingClientRect(); 
        const sourceRect = sourceRef.current.getBoundingClientRect(); 
        const containerRect = containerRef.current.getBoundingClientRect(); 

        const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
        const yRatio = (targetRect.height - containerRect.height) / sourceRect.height;

        const left = Math.max(Math.min(e.pageX - sourceRect.left, sourceRect.width), 0);
        const top = Math.max(Math.min(e.pageY - sourceRect.top, sourceRect.height), 0);

        setOffset({
            left: left * -xRatio,
            top: top * -yRatio
        })
    }

    return (
        <Container
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        >
            <Image 
            alt="Product Image" 
            source={source} 
            ref={sourceRef}
            />

            <Target 
            alt="target"
            ref={targetRef}
            src={source}
            offset={offset}
            opacity={opacity}
            />
        </Container>
    );
};


export default ProductImage;