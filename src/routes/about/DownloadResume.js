import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Twinkle Vyas Resume.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Twinkle Vyas Resume">
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
