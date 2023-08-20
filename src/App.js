import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [
    { id:"0", type:"O", symbolType:"square", label:"Case A/20171210/2017" }, 
    { id:"1", type:"P", symbolType:"circle", label:"Superintendent John Tan" }, 
    { id:"2", type:"P", symbolType:"circle", label:"Navindren S/O Ramash", gender:"M", dob:"10-Oct-1988" },
    { id:"3", type:"L", symbolType:"triangle", label:"27 Lorong Ah Soo" },
    { id:"4", type:"O", symbolType:"square", label:"Voluntarily Causing Hurt" },
    { id:"5", type:"E", symbolType:"star", label:"Court Date: 27-Nov-2023" },
    { id:"6", type:"E", symbolType:"star", label:"12-Oct-2017 16:00" },
    { id:"7", type:"P", symbolType:"circle", label:"Thong Yew Kee Nelson", gender:"M" },
    { id:"8", type:"L", symbolType:"triangle", label:"Race Course Road" }
  ],
  links: [
    { source:"0", target:"1", label:"Investigated by" },
    { source:"0", target:"2", label:"Is Accused" },
    { source:"0", target:"7", label:"Is Victim" },
    { source:"2", target:"4", label:"Charged with" },
    { source:"2", target:"3", label:"Lives at" },
    { source:"2", target:"5" },
    { source:"4", target:"6", label:"Committed on" },
    { source:"4", target:"8", label:"Committed at" },
    { source:"4", target:"7", label:"Is Victim" }
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  automaticRearrangeAfterDropNode: true,
  directed: true,
  nodeHighlightBehavior: true,
  height: window.innerHeight,
  width: window.innerWidth,
  initialZoom:2,
  staticGraph: false,
  d3: {
    alphaTarget: 0.05,
    gravity: -250,
    linkLength: 120,
    linkStrength: 2,
  },
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
    labelProperty: "label"
  },
  link: {
    highlightColor: "lightblue",
    labelProperty: "label",
    renderLabel: true
  },
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

function App() {
  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
  );
};

export default App;