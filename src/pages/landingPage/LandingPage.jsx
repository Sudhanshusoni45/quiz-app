import { dc, marvel } from "../../assets";
import { Card } from "../../components";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage_container">
        <Card quizId={1} image={marvel} title={"MARVEL"} />
        <Card quizId={2} image={dc} title={"DC"} />
      </div>
    </>
  );
};

export { LandingPage };
