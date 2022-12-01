import "./logoSearch.css";
import Logo from '../../img/logo.png';

export const LogoSearch = () => {
  return (
      <div className="LogoSearch">
          <img src={Logo} alt="" />
          <div className="Search">
              <input type="text" placeholder="#Explore" className="search_input"/>
              <button className="search_btn"></button>
          </div>
    </div>
  )
}
