// Relays the host-pushed status from Upstash. Runs behind the Basic-auth
// middleware so the Redis endpoint (and invite codes) never reach the browser.
export default async function handler(req, res) {
  // Accept either naming: the Vercel Upstash integration may inject KV_* vars.
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  const key = process.env.STARDEW_STATUS_KEY || 'stardew:status';

  res.setHeader('Cache-Control', 'no-store');

  if (!url || !token) {
    res.status(200).json({ error: 'status store not configured' });
    return;
  }

  try {
    const r = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const body = await r.json(); // Upstash: { result: "<stored string>" | null }
    if (!body.result) {
      res.status(200).json({ error: 'Stardew server offline (no recent status)' });
      return;
    }
    res.status(200).json(JSON.parse(body.result));
  } catch (e) {
    res.status(200).json({ error: String(e) });
  }
}
