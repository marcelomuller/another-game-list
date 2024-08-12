import type { NextApiRequest, NextApiResponse } from 'next';

interface GamesListResponse {
  games: { appid: number; name: string; }[];
}

interface GameDetailsResponse {
  name: string;
  appid: number;
  short_description: string;
  header_image: string;
  capsule_image: string;
  developers: [];
  metacritic_score: number;
  release_date: string;
  background: string;
  background_raw: string;
}

async function fetchGamesList(): Promise<GamesListResponse> {
  const response = await fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
  if (!response.ok) {
    throw new Error('Failed to fetch games list');
  }

  console.log('RESPONSE::::', response.json())
  return response.json();
}

async function fetchGameDetails(appid: number): Promise<GameDetailsResponse> {
  const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appid}`);
  if (!response.ok) {
    throw new Error('Failed to fetch game details');
  }

  console.log('RESPONSE::::', response.json())
  return response.json();
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    const { endpoint, appid } = req.query;

    try {
      if (endpoint === 'list') {
        const gamesList = await fetchGamesList();
        res.status(200).json(gamesList);
      } else if (endpoint === 'details' && typeof appid === 'string') {
        // Fetch the game details
        const gameDetails = await fetchGameDetails(Number(appid));
        res.status(200).json(gameDetails);
      } else {
        res.status(400).json({ error: 'Invalid endpoint or parameters' });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}