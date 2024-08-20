import style from '../style/Map.module.scss'
import map_img from '../assets/images/leolov-location.png'

function Map(){
    const map ={
        image:map_img,
        title:'HER BOR VI',
        text1:'Vi har valgt at bosætte os i solen!',
        text2:'Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget. ',
        text3:'"Hvis du har råd til at tage til Sechellerne har du råd til os”. Det er et af vores utallige motto´er."',
        adress1:'Leo-Lov Aps',
        adress2:' Maldive rd. 22',
        adress3:'Seychelle Islands'
    }
    return(
        <>
         <div className={style.mapStyle}>
                    <div className={style.imageContainer}>
                        <img src={map.image} alt="img" />
                    </div>
                    <div className={style.textContainer}>
                        <h2>{map.title}</h2>
                        <p>{map.text1}</p>
                        <p>{map.text2}</p>
                        <p>{map.text3}</p>
                        <address>{map.adress1} <br/>
                        {map.adress2}<br/>
                        {map.adress3}<br/></address>
                        
                    </div>  
        </div>
        </>
    )
}

export default Map