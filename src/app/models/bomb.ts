export class Bomb {

    constructor(public positionX: number,
        public positionY: number,
        public date: Date,
        public power = 1,
        public playerId: number,
        public explosion: boolean = false,
        public topflame: number = 1,
        public rightflame: number = 2,
        public bottomflame: number = 3,
        public leftflame: number = 4){ }
}
