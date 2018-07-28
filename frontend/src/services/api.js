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

export const getParticipants = () => get(`${PARTICIPANTS_URL}`);
export const postParticipants = participants => post(`${PARTICIPANTS_URL}`, participants);
export const putParticipants = participants => put(`${PARTICIPANTS_URL}/${participants._id}`, participants);
export const delParticipants = id => del(`${PARTICIPANTS_URL}/${id}`);