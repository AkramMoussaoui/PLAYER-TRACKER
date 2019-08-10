import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IPlayer } from "src/player.model";

@Injectable({
  providedIn: "root"
})
export class PlayerDataService {
  private url: string = "http://localhost:5000/api/v1/profile";
  constructor(private http: HttpClient) {}

  getPlayerData(platform: string, playerId: string): Observable<IPlayer> {
    return this.http.get<IPlayer>(`${this.url}/${platform}/${playerId}`);
  }
}
