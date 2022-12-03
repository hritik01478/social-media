import { Navbar } from "../../components/navbar/Navbar.jsx"
import { PostSide } from "../../components/postSide/PostSide.jsx"
import { ProfileSide } from "../../components/profileSide/ProfileSide.jsx"
import { RightSide } from "../../components/rightSide/RightSide.jsx"
import "./home.css"
export const Home = () => {
  return (
    <div className='Home'>
      <div className="top">
      <Navbar/>

      </div>
      <div className="bottom">
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </div>
  )
}
