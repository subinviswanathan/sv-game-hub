import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";


interface Response<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    console.log(deps ? deps : []);
    console.log({ ...requestConfig });

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<Response<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        // .finally(() => setLoading(false))

        return () => controller.abort();
    }, deps ? deps : []);

    return {
        data,
        error,
        isLoading
    };
};

export default useData;