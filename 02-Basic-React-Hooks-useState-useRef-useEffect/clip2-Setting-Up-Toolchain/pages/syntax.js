import React, {useEffect, useState} from "react";

const Syntax = () => {

    const [checkboxValue, setCheckboxValue] = useState(false);

    useEffect(() => {
        console.log('In useEffect');
        return () => {
            console.log('in useEffect cleanup');
        }
    }, [checkboxValue]);

    return (
        <div></div>
    );

};

export default Syntax;