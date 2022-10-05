import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Modal, ModalOptions } from 'materialize-css';

@Directive({
  selector: '[matModal]'
})
export class MatModalDirective implements OnInit {
  private _modal: Modal | undefined;
  options: Partial<ModalOptions> | undefined = {};
  
  @Input("matModal")
  set Options(v: Partial<ModalOptions> | undefined) { this.options = v; }

  get Element(): HTMLElement { return this.$el.nativeElement; }

  constructor(
    private $el: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    console.log(this.options);
    this._modal = Modal.init(this.Element, {...this.options});
  }

  open() {
    this._modal?.open();
  }

  close() {
    this._modal?.close();
  }
}
