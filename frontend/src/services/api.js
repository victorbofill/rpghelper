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


// Because the codex is generated procedurally, all routes can be universal
export const api = {
  postData: (type, data) => {
    const url = `/api/${type}`;
    return post(url, data || null);
  },
  getAllData: type => {
    const url = `/api/${type}`;
    return get(url);
  },
  getData: (type, id) => {
    const url = `/api/${type}/${id}`;
    return get(url);
  },
  getChildren: (parentType, parentId, childType) => {
    const url = `/api/${parentType}/${parentId}/${childType}`;
    return get(url);
  },
  putData: (type, data) => {
    const url = `/api/${type}/${data._id}`;
    return put(url, data);
  },
  delData: (type, id) => {
    const url = `/api/${type}/${id}`;
    return del(url);
  }
};

const URL = '/api';
const ENTRIES_URL = `${URL}/entries`;
const NOTES_URL = `${URL}/notes`;
const PARTICIPANTS_URL = `${URL}/participants`;

export const postEntry = () => post(`${ENTRIES_URL}`);
export const getEntries = () => get(`${ENTRIES_URL}`);
export const getEntry = id => get(`${ENTRIES_URL}/${id}`);
export const putEntry = entry => put(`${ENTRIES_URL}/${entry._id}`, entry);
export const delEntry = id => del(`${ENTRIES_URL}/${id}`);

export const postNote = () => post(`${NOTES_URL}`);
export const getNotes = () => get(`${NOTES_URL}`);
export const getNote = id => get(`${NOTES_URL}/${id}`);
export const putNote = note => put(`${NOTES_URL}/${note._id}`, note);
export const delNote = id => del(`${NOTES_URL}/${id}`);

export const postParticipant = () => post(`${PARTICIPANTS_URL}`);
export const getParticipants = () => get(`${PARTICIPANTS_URL}`);
export const getParticipant = id => get(`${PARTICIPANTS_URL}/${id}`);
export const putParticipant = participant => put(`${PARTICIPANTS_URL}/${participant._id}`, participant);
export const delParticipant = id => del(`${PARTICIPANTS_URL}/${id}`);
