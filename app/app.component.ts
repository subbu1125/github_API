import { Component } from '@angular/core';
import {GithubComponent} from './components/github.component';
import {GithubService} from './services/github.service';
import {HTTP_PROVIDERS} from '@angular/http';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives:[GithubComponent],
  providers:[HTTP_PROVIDERS,GithubService]
})
export class AppComponent { }
