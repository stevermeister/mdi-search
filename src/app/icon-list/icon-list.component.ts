import { Component, OnInit, Input } from '@angular/core';
import { IconsService } from '../icons.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css'],
  providers: [IconsService]
})
export class IconListComponent implements OnInit {

  @Input() filter: string;

  public icons: Icon[];

  constructor(private _iconsService: IconsService) { }

  ngOnInit() {
    this.icons = this._iconsService.getIcons();
  }

  copyText(text) {
      var copyFrom = document.createElement('textarea');
      copyFrom.setAttribute("style", "position:absolute;opacity:0");
      copyFrom.value = text;
      document.body.appendChild(copyFrom);
      copyFrom.select();
      document.execCommand('copy');
      var copied = document.createElement('div');
      copied.setAttribute('class', 'copied');
      copied.appendChild(document.createTextNode(`"${text}" copied to Clipboard`));
      document.body.appendChild(copied);
      setTimeout(function () {
          document.body.removeChild(copyFrom);
          document.body.removeChild(copied);
      }, 1500);
  }

}
