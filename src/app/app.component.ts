import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Network, ConnectionStatus } from '@capacitor/network';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent implements OnInit {

  public isNetworkAvailable: boolean = false;;
  
  constructor() {
    void this.promptNativeModal();
    // void Network.addListener('networkStatusChange', (status: ConnectionStatus) => {
    //   this.isNetworkAvailable = status.connected;
    //   if (!this.isNetworkAvailable) {
    //     void this.promptNativeModal();
    //   }
    // });
  }

  ngOnInit(): void {
  }

  promptNativeModal() {
    Dialog.alert({
      buttonTitle: 'Close',
      title: 'No Internet Connection',
      message: 'Connect your internet'
    }).then(() => {
      if (!this.isNetworkAvailable) {
        void this.promptNativeModal();
      } else {
        console.log('Network Connected');
      }
    }).catch(() => {});
  }
}
