import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (search) => {

    const [data, setData] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
            .then(response => {
                setData({
                    data: response,
                    loading: false,
                    error: null
                });
            })
            .catch(error => {
                setData({
                    data: null,
                    loading: false,
                    error: error.message
                });
            })
    }, [search]);

    return data;
}
