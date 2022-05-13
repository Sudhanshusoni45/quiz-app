import { useNavigate } from "react-router-dom";
import "./card.css";
const Card = ({ image, title, quizId }) => {
  const Navigate = useNavigate();

  return (
    <div className="basic-card" onClick={() => Navigate(`quiz/${quizId}`)}>
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
