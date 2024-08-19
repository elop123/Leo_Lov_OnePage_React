import style from '../style/Header.module.scss'
import image1 from '../assets/images/Rectangle 3.png'

function Header(){
    return (
        <>
        <header>
            <div className={style.imageContainer}>
                <img src={image1} alt="header_image" className={style.image} />
                <div className={style.textStyle}>
                    <h1 className={style.title}><span>Leo</span>-Lov</h1>
                    <p className={style.subtitle}>Lov og ret kan være et plaster. Hvis du eller har knaster!</p>
                </div>
            </div>
            
        </header>
        </>
    )
}

export default Header