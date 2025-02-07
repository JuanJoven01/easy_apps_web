import axios from "axios";


const resendCodeAPI = async  (email) => { 

    try {        
        const response = await axios({
            method: 'post',
            url: '/api/easy_apps/users/resend_code',
            data: {
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    email: email,
                    },
                id: new Date().getTime(), // unique id for the request
                }
        })
        return response.data.result
    } catch (e) {
        return {
            'error': 'Error on request',
            'message' : e.message
        }
    }
}

export default resendCodeAPI