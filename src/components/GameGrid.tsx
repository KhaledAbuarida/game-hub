import apiClient from "../services/api-client"
import { useEffect, useState } from "react"

interface Game {
    id: number,
    name: string
}

interface FetchGamesResponse {
    count: number,
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    })

    return (
        <>  
            {error && <p>{error}</p>}
            <ul>
                {games.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid