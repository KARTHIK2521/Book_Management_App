import { Component ,OnInit } from '@angular/core';
import { AddBook } from 'src/app/shared/interface/addBook';
import { AddbookService } from 'src/app/shared/service/addbook.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent  implements OnInit{

  tableColumnDate=['Author','Branch','Details','IsbnNumber','Name','Price','Publication','Qty'];

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

}
