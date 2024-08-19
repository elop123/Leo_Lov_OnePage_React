 import style from '../style/Footer.module.scss'
 
 function Footer(){
     const footerProps = [{
         h3:'Adresse',
         p1:'Find os her:',
         p2:'Maldive rd. 22',
         p3:'Seychelle Islands'}, 
        
         {
             h3:'Kontakt',
             p1:'Kontakt os her',
             p2:'Tlf: 0192 3023',
             p3:'email@mail.dk',
             },
             {h3:'Politik',
             p1:'Vores politikker',
             p2:'Privatslivpolitik',
             p3:'Cookiepolitik',
             p4:'Generalle betingelse '
             },
             {h3:'Sociale Media',
                
               
                },


         ]
     return (
         <div className={style.footerContainer}>
            {footerProps.map((item, index) => (
            
             <div key={index} className={style.footerStyle}>
                 <h3>{item.h3}</h3> 
                 <p>{item.p1}</p><br/>
                 <p>{item.p2}</p>
                 <p>{item.p3}</p>
                 <p>{item.p4}</p>
              </div>
            ))}
             </div>

);
}


 export default Footer;