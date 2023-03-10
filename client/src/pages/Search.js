import React, { useState } from 'react';
import axios from 'axios';

function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`/search?query=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;