import './profileSide.css'
import { LogoSearch } from '../logoSearch/LogoSearch'
import { ProflieCard } from '../profileCard/ProfileCard'
import { FollowersCard } from '../followersCard/FollowersCard'

export const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProflieCard />
      <FollowersCard />
    </div>
  )
}
