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

export const fetchApiFunctions = type => {
  switch(type) {
    case 'assets':
      return assets;
    case 'bases':
      return bases;
    case 'chapters':
      return chapters;
    case 'entries':
      return entries;
    case 'locations':
      return locations;
    case 'notes':
      return notes;
    case 'NPCs':
      return NPCs;
    case 'participants':
      return participants;
    case 'regions':
      return regions;
    case 'stories':
      return stories;
    case 'subregions':
      return subregions;
  }
};

const assets = {
  postAsset: asset => post(`${ASSETS_URL}`, asset),
  getAssets: () => get(`${ASSETS_URL}`),
  getAsset: id => get(`${ASSETS_URL}/${id}`),
  putAsset: asset => put(`${ASSETS_URL}/${asset._id}`, asset),
  delAsset: id => del(`${ASSETS_URL}/${id}`),
};

const bases = {
  postBase: base => post(`${BASES_URL}`, base),
  getBases: () => get(`${BASES_URL}`),
  getBase: id => get(`${BASES_URL}/${id}`),
  putBase: base => put(`${BASES_URL}/${base._id}`, base),
  delBase: id => del(`${BASES_URL}/${id}`),
};

const chapters = {
  postChapter: chapter => post(`${CHAPTERS_URL}`, chapter),
  getChapters: () => get(`${CHAPTERS_URL}`),
  getChapter: id => get(`${CHAPTERS_URL}/${id}`),
  putChapter: chapter => put(`${CHAPTERS_URL}/${chapter._id}`, chapter),
  delChapter: id => del(`${CHAPTERS_URL}/${id}`),
};

const entries = {
  postEntry: entry => post(`${ENTRIES_URL}`, entry),
  getEntries: () => get(`${ENTRIES_URL}`),
  getEntry: id => get(`${ENTRIES_URL}/${id}`),
  putEntry: entry => put(`${ENTRIES_URL}/${entry._id}`, entry),
  delEntry: id => del(`${ENTRIES_URL}/${id}`),
};

const locations = {
  postLocation: location => post(`${LOCATIONS_URL}`, location),
  getLocations: () => get(`${LOCATIONS_URL}`),
  getLocation: id => get(`${LOCATIONS_URL}/${id}`),
  putLocation: location => put(`${LOCATIONS_URL}/${location._id}`, location),
  delLocation: id => del(`${LOCATIONS_URL}/${id}`),
};

const notes = {
  postNote: note => post(`${NOTES_URL}`, note),
  getNotes: () => get(`${NOTES_URL}`),
  getNote: id => get(`${NOTES_URL}/${id}`),
  putNote: note => put(`${NOTES_URL}/${note._id}`, note),
  delNote: id => del(`${NOTES_URL}/${id}`),
};

const NPCs = {
  postNPC: NPC => post(`${NPCS_URL}`, NPC),
  getNPCs: () => get(`${NPCS_URL}`),
  getNPC: id => get(`${NPCS_URL}/${id}`),
  putNPC: NPC => put(`${NPCS_URL}/${NPC._id}`, NPC),
  delNPC: id => del(`${NPCS_URL}/${id}`),
};

const participants = {
  postParticipant: () => post(`${PARTICIPANTS_URL}`),
  getParticipants: () => get(`${PARTICIPANTS_URL}`),
  getParticipant: id => get(`${PARTICIPANTS_URL}/${id}`),
  putParticipant: participant => put(`${PARTICIPANTS_URL}/${participant._id}`, participant),
  delParticipant: id => del(`${PARTICIPANTS_URL}/${id}`),
};

const regions = {
  postRegion: () => post(`${REGIONS_URL}`),
  getRegions: () => get(`${REGIONS_URL}`),
  getRegion: id => get(`${REGIONS_URL}/${id}`),
  putRegion: region => put(`${REGIONS_URL}/${region._id}`, region),
  delRegion: id => del(`${REGIONS_URL}/${id}`),
};

const stories = {
  postStory: story => post(`${STORIES_URL}`, story),
  getStories: () => get(`${STORIES_URL}`),
  getStory: id => get(`${STORIES_URL}/${id}`),
  putStory: story => get(`${STORIES_URL}/${story._id}`, story),
  delStory: id => del(`${STORIES_URL}/${id}`),
};

const subregions = {
  postSubregion: subregion => post(`${SUBREGIONS_URL}`, subregion),
  getSubregions: () => get(`${SUBREGIONS_URL}`),
  getSubregion: id => get(`${SUBREGIONS_URL}/${id}`),
  putSubregion: subregion => get(`${SUBREGIONS_URL}/${subregion._id}`, subregion),
  delSubregion: id => del(`${SUBREGIONS_URL}/${id}`),
};
export const postAsset = () => post(`${ASSETS_URL}`);
export const getAssets = () => get(`${ASSETS_URL}`);
export const getAsset = id => get(`${ASSETS_URL}/${id}`);
export const putAsset = asset => put(`${ASSETS_URL}/${asset._id}`, asset);
export const delAsset = id => del(`${ASSETS_URL}/${id}`);

export const postBase = () => post(`${BASES_URL}`);
export const getBases = () => get(`${BASES_URL}`);
export const getBase = id => get(`${BASES_URL}/${id}`);
export const putBase = base => put(`${BASES_URL}/${base._id}`, base);
export const delBase = id => del(`${BASES_URL}/${id}`);

export const postChapter = () => post(`${CHAPTERS_URL}`);
export const getChapters = () => get(`${CHAPTERS_URL}`);
export const getChapter = id => get(`${CHAPTERS_URL}/${id}`);
export const putChapter = chapter => put(`${CHAPTERS_URL}/${chapter._id}`, chapter);
export const delChapter = id => del(`${CHAPTERS_URL}/${id}`);

export const postEntry = () => post(`${ENTRIES_URL}`);
export const getEntries = () => get(`${ENTRIES_URL}`);
export const getEntry = id => get(`${ENTRIES_URL}/${id}`);
export const putEntry = entry => put(`${ENTRIES_URL}/${entry._id}`, entry);
export const delEntry = id => del(`${ENTRIES_URL}/${id}`);

export const postLocation = () => post(`${LOCATIONS_URL}`);
export const getLocations = () => get(`${LOCATIONS_URL}`);
export const getLocation = id => get(`${LOCATIONS_URL}/${id}`);
export const putLocation = location => put(`${LOCATIONS_URL}/${location._id}`, location);
export const delLocation = id => del(`${LOCATIONS_URL}/${id}`);

export const postNote = () => post(`${NOTES_URL}`);
export const getNotes = () => get(`${NOTES_URL}`);
export const getNote = id => get(`${NOTES_URL}/${id}`);
export const putNote = note => put(`${NOTES_URL}/${note._id}`, note);
export const delNote = id => del(`${NOTES_URL}/${id}`);

export const postNPC = () => post(`${NPCS_URL}`);
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

export const postSubregion = () => post(`${SUBREGIONS_URL}`);
export const getSubregions = () => get(`${SUBREGIONS_URL}`);
export const getSubregion = id => get(`${SUBREGIONS_URL}/${id}`);
export const putSubregion = subregion => put(`${SUBREGIONS_URL}/${subregion._id}`, subregion);
export const delSubregion = id => del(`${SUBREGIONS_URL}/${id}`);
