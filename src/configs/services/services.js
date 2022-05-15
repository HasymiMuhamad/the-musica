let domain = "https://ws.audioscrobbler.com/2.0/?";
let method = {
    getTopArtists   : 'chart.gettopartists',
    getTopTracks    : 'chart.gettoptracks',
    searchArtists   : 'artist.search',
    searchTracks    : 'track.search'
}
let keyword = {
    artistSearch    : 'artist',
    trackSearch     : 'track'
}

let api_key = "d574ab6c5999447d63879ad3424595e4";


const SERVICE_API             = (method) => `${domain}method=${method}&api_key=${api_key}&format=json`;
const SERVICE_SEARCH_API      = (method, keyword, search) => `${domain}method=${method}&${keyword}=${search}&api_key=${api_key}&format=json`;


const services = {
  // GET DATA
  GET_TOP_ARTIST                : `${SERVICE_API(method.getTopArtists)}`,
  GET_TOP_TRACK                 : `${SERVICE_API(method.getTopTracks)}`,

  // SEARCH
  SEARCH_ARTIST                 : (search) => `${SERVICE_SEARCH_API(method.searchArtists, keyword.artistSearch, search)}`,
  SEARCH_TRACK                  : (search) => `${SERVICE_SEARCH_API(method.searchTracks, keyword.trackSearch, search)}`,

};

export default services;
