import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { CreditService } from 'src/app/core/services/credit.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective | undefined;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  public dropdownSettings = {};
  public showFilter = true;

  public ListTypeDocument: [] | undefined;


  public ListCredits: any[] | undefined;


  constructor(serviceCredit: CreditService) { }

  ngOnInit(): void {
  }

  loadTypeDocument(){
    // this.serviceCredit.getTypeDocument().subscribe(response => {
    //   this.ListTypeContact = Object.assign(response['content']);      
    // }, error => console.log(error));
  }

}
