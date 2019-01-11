function request(url, options = {}, data) {
  if(data) options.body = JSON.stringify(data);

  return fetch(url, options)
    .then(response => [response.ok, response.json()])
    .then(([ok, json]) => {
      if(ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const headers = {
  'content-type': 'application/json'
};

const get = (url, options = {}) => request(url, { method: 'GET', ...options });
const post = (url, data) => request(url, { method: 'POST', headers }, data);
const put = (url, data) => request(url, { method: 'PUT', headers }, data);
const del = (url, data) => request(url, { method: 'DELETE' }, data);

const URL = '/api';
const ASSETS_URL = `${URL}/assets`;
const BASES_URL = `${URL}/bases`;
const CHAPTERS_URL = `${URL}/chapters`;
const ENTRIES_URL = `${URL}/entries`;
const LOCATIONS_URL = `${URL}/locations`;
const NOTES_URL = `${URL}/notes`;
const NPCS_URL = `${URL}/npcs`;
const PARTICIPANTS_URL = `${URL}/participants`;
const REGIONS_URL = `${URL}/regions`;
const STORIES_URL = `${URL}/stories`;
const SUBREGIONS_URL = `${URL}/subregions`;

export const postAsset = asset => post(`${ASSETS_URL}`, asset);
export const getAssets = () => get(`${ASSETS_URL}`);
export const getAsset = id => get(`${ASSETS_URL}/${id}`);
export const putAsset = asset => put(`${ASSETS_URL}/${asset._id}`, asset);
export const delAsset = id => del(`${ASSETS_URL}/${id}`);

export const postBase = base => post(`${BASES_URL}`, base);
export const getBases = () => get(`${BASES_URL}`);
export const getBase = id => get(`${BASES_URL}/${id}`);
export const putBase = base => put(`${BASES_URL}/${base._id}`, base);
export const delBase = id => del(`${BASES_URL}/${id}`);

export const postChapter = chapter => post(`${CHAPTERS_URL}`, chapter);
export const getChapters = () => get(`${CHAPTERS_URL}`);
export const getChapter = id => get(`${CHAPTERS_URL}/${id}`);
export const putChapter = chapter => put(`${CHAPTERS_URL}/${chapter._id}`, chapter);
export const delChapter = id => del(`${CHAPTERS_URL}/${id}`);

export const postEntry = entry => post(`${ENTRIES_URL}`, entry);
export const getEntries = () => get(`${ENTRIES_URL}`);
export const getEntry = id => get(`${ENTRIES_URL}/${id}`);
export const putEntry = entry => put(`${ENTRIES_URL}/${entry._id}`, entry);
export const delEntry = id => del(`${ENTRIES_URL}/${id}`);

export const postLocation = location => post(`${LOCATIONS_URL}`, location);
export const getLocations = () => get(`${LOCATIONS_URL}`);
export const getLocation = id => get(`${LOCATIONS_URL}/${id}`);
export const putLocation = location => put(`${LOCATIONS_URL}/${location._id}`, location);
export const delLocation = id => del(`${LOCATIONS_URL}/${id}`);

export const postNote = note => post(`${NOTES_URL}`, note);
export const getNotes = () => get(`${NOTES_URL}`);
export const getNote = id => get(`${NOTES_URL}/${id}`);
export const putNote = note => put(`${NOTES_URL}/${note._id}`, note);
export const delNote = id => del(`${NOTES_URL}/${id}`);

export const postNPC = NPC => post(`${NPCS_URL}`, NPC);
export const getNPCs = () => get(`${NPCS_URL}`);
export const getNPC = id => get(`${NPCS_URL}/${id}`);
export const putNPC = NPC => put(`${NPCS_URL}/${NPC._id}`, NPC);
export const delNPC = id => del(`${NPCS_URL}/${id}`);

export const postParticipant = () => post(`${PARTICIPANTS_URL}`);
export const getParticipants = () => get(`${PARTICIPANTS_URL}`);
export const getParticipant = id => get(`${PARTICIPANTS_URL}/${id}`);
export const putParticipant = participant => put(`${PARTICIPANTS_URL}/${participant._id}`, participant);
export const delParticipant = id => del(`${PARTICIPANTS_URL}/${id}`);

export const postRegion = () => post(`${REGIONS_URL}`);
export const getRegions = () => get(`${REGIONS_URL}`);
export const getRegion = id => get(`${REGIONS_URL}/${id}`);
export const putRegion = region => put(`${REGIONS_URL}/${region._id}`, region);
export const delRegion = id => del(`${REGIONS_URL}/${id}`);

export const postStory = story => post(`${STORIES_URL}`, story);
export const getStories = () => get(`${STORIES_URL}`);
export const getStory = id => get(`${STORIES_URL}/${id}`);
export const putStory = story => put(`${STORIES_URL}/${story._id}`, story);
export const delStory = id => del(`${STORIES_URL}/${id}`);

export const postSubregion = subregion => post(`${SUBREGIONS_URL}`, subregion);
export const getSubregions = () => get(`${SUBREGIONS_URL}`);
export const getSubregion = id => get(`${SUBREGIONS_URL}/${id}`);
export const putSubregion = subregion => put(`${SUBREGIONS_URL}/${subregion._id}`, subregion);
export const delSubregion = id => del(`${SUBREGIONS_URL}/${id}`);
