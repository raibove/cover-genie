import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Made by{" "}
        <a
          href=" https://www.linkedin.com/in/shweta-kale/"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          Shweta Kale
        </a>{" "}
        for{" "}
        <a
          href="https://hashnode.com/hackathons/apihackathon?source=hackathon-feed-widget"
          rel="noreferrer"
          target="__blank"
          className="footer-link"
        >
          Hashnode API Hackathon
        </a>{" "}
        
      </p>
    </div>
  );
};

export default Footer;
