import axios, { CanceledError } from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cd2f7da801754a1b8f4b74092038b478'
    }
});

export { CanceledError };