import './postSide.css'
import {Stories} from '../stories/Stories'
import { PostShare } from '../postShare/PostShare'
import { Posts } from '../posts/Posts'

export const PostSide = () => {
  return (
      <div className='PostSide'>
      <Stories />
      <PostShare />
      <Posts />
    </div>
  )
}
