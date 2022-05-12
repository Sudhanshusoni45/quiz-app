import { dc, marvel } from "../../assets";
import { Card } from "../../components";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage_container">
        <Card image={marvel} title={"MARVEL"} />
        <Card image={dc} title={"DC"} />
      </div>
    </>
  );
};

export { LandingPage };
