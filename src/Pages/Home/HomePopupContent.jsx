import { MainPopup , MainContentWrapper, MainPopupWrap} from './HomePopupStyle';
import { FaHeart, FaCommentAlt, FaCommentDots, FaFolder, FaShare,FaPlus } from "react-icons/fa";
import { IoEyeSharp,  IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addComment } from '../../store/modules/PopupHomeSlice';
import { MdOutlineEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const HomePopupContent = ({scrollRef, item}) => {
    const {id,category ,name, title, likes } = item
    const [clickLike, setClickLike] = useState(false)

    const {comments , isliked , isfollow } = useSelector( state => state.popupHome)
    const { gallery1, gallery2 } = useSelector( state => state.galleryR )
    const [user, setUser] = useState({  comment : '' , date:'' })
    const [now, setNow] = useState(new Date())
    const dispatch = useDispatch()
    const changeInput = e =>{
        const {value, name} = e.target
        setUser({
            ...user,
            [name] : value
        })
        console.log(user)
    }
    const { comment , date } = user
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!comment){
            alert('댓글을 입력해주세요')
            return
        }
        user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} `
        dispatch(addComment(user))
        setUser({  comment : ''})
    }
    
    return (
        <div className='Main-PopupWrap'>
            <div className='profile'>
                <p className='proLeft'> 
                    <img src={ gallery2[id-1].largeImageURL }/>
                    <strong>{title}</strong>
                </p>
                <div className='profileName'>
                    <p className='proRight'><em>{name}</em>  ∙  {isfollow ? <em className='following'>팔로잉</em>  : <em className='follow'>팔로우</em> }</p>
                    <p className='proCate'>{category}</p>
                </div>
            </div>
        
            <div className="popup-MainImg">
                <img src={ gallery1[id-1].largeImageURL } alt="" />
            </div>

            <div className='popup-desc'>
                <p>
                    DevOps, 디자인시스템과 클린 코드 아키텍처에 대한 관심이 많은 프론트엔드 개발자입니다.<br/>
                    웹 기술로 더 나은 세상을 만듭니다. UI/UX, 클라우드, 아키텍처, 소프트웨어 테스팅에 관심이 많습니다 :)<br/>
                    제 포트폴리오를 봐주셔서 감사합니다.
                </p>
            </div>
            <div className="liksenCollectionWrap">
                <div className="likseCollectionBtnWrap">
                    <button>
                        <span>좋아요 <i className={isliked ? "on" : ""}> <FaHeart /> </i></span>
                    </button>
                    {/* <button>
                    <FaFolder />
                        <span>컬랙션 저장</span>
                    </button> */}
                </div>
                <p className="title">{title}</p>
                <div className='viewslikesWrap'>
                    <p><IoEyeSharp /><span>132</span></p>
                    <p><FaHeart /><span>{isliked ? (likes ): (likes -1)}</span></p>
                    <p><FaCommentAlt /><span>{comments.length}</span></p>
                </div>
            </div>

            <div className="bottomWrap">
                <img src={ gallery2[id-1].largeImageURL } alt="" />
                <span>{name}</span>
                <div className="btnWrap">
                    {isfollow?  <button> <FaCheck />팔로잉</button>  :  <button> <FaPlus /> 팔로우</button> } 
                    {/* <button><FaCommentDots /> 댓글</button> */}
                </div>
            </div>

            <div className='ShowCommentWrap' ref={scrollRef}></div>
        </div>
        
    
    );
};

export default HomePopupContent;