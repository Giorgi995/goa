from turtle import *


#we want to paint a house

#step 1: draw a square

width(7)
color("red")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
#end of square



#drawing a door

begin_fill()
forward(70)
color("blue")
left(90)
forward(120) #height of the door
right(90)
forward(60)
right(90) 
forward(120)
end_fill()  #end of the door

penup()
goto(200,200)
pendown()
color("black")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()  #end of the roof

#drawing a window

penup()
goto(20,180)
pendown()
begin_fill()
color("purple")

left(30)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()  #end of the first window


#drawing second window

penup()
goto(180,180) #(x,y) x --;y |
pendown()

begin_fill()

color("purple")
forward(40)
left(90)
forward(40)
left(90)
forward(40)
left(90)
forward(40)

end_fill()




exitonclick()



