import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../model/task-item';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  name:string 
  taskList:TaskItem[]
  taskPost:Array<TaskItem>


  constructor() {
    this.name=''
    this.taskList=[]
    this.taskPost=[]
   }

  ngOnInit(): void {
  }

  addTask():void {
    if(this.name.trim().length>0){
      this.taskList.push(new TaskItem(this.name))
      this.name=''
    }
     
  } 

  markAsCompleted(index:number):void {
    this.taskList[index].isCompleted = !this.taskList[index].isCompleted
  }

  markAsPostponed(index:number):void {
    this.taskPost.push(this.taskList[index])
    this.taskList.splice(index,1)
  }

  removeTask(index:number):void {
    this.taskList.splice(index,1)
  }
  removeAllCompleted():void {
    /*
    let listAux:TaskItem[] = []
    
    this.taskList.forEach((taskItem) => {
      if(!taskItem.isCompleted) {
        listAux.push(taskItem)
      }
    })
    this.taskList=listAux
    */
   this.taskList= this.taskList.filter((task) => !task.isCompleted)
  }
  showAll():void {
     this.taskList= this.taskList.concat(this.taskPost)
     this.taskPost=[]
  }

}
