import Header from '../../Components/header'
import AppsList from '../../Components/appsList'

const MainPage = () => {

    return (
        <div className=' backdrop-blur-3xl'>
            <Header
                title="Easy Apps"
                subtitle="The Easier Way"
                description="Easy Apps is a set of management applications designed to simplify your daily tasks, offering intuitive tools that make it easy to organize and control your activities without unnecessary complications."
            />
            <AppsList/>
        </div>

    )
}

export default MainPage