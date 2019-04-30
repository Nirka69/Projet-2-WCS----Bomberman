export class Bomb {

    constructor(public positionX: number,
        public positionY: number,
        public date: Date,
        public power = 1,
        public playerId: number,
        public explosion: boolean = false) { }
}
