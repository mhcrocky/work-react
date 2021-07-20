import img from '../img/bg_1.jpg'

const Card = () => {
    return (
    <div className="p-3">
        <div className="relative sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-cover bg-center" style={{ backgroundImage:`url(${img})` }}>
                <div className="max-w-md mx-auto">
                    <div>
                        <img src={img} className="h-7 sm:h-8" />
                    </div>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Card