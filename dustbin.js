class dustbin {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        world.add(world1,this.body );
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        stroke("green");
        fill (255);
        rect(0, 0, this.width, this.height);
        pop()
    }
}