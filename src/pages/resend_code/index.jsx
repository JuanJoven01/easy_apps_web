import Header from '../../Components/header'
import ResendCodeComponent from '../../Components/resendCode'

const ResendCodePage = () => {

    return (
        <div className=' backdrop-blur-3xl'>
            <Header
                title="Resend Code"
                subtitle="Request a new code via Email"
                description="If your code did not arrive or has already expired, you can request a new one here. Remember that the code expires after 2 hours if it is not used."
            />
            <ResendCodeComponent />
        </div>

    )
}

export default ResendCodePage