import { Component } from "@angular/core";

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})
export class BlockComponent {
    blockHasImage: boolean = true;
    allowNewBlock: boolean = true;

    hasImage() {
        return this.blockHasImage;
    }

    console( event ){
        console.log( event );
    }
}