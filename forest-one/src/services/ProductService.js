import { API_PATH } from '../helpers/Api';

export const getAvailableCardProducts = async () => {
    return await fetch(`${API_PATH}/product`)
        .then(res => res.json())
}