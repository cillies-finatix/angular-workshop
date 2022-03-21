import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pet} from "../../models/Pet";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input()
  public pet?: Pet;
  @Output()
  public clickTile = new EventEmitter<number>();

  public tileIsClicked(){
    this.clickTile.emit(this.pet?.id);
  }
}
