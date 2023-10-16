import axios from "axios"
import { routes } from "../routes"

export const instanceAxios = axios.create({
    baseURL: "https://plats-quest.vaix.group",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export const hocApiPost = (url, body) => {
    return async () => {
        try {
            const res = await instanceAxios.post(url, body);
            return res;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}