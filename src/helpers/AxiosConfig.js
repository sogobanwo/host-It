import axios from "axios";

//Axios instance
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    
});
export default axiosInstance

