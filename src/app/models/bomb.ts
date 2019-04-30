export class Bomb {
1
    constructor(public positionX: number,
        public positionY: number,
        public date: Date,
        public power = 1,
        public playerId: number,
        public explosion: boolean = false,
        public topflame: number = 0,
        public rightflame: number = 0,
        public bottomflame: number = 0,
        public leftflame: number = 0){
            
         }
}
