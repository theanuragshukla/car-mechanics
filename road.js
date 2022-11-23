class Road {
	constructor({x, width, laneCount=3}){
		this.width=width
		this.laneCount = laneCount
		const infinity = 10000000
		this.x = x
		this.left = x - width/2
		this.right =x+width/2
		this.top = -infinity
		this.bottom = infinity
		this.lane = 0
		this.borders = [
			[
				[this.left, this.top], [this.left, this.bottom]
			], 
			[
				[this.right, this.top], [this.right, this.bottom]
			]
		]
	}
	getLaneCenter(lane){
		const laneWidth = this.width/this.laneCount
		return (this.left+laneWidth/2+((lane%this.laneCount)*laneWidth))
	}
	draw () {
		ctx.strokeStyle = "#fff"
		ctx.lineWidth = 5
		for(let i = 1;i<this.laneCount;i++){
			const x = (this.left+(this.right-this.left)*(i/this.laneCount))
			ctx.setLineDash([20, 20])
			ctx.beginPath()
			ctx.moveTo(x, this.top)
			ctx.lineTo(x, this.bottom)
			ctx.stroke()
		}
		ctx.setLineDash([])
		this.borders.forEach((border)=>{
			ctx.beginPath()
			ctx.moveTo(border[0][0], border[0][1])
			ctx.lineTo(border[1][0], border[1][1])
			ctx.stroke()
		})
	}
	update(){
		this.draw()
	}
}
