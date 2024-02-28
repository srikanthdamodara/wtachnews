import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img
        style={{ height: "50px", width: "50px" }}
        src={spinner}
        alt="loading"
      />
    </div>
  );
};
export default Spinner;
