import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/models/company';
import { AuthenticationService } from 'src/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly notifier: NotifierService;
  user: User;
  companies: Company[];
  joinCompanySent = false;
  @ViewChild('cNum', {static: false}) cNum: ElementRef;


  displayedColumns: string[] = [
    'icon',
    'nrKompanii',
    'action'
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.getCompanyList();
  }

  getCompanyDetails(companyId: number) {
    this.router.navigate(['/company/', companyId]);
  }
  getCompanyList() {
    this.companyService.getCompaniesList()
      .subscribe((data: Company[]) => {
        this.companies = data;

        this.dataSource = new MatTableDataSource(this.companies);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się pobrać list kompanii');
        console.error(err.message || err);
      });
  }

  joinCompany(companyId: number) {
    this.companyService.sendJoinRequest(companyId)
      .subscribe(_ => {
        this.joinCompanySent = true;
        this.notifierService.notify('success', 'Pomyślnie wysłano prośbę');
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się wysłać prośby');
        console.error(err.message || err);
      });
  }

  createCompany(num: number) {
    this.companyService.createCompany(num)
      .subscribe(async _ => {
        await this.notifierService.notify('success', 'Utworzono nową kompanię, której dowódcą jesteś Ty');
        this.cNum.nativeElement.value = '';
        setTimeout( async () => {
          await this.getCompanyList();
          await this.authenticationService.updateSoldierDetails()
            .then(ret => this.user = ret);
        }, 2000);
      },
      async err => {
        await this.notifierService.notify('error', 'Nie udało się utworzyć kompanii');
        console.error(err.message || err);
      });
  }

  async logOut() {
    await this.authenticationService.logout();
  }

  constructor(private companyService: CompanyService, private notifierService: NotifierService,
              private authenticationService: AuthenticationService, private router: Router) {
                this.notifier = notifierService;
  }

}
