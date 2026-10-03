let car = {}
car.model = "LAMBA";
car.speed = 300;
car.run = function() {
    console.log(car.model + "-їде зі швидкістю-" + car.speed);
};
car.stop = function() {
    console.log(car.model + "-зупинилася!");
}
car.run();
car.stop();
