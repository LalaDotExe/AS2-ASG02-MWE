import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.page.html',
  styleUrls: ['./join-form.page.scss'],
})
export class JoinFormPage {
  @ViewChild('joinForm') joinForm: NgForm;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {
    this.joinForm = {} as NgForm;
  }

  submitForm() {
    if (this.joinForm.valid) {
      // Your form submission logic here

      // Clear the form after submission
      this.joinForm.resetForm();

      // Show a popup message
      this.presentAlert();

      // Redirect to esport-event page after clicking OK
      this.router.navigateByUrl('/esport-event');
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
