class Car{
	constructor({height, width, position}){
		this.width = width
		this.height = height
		this.position = position
		this.speed = 0
		this.acc = 1
		this.friction = 0.4
		this.angle = 0
		this.maxSpeed = 10
		this.steer = 0.04
		this.controls = new Controls()
		const img = new Image()
		img.src = "./sprites/sprite1.png";
		img.onload=()=>{
			this.img = img
		}
	}

	draw(){
		//ctx.fillStyle = '#000'
		ctx.save()
		ctx.translate(this.position.x, this.position.y)
		ctx.rotate(-this.angle)
		ctx.drawImage(this.img, -(this.width/2), -this.height/2, this.width, this.height);
		ctx.restore()
		ctx.fill()
	}
	update(){
		if(this.controls.forward){
			this.speed+=this.acc
		}
		if(this.controls.reverse){
			this.speed-=this.acc
		}
		if(this.speed>this.maxSpeed){
			this.speed = this.maxSpeed
		}
		if(this.speed< -this.maxSpeed){
			this.speed = -this.maxSpeed
		}
		if(Math.abs(this.speed)<this.friction){
			this.speed=0
		}
		if(this.speed>0){
			this.speed -= this.friction
		}
		if(this.speed< 0){
			this.speed += this.friction
		}
		if(this.speed!=0){
			const flip = this.speed > 0 ? 1 : -1
			if(this.controls.left){
				this.angle+=Number(this.steer)*flip
			}
			if(this.controls.right){
				this.angle-=Number(this.steer)*flip
			}

		}
		this.position.x-=Math.sin(this.angle)*this.speed
		this.position.y-=Math.cos(this.angle)*this.speed

		this.draw()
	}
}

