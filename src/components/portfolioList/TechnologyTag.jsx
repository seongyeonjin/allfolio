import React from 'react';
import { useSelector } from 'react-redux';
import { TechnologyTegWrap } from './PortfolioListStyle';
import { useDispatch } from 'react-redux';


const TechnologyTag = () => {
    const {technologyData} = useSelector(state => state.mypage)
    const dispatch = useDispatch()
    return (
        <TechnologyTegWrap>
            {technologyData.map(item => <li key={item.id} className={item.isOn && 'on'} >
                {item.technology}
            </li>)}
        </TechnologyTegWrap>
    );
};

export default TechnologyTag;