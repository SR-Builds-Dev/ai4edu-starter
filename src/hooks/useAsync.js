import { useCallback, useState } from 'react'

export function useAsync(asyncFunction) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  const execute = useCallback(async (...args) => {
    setStatus('loading')
    setError(null)
    try {
      const result = await asyncFunction(...args)
      setData(result)
      setStatus('success')
      return result
    } catch (caughtError) {
      setError(caughtError)
      setStatus('error')
      throw caughtError
    }
  }, [asyncFunction])

  return { data, error, execute, status }
}
