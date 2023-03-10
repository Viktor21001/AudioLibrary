import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const createAudio = async (audio) => {
    const {data} = await $authHost.post('api/audio', audio)
    return data
}

export const fetchAudios = async (categoryId, page, limit= 8) => {
    const {data} = await $host.get('api/audio', {params: {
            categoryId, page, limit
        }})
    return data
}

export const fetchSearch = async (name, page, limit= 8) => {
    const {data} = await $host.get('api/audio', {params: {
            name, page, limit
        }})
    return data
}

export const fetchPrice = async (price, page, limit= 8) => {
    const {data} = await $host.get('api/audio', {params: {
            price, page, limit
        }})
    return data
}

export const fetchOneAudio = async (id) => {
    const {data} = await $host.get('api/audio/' + id)
    return data
}
