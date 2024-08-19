import Card from "./Card"
import style from '../style/Card.module.scss'


function Main(){
    const arr =[{
        title:'Familieret',
        textContent:'Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.',
        },

        {
        title: 'Ejendomsret',
        textContent: `Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej.
         Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der 
         solgte dig det.`
        },
        {
        title:'Konkurs',
        textContent:`Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. 
        Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp`
        },
        {
        title:'Selskabsret',
        textContent:`Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab?
         Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.`
        }

    ]
    return (
        <div className={style.cardContainer}>
    {arr.map((item, index) => 
    
      (<Card key={index} >
        <div className={style.cardStyle}>
        <figure>
        <h2>{item.title}</h2>
        <p>{item.textContent}</p> 
        </figure>
        </div>
      </Card>
    ))}
    </div>
    );
}

export default Main