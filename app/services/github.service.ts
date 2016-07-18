import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class GithubService{
  private username='subbu1125';
  constructor(private _http:Http){
    console.log("github Service Started...");
  }
  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username)
    .map(res => res.json());
  }
  getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos')
    .map(res => res.json());
  }
}
