import weatherImg from '../assets/img/weather.png'
const About = () => {
  return (
    <article className="about container">
      <h2>О городе</h2>
      <section className="about-info">
        <h3>Инсбрук-один из лучших горнолыжных курортов Австрии</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto
          pariatur, sapiente saepe illo rerum beatae alias enim in veritatis
          aliquid repellendus ipsam distinctio aspernatur eveniet vero laborum
          cupiditate at?
        </p>
      </section>
      <div className="wrapper">
        <section className="about-numbers">
          <h3>Инсбрук в цифрах</h3>
          <ul className="about-numbers-list">
            <li>Население: чуть более 130 000 человек</li>
            <li>Часовой пояс:UTC+1 зимой и UTC+2</li>
            <li>Население: чуть более 130 000 человек</li>
            <li>Часовой пояс:UTC+1 зимой и UTC+2</li>
            <li>Население: чуть более 130 000 человек</li>
            <li>Часовой пояс:UTC+1 зимой и UTC+2</li>
          </ul>
        </section>
        <aside className="marketing">
          <p>Собрался на горнолыжный курорт?</p>
          <p>-Не забудь купить снаряжение !</p>
          <a href="ski-racer.com">ski-racer.com</a>
        </aside>
      </div>

      <section className="about-weather">
        <h3>Температура по месяцам</h3>
        <figure className="about-weather-graph">
          <img
            src={weatherImg}
            width="1198"
            height="721"
            alt="График изменения температуры"
          />
          <figcaption>
            Температура воздуха в Инсбруке днем и ночью,&#176;C
          </figcaption>
        </figure>
      </section>
    </article>
  );
};

export default About;
