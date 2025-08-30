const Button = (props) => {
    const styleObj = {
        backgroundColor:"rgba(179, 179, 179, 1)",
        border:"none",
        padding:"10px 15px",
        borderRadius:"5px",
        color:"white",
        cursor:"pointer",
    }
    return(
        <button style={styleObj} onClick={props.clickHandler}>
            {props.text}
        </button>
    )
}
export default Button; 