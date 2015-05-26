//get container to show, rectangle
var outerDiv = document.getElementById("outer")
//create basic containerSettings for structure

var outerDiv = {
  w: window.innerWidth,
  h: window.innerHeight,
}

var containerSettings = {
  w: outerDiv.w * 0.9,
  h: outerDiv.h * 0.9,
};


//create an SVG group

var outerContainer = d3.select("#outer").append("svg")
        .attr("width",outerDiv.w)
		.attr("height",outerDiv.h);


var svgContainer = d3.select(".container").append("svg")
        .attr("width",containerSettings.w)
		.attr("height",containerSettings.h);

var rectGroup = svgContainer.append("g")

//define rect attributes
var rectangleData = [
  { "rx": 21, "ry": -21, "height": containerSettings.h, "width": containerSettings.w, "color" : "#adadad" },
  { "rx": containerSettings.w/5 + 21, "ry": -21, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 2 + 21, "ry": -21, "height": containerSettings.h, "width": containerSettings.w, "color" : "#adadad" },
  { "rx": containerSettings.w/5 * 3 + 21, "ry": -21, "height": containerSettings.h, "width": containerSettings.w, "color" : "#dcdcdc" },
  { "rx": containerSettings.w/5 * 4 + 21, "ry": -21, "height": containerSettings.h, "width": containerSettings.w, "color" : "#adadad" }];


  //
  var rectangles = svgContainer.select('g').selectAll("rect")
		.data(rectangleData)
		.enter()
 		.append('g')
 		.classed('column', true)
 		.append("rect")




//column attribute assigner
	var rectangleAttributes = rectangles
		.attr("x", function (d) { return d.rx; })
		.attr("y", function (d) { return d.ry; })
		.attr("height", function (d) { return d.height; })
		.attr("width", function (d) { return d.width; })
		.style("fill", function(d) { return d.color; });

//text arrays for columns
var headerArray = ['Phase 1:','Phase 2:','Phase 3:','Phase 4:','Phase 5:']
var nameArray = ['Campaign','Engage','Align','Redesign','Integrate']

	//Header Text
 	d3.selectAll('.column').each(function(d,i){
 		d3.select(this)
 			.append('text')
 			.attr('x',d.rx+60)
 			.attr('y',d.ry+50)
 			.text(headerArray[i])
 			.style('font-size', pixelize(textAdjust(28)))
 		})
 		//Sub Header Text
 		d3.selectAll('.column').each(function(d,i){
 		d3.select(this)
 			.append('text')
 			.attr('x',d.rx+60)
 			.attr('y',d.ry+80)
 			.text(nameArray[i])
 			.style('font-size', pixelize(textAdjust(28)))
 			.style('font-weight', 'bold' )
 	})


 		//Hover




//create lines for x and y axis

var lineData= [
  { "x1": 22, "x2": 22, "y1": containerSettings.h-10.505, "y2": 25},
  { "x1": 22, "x2": parseInt(containerSettings.w-22), "y1": parseInt(containerSettings.h)-22, "y2": parseInt(containerSettings.h)-22}]
 









var lineGraph = svgContainer.select('g').selectAll("line")
	.data(lineData)
	.enter()
 	.append('g')
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



    var horTriangle = svgContainer.select('g')
 				.append('g')
    			.append('polygon')
    			.style('stroke', 'black')
    			.style('fill', 'black')
    			.attr('points',"21,0, 4,30, 40,30")

    var vertTriangle = svgContainer.select('g')
 				.append('g')
    			.append('polygon')
    			.style('stroke', 'black')
    			.style('fill', 'black')
    			.attr('points' , (parseInt(containerSettings.w)) + "," + (parseInt(containerSettings.h-21)) + "," + (parseInt(containerSettings.w)-30) + "," + (parseInt(containerSettings.h-4)) +"," + (parseInt(containerSettings.w-30)) + "," + (parseInt(containerSettings.h)-40))

//temporary line across central axis
  var horizontalLine = svgContainer.select('g')
  		.append('g')
 		.append("line")
 		.attr('x1',22)
 		.attr('y1',parseInt(containerSettings.h)-27.51)
 		.attr('x2',parseInt(containerSettings.w))
 		.attr('y2',110)
 		.style('stroke','black')
 		.style('opacity', 0.8)


//add squares for text
  var rectangle1 = svgContainer.select('g')
 		.append('g')
 		.attr('class','boxG1')
 		.append("rect")
 		.attr('x',(parseInt(containerSettings.w)/6.75))
 		.attr('y',(parseInt(containerSettings.h)/1.44451))
 		.attr('height', (parseInt(containerSettings.h)/6.91))
 		.attr('width', (parseInt(containerSettings.w)/7))
 		.classed('box',true)
 		.on("click", boxHover)

 var rectangle2 = svgContainer.select('g')
 		.append('g')
 		.attr('class','boxG2')
 		.append("rect")
 		.attr('x',(parseInt(containerSettings.w)/2.9))
 		.attr('y',(parseInt(containerSettings.h)/1.8))
 		.attr('height', (parseInt(containerSettings.h)/6.91))
 		.attr('width', (parseInt(containerSettings.w)/7))
 		.classed('box',true)
 		.on("click", boxHover)


var rectangle3 = svgContainer.select('g')
 	.append('g')
 	.attr('class','boxG3')
	.append("rect")
	.attr('x',(parseInt(containerSettings.w)/1.83))
	.attr('y',(parseInt(containerSettings.h)/2.5))
	.attr('height', (parseInt(containerSettings.h)/6.91))
	.attr('width', (parseInt(containerSettings.w)/7))
	.style('background-color', 'blue')
 	.classed('box',true)
 	.on("click", boxHover)
 	


var rectangle4 = svgContainer.select('g')
 	.append('g')
 	.attr('class','boxG4')
	.append("rect")
	.attr('x',(parseInt(containerSettings.w)/1.35))
	.attr('y',(parseInt(containerSettings.h)/3.7))
	.attr('height', (parseInt(containerSettings.h)/7))
	.attr('width', (parseInt(containerSettings.w)/7))
 	.classed('box',true)
 	.on("click", boxHover)

var rectanglesForText = [rectangle1, rectangle2, rectangle3, rectangle4];


//internal text for each box
d3.selectAll('.boxG1').each(function(d,i){
 		d3.select(this)
 			.append('text')
 			.text('Celebrate Success')
 			.attr('x',(parseInt(containerSettings.w)/6.75))
	 		.attr('y',(parseInt(containerSettings.h)/1.45))
	 		.attr('height', (parseInt(containerSettings.h)/6.91))
	 		.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(28)))
 			d3.select(this)
 			.append("svg:foreignObject")
 			.attr('x',(parseInt(containerSettings.w)/6.75))
	 		.attr('y',(parseInt(containerSettings.h)/1.44451))
	 		.attr('height', (parseInt(containerSettings.h)/7))
	 		.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(17)))
 			.append('xhtml:p')
   			.text('Learn from joint accomplishments and use lessons to springsboard the effort to ongoing collaboration.')
   			.style('text-align','center')
   			.on("click", boxHover)
   			


 	})
d3.selectAll('.boxG2').each(function(d,i){
 		d3.select(this)
 			.append('text')
 			.text('Build Commitment')
 			.attr('x',(parseInt(containerSettings.w)/2.9))
 			.attr('y',(parseInt(containerSettings.h)/1.81))
	 		.attr('height', (parseInt(containerSettings.h)/7))
	 		.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(28)))
 			d3.select(this)
 			.append("svg:foreignObject")
 			.attr('x',(parseInt(containerSettings.w)/2.9))
 			.attr('y',(parseInt(containerSettings.h)/1.8))
	 		.attr('height', (parseInt(containerSettings.h)/6.91))
	 		.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(17)))
 			.append('xhtml:p')
   			.text('Develop bolder vision with early examples and growing organizational capacity.')
   			.style('text-align','center')
   			.on("click", boxHover)

 	})
d3.selectAll('.boxG3').each(function(d,i){
 		d3.select(this)
 			.append('text')
 			.text('Up The Ante')
 			.attr('x',(parseInt(containerSettings.w)/1.83))
			.attr('y',(parseInt(containerSettings.h)/2.53))
			.attr('height', (parseInt(containerSettings.h)/6.91))
			.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(28)))
 			d3.select(this)
 			.append("svg:foreignObject")
 				.attr('x',(parseInt(containerSettings.w)/1.83))
			.attr('y',(parseInt(containerSettings.h)/2.5))
			.attr('height', (parseInt(containerSettings.h)/6.91))
			.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(17)))
 			.append('xhtml:p')
   			.text('Focus on aspiration and link short-term action to long-term strategy.')
   			.style('text-align','center')
   			.on("click", boxHover)

 	})
d3.selectAll('.boxG4').each(function(d,i){
	var that = this;
 		d3.select(this)
 			.append('text')
 			.text('Change the Game')
 			.attr('x',(parseInt(containerSettings.w)/1.35))
			.attr('y',(parseInt(containerSettings.h)/3.78))
			.attr('height', (parseInt(containerSettings.h)/7))
			.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(28)))
 		d3.select(this)
 			.append("svg:foreignObject")
 			.attr('x',(parseInt(containerSettings.w)/1.35))
			.attr('y',(parseInt(containerSettings.h)/3.7))
			.attr('height', (parseInt(containerSettings.h)/6.91))
			.attr('width', (parseInt(containerSettings.w)/7))
 			.style('font-size',pixelize(textAdjust(17)))
 			.append('xhtml:p')
   			.text('Generate new support and energy through vision, innovation and success.')
   			.style('text-align','center')
   			.on("click", boxHover)

 	})

   			
 			






// var rectData = {'opacity': 0.8, 'height': containerSettings.h/6.91, 'width': containerSettings.w, 'x': containerSettings.w/1.35, 'y': containerSettings.h/3.7}



// 	var rectangle5 = outerContainer.select('svg').selectAll('g')
// 	.data(rectData)
// 	.enter()
// 	.append('g')
// 	.append("rect")
// 	.attr('x',(parseInt(containerSettings.w)/1.35))
// 	.attr('y',(parseInt(containerSettings.h)/3.7))
// 	.style('opacity', 0.8)
// 	.attr('height', (parseInt(containerSettings.h)/6.91))
// 	.attr('width', (parseInt(containerSettings.w)))


// console.log(outerContainer, svgContainer)

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








