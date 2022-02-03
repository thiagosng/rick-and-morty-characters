import api from '../axios';

export async function getAllCharacter(page) {
    const { data } = await api.get(`character/?page=${page}`);
    return data;
}

export async function getCharacterById(id) {
    const { data } = await api.get(`character/${id}`);
    return data;
}

export async function getCharacterByName(name, page) {
    const { data } = await api.get(`character/?name=${name}&page=${page}`);
    return data;
}


export default function characterServices() {
    return {
        getAllCharacter,
        getCharacterById,
        getCharacterByName
    }
}