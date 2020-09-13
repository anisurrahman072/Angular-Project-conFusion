import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContactType } from '../shared/feedback';
let ContactComponent = class ContactComponent {
    constructor(fb) {
        this.fb = fb;
        this.contactType = ContactType;
        this.formErrors = {
            'firstname': '',
            'lastname': '',
            'telnum': '',
            'email': ''
        };
        this.validationMesages = {
            'firstname': {
                'required': 'First Name is required.',
                'minlength': 'First Name must be at least 2 characters long.',
                'maxlength': 'FirstName cannot be more than 25 characters long.'
            },
            'lastname': {
                'required': 'Last Name is required.',
                'minlength': 'Last Name must be at least 2 characters long.',
                'maxlength': 'Last Name cannot be more than 25 characters long.'
            },
            'telnum': {
                'required': 'Tel. number is required.',
                'pattern': 'Tel. number must contain only numbers.'
            },
            'email': {
                'required': 'Email is required.',
                'email': 'Email not in valid format.'
            }
        };
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.feedbackForm = this.fb.group({
            firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            telnum: [0, [Validators.required, Validators.pattern]],
            email: ['', [Validators.required, Validators.email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
        this.feedbackForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // reset validation messages now
    }
    onSubmit() {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: '',
            message: ''
        });
        this.feedbackFormDirective.resetForm(); // This will make Form UI in pristine state
    }
    onValueChanged(data) {
        const form = this.feedbackForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                this.feedbackForm[field] = '';
                const control = this.feedbackForm.get(field);
                if (control && control.dirty && control.invalid) {
                    const messages = this.validationMesages[field];
                }
            }
        }
    }
};
__decorate([
    ViewChild('fform')
], ContactComponent.prototype, "feedbackFormDirective", void 0);
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map