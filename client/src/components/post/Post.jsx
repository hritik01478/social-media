import './post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { UilEllipsisH } from '@iconscout/react-unicons'
import img1 from "../../img/profileImg.jpg"
import { Comments } from '../comments/Comments'
import { useState } from 'react'

export const Post = ({ data }) => {
  
  const [commentOpen, setCommentOpen] = useState(false)
  return (
      <div className='Post'>
          <div className="user">
              <div className="userInfo">
                  <img src={img1} alt="" />
                  <div className="userDetails">
                      <span>Hritik Kumar</span>
                      <span>1 min ago</span>
                  </div>
              </div>
              <UilEllipsisH />
          </div>
          <div className="PostContent">
            <p className="postDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui cum dolore, aut architecto commodi saepe veniam delectus? Veniam, fuga!
            </p>
            <img src={data.img} alt="" />
          </div>

          <div className="postReact">
              <div className="postReactItem">
                <img src={data.liked? Heart : NotLike} alt="" />
                <span>{ data.likes} likes</span> 
              </div>
              <div className="postReactItem" onClick={()=>setCommentOpen(!commentOpen)}>
                  <img src={Comment} alt="" />
                <span>{ data.likes} comments</span> 

              </div>

              <div className="postReactItem">
                  <img src={Share} alt="" />
                <span>{ data.likes} share</span> 
                  
              </div>
                      
      </div>
      {commentOpen && <Comments />}
    </div>
  )
}
