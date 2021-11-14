import React, {useRef} from "react"

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    return (
        <img src={primaryImg} 
        onMouseOver={() => {
            imageRef.current.src = secondaryImg;
        }} 
        onMouseOut={() => {
            imageRef.current.src = primaryImg;
        }}
        ref={imageRef}></img>
    )
}

export default ImageToggleOnMouseOver;