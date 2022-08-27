import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch';

export default function TestError() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/error');
    return (
        <div>
            {!loading || <progress/>}
            <pre>{loading || error || data.status}</pre>
        </div>
    )
}
