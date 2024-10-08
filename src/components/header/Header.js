import "./style.css"

const Header = () => {
    return ( 
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Timur</em></strong><br />
                  a fullstack developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating.</p>
              </div>
              <a href="https://t.me/t1mkm1t" className="btn">Write to me</a>
          </div>
      </header>
     );
}
 
export default Header;