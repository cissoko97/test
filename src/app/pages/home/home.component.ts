import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { SidebarItemComponent } from 'src/app/components/sidebar-item/sidebar-item.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  hidden: boolean = true;
  sidebarItemSucribe: Subscription;
  @ViewChild('sidebar', { static: true }) sidebar: ElementRef<HTMLDivElement>;
  @ViewChildren(SidebarItemComponent) sideBarItems: QueryList<SidebarItemComponent>;
  constructor() { }

  ngAfterViewInit(): void {
    console.dir(this.sidebar);
    console.table(this.sideBarItems);
    this.sidebarItemSucribe = this.sideBarItems.changes.subscribe((r) => {
      console.log(r)
    })
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    console.log('Toggle sidebar');
    if (this.hidden)
      this.sidebar.nativeElement.classList.remove('hidden');
    else
      this.sidebar.nativeElement.classList.add('hidden');
    this.hidden = !this.hidden;
  }
}
