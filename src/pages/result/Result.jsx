import { ResultContainer } from "../../components";
import { useResult } from "../../context";
import "./result.css";

const Result = () => {
  const { resultState } = useResult();
  console.log("resultState:", resultState);
  return (
    <>
      <div className="result_page_container">
        <h1>Results are here</h1>
        {resultState ? (
          resultState.map((item, index) => (
            <ResultContainer result={resultState[index]} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export { Result };
