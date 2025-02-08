
import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const APP_ID = '';
const APP_KEY = '';

export const Searchbar = ({ setRecipes }) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        // Clear timeout if the query changes (also on component unmount)
        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        const fetchRecipes = async () => {
            if (debouncedQuery) {
                const response = await fetch(
                    `https://api.edamam.com/api/recipes/v2?q=${debouncedQuery}&type=public&app_id=${APP_ID}&app_key=${APP_KEY}`,
                );
                const data = await response.json();
                setRecipes(data.hits);
            }
        };

        fetchRecipes();
    }, [debouncedQuery, setRecipes]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <TextField
            label="Wyszukaj"
            onChange={handleChange}
            value={query}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setDebouncedQuery(query)}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            sx={{
                width: '70%',
                margin: '10px auto 0 auto',
                padding: '10px',
                '@media (max-width: 767px)': {
                    width: '90%',
                },
            }}
        />
    );
};

