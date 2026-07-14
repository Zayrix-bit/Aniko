const scraper = require('./scraper');
const axios = require('axios');

async function debug() {
  try {
    const anizip = await axios.get("https://api.ani.zip/mappings?anilist_id=194219").then(r => r.data).catch(() => null);
    const enTitle = anizip.titles?.en ?? Object.values(anizip.titles ?? {})[0] ?? "";
    const malId = anizip.mappings?.mal_id;
    const jikanShow = malId ? await axios.get(`https://api.jikan.moe/v4/anime/${malId}`).then(r => r.data).catch(() => null) : null;
    
    console.log("English Title from AniZip:", enTitle);
    console.log("Japanese Title from Jikan:", jikanShow?.data?.title_japanese);
    
    const show = await scraper.findAnikotoShow(enTitle, jikanShow, 194219);
    console.log("Found Show on Anikoto:", show);
    
  } catch (e) {
    console.error(e);
  }
}

debug();
