import {Component} from "@angular/core"
import {BaseNodeComponent} from "@jsplumbtoolkit/browser-ui-angular"

/**
 * An example of how you can use different components for different node types.
 */
@Component({
  template:`<div attr.data-type="{{obj.type}}">{{obj.label}}</div>`
})
export class ThemeNodeComponent extends BaseNodeComponent {

}
