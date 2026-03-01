import Statistics from "./Statistics.jsx";

function Scores({ courseName = "Course", courseResults = [] }) {

    return (
        <div className="scores">
            <h2 className="scores-title">{courseName}</h2>
            
            <table className="scores-table">
            
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            
            <tbody>
                {courseResults.map((student, index) => (
                <tr key={index}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td className={student.score < 50 ? "warning" : ""}>{student.score}</td>
                </tr>
                ))}
            </tbody>
            
            </table>

            <Statistics results={courseResults} />
        </div>
    );
}

export default Scores;
