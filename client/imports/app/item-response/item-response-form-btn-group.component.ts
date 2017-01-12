import template from "./item-response-form-btn-group.component.html";
import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {ItemResponseFormInputComponent} from "./item-response-form-input.component";
import {Observable} from "rxjs";
/**
 * Created by a.nvlkv on 27/11/2016.
 */
@Component({
    selector: 'item-response-form-btn-group',
    template,
})

export class ItemResponseFormBtnGroupComponent extends ItemResponseFormInputComponent implements OnInit{
    // constructor(){
    //     super();
    //
    //     // console.log(this);
    // }

    ngOnInit(){
        console.log(this);
        this.formGroup.valueChanges.subscribe((value) => {
            if (value.responseInput){
                this.submitCall.emit()
            }
        });
    }
}