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
var hover = function(){
	var that = this;
			console.log(this)
	d3.selectAll('.column').each(function(d,i){
		if(that === this){
		} else {
			console.log('found')
 		d3.select(this)
 		.append('text')
 		.attr('x',d.rx+50)
 		.attr('y',d.ry+80)
 		.transition().duration(1000)
 	}
})
}

var boxHover = function(){
	var that = this;


	if(!this.formerX && !this.formerY){
	d3.selectAll('.box').each(function(d,i){
		this.formerX = this.x.animVal.value;
		this.formerY = this.y.animVal.value;
		})
}


	d3.selectAll('.box').each(function(d,i){

		console.log(this.formerX, this.formerY)

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

		}
	})
}




var boxReset = function(){

}