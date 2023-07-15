import hofburgImg from '../assets/img/hofburg.jpg'
import hofgartenImg from '../assets/img/hofgarten.jpg'
import ambrasImg from '../assets/img/ambras.jpg'
const Gallery = () => {
  return (
    <section class="gallery container">
      <h2>Галерея</h2>
      <p>Впрочем, кроме спусков на лыжах, здесь хватает удивительных мест.</p>
      <ul class="gallery-list">
        <li class="gallery-item">
          <h3>Имперский дворец</h3>
          <img src={hofburgImg} alt="Имперский дворец" />
        </li>
        <li class="gallery-item">
          <img src={hofgartenImg} alt="Парк Хофгартен" />
          <h3>парк Хофгартен</h3>
        </li>
        <li class="gallery-item">
          <h3>Замок Абрам</h3>
          <img src={ambrasImg} alt="Замок Абрам" />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
