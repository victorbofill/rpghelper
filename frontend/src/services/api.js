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
const CHAPTERS_URL = `${URL}/chapters`;
const CITIES_URL = `${URL}/cities`;
const ENTRIES_URL = `${URL}/entries`;
const LOCATIONS_URL = `${URL}/locations`;
const NOTES_URL = `${URL}/notes`;
const NPCS_URL = `${URL}/npcs`;
const PARTICIPANTS_URL = `${URL}/participants`;
const REGIONS_URL = `${URL}/regions`;
const STORIES_URL = `${URL}/stories`;
const SUBLOCATIONS_URL = `${URL}/sublocations`;

export const postChapter = chapter => post(`${CHAPTERS_URL}`, chapter);
export const putChapter = chapter => put(`${CHAPTERS_URL}/${chapter._id}`, chapter);
export const delChapter = id => del(`${CHAPTERS_URL}/${id}`);

export const postCity = city => post(`${CITIES_URL}`, city);
export const putCity = city => put(`${CITIES_URL}/${city._id}`, city);
export const delCity = id => del(`${CITIES_URL}/${id}`);

export const postEntry = entry => post(`${ENTRIES_URL}`, entry);
export const getEntries = () => get(`${ENTRIES_URL}`);
export const putEntry = entry => put(`${ENTRIES_URL}/${entry._id}`, entry);
export const delEntry = id => del(`${ENTRIES_URL}/${id}`);

export const postLocation = location => post(`${LOCATIONS_URL}`, location);
export const putLocation = location => put(`${LOCATIONS_URL}/${location._id}`, location);
export const delLocation = id => del(`${LOCATIONS_URL}/${id}`);

export const postNote = note => post(`${NOTES_URL}`, note);
export const getNotes = () => get(`${NOTES_URL}`);
export const putNote = note => put(`${NOTES_URL}/${note._id}`, note);
export const delNote = id => del(`${NOTES_URL}/${id}`);

export const postNPC = NPC => post(`${NPCS_URL}`, NPC);
export const putNPC = NPC => put(`${NPCS_URL}/${NPC._id}`, NPC);
export const delNPC = id => del(`${NPCS_URL}/${id}`);

export const postParticipant = () => post(`${PARTICIPANTS_URL}`);
export const getParticipants = () => get(`${PARTICIPANTS_URL}`);
export const putParticipant = participant => put(`${PARTICIPANTS_URL}/${participant._id}`, participant);
export const delParticipant = id => del(`${PARTICIPANTS_URL}/${id}`);

export const postRegion = region => post(`${REGIONS_URL}`, region);
export const getRegions = () => get(`${REGIONS_URL}`);
export const putRegion = region => put(`${REGIONS_URL}/${region._id}`, region);
export const delRegion = id => del(`${REGIONS_URL}/${id}`);

export const postStory = story => post(`${STORIES_URL}`, story);
export const getStories = () => get(`${STORIES_URL}`);
export const putStory = story => get(`${STORIES_URL}/${story._id}`, story);
export const delStory = id => del(`${STORIES_URL}/${id}`);

export const postSublocation = sublocation => post(`${SUBLOCATIONS_URL}`, sublocation);
export const putSublocation = sublocation => put(`${SUBLOCATIONS_URL}/${sublocation._id}`, sublocation);
export const delSublocation = id => del(`${SUBLOCATIONS_URL}/${id}`);
