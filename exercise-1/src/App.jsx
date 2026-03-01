import Header from "./components/Header.jsx"
import Scores from "./components/Scores.jsx"
import { HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS, ENGLISH_RESULTS } from "./data.js"


function App() {
  return (
    <>
        <div>
          <Header batchName="(fake batch name)" />
        </div>

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="Java" courseResults={JAVA_RESULTS} />
        <Scores courseName="Python" courseResults={PYTHON_RESULTS} />
        <Scores courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </>
  );
}

export default App;
