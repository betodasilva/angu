import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/takeUntil'; 

@Directive({
    selector: '[ngModel][debounce]',
})
export class Debounce implements OnInit {
    @Output()
    public onDebounce = new EventEmitter<any>();

    @Input('debounce')
    public debounceTime: number = 500;

    private isFirstChange: boolean = true;

    constructor(public model: NgControl) {
    }

    ngOnInit() {
        this.model.valueChanges
            .debounceTime(this.debounceTime)
            .distinctUntilChanged()
            .subscribe(modelValue => {
                if (this.isFirstChange) {
                    this.isFirstChange = false;
                } else {
                    this.onDebounce.emit(modelValue);
                }
            });
    }

    

}