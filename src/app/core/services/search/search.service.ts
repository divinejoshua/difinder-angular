import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  // Base Url from environment variable
  BASE_URL : string = environment.domain


  // Get search results
  getSearchResults(query:string) {
    return this.http.get(this.BASE_URL, {params:{
      api_key : environment.apiKey,
      q: query,
      location: "United+States",
    }})
  }
}
