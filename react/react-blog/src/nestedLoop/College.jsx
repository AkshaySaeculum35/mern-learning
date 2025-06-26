import Student from "./Student";

const College = ({ college }) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",

        margin: "20px",
        color: "#000",
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <li>
          <Student student={college.student} />
        </li>
      </ul>
    </div>
  );
};
export default College;
