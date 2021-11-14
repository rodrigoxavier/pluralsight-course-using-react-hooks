import React, {useEffect, useRef, useState} from "react"

const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {

    const [inView, setInView] = useState(false);

    const imageRef = useRef(null);

    const isInVivew = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const scrollHandler = () => {
        setInView(isInVivew());
    }


    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        setInView(isInVivew());
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <img src={inView? primaryImg : secondaryImg} ref={imageRef}></img>
    )
}

export default ImageToggleOnScroll;