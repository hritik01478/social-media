import { PostSide } from "../../components/postSide/PostSide.jsx"
import { ProfileSide } from "../../components/profileSide/ProfileSide.jsx"
import "./home.css"
export const Home = () => {
  return (
    <div className='Home'>
      <ProfileSide />
      <PostSide />
        <div className="rightSide">RightSide</div>
    </div>
  )
}
