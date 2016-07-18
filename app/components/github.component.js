"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var github_service_1 = require('../services/github.service');
var GithubComponent = (function () {
    function GithubComponent(_githubService) {
        var _this = this;
        this._githubService = _githubService;
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    }
    GithubComponent = __decorate([
        core_1.Component({
            selector: 'github',
            templateUrl: 'app/components/github.component.html'
        }), 
        __metadata('design:paramtypes', [github_service_1.GithubService])
    ], GithubComponent);
    return GithubComponent;
}());
exports.GithubComponent = GithubComponent;
//# sourceMappingURL=github.component.js.map