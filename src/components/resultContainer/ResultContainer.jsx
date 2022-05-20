import "./resultContainer.css";
const ResultContainer = ({ result }) => {
  console.log("result:", result);
  const { answer, selectedOption } = result;
  return (
    <>
      <div className="result_container">
        <p>{result.question}</p>
        {result.options.map((item) => (
          <div
            className={`${
              item === selectedOption ? "selected_option_background" : null
            } ${item === answer ? "answer_background" : null} result_option`}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export { ResultContainer };
