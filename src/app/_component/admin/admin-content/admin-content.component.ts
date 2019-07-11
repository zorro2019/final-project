import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
    ngOnInit(): void {
        console.log('je suis appelé !!!');
    }


}
