import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music/music.component';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MusicService } from '@app/music/music.service';

@NgModule({
  imports: [CommonModule, MusicRoutingModule, SharedModule, FlexLayoutModule, MaterialModule],
  declarations: [MusicComponent],
  providers: [MusicService]
})
export class MusicModule {}
