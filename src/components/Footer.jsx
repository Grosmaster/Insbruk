import twitterImg from '../assets/img/twitter.svg'
import fbImg from '../assets/img/fb.svg'
import youtubeImg from '../assets/img/youtube.svg'
const Footer = () => {
  return (
    <div class="footer-wrapper">
      <footer class="page-footer container">
        <p class="hastag">&#35;visitinnsbruck</p>

        <ul class="footer-social">
          <li>
            <a class="social-button" href="#">
              <img src={twitterImg} alt="твиттер" />
            </a>
          </li>
          <li>
            <a class="social-button" href="#">
              <img src={fbImg} alt="фейсбук" />
            </a>
          </li>
          <li>
            <a class="social-button" href="#">
              <img src={youtubeImg} alt="ютуб" />
            </a>
          </li>
        </ul>

        <p class="copyright">&#169; 2020 foxart</p>
      </footer>
    </div>
  );
};

export default Footer;
