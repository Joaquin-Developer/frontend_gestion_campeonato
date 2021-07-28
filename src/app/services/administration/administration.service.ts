import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  private API_URL = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getMatchesData(): any {
    return null;
  }

  getAllTeams(): any {
    return this.http.get<Team[]>(`${this.API_URL}/teams/getAll`);
  }

}
