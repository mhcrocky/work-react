import './index.scss'

const HomePage = () => {
  return (
    <div>
        <div className="fixed-nav">
            <button>Login </button>
            <button>Register </button>
        </div>
        <div className="background">
            <div className="elementsWrapper">
                <div className="piece blur" >
                    <div className="title">
                        <span className="text">About Us</span>
                    </div>
                    <div className="desc">
                        <button>About Us</button>
                    </div>
                </div>
                <div className="piece contrast" >
                    <div className="title">
                        <span className="text">Projects</span>
                    </div>
                    <div className="desc">
                        <button >Projects</button>
                    </div>
                </div>
                <div className="piece hue-rotate" >
                    <div className="title">
                        <span className="text">Members</span>
                    </div>
                    <div className="desc">
                        <button >Members</button>
                    </div>
                </div>
                <div className="main">
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage