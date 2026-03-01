function computeStats(numbers) {
if (numbers.length === 0) return { avg: "-", min: "-", max: "-" };
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = (sum / numbers.length).toFixed(1);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return { avg, min, max };
}

function Statistics({ results = [] }) {
    const scores = results.map((r) => Number(r.score) || 0);
    const { avg, min, max } = computeStats(scores);

    return (
        <div className="stats">
            <p>Average: <strong>{avg}</strong></p>
            <p>Min: <strong>{min}</strong></p>
            <p>Max: <strong>{max}</strong></p>
        </div>
    );
}

export default Statistics;
