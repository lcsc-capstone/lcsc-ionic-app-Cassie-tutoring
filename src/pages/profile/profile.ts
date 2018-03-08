import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  private loginUsername : string = "";
	private loginPassword : string = "";

  constructor(public navCtrl: NavController, private http: Http, private storage: Storage, private secureStorage: SecureStorage) {
  }

  storeCredentials() {
		this.secureStorage.create('credentials').then((storage : SecureStorageObject) => {
			storage.set("loginUsername", this.loginUsername).then(data => this.loginUsername="", err => this.loginPassword="");
			storage.set("loginPassword", this.loginPassword).then(data => this.loginUsername="", err => this.loginPassword="");
		});
	}
  
}
