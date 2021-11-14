import React from "react";
import ImageToggleOnMouseOver from "../components/ImageToggleOnMouseOver";

const ImageChangeOnHover = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8="
                secondaryImg="https://us.123rf.com/450wm/rido/rido1907/rido190700122/127284879-portrait-of-handsome-young-man-in-casual-denim-shirt-keeping-arms-crossed-and-smiling-while-standing.jpg?ver=6" >
            </ImageToggleOnMouseOver>
            <ImageToggleOnMouseOver 
                primaryImg="https://us.123rf.com/450wm/rido/rido1907/rido190700122/127284879-portrait-of-handsome-young-man-in-casual-denim-shirt-keeping-arms-crossed-and-smiling-while-standing.jpg?ver=6" 
                secondaryImg="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=" >
            </ImageToggleOnMouseOver>
        </div>
    );
};

export default ImageChangeOnHover;