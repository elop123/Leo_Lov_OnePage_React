import style from "../style/Navbar.module.scss"

function Navbar(){
    return (
        <>
        <nav className={style.navStyle}>
            <ul>
                <li><a href="#home">Hjem |</a></li>
                <li><a href="#team">Advokaterne |</a></li>
                <li><a href="#about">Om LeoLov |</a></li>
                <li><a href="#map">Kontakt |</a></li>
            </ul>
            <h2><span>Leo</span>-Lov</h2>   
        </nav>
        </>
    )
}

export default Navbar