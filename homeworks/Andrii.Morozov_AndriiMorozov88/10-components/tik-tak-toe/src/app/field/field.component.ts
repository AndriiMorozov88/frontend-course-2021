import { Component } from '@angular/core';
enum player {
  cross = 1,
  zero = 2
}
enum playerMove {
  cross = 1,
  zero = -1
}
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {
    fieldsquares = new Array(9);
    player = player.cross;
    togglePlayer() {
        if (this.player === player.cross) {
            this.player = player.zero;
        } else {
            this.player = player.cross;
        }
        return this.player
    }
    move(index:number):void {
        if (this.player === player.cross) {
            this.fieldsquares[index] = playerMove.cross;
        } else { this.fieldsquares[index] = playerMove.zero}
        this.togglePlayer();
    }
}
