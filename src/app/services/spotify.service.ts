import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SpotifyService {

  constructor( private http:HttpClient) {
  }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${ query }`
    const headers = new HttpHeaders({
      "Authorization": "Bearer [Token]"
    })

    return this.http.get(url, {headers})
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=12')
      .pipe( map((data:any) => {
        return data.albums.items
      }))
  }

  getArtists(termino:string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=12`)
      .pipe( map((data:any) => {
        return data.artists.items
      }))
  }

  getArtist(id:string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ar`)
                .pipe( map( (data:any) =>
                  data['tracks']
                ));
  }
}
