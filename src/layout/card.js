import img from '../img/bg_1.jpg'

const Card = (props) => {
    const bg = props.bg
    return (
    <div className="p-3">
        <div className="relative sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-cover bg-center" style={{ backgroundImage:`url(${bg?bg:img})` }}>
                
            </div>
        </div>
    </div>
    )
}
export default Card