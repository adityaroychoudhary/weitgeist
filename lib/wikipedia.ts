const UA = "Weitgeist/1.0 adityaroychoudhary@outlook.com";

interface wikiObj {
  key: string;
  title: string;
  description: string | null;
  thumbnail: {
    mimetype: string;
    width: number;
    height: number;
    url: string;
  } | null;
}

export async function searchTitles(q: string): Promise<wikiObj[]> {
  const url = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent(q)}&limit=5`;

  const res = await fetch(url, {
    headers: { "User-Agent": UA },
  });

  if (!res.ok) throw new Error(`Wikipedia ${res.status}`);

  const data = await res.json();

  const formattedData: wikiObj[] = data.pages.map((p: wikiObj) => ({
    key: p.key,
    title: p.title,
    description: p.description,
    thumbnail: p.thumbnail,
  }));

  return formattedData;
}
