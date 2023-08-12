import "./Header.css";
import logo from "../../assets/images/logos/logo.png";
import language from "../../assets/images/logos/language.png";
import search from "../../assets/images/logos/search.png";

function Header() {
  return (
    <div className="header">
      <img className="header__icon" src={logo} alt="logo" />
      <div className="header__choice">
        <button class="button-where">어디든지</button>
        <button class="button-where">언제든 일주일</button>
        <button class="button-where">게스트 추가</button>
        <div className="search">
          <img className="button-search" src={search} alt="search" />
        </div>
      </div>
      <div className="header__right">
        <div className="bethehost">당신의 공간을 에어비앤비하세요</div>
        <img className="header__language" src={language} alt="language" />
        <div className="user"></div>
      </div>
    </div>
  );
}

export default Header;
