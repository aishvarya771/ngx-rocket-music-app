import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MusicService } from '@app/music/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit {
  public playlist: any[] = [];
  public playing: Boolean = false;
  playerImage: String = './../../../assets/music.jpg';
  selectedAlbum: any;
  audio = new Audio('./../../../assets/Tum Tak Full Video Song Raanjhanaa.mp3');
  // musicmp3: String = './../../../assets/Tum Tak Full Video Song Raanjhanaa.mp3';
  constructor(private _musicService: MusicService) {}

  ngOnInit() {
    this.getMusic('Rihana');
  }

  public getMusic(strng: string) {
    this._musicService.searchAlbum(strng).subscribe(
      (res: any) => {
        console.log(res);
        this.playlist = res.data;
      },
      err => {
        console.log(err);
      }
    );
  }
  play() {
    this.playing = true;
    this.audio.play();
  }
  pause() {
    this.playing = false;
    this.audio.pause();
  }

  playSelected(song: any) {
    this.selectedAlbum = song;
    this.pause();
    this.audio = new Audio(song.preview);
    this.play();
  }
}
