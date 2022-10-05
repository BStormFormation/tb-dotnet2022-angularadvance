import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface ForContext {
  $implicit: string,
  index: number
}

@Directive({
  selector: '[for]'
})
export class ForDirective {

  @Input("forIn")
  set In(v: any) {
    for(let key in v) {
      this.$container.createEmbeddedView(this.$template, {$implicit: key, index: 0})
    }
  }

  constructor(
    private $template: TemplateRef<ForContext>,
    private $container: ViewContainerRef
    ) { }

}
