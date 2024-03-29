import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialState){
    const [value,setValue] = useState(localStorage.getItem(key) || initialState)

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}