function pixelize(number) {
  return number + 'px';
};


var rectTexter = function(element){
    var bbox = this.getBBox();
    div.text("x: " + bbox.x + ", y: " + bbox.y + ", h: " + bbox.height + ", w: " + bbox.width);
};
 
var textAdjust = function(num){
	return num * (containerSettings.h / 728)
}


//START HERE AND FIX THIS TOMORROW DO ANIMATIONS!


var boxHover = function(){
	var that = this;
	if(this.tagName === 'P'){
		console.log(this.parentNode.parentNode.children[0])
		that = this.parentNode.parentNode.children[0]
	}

	if(!that.formerX && !that.formerY){
	d3.selectAll('.box').each(function(d,i){
		this.formerX = this.x.animVal.value;
		this.formerY = this.y.animVal.value;

		})
}

	console.log(this,that)
	d3.selectAll('.box').each(function(d,i){


		 	console.log(this,that)
		 if(that === this){
			d3.select(this)
		 		.classed('active', true)
		 		.classed('notActive', false)
		 		.transition()
		 		.attr('height','200')
		 		.attr('width', '500')
		 		.attr('y', '95')
		 		.attr('x', '50')
		 		.transition().duration(2500)
	 		d3.select(this.parentNode.children[1])
		 		.transition()
		 		.attr('height','200')
		 		.attr('width', '500')
		 		.attr('y', '95')
		 		.attr('x', '50')
		 		.transition().duration(1500)
	 		d3.select(this.parentNode.children[2])
		 		.transition()
		 		.attr('height','200')
		 		.attr('width', '500')
		 		.attr('y', '95')
		 		.attr('x', '50')
		 		.style('font-weight','bold')
		 		.transition().duration(1500)
		 	d3.select(this.parentNode)
	 			.append("svg:foreignObject")
	 			.attr('class', 'temp')
	 			.attr('y', '130')
		 		.attr('x', '50')
				.attr('height','200')
		 		.attr('width', '500')
	 			.append('xhtml:ul')
	 			.append('xhtml:li')
	   			.text('Diagnose needs, resources and gaps')
	   			.append('xhtml:li')
	   			.text('Build system understanding')
	   			.append('xhtml:li')
	   			.text('Frame system wide goals that connect to aspirational vision')
	   			.append('xhtml:li')
	   			.text('Understand the health and finance networks')
	   			.append('xhtml:li')
	   			.text('Assess approach and impact to improve strategy')
	   			.style('text-align','center')
	   			//prewrite this and all other options at opacity 0, then specifically change the opacity depending on whaich element is clicked




		  } else {
		    d3.select(this)
				.classed('active', false)
				.classed('notActive', true)
	 			.transition()
	 			.attr('width', (parseInt(containerSettings.w)/7))
				.attr('height', (parseInt(containerSettings.h)/6.91))
				.attr('y', this.formerY)
				.attr('x', this.formerX)
			d3.select(this.parentNode.children[1])
	 			.transition()
	 			.attr('width', (parseInt(containerSettings.w)/7))
				.attr('height', (parseInt(containerSettings.h)/6.91))
				.attr('y', this.formerY)
				.attr('x', this.formerX)
			d3.select(this.parentNode.children[2])
	 			.transition()
	 			.attr('width', (parseInt(containerSettings.w)/7))
				.attr('height', (parseInt(containerSettings.h)/6.91))
				.attr('y', this.formerY)
				.attr('x', this.formerX)
		 		.style('font-weight','normal')
		 	d3.select('.temp').remove();
		 	d3.select('.temp2').remove();
		 	d3.select('.temp3').remove();



		}
	})
}




var boxReset = function(){

}