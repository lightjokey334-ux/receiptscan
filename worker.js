// Cloudflare Worker: aduce pagina cecului și adaugă antetul CORS. Acceptă doar mev.sfs.md.
/*
export default {
  async fetch(req) {
    const u = new URL(req.url).searchParams.get('u') || '';
    let t; try { t = new URL(u); } catch { return new Response('link invalid', { status: 400 }); }
    if (t.hostname !== 'mev.sfs.md' || !t.pathname.startsWith('/receipt-verifier/'))
      return new Response('interzis', { status: 403 });
    const r = await fetch(t, { headers: {
      'user-agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36',
      'accept': 'text/html' } });
    return new Response(await r.text(), { status: r.status, headers: {
      'content-type': 'text/html; charset=utf-8', 'access-control-allow-origin': '*' } });
  }
};
*/
