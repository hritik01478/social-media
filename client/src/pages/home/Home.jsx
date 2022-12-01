import { ProfileSide } from "../../components/profileSide/ProfileSide.jsx"
import "./home.css"
export const Home = () => {
  return (
      <div className='Home'>
          <ProfileSide />
        <div className="postSide">Posts</div>
        <div className="rightSide">RightSide</div>
    </div>
  )
}
