import style from '../style/Section.module.scss'
import image2 from '../assets/images/armando-arauz-v_BWg0OnFmk-unsplash.jpg'
import image3 from '../assets/images/brock-wegner-o4jSaomEvJk-unsplash.jpg'

function Section({title, description, image}){

    const sections = [
        {
          title: "INTET PROBLEM",
          description: "Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.",
          text:'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!',
          image :image3
        },
        {
            title: "EVIG GARANTI",
            description: "Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.",
            text:'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!',
            image :image2
          }

      ];
    return (
        <section  id="about" className={style.sectionStyle}>
            {sections.map((section, index) => (
                <div key={index} className={style.section}>
                    <div className={style.section_image}>
                        <img src={section.image} alt="img" />
                    </div>
                    <div className={style.section_text}>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        <p>{section.text}</p>
                    </div>  
                </div>
            ))}
        </section>
    );
}
export default Section