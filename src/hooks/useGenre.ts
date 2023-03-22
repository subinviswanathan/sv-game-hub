import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

const useGenre = () => useData<Genre>('/genres');

export default useGenre;