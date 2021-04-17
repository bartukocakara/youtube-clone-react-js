import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';
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
    "Java Tutorial"
];

const CategoryBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch();

    const handleClick = value => {
        setActiveElement(value)
        if(value === "All"){
            dispatch(getPopularVideos())
        }
        else {
            dispatch(getVideosByCategory(value))
            }
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
