import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GhostProvider } from '../../providers/ghost/ghost';

/**
 * Generated class for the GhostLoadingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ghost-loading',
  host: { '[class.isLoading]': 'isLoading' },
  template: `<ng-content *ngIf="!isLoading"></ng-content>`
  //templateUrl: 'ghost-loading.html'
})
export class GhostLoadingComponent {

  public isLoading: boolean = true;
	private isLoadingSubscription: Subscription;
	private data: Object = {};

  constructor(private ghostProvider: GhostProvider) {
    console.log('Hello GhostLoadingComponent Component');
    this.isLoadingSubscription = this.ghostProvider.isLoading.subscribe(data => this._updateLoading(data));
  }

	public ngOnDestroy() {
		this.isLoadingSubscription.unsubscribe();
	}

	private _updateLoading(data) {
		if (!data) return
		this._setData(data)._process();
	}

	private _setData(data: Object) {
		this.data = data;
		return this;
	}

	private _process() {
		return this._setLoading();
	}


	private _setLoading() {
		this.isLoading = this.data['isLoading']
	}

}
