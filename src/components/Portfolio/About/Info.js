import profile_pic from "../../../assets/images/profile.jpg";
import {
  FaLinkedinIn,
  FaGithub,
  FaKaggle,
  FaTwitter,
  FaMediumM,
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <img className="profile-pic" src={profile_pic} />
      <div className="about-me">
        <h1>Yajat Malhotra</h1>
        <br />
        <p>
          Hey there! I am freshman at Vellore Institute of
          Technology. My career aspiration is to provide digital solutions for
          real-life human and business problems utilizing my knowledge in AI and
          Machine Learning, and Android Development. Other than tech, I enjoy
          photography and film-making.
        </p>
        <br />
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://linkedin.com/in/iamyajat"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-icon"
            href="https://github.com/iamyajat"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon"
            href="https://kaggle.com/iamyajat"
            target="_blank"
          >
            <FaKaggle />
          </a>
          <a
            className="social-icon"
            href="https://iamyajat.medium.com"
            target="_blank"
          >
            <FaMediumM />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/iamyajat"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
