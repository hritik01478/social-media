import './posts.css'
import { PostData } from '../../data/PostData.js'
import {Post} from '../post/Post'

export const Posts = () => {
  return (
      <div className='Posts'>
          {PostData.map((post, id) => {
              return <Post data={ post} id={id} />
          })}
      </div>
  )
}
