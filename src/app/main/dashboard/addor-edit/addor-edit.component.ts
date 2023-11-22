import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputValidation } from '../../../shared/modal/inputvalidation';

@Component({
  selector: 'app-addor-edit',
  templateUrl: './addor-edit.component.html',
  styleUrls: ['./addor-edit.component.scss']
})

export class AddorEditComponent implements OnInit {

  vault_id: number = 0;
  showAdd: boolean = true;
  vaultForm!: FormGroup;
  submitted: boolean = false;
  validation = new InputValidation();
  vaultData: any;

  constructor(private router: Router, private route: ActivatedRoute, private _fb: FormBuilder) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.addvaultForm();

    this.route.params.subscribe((params: any) => {
      this.vault_id = params.id ?? 0;
    })

    this.vaultData = localStorage.getItem('vaultData') ?? [];

    if(this.vaultData.length > 0) {
      this.vaultData = JSON.parse(this.vaultData);
    }
  }

  addvaultForm() {
    this.vaultForm = this._fb.group({
      id: [this.vault_id],
      application_name: ['', Validators.required],
      application_link: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])],
      confirmpassword: ['', Validators.required],
    },
      {
          validator: this.validation.ConfirmedValidator('password', 'confirmpassword'),
      }
    );
  }

  submit() {
    this.submitted = true;

    if(this.vaultForm.valid) {
      if(this.vault_id === 0) {
        const id = Math.floor(Math.random()*90000) + 10000;
        this.vaultForm.patchValue({
          id: id
        });
      } else {
        const index = this.vaultData.findIndex((ele:any) => ele.id === this.vault_id);

        this.vaultData.splice(index, 1);
      }

      this.vaultData.push(this.vaultForm.getRawValue());
      console.log("this.vaultData", this.vaultData);
      localStorage.setItem('vaultData', JSON.stringify(this.vaultData));

      this.cancel();
    }

    console.log("form", this.vaultForm.value);
  }

  cancel() {
    this.addvaultForm();
    this.vault_id = 0;
    this.router.navigate(['/main/dashboard']);
  }
}
