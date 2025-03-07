import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const ActivateUserAPI = async  (email, code) => { 

    try {        
        const response = await axios({
            method: 'post',
            url: `${apiUrl}/easy_apps/users/validate_code`,
            data: {
                jsonrpc: '2.0',
                method: 'call',
                params: {
                    email: email,
                    code: code
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

export default ActivateUserAPI