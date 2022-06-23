export class TaskItem {

    constructor(private _name:string, private _isCompleted:boolean = false) {
        
    }


    get name():string {
        return this._name
    } 

    set name(name:string) {
        this.name=name
    }


    get isCompleted() {
        return this._isCompleted
    }

    set isCompleted(isCompleted:boolean) {
        this._isCompleted=isCompleted
    }


}
