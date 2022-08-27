import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function TestData() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
    return (
        <div>
            {!loading || <progress/>}
            <pre>{loading || error || data.status}</pre>
        </div>
    )
}
