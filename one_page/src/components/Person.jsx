import style from '../style/Person.module.scss'

import person1 from '../assets/images/Ellipse 1.png'
import person2 from '../assets/images/Ellipse 2.png'
import person3 from '../assets/images/Ellipse 3.png'
import person4 from '../assets/images/Ellipse 4.png'

function Person(props){
    const persons = [{
        image:person1,
        name:'John Harbinger',
        text:'”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter.'},
    {
        image:person2,
        name:'Peter Parker',
        text:'“Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John”'},
    {
        image:person3,
        name:'Elise Li',
        text:'“Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt.”'},
   {
        image:person4,
        name:'Morten Nate',
        text:'“Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude.”'},

]
    return (
        <div className={style.personContainer}>
            <h2 id="team" className={style.title}>MØD HOLDET</h2>
 <section className={style.personGrid}>
            
            {persons.map((item, index) => (
                <div key={index} className={style.personCard}>
                    <img src={item.image} className={style.personImage} alt={item.name} />
                    <p className={style.personName}>{item.name}</p>
                    <p className={style.personText}>{item.text}</p>
                </div>
            ))}
        </section>
        </div>
    )
}

export default Person