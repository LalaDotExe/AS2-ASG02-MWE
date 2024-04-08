import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.page.html',
  styleUrls: ['./join-form.page.scss'],
})
export class JoinFormPage {
  @ViewChild('joinForm') joinForm: NgForm;

  constructor(private alertController: AlertController) {
    this.joinForm = {} as NgForm;
  }

  submitForm() {
    if (this.joinForm.valid) {
      // Your form submission logic here

      // Clear the form after submission
      this.joinForm.resetForm();

      // Show a popup message
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'You have successfully joined!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
