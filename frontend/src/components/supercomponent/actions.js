import {
  postData,
  getAllData,
  getData,
  putData,
  delData
} from '../../services/api';

import {
  DATA_POST,
  DATA_ALL_LOAD,
  DATA_LOAD,
  DATA_UPDATE,
  DATA_REMOVE
} from './reducers';

export function addData() {
  return {
    type: DATA_POST,
    payload: postData()
  };
}

export function loadAllData() {
  return {
    type: DATA_ALL_LOAD,
    payload: getData()
  };  
}  

export function loadData() {
  return {
    type: DATA_LOAD,
    payload: getAllData()
  };
}

export function updateData(updatedObject) {
  return {
    type: DATA_UPDATE,
    payload: putData(updatedObject)
  };
}

export function deleteData(id) {
  return {
    type: DATA_REMOVE,
    payload: delData(id)
  };
}