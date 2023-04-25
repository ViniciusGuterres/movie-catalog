const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1a4084765a33b6a71ba7805dde2a710d';

const apiFetch = async (endPoint) => {
    const req = await fetch(`${API_URL}${endPoint}`);

    return await req.json();
}

const ApiList = {
    getMovieList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await apiFetch(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await apiFetch(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await apiFetch(
                    `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'action',
                title: 'ação',
                items: await apiFetch(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await apiFetch(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await apiFetch(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await apiFetch(
                    `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
                )
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await apiFetch(
                    `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
                )
            },
        ];
    }
};  

export default ApiList;