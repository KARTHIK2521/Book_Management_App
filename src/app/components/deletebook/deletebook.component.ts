import { Component, OnInit } from '@angular/core';
import { AddBook } from 'src/app/shared/interface/addBook';
import { AddbookService } from 'src/app/shared/service/addbook.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  tableColumnDate=['Id','BookName','Author','Publication','Qty','Price','Branch','Action'];

  bookDetailsData:Array<AddBook>=[];

  constructor(private _bookService: AddbookService){ }

  ngOnInit(): void {
    this.showBookDetails();
  }

  showBookDetails(){
    this._bookService.getBookDetails().subscribe({
      next :(value)=> {
          //console.log(value);
          this.bookDetailsData=value;
      },
    })
  }

  deleteBook(id:any){
    this._bookService.deleteBookDetails(id).subscribe({
     next:(value)=> {
       alert(`Book Deleted Successfully`);
       this.showBookDetails();
     },
     error:console.log
    })
 }

}
