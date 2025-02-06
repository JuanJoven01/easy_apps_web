import Header from '../../Components/header'
import ActivateUserComponent from '../../Components/activateUser'

const ActivateUserPage = () => {

    return (
        <div className=' backdrop-blur-3xl'>
            <Header
                title="Activate User"
                subtitle="Last Step!"
                description="Please enter your email and the code you received. If the code did not arrive or expired, request it again below."
            />
            <ActivateUserComponent />
        </div>
    )
}

export default ActivateUserPage