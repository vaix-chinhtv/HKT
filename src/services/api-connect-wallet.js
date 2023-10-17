import axios from "axios"
import { routes } from "../routes"

export const instanceAxios = axios.create({
    baseURL: "https://plats-quest.vaix.group",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "21|LngNp2o6LClZaJbbTuejo3OdITAcc44302qtCot3d687e5ab"
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

export const hocApiGet = (url, body) => {
    return async () => {
        try {
            const res = await instanceAxios.get(url, body);
            return res;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}