import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs/BehaviorSubject";

/*
  Generated class for the GhostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GhostProvider {

  private _isLoading = new BehaviorSubject<Object>(false);
	public isLoading = this._isLoading.asObservable();

  constructor() {
    console.log('Hello GhostProvider Provider');
  }

	public setLoading(isLoading: boolean) {
		this._isLoading.next({
			isLoading: isLoading
		})
	}

}
