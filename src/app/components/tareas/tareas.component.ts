import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/models/Task"

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  taskList: Task[] = []
  taskName = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {

    const task: Task = {
      name: this.taskName,
      state: false
    }

    this.taskList.push(task)

    this.taskName = "";
  }

  deleteTask(index: number): void {
    this.taskList.splice(index, 1)

  }

  updateTask(task : Task , index : number ) : void {
    this.taskList[index].state = !task.state
  }

}
