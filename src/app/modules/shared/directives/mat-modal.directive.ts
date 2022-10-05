import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output("openStart") openStartEvent = new EventEmitter<void>();
  
  constructor(
    private $el: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    this._modal = Modal.init(this.Element, {...this.options, onOpenStart: (el) => this.openStartEvent.emit()});
  }

  open() {
    this._modal?.open();
  }

  close() {
    this._modal?.close();
  }
}
