import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AddbookService } from 'src/app/shared/service/addbook.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm: FormGroup;

  public formvalues:any=[] ;
  users = [];
  department:String[]=['IT','Civil','Mech'];

  constructor (private addbookService: AddbookService){

    this.addBookForm=new FormGroup({
      isbnNumber: new FormControl("", [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      author: new FormControl("", [Validators.required,Validators.maxLength(50)]),
      publication: new FormControl("", [Validators.required, Validators.minLength(5),Validators.maxLength(50)]),
      details: new FormControl("", [Validators.required, Validators.minLength(5),Validators.maxLength(250)]),
      qty: new FormControl("", [Validators.required, Validators.minLength(1),Validators.maxLength(5)]),
      price: new FormControl("", [Validators.required, Validators.minLength(2),Validators.maxLength(5)]),
      branch: new FormControl("", [Validators.required])
    })

  }

  ngOnInit() {
    this.addbookService.getBookDetails().subscribe(data => {
      this.users = data;
      //console.log(this.users)

    });
  }

  onFormSubmit(){
    if (this.addBookForm.valid) {
      const formData = this.addBookForm.value;
      this.addbookService.addBook(this.addBookForm.value);
      // console.log(formData);
       alert("Added Book SucessFully")
    }
    this.addBookForm.reset();
  }

}
