import {Card,Appbar} from '@layout'

const Dashboard = () => {
    return (
    <div>
        <Appbar title={'dashboard'}/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 px-40 pt-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}

export default Dashboard