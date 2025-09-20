import "./Header.css";

export default function Header () {
    return (
        <header className="header container">

            <div className="header__content-div">

                <div className="header__logo-text">
                    ShopMarket!
                </div>
                <div className="header__div-text">
                    <span>380 992 302 229</span>
                    <li className="header__contact">
                        <ul>facebook</ul>
                        <ul>Viber</ul>
                        <ul>telegram</ul>
                    </li>
                </div>

            </div>

        </header>
    )
}