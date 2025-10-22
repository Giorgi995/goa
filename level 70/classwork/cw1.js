function Task(title, desk, state){
     this.title = title
     this.desk = desk
     this.state = state
     
      this.complate = function(){
          this.state = !this.state
      }
}

let homework = new Task ("homework", "group 64"
false, "2025-07-30")
















