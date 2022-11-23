const cnvs = document.getElementById("cnvs")
const ctx = cnvs.getContext('2d')

cnvs.width = 600
cnvs.height = innerHeight
const road = new Road({
	x:cnvs.width/2, 
	width:cnvs.width*0.9, 
	laneCount:5
})
const car = new Car({
	position:{
		x:road.getLaneCenter(2), 
		y:cnvs.height*0.7
	}, 
	velocity:{
		x:5,
		y:5
	}, 
	width:50, 
	height:100
})
const animate = () => {
	cnvs.height=innerHeight
	ctx.save()
	ctx.translate(0,-car.position.y+cnvs.height*0.7)
	road.update()
	car.update()
	ctx.restore()
	requestAnimationFrame(animate)
}

onload = () => {
	animate()
}
