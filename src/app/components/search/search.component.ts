import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artistas:any[] = []
  loading:boolean
  constructor(private spotify:SpotifyService) {
    this.loading = false
  }
  search ( termino:string ) {
    this.loading = true
    this.spotify.getArtists(termino)
      .subscribe( (data:any) => {
        this.artistas = data
        this.loading = false
      })
  }
}
