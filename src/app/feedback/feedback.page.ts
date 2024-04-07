import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.feedbackForm.valid) {
      console.log('Form submitted:', this.feedbackForm.value);
      this.showThankYouAlert();
      this.feedbackForm.reset();
    } else {
      this.markFormGroupTouched(this.feedbackForm);
    }
  }

  async showThankYouAlert() {
    const alert = await this.alertController.create({
      header: 'Thank You!',
      message: 'Your feedback has been submitted successfully.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
