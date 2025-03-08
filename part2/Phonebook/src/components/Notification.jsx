const Notification = ({ message, notificationStyle
    
 }) => {
    if (message === null) {
        return null
    }
    return(
        <div className="error" style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification