# Aniko Scraper API

Aniko is a Node.js-based API that scrapes anime episodes, metadata, and streaming links from various sources.

## What it scrapes
This scraper is designed to extract metadata and streaming sources by mapping AniList IDs to MAL IDs and scraping providers.
Specifically, it scrapes:
- **Anime Metadata:** Fetches data from Jikan (MyAnimeList API) and AniZip for titles, episodes, images, and descriptions.
- **Embedded Streaming Links:** Scrapes IFRAME embed URLs from providers like Megaplay, VidTube, VidWish, Mapper, and Anikoto.
*(Note: In this specific version of the scraper, direct `.m3u8` (HLS) stream extraction is disabled, so it primarily serves embedded iframe URLs.)*
- **Subtitles:** Extracts subtitle tracks (VTT) when available.

## How to Use

First, install the dependencies:
```bash
npm install
```

Then, start the server:
```bash
node server.js
```

The API will run on `http://localhost:3000`.

### API Endpoints

- **Search Anime**
  `GET /api/search?q=keyword`
  Returns search results from Anikoto.

- **Get Anime Info**
  `GET /api/info/:slug`
  Resolves show info using the Anikoto slug.

- **Get Episodes**
  `GET /api/episodes/:anilistId`
  Returns a list of all available episodes (sub and dub) with metadata using the AniList ID.

- **Get Watch Streams**
  `GET /api/watch/:anilistId/:audio/:epNum`
  Returns available embedded streaming servers and subtitle tracks for a specific episode.
  - `:audio` should be `sub` or `dub`
  - Example: `/api/watch/21087/sub/1` (One Punch Man, Sub, Episode 1)

- **CORS Proxy**
  `GET /api/proxy?url=...`
  A built-in proxy to bypass CORS restrictions for subtitle files or streams.
