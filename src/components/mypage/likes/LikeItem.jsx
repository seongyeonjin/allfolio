import React from 'react';

const LikeItem = ({item}) => {
    const { id, name, title, likes, category,tumImg,proImg} = item
    return (
        <li>
            <img src={tumImg} alt="" />
            <div>
                <img src={proImg} alt="" />
                <p>{title}</p>
            </div>
        </li>
    );
};

export default LikeItem;