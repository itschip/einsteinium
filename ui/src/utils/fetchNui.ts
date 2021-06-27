export async function fetchNui<T = any>(event: string, data?: any): Promise<T> {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`https://einsteinium/${event}`, options);

  return res.json();
}
