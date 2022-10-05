import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { Carousel, CarouselOptions } from 'materialize-css';

@Directive({
  selector: '[matCarousel]'
})
export class MatCarouselDirective implements OnDestroy {
  private _interval: NodeJS.Timer | undefined;
  private _carousel: Carousel | undefined;
  
  @Output("nbImages") nbImagesEvent = new EventEmitter<number>();

  @Input("auto")
  set Auto(v: {time: number, isAuto: boolean}) {
    if (v.isAuto = true && !this._interval) { 
      this._interval = setInterval(() => this.next(), v.time);
    }
  }

  get Element(): HTMLElement {
    return this.$el.nativeElement;
  }
  get ImgCount() { return this.$el.nativeElement.querySelectorAll("a").length }
  constructor(
    private $el: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    this._carousel = Carousel.init(this.Element, {});
    this.nbImagesEvent.emit(this.ImgCount);
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
  }

  @HostListener("wheel", ["$event"])
  weelAction(event: WheelEvent) {
    event.preventDefault();
    if (event.deltaY > 0) {
      this.next();
    } else {
      this.prev();
    }
  }

  next() {
    this._carousel?.next();
  }
  prev() {
    this._carousel?.prev();
  }
  set(i: number = 0) {
    this._carousel?.set(i);
  }


}
