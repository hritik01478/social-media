import './navbar.css'
import {UilEstate} from '@iconscout/react-unicons'
import {UilApps} from '@iconscout/react-unicons'
import {UilSearch} from '@iconscout/react-unicons'
import {UilEnvelope} from '@iconscout/react-unicons'
import {UilUser} from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import ProfileImage from '../../img/profileImg.jpg'

export const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="left">
              <span>hritikSocial</span>
              <UilEstate />
              <UilApps />
              <div className="navSearch">
                  <UilSearch />
                  <input type="text" placeholder='#Explore'/>
              </div>
          </div>
          <div className="right">
              <UilUser />
              <UilEnvelope />
              <UilBell />
              <div className="navUser">
                  <img src={ProfileImage} alt="" />
                  <span>Hritik Kumar</span>
              </div>
          </div>
    </div>
  )
}
