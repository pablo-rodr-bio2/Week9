import { useEffect, useState } from 'react'

const URL = 'https://rickandmortyapi.com/api/episode'

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }

export const useCardData = () => {

    const [episodes, setEpisodes] = useState<Episode[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            const data = await response.json()
            setEpisodes(() => data.results)
        }
        setLoading(true)
        fetchData()
        setLoading(false)

    }, [])
    return {  episodes, loading }
}
