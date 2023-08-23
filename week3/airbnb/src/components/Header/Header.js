import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <Link className="header-icon" to="/">
          {/* img가 public폴더에 있을 때는 import하지 않고 공용URL을 만들어 이미지를 불러옴 */}
          <img
            className="header__icon"
            src={process.env.PUBLIC_URL + "/images/logos/logo.png"}
            alt="logo"
          />
        </Link>
        <div className="header__choice">
          <button class="button-where">어디든지</button>
          <button class="button-where">언제든 일주일</button>
          <button class="button-where">게스트 추가</button>
          <div className="search">
            <img
              className="button-search"
              src={process.env.PUBLIC_URL + "/images/logos/search.png"}
              alt="search"
            />
          </div>
        </div>
        <div className="header__right">
          <div className="bethehost">당신의 공간을 에어비앤비하세요</div>
          <img
            className="header__language"
            src={process.env.PUBLIC_URL + "/images/logos/language.png"}
            alt="language"
          />
          <div className="header__user">
            <img
              className="menu__icon"
              src={process.env.PUBLIC_URL + "/images/logos/menu.png"}
              alt="menu"
            />
            <img
              className="user__icon"
              src={process.env.PUBLIC_URL + "/images/logos/user.png"}
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
