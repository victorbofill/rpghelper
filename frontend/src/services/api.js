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
const PARTICIPANTS_URL = `${URL}/participants`;

export const getNotes = () => get(`${NOTES_URL}`);
export const postNote = note => post(`${NOTES_URL}`, note);

export const postParticipantList = () => post(`${PARTICIPANTS_URL}`);
export const postParticipant = (id, participant) => post(`${PARTICIPANTS_URL}/${id}`, participant);
export const getParticipantList = () => get(`${PARTICIPANTS_URL}`);
export const putParticipant = (id, participant) => put(`${PARTICIPANTS_URL}/${id}`, participant);
export const delParticipant = (listId, pid) => del(`${PARTICIPANTS_URL}/${listId}/participant/${pid}`);
export const delParticipantList = id => del(`${PARTICIPANTS_URL}/${id}`);