export class Bomb {

<<<<<<< HEAD
 constructor(public positionX: number,
             public positionY: number,
             public date: Date,
             public power = 1,
             public playerId: number) {}
}
=======
 constructor(public positionX: number, 
    public positionY: number, 
    public date: Date, 
    public power = 1, 
    public playerId: number,
    public explosion: boolean = false) { }
}
>>>>>>> 9565d9bb42c4e4790fc51a36ca0de561c98e1e72
