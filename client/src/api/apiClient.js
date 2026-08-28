export async function request(endpoint, options = {}) {
  const res = await fetch(`http://localhost:8080${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API Error: ${res.status} ${errorText}`);
  }

  return res.json();
}