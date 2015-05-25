//get container to show, rectangle

//create basic containerSettings for structure
var containerSettings = {
  w: window.innerWidth,
  h: window.innerHeight,
  r: 25,
  n: 30,
};




var container = d3.select('.container').style({
  width: pixelize( containerSettings.w ),
  height: pixelize( containerSettings.h ),
});

//create an SVG group




var svgContainer = d3.select(".container").append("svg")
        .attr("width",containerSettings.w)
		.attr("height",containerSettings.h);

var rectGroup = container.append("g")

//define rect sizes
var rectangleData = [
  { "rx": 0, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" },
  { "rx": containerSettings.w/5, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 2, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" },
  { "rx": containerSettings.w/5 * 3, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 4, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" }];


  var rectangles = svgContainer.selectAll("rect")
		.data(rectangleData)
		.enter()
 		.append("rect");

	var rectangleAttributes = rectangles
		.attr("x", function (d) { return d.rx; })
		.attr("y", function (d) { return d.ry; })
		.attr("height", function (d) { return d.height; })
		.attr("width", function (d) { return d.width; })
		.style("fill", function(d) { return d.color; });



//create lines for x and y axis

var lineData= [
  { "x1": 0, "x2": 200, "y1": 0, "y2": 200},
  { "x1": 0, "x2": 200, "y1": 0, "y2": 250}];


var lineGraph = svgContainer.selectAll("line")
	.data(lineData)
	.enter()
    .append("svg:line")
    .attr("width", 500)   
    .attr("height", 200); 

var myLine = lineGraph
    .attr("x1", function(d) {return d.x1})
    .attr("y1", function(d) {return d.y1})
    .attr("x2", function(d) {return d.x2})
    .attr("y2", function(d) {return d.y2})
    .style("stroke", "black");


myLine.style("stroke-width", 24)


// var bar = container.selectAll("g")
//       .data('hello')
//     .enter().append("g")
//       .attr("transform", function(d, i) { return "translate(" + i * 400 + ",0)"; })
//       .style({
//       	'background-color': 'grey'
//       });





//take rectangle and break into appropriate columns with text at top

//fill in








