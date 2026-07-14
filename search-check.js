const scraper = require('./scraper');

async function check() {
    const results1 = await scraper.searchAnikoto("The Ogre's Bride");
    console.log("Search 'The Ogre\\'s Bride':", results1);

    const results2 = await scraper.searchAnikoto("Oni no Hanayome");
    console.log("Search 'Oni no Hanayome':", results2);
}
check();
