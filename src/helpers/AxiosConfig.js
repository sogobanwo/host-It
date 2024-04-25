import axios from "axios";

//Axios instance
const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    headers: {
        Accepted: "application/json",
        "Content-Type" : "application/json",
    },
    
});
export default axiosInstance

