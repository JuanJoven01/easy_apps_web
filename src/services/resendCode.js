import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const resendCodeAPI = async  (email) => { 

    try {        
        const response = await axios({
            method: 'post',
            url: `${apiUrl}/easy_apps/users/resend_code`,
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