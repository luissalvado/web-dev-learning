import { TemplateRef, ViewContainerRef } from "@angular/core";
import { Directive, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[mySpecialFor]",
})
export class ForDirective implements OnInit {
  @Input("mySpecialForInto") numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
