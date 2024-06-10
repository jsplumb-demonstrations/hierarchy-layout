import {AfterViewInit, Component} from '@angular/core'
import {
  AnchorLocations,
  BlankEndpoint,
  ArrowOverlay,
  DEFAULT,
  HierarchyLayout,
  EdgeRoutingPlugin,
  SegmentedConnector,
  OrthogonalRouterModes
} from "@jsplumbtoolkit/browser-ui"
import {NodeComponent} from "./node.component"
import {jsPlumbService} from "@jsplumbtoolkit/browser-ui-angular"
import {ThemeNodeComponent} from "./theme.node.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  constructor(private $jsplumb:jsPlumbService) {}

  viewParams = {
    nodes: {
      [DEFAULT]: {
        component: NodeComponent
      },
      "theme":{
        component:ThemeNodeComponent
      }
    },
    edges: {
      [DEFAULT]: {
        connector: SegmentedConnector.type,
        endpoint: BlankEndpoint.type,
        overlays:[
          {
            type:ArrowOverlay.type,
            options:{
              width:15,
              length:10,
              location:1
            }
          }
        ]
      }
    }
  }

  renderParams1 = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        axis:"vertical"
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["left", "right"]} }
    }
  }

  renderParams2 = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        axis:"horizontal"
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["bottom", "top"]} }
    }
  }

  renderParams3 = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        axis:"horizontal",
        placementStrategy:"center"
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["bottom", "top"]} }
    }
  }

  edgeRoutingRenderParams = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        generateRouting:true
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    plugins:[
      {
        type:EdgeRoutingPlugin.type,
        options:{

        }
      }
    ],
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["bottom", "top"]} }
    }
  }

  edgeRoutingRenderParams2 = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        generateRouting:true
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    plugins:[
      {
        type:EdgeRoutingPlugin.type,
        options:{
          mode:"orthogonal"
        }
      }
    ],
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["bottom", "top"]} }
    }
  }

  edgeRoutingRenderParams3 = {
    zoomToFit: true,
    layout: {
      type: HierarchyLayout.type,
      options:{
        generateRouting:true
      }
    },
    elementsDraggable:false,
    consumeRightClick:false,
    plugins:[
      {
        type:EdgeRoutingPlugin.type,
        options:{
          mode:"orthogonal",
          orthogonalMode:OrthogonalRouterModes.bus
        }
      }
    ],
    defaults:{
      anchor: { type:AnchorLocations.Continuous, options:{ faces:["bottom", "top"]} }
    }
  }

  ngAfterViewInit(): void {
    this.$jsplumb.getToolkit("demo").load({
      url:'/assets/kpitree.json'
    })

    this.$jsplumb.getToolkit("demo2").load({
      url:'/assets/edge-routing.json'
    })
  }


}
