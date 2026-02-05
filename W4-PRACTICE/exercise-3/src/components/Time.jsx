function Time() {
    let date = new Date().toLocaleTimeString() + " " + "PM"
    return(
        <h2>
            {date}
        </h2>   
    );
}

export default Time;