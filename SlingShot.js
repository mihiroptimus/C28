class SlingShot {
    constructor(bodyX, coordinate){

        var options = {
            bodyA: bodyX,
            pointB: coordinate,
            stiffness: 0.04,
            length: 10
        }

        this.sling = Constraint.create(options)
        this.coordinate =  coordinate;
        World.add(world, this.sling);
    }

    fly(){
        
        this.sling.bodyA = null;

    }

    display(){

        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position
            var pointB = this.coordinate
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)

        }

    }

}