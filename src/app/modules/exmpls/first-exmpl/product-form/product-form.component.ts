import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LimitValidator } from "../../../../validators/limit.formvalidator";
import { ProductsService } from "../../services/products.service";
import { MODES, StateModelService } from "../../model/state.model.service";
import { distinctUntilChanged, skipWhile } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

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
  id!: number;
  form!: FormGroup;
  formSubmitted = false;
  editing = false;

  constructor(
    private fb: FormBuilder,
    public productsService: ProductsService,
    private stateModelService: StateModelService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.initForm();
    
    activeRoute.params.subscribe((params) => {
      console.log("[routed]", activeRoute.snapshot);
      console.log("[routed:params]", params);
      this.editing = params['mode'];
      const id = params['id'];
      this.id = id;

      if (id) {
        const { name, category, price } = this.productsService.getProduct(id);
        this.form.patchValue({
          name,
          category,
          price,
          id,
        });
      }
    });

    // this.editing = activeRoute.snapshot.url[2]?.path == "edit";
    // const id = activeRoute.snapshot.params["id"];
    // this.id = id;
    // const name = activeRoute.snapshot.params['name'];
    // const category = activeRoute.snapshot.params['category'];
    // const price = activeRoute.snapshot.params['price'];

    /*
    this.stateModelService.event.pipe(
      skipWhile((state) => state.mode == MODES.EDIT),
      distinctUntilChanged((p, c) => p.id == c.id),
    ).subscribe((e) => {
      // console.log('<FORM>:Event: ', e);

      const editingProduct = this.productsService.getProduct(e.id);
      if (e.id) {
        this.form.patchValue({
          name: editingProduct?.name,
          category: editingProduct?.category,
          price: editingProduct?.price,
          id: e.id,
        })
      }
      this.editing = true;
    })
    */
  }

  submitForm(form: FormGroup) {
    // console.dir(form.controls);
    console.log(":FORM:", form.getRawValue());
    // this.product.emit(form.getRawValue());
    this.productsService.saveProduct(form.getRawValue());
    this.router.navigateByUrl("//exmpls/first-exmpl");
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
          Validators.maxLength(11),
        ],
      ],
      price: [
        "",
        [
          Validators.required,
          LimitValidator.Limit(300),
          Validators.pattern("^[0-9.]+$"),
        ],
      ],
      id: 0,
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
