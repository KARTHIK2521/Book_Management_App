import { Component, OnInit } from '@angular/core';
import { AddBook } from 'src/app/shared/interface/addBook';
import { AddbookService } from 'src/app/shared/service/addbook.service';


@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  constructor(private _bookService: AddbookService){ }

  tableColumnDate=['ISBN','Book Name','Author','Publication'];

  bookDetailsData:Array<AddBook>=[];

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


}
