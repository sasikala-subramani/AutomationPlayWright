// Adding methods to the car object
let car = {
    name : 'GT',
    maker : 'BMW',
    engine : '1998cc',
    start : function(){
        console.log('Starting the engine...');
    }
};
car.start();
// Adding method stop() later to the object
car.stop = function() {
    console.log('Applying Brake...');  
}
car.stop();
