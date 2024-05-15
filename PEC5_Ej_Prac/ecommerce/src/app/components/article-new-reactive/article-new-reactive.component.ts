import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.scss'],
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, this.nameArticleValidator]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(https?://)?[a-zA-Z0-9-]+(.[a-zA-Z]{2,3})(/.*)?\\.(jpg|jpeg|png|gif)$'
          ),
        ],
      ],
      onSale: [false],
    });
  }

  nameArticleValidator(control: AbstractControl): ValidationErrors | null {
    const forbiddenNames = ['Prueba', 'Test', 'Fake'];
    if (forbiddenNames.includes(control.value)) {
      return { forbiddenName: true };
    }
    return null;
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Form Value:', this.articleForm.value);
    } else {
      console.log('Form is not valid');
      this.articleForm.markAllAsTouched();
    }
  }
}
