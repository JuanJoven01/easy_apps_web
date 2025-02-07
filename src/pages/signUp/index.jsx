import Header from '../../Components/header'
import SignUpComponent from '../../Components/signup'


const SignUpPage = () => {

    return (
        <div className=' backdrop-blur-3xl'>
            <Header
                title="Sign Up"
                subtitle="Just One Sign Up"
                description="A single Sign-Up for all our apps, with this user you can enter each of our applications."
            />
            <SignUpComponent />
        </div>

    )
}

export default SignUpPage