const Card = (props) => {
    const bg = props.bg
    return (
    <div className="p-3 w-full h-full">
        <div className="relative sm:max-w-xl sm:mx-auto h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform sm:skew-y-0 -rotate-3 rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-5 bg-cover bg-center h-full" style={{ backgroundImage:`url(${bg})` }}>
                {props.children}
            </div>
        </div>
    </div>
    )
}
export default Card