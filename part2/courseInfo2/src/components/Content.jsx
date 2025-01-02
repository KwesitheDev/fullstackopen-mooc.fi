const Content = ({ props }) =>{
    return (
        <>
            {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </>
    )
}

export default Content;