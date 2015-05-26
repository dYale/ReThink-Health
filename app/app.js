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
  { "rx": 22, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" },
  { "rx": containerSettings.w/5 + 21, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 2 + 21, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" },
  { "rx": containerSettings.w/5 * 3 + 21, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 4 + 21, "ry": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" }];


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
  { "x1": 22, "x2": 22, "y1": containerSettings.h, "y2": 25},
  { "x1": 22, "x2": parseInt(containerSettings.w-22), "y1": parseInt(containerSettings.h)-10, "y2": parseInt(containerSettings.h)-10}];


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

//create tringles for x and y axis



    var horTriangle = svgContainer.append('polygon')
    			.style('stroke', 'black')
    			.style('fill', 'black')
    			.attr('points',"22,0, 5,30, 40,30")

    var vertTriangle = svgContainer.append('polygon')
    			.style('stroke', 'black')
    			.style('fill', 'black')
    			.attr('points' , (parseInt(containerSettings.w)) + "," + (parseInt(containerSettings.h-10)) + "," + (parseInt(containerSettings.w)-30) + "," + (parseInt(containerSettings.h+10)) +"," + (parseInt(containerSettings.w-30)) + "," + (parseInt(containerSettings.h)-35))




//add squares for text

	var rectangleTextData = [
  { "x": 22, "y": 0, "height": containerSettings.h, "width": containerSettings.w, "color" : "grey" },
  { "rx": containerSettings.w/20 + 21, "ry": 0, "height": containerSettings.h-50, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/20 * 2 + 21, "ry": 0, "height": containerSettings.h-50, "width": containerSettings.w, "color" : "blue" },
  { "rx": containerSettings.w/20 * 3 + 21, "ry": 0, "height": containerSettings.h-50, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/20 * 4 + 21, "ry": 0, "height": containerSettings.h-50, "width": containerSettings.w, "color" : "grey" }];

  var rectangle1 = svgContainer
 		.append("rect")
 		.attr('x',(parseInt(containerSettings.w)/6.75))
 		.attr('y',(parseInt(containerSettings.h)/1.75))
 		.style('fill','white')
 		.attr('height', (parseInt(containerSettings.h)/5))
 		.attr('width', (parseInt(containerSettings.w)/7))

//  var rectangle2 = svgContainer
//  		.append("rect")
//  		.attr('x',(parseInt(containerSettings.w)/2.25))
//  		.attr('y',(parseInt(containerSettings.h)/5))
//  		.style('fill','white')
//  		.attr('height', (parseInt(containerSettings.h)/3))
//  		.attr('width', (parseInt(containerSettings.w)/7))

// var rectangle3 = svgContainer
// 	.append("rect")
// 	.attr('x',(parseInt(containerSettings.w)/2.25))
// 	.attr('y',(parseInt(containerSettings.h)/5))
// 	.style('fill','white')
// 	.attr('height', (parseInt(containerSettings.h)/5))
// 	.attr('width', (parseInt(containerSettings.w)/7))

// var rectangle4 = svgContainer
// 	.append("rect")
// 	.attr('x',(parseInt(containerSettings.w)/2.25))
// 	.attr('y',(parseInt(containerSettings.h)/5))
// 	.style('fill','white')
// 	.attr('height', (parseInt(containerSettings.h)/5))
// 	.attr('width', (parseInt(containerSettings.w)/7))

// var rectangle5 = svgContainer
// 	.append("rect")
// 	.attr('x',(parseInt(containerSettings.w)/2.25))
// 	.attr('y',(parseInt(containerSettings.h)/5))
// 	.style('fill','white')
// 	.attr('height', (parseInt(containerSettings.h)/5))
// 	.attr('width', (parseInt(containerSettings.w)/7))



//squiggly!!!!! come back to
// var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},	
// 				 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
// 				 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];


// var lineFunction = d3.svg.line()
//                    .x(function(d) { return d.x; })
//                    .y(function(d) { return d.y; })
//                    .interpolate("linear");


// var lineGraph = svgContainer.append("path")
// 		  .attr("d", lineFunction(lineData))
// 		  .attr("stroke", "blue")
// 		  .attr("stroke-width", 2)
// 		  .attr("fill", "none");
//take rectangle and break into appropriate columns with text at top

//fill in








