import { NavIcons } from '../navIcons/NavIcons'
import { TrendCard } from '../trendCard/TrendCard'
import './rightSide.css'

export const RightSide = () => {
  return (
      <div className='RightSide'>
          {/* <NavIcons /> */}
          <TrendCard />
          <button className="button r-button">Share</button>
    </div>
  )
}
