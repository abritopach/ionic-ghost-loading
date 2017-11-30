import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GhostProvider } from '../../providers/ghost/ghost';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ghostProvider: GhostProvider) {

  }

  ngOnInit() {
		this._setLoaded()
		this.reload();
  }
  
	refresh() {
		this._setLoaded()
		this.reload();
  }
  
	reload() {
		this.ghostProvider.setLoading(true)
		this._setLoaded()
	}

	private _setLoaded() {
		setTimeout(() => {
			this.ghostProvider.setLoading(false)
		}, 1000);
	}

}
