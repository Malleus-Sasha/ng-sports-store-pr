import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "../../../../validators/limit.formvalidator";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-product-form",
  templateUrl: "product-form.component.html",
  styles: `
    :host {
      display: block;
    }
    input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }
    input.ng-dirty.ng-valid { border: 2px solid #6bc502 }
    .footer { background-color: lightcoral; margin: 10px 0; padding: 5px; text-align: right; }
  `,
})
export class ProductFormComponent {
  // @Output() product = new EventEmitter();
  form!: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
  ) {
    this.form = this.initForm();
  }

  submitForm(form: FormGroup) {
    // console.dir(form.controls);
    console.log(":FORM:", form.getRawValue());
    // this.product.emit(form.getRawValue());
    this.productsService.addProduct();
  }

  initForm() {
    return this.fb.group({
      name: ["", [Validators.required]],
      category: [
        "",
        [
          Validators.required,
          Validators.pattern("^[A-Za-z ]+$"),
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      price: [
        "",
        [
          Validators.required,
          LimitValidator.Limit(100),
          Validators.pattern("^[0-9.]+$"),
        ],
      ],
    });
  }

  getValidationMessages(label: string, control: AbstractControl | null) {
    let messages: string[] = [];
    
    // if(!control) return [];

    if (control?.errors) {
      for (let errorName in control.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${label}`);
            break;
          case "minlength":
            messages.push(`A ${label} must be at least
                        ${control.errors["minlength"].requiredLength}
                        characters`);
            break;
          case "maxlength":
            messages.push(`A ${label} must be no more than
                        ${control.errors["maxlength"].requiredLength}
                        characters`);
            break;
          case "pattern":
            messages.push(`The ${label} contains
                         illegal characters`);
            break;
          case "limit":
            messages.push(`A ${label} cannot be more
                        than ${control.errors["limit"].limit}`);
            break;
        }
      }
    }
    return messages;
  }
}
