const Total = ({ course }) => {
    var total = course.parts.reduce((sum, exercise) => sum + exercise.exercises, 0);

    console.log(total)
    return( 
        <h3>Total Number of exercise {total}</h3>
    )
}



export default Total;
