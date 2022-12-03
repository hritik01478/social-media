import './navIcons.css'
import { UilSetting } from '@iconscout/react-unicons'
import Comment from '../../img/comment.png'
import Notification from '../../img/noti.png'
import Home from '../../img/home.png'


export const NavIcons = () => {
  return (
      <div className='NavIcons'>
          <img src={Home} alt="" />
          <UilSetting />
          <img src={Notification} alt="" />
          <img src={Comment} alt="" />
    </div>
  )
}
