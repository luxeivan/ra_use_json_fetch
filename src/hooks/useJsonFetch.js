import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts = null) {
    const [state, setState] = useState({ data: false, loading: true, error: false })
    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    setState(prevState => ({ ...prevState, error: response.statusText, loading: false }))
                }
            })
            .then(result => {
                setState(prevState => ({ ...prevState, data: result, loading: false }))
            })
            .catch(err => {
                console.error(err)
                setState(prevState => ({ ...prevState, error: err.statusText, loading: false }))
            })

    }, [])
    useEffect(() => {
    }, [state])


    return [state.data, state.loading, state.error];
}