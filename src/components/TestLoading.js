import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function TestLoading() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');
    return (
        <div>
            {!loading || <progress/>}
            <pre>{loading || error || data.status}</pre>
        </div>
    )
}
