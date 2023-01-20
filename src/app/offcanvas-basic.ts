import { Component } from '@angular/core';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-offcanvas-basic',
  standalone: true,
  templateUrl: './offcanvas-basic.html',
})
export class NgbdOffcanvasBasic {
  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content) {
    this.offcanvasService.open(content, {
      ariaLabelledBy: 'offcanvas-basic-id',
    });
  }
}
