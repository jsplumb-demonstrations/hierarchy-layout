
import {
    DEFAULT, AnchorLocations,
    ready,
    newInstance,
    EdgeRoutingPlugin,
    HierarchyLayout
} from "@jsplumbtoolkit/browser-ui"

const edgeRoutingDataset = {
    nodes: [
        { id: 'w1', label: '1'},
        { id: 'w6', label: '6'},
        { id: 'w7', label: '7'},
        { id: 'w9', label: '9'},
        { id: 'w8', label: '8'},
        { id: 'w2', label: '2'},
        { id: 'w3', label: '3'},
        { id: 'w5', label: '5'},
        { id: 'w4', label: '4'},
        { id:"w10", label:"10"},
        { id:"w11", label:"11"},
        { id:"w12", label:"12"}
    ],
    edges: [
        { source: 'w1', target: 'w2', data: { id: 'd32383bc7a2' } },
        { source: 'w1', target: 'w6', data: { id: 'ec97d7d5337' } },
        { source: 'w1', target: 'w6', data: { id: 'ec97d7d5338' } },
        { source: 'w10', target: 'w7', data: { id: '8a040037175' } },
        { source: 'w6', target: 'w10', data: { id: '8a040032175' } },
        { source: 'w7', target: 'w8', data: { id: 'c3e1c4138dd' } },
        { source: 'w7', target: 'w9', data: { id: '8615f5daf61' } },
        { source: 'w2', target: 'w3', data: { id: 'c51a2871780' } },
        { source: 'w3', target: 'w4', data: { id: '050e2e03731' } },
        { source: 'w3', target: 'w7', data: { id: 'e2c22977758' } },
        { source: 'w3', target: 'w5', data: { id: 'e2c22977759' } },
        { source: 'w8', target: 'w12', data: { id: 'e2c22977760' } },
        { source: 'w12', target: 'w11', data: { id: 'e2c22977761' } },
        { source: 'w11', target: 'w2', data: { id: 'e2c22977762' } },
    ]
}

ready(() =>{

    const toolkit = newInstance();
    const toolkitRouting = newInstance();

    const mainElement = document.querySelector("#layout-main"),
        canvas1Element = mainElement.querySelector("#canvas1"),
        canvas2Element = mainElement.querySelector("#canvas2"),
        canvas3Element = mainElement.querySelector("#canvas3"),
        canvas4Element = mainElement.querySelector("#canvas4"),
        canvas5Element = mainElement.querySelector("#canvas5"),
        canvas6Element = mainElement.querySelector("#canvas6")

    const view = () => ({
        nodes: {
            [DEFAULT]: {
                template: `<div data-type="{{type}}">{{label}}</div>`
            }
        }
    });

    toolkitRouting.render(canvas1Element, {
        zoomToFit: true,
        view: view(),
        layout: {
            type: HierarchyLayout.type,
            options: {
                generateRouting: true,
                edgeNodeSize: 20
            }
        },
        elementsDraggable: false,
        consumeRightClick: false,
        plugins: [
            {
                type: EdgeRoutingPlugin.type,
                options: {
                    mode: 'orthogonal'
                }
            }
        ]
    })

    toolkitRouting.render(canvas2Element, {
        zoomToFit: true,
        view: view(),
        layout: {
            type: HierarchyLayout.type,
            options: {
                generateRouting: true,
                edgeNodeSize: 20
            }
        },
        elementsDraggable: false,
        consumeRightClick: false,
        plugins: [
            {
                type: EdgeRoutingPlugin.type,
                options: {
                    mode: 'orthogonal',
                    orthogonalMode: "bus"
                }
            }
        ]
    })

    toolkitRouting.render(canvas3Element, {
        zoomToFit: true,
        view: view(),
        layout: {
            type: HierarchyLayout.type,
            options: {
                generateRouting: true,
                edgeNodeSize: 20
            }
        },
        elementsDraggable: false,
        consumeRightClick: false,
        plugins: [
            {
                type: EdgeRoutingPlugin.type,
                options: {
                    mode: 'direct'
                }
            }
        ]
    })

    toolkit.render(canvas4Element, {
        zoomToFit: true,
        view: view(),
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
    })

    toolkit.render(canvas5Element, {
        zoomToFit: true,
        view: view(),
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
    })

    toolkit.render(canvas6Element, {
        zoomToFit: true,
        view: view(),
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
    })

    toolkit.load({
        url:'./kpitree.json'
    })

    setTimeout(() => toolkitRouting.load({data: edgeRoutingDataset}), 0)

})
