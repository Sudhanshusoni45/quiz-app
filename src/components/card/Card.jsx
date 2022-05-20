import { useNavigate } from "react-router-dom";
const Card = ({ coverImage, title, quizId, description }) => {
  const Navigate = useNavigate();

  return (
    <div className="basic-card" onClick={() => Navigate(`quiz/${quizId}`)}>
      <div className="upperSection">
        <img
          src={coverImage}
          alt={title}
          className="card_image object_fit_cover"
        />

        <div className="upperContent">
          <h2>{title}</h2>
        </div>
        <div className="details">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export { Card };
