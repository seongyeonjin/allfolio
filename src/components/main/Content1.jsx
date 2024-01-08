import Category from "../category/Category";
import { MainCon } from "./ContentStyle";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getGallerys1, getGallerys2 } from '../../store/modules/gallerySlice';
import GalleryItem from "./GalleryItem";
import { portfolioData } from "../../assets/api/portfolioData";
import { changeLoc } from '../../store/modules/HomeSlice';
import Conbox1 from "./Conbox1";
const Content1 = () => {
    const { text1, text2, loading, loading1 } = useSelector( state => state.galleryR )
    const { portfolioData } = useSelector(state => state.HomeR)
    const dispatch  = useDispatch()
    
    useEffect( () => {       
        dispatch( getGallerys1(text1) )
        dispatch( getGallerys2(text2) )
    } ,[]) 

    const [loc, setLoc] = useState(location)
    useEffect(()=>{
        dispatch(changeLoc('mainPage'))
    },[])
   
    return (
        <MainCon>
            <div className="inner">
                <h2 className="tit">국내 최고의 포트폴리오를 만나보세요!</h2>
                <Category/>
                <div className="mainPort">
                    <ul>
                        {/* {
                           !loading && !loading1 &&  portfolioData.map(item => <GalleryItem key={item.id} item ={item}  />)                        
                        } */}
                        {
                            portfolioData.map(item => <Conbox1 key={item.id} item={item} />)
                        }
                    </ul>
                </div>
            </div>
        </MainCon>
    );
};
export default Content1;