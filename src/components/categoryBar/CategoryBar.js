import React, { useState } from 'react';
import "./_categoryBar.scss";


const keywords = [
    "All",
    "React js",
    "Angular Js",
    "React Native",
    "use of Api",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Basketball",
    "Football",
    "Rock Music",
    "Movie",

];

const CategoryBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const handleClick = (value) => {
        setActiveElement(value)
    }

    return (
        <div className="categoryBar">
            
    {keywords.map((value, i) => (
        <span key={i}
            onClick={() => handleClick(value)}
            className={activeElement === value ? 'active' : ''}
        >{value}</span>  
    ))}


        </div>
    )
}

export default CategoryBar
