import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inlineimages',
  templateUrl: './inlineimages.component.html',
  styleUrls: ['./inlineimages.component.css']
})
export class InlineimagesComponent {
  @Input() inlineImages: any;

}
