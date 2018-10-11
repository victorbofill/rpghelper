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
const NOTES_URL = `${URL}/notes`;
const ENTRIES_URL = `${URL}/entries`;
const PARTICIPANTS_URL = `${URL}/participants`;
const LOCATIONS_URL = `${URL}/locations`;

export const getLocations = () => get(`${LOCATIONS_URL}`);
export const postLocation = location => post(`${LOCATIONS_URL}`, location);
export const delLocation = id => del(`${LOCATIONS_URL}/${id}`);
export const putLocation = (id, location) => put(`${LOCATIONS_URL}/${id}`, location);

export const postNPC = (id, npc) => post(`${LOCATIONS_URL}/${id}/npcs`, npc);
export const delNPC = (id, npcId) => del(`${LOCATIONS_URL}/${id}/npcs/${npcId}`);
export const putNPC = (id, npcId, npc) => put(`${LOCATIONS_URL}/${id}/npcs/${npcId}`, npc);

export const delStory = (id) => del(`${LOCATIONS_URL}/${id}/stories`);

export const getNotes = () => get(`${NOTES_URL}`);
export const postNote = note => post(`${NOTES_URL}`, note);
export const delNote = (id) => del(`${NOTES_URL}/${id}`);

export const getEntries = () => get(`${ENTRIES_URL}`);
export const postEntry = entry => post(`${ENTRIES_URL}`, entry);
export const delEntry = (id) => del(`${ENTRIES_URL}/${id}`);

export const postParticipantList = () => post(`${PARTICIPANTS_URL}`);
export const postParticipant = (id, participant) => post(`${PARTICIPANTS_URL}/${id}`, participant);
export const getParticipantList = () => get(`${PARTICIPANTS_URL}`);
export const putParticipant = (id, participant) => put(`${PARTICIPANTS_URL}/${id}/participant/${participant._id}`, participant);
export const delParticipant = (listId, pid) => del(`${PARTICIPANTS_URL}/${listId}/participant/${pid}`);
export const delParticipantList = id => del(`${PARTICIPANTS_URL}/${id}`);