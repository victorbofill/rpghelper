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

export const postData = type => {
  const url = `/api/${type}`;
  return post(url);
};

export const getAllData = type => {
  const url = `/api/${type}`;
  return get(url);
};

export const getData = (type, id) => {
  const url = `/api/${type}/${id}`;
  return get(url);
};

export const putData = (type, data) => {
  const url = `/api/${type}/${data._id}`;
  return put(url, data);
};

export const delData = (type, id) => {
  const url = `/api/${type}/${id}`;
  return del(url);
};

