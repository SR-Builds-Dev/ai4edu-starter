const baseUrl = import.meta.env.VITE_API_URL ?? ''

export async function api(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })

  if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
  return response.status === 204 ? null : response.json()
}
