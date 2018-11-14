import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
   selector: '[autoGrow]', // This is the attribute selector
   host: {
      '(focus)': 'onFocus()',
      '(blur)': 'onBlur()'
   }
})
export class AutoGrowDirective {
   // _el: ElementRef;  // No need because of the private keyword in constructor args
                        // 2 private member fields are created and assigned to

   constructor(private el: ElementRef, private renderer: Renderer) {
     
   }

   onFocus() {
      // console.log('AAA');
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
   }

   onBlur() {
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
   }
}