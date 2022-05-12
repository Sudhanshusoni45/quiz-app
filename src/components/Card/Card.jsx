import "./Card.css";
const Card = ({ image, title }) => {
  return (
    <div className="basic-card">
      <div className="upperSection">
        <img
          src={image}
          alt="marvel-characters"
          className="card_image object_fit_cover"
        />

        <div className="upperContent">
          <h2>{title}</h2>
          <h3>Author</h3>
        </div>
        <div className="details">
          <p>Text Content</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
