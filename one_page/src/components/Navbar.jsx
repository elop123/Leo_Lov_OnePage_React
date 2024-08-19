import style from "../style/Navbar.module.scss"

function Navbar(){
    return (
        <>
        <nav className={style.navStyle}>
            <ul>
                <li><a href="#">Hjem |</a></li>
                <li><a href="#">Advokaterne |</a></li>
                <li><a href="#">Om LeoLov |</a></li>
                <li><a href="#">Kontakt |</a></li>
            </ul>
            <h2><span>Leo</span>-Lov</h2>   
        </nav>
        </>
    )
}

export default Navbar