import {BaseService} from './base.service';

class PersonsService extends BaseService {

  static instance; 

  constructor() {
    super();
  }

  static get Instance() {
    // Do you need arguments? Make it a regular method instead.
    return this.instance || (this.instance = new this());
  }
  all(){
    return this._get('/Persons');
  }
  /* getAddress(data){
    let q = '';
        if (data) {
            for (let key of Object.keys(data)) {
                q += `&${key}=` + data[key];
            }
            if (q.length) q = q.replace('&', '?');
        }
    return this._get(`/Address/Code${q}`)
  }
  getAddressById(id){
    return this._get(`/Address/${id}`)
  }
  getAddressByCompany(id){
    return this._get(`/Address/Company/${id}`)
  }
  createAddress(companyId, data){
    return this._post(`/Address/Company/${companyId}`, data)
  }
  updateAddress(data){
    return this._put(`/Address/${data.id}`, data)
  }
  deleteAddress(id){
    return this._delete(`/Address/${id}`)
  } */
}
export const personsService = PersonsService.Instance;