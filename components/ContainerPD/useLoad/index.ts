import { useState, useEffect } from 'react'
import load from './load'

function useLoad() {
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        load(setLoading).then()
    }, [loading])

    return loading
}

export default useLoad