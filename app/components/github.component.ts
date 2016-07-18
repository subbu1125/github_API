import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';
@Component({
  selector: 'github',
  templateUrl:'app/components/github.component.html'
})
export class GithubComponent {
  user:any;
  repos:any;
  constructor(private _githubService:GithubService ){
      this._githubService.getUser().subscribe(user =>{
        this.user=user;

      });
      this._githubService.getRepos().subscribe(repos =>{
        this.repos=repos;

      })
  }
}
