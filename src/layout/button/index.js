const Index = (props) => {
    const bg = props.bg?props.bg:''
    const color = props.color?props.color:'white'
    const borderRadius = props.borderRadius?props.borderRadius:'full'
    const borderColor = props.borderColor?props.borderColor:'white'
    const className = props.className?props.className:''
    
    return(
        <button {...props} className={`flex-shrink-0 bg-${bg} text-${color} text-base font-semibold py-2 px-4 m-2 rounded-${borderRadius} border border-solid	border-${borderColor} shadow-2x1 hover:shadow-lg focus:ring focus:ring-gray-600 focus:ring-offset-1 ${className}`} >
            {props.children}
        </button>

    )
}

export default Index