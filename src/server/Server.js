import axios from "axios"

const url = "https://reqres.in/api/"

export const getApi = (endpoint, success, error) => {
    axios.get(`${url}${endpoint}`,).
        then((resp) => {
            success(resp.data.data)
        }).catch((error) => {
            error(error)
        })
}