class Form{
    constructor(){
         this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
    }

hide(){
    this.greeting.hide();
      this.button.hide()  ;
this.input.hide();
    }
    display(){
        var title=createElement("h2")
        title.html("car racing")
        title.position(478,145);
        
        this.input.position(450,200);
        this.button.position(510,250);
        
       this.button.mousePressed(()=>{
          this.input.hide()
           this.button.hide()
        
             player.name= this.input.value();
           playerCount += 1;
           player.index=playerCount
            player.update();
            player.updateCount(playerCount);
            
          this.greeting.html("Hello "+player.name);
          this.greeting.position(510,250);     
        })
    }
}