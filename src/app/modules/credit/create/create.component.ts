import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Client } from 'src/app/core/models/client';
import { Credit } from 'src/app/core/models/credit';
import { CreditByClient } from 'src/app/core/models/credit-by-client';
import { CreditService } from 'src/app/core/services/credit.service';
import Swal from 'sweetalert2';

interface TypeID {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public objClient: Client;
  public objCredit: Credit;
  // selectedValue: string = "";

  lstTypeID: TypeID[] = [
    { value: 0, viewValue: 'Cédula de ciudadanía' },
    { value: 1, viewValue: 'Pasaporte' },
    { value: 2, viewValue: 'Visa' }
  ];

  // disableSelect = new FormControl(false);

  constructor(private service: CreditService) {
    this.objClient = new Client();
    this.objCredit = new Credit();
  }

  ngOnInit(): void {
  }

  onSubmit(formCreditByClient: NgForm){
    if (formCreditByClient.invalid) {
      return;
    }
    this.create();
    // formCreditByClient.resetForm();
  }


  create() {
    this.service.createCredits(this.objClient, this.objCredit).subscribe(data => {
      if (data.isSuccessful) {
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          text: 'Your work has been saved!',
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    }, error => console.log(error));
  }

}
