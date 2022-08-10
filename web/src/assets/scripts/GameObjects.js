const Game_Objects = []

export class GameObject {
    constructor() {
        Game_Objects.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {

    }

    update() {

    }

    on_destroy() {

    }

    destroy() {
        this.on_destroy();
        for (let i in Game_Objects) {
            const obj = Game_Objects[i];
            if (obj === this) {
                Game_Objects.splice(i);
                break;
            }
        }
    }
}
let last_timestamp;
const step = timestamp => {
    for (let obj of Game_Objects) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        }
        else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(step);
}
requestAnimationFrame(step)

