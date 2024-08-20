import axios from 'axios';

exports.handler = async function(event: {rawUrl: string}, context: any) {
  console.log("RAW URL DEL CONTEXTO:",event.rawUrl)
  if(event && event.rawUrl && !event.rawUrl.includes("test") && !event.rawUrl.includes("release")) {

    const url = 'https://api.cloudflare.com/client/v4/zones/89afd5c8713bfbbdd0589108c323667a/purge_cache';
    const data = {
      purge_everything: true
    };

    const headers = {
      'X-Auth-Email': process.env.NEXT_PUBLIC_CLOUDFLARE_EMAIL,
      'X-Auth-Key': process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN,
      'Content-Type': 'application/json'
    };
    try {
      const response = await axios.post(url, data, { headers })
      console.log("Response de purge cache cloudflare", response.data)
    } catch (error) {
      console.error("Error en request de purge cache cloudflare", error)
    }

  } else {
    console.log("No hubo data de event.rawUrl o no es produccion")
  }
};
