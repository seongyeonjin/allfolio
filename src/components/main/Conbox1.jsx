import React from 'react';
import { useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import PopupHome from '../../Pages/Popup/PopupHome';

const Conbox1 = ({item}) => {
    const { category, id ,title,likes, name, tumImg, proImg} = item
    const [isOpen , setIsopen] = useState(false)
    const openPopup=()=>[
        setIsopen(true)
    ]
    return (
        <>
            <li onClick={ openPopup }>
                <img src={tumImg} />

                <span className="cateName">{category}</span>
                <p>{title}</p>
                <div>
                    <p className="thum">
                        <img src={proImg} alt="" />
                        <span>{name}</span>
                    </p>
                    <i><FaHeart /><span>{likes}</span></i>
                </div>
            </li>
            { isOpen && <PopupHome setIsopen={setIsopen} item={item}/> }
        </>
    );
};

export default Conbox1;