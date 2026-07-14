const scraper = require('./scraper');

async function test() {
  console.log("Testing ID: 194219 (The Ogre's Bride)");
  try {
    const episodes = await scraper.getEpisodes(194219);
    console.log("✅ Success! Episodes found:");
    console.log(`Total Sub: ${episodes.episodes.sub.length}`);
    console.log(`Total Dub: ${episodes.episodes.dub.length}`);
    if (episodes.episodes.sub.length > 0) {
        console.log("First Sub Episode:", episodes.episodes.sub[0].id);
    }
  } catch (err) {
    console.error("❌ Failed to get episodes:");
    console.error(err.message);
  }
}

test();
