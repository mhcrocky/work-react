const Index = (props) =>{

    return (
        <div className={`piece ${props.className}`} >
            <div className={`title title-${props.className}`}>
                <span className={`text  text-${props.className}`}>{props.title}</span>
            </div>
            <div className={`desc desc-${props.className}`}>
                {props.children}
            </div>
        </div>
    )
}
export default Index