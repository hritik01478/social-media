import './trendCard.css'
import {TrendData} from '../../data/trendData'

export const TrendCard = () => {
  return (
      <div className='trendCard'>
          <h3>Trends for you</h3>
          {TrendData.map((trend, id) => {
              return (
                  <div className="trend">
                      <span>#{trend.name}</span>
                      <span>{ trend.shares}k shares</span>
                  </div>
              )
          })}
    </div>
  )
}
