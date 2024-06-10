import {Component} from "@angular/core"
import {BaseNodeComponent} from "@jsplumbtoolkit/browser-ui-angular"

@Component({
  template:`<div attr.data-type="{{obj.type}}" (click)="nodeClicked()">{{obj.label}}</div>`
})
export class NodeComponent extends BaseNodeComponent {

  nodeClicked() {
    alert(`You clicked on node ${this.obj.id}`)
  }
}
