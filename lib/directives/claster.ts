// tslint:disable-next-line:max-line-length
import { Directive, OnChanges, OnDestroy, SimpleChange, Input } from '@angular/core';

import { YaMapsAPIWrapper } from '../ya-maps-api-wrapper';
import { ClasterManager } from '../services/managers/claster-manager';

let clasterId = 0;

@Directive({
    selector: 'ya-claster',
    providers: [
        YaMapsAPIWrapper
    ]
})

// tslint:disable-next-line:directive-class-suffix
export class YaClaster implements OnChanges, OnDestroy {
    @Input() public markers: any[];

    private _id: string;
    private _markerAddedToManger: boolean = false;

    constructor(private _clasterManager: ClasterManager) {
        this._id = (clasterId++).toString();
    }

    public ngOnChanges(changes: { [key: string]: SimpleChange }) {
        if (!this._markerAddedToManger) {
            this._clasterManager.addClaster(this);
        }
    }

    // tslint:disable-next-line:no-empty
    public ngOnDestroy() { }

    // tslint:disable-next-line:no-empty
    private _addEventListeners() { }
}
