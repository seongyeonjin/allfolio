import React from 'react';
import { PortfolioAddWrap } from './PortfolioListStyle';

// import DatePickerBox from '../mypage/datePicker/DatePickerBox';
import Technology from './Technology';
import TechnologyTag from './TechnologyTag';
import Datepicker from './Datepicker';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../store/modules/mypageSlice';

const PortfolioAdd = ({setIsOpen , isOpen}) => {
    const [portfolio, setPortfolio] = useState({tumImg:'', category:'',name:'',proImg:'',likes:Number() ,title:'', portfolioURL:'', detail:'', date:'' })
    const { thumbImg, portfolioData } = useSelector(state => state.mypage)
    const { tumImg, category, name, proImg, likes, title, portfolioURL, date, detail} = portfolio
    const dispatch = useDispatch()
    console.log(portfolioData)
    const changeForm = e => {
        const {name, value} = e.target
        setPortfolio({
            ...portfolio,
            [name]:value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(onAdd(portfolio))
        setIsOpen(false)
    }
    return (
        <PortfolioAddWrap>
            <div className={isOpen ? 'bg' : 'bg off'} onClick={()=>setIsOpen(false)} ></div>
            <form onSubmit={onSubmit}>
               <h2>포트폴리오</h2> 
               <h3>썸네일 선택</h3>
               <div className="con1">
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg"  />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg1.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg2.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg3.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg4.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg5.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg6.png" alt="" />
                    </label>
                </p>
                <p>
                    <input type="radio" name="thumbImg" id="thumbImg" />
                    <label htmlFor="thumbImg">
                        <img src="/images/project/projectImg1.png" alt="" />
                    </label>
                </p>
               </div>
               <h3>프로젝트 명</h3>
               <div className="con2">
                <input type="text" name="title" id="" placeholder='프로젝트 명을 입력하세요' onChange={changeForm}/>
               </div>
               {/* <h3>프로젝트 기간</h3>
               <div className="con3">
                <Datepicker />
               </div> */}
               <h3>프로젝트 기술 스택</h3>
               <section className="con4">
                <Technology />
                <Technology />
                <TechnologyTag />
               </section>
               <h3>URL</h3>
               <div className="con5">
                <input type="text" name="portfolioURL" placeholder='프로젝트를 확인할 수 있는 URL을 입력하세요(ex.http://www.xxx.com)' onChange={changeForm} />
               </div>
               <h3>프로젝트 소개</h3>
               <div className="con6">
                <textarea name="detail" id="" cols="30" rows="10" placeholder='프로젝트를 소개해주세요'></textarea>
               </div>
               <p>
                    <button type="submit">등록</button>
                    <button onClick={()=>setIsOpen(false)}>취소</button>
               </p>
            </form>
        </PortfolioAddWrap>
    );
};

export default PortfolioAdd;