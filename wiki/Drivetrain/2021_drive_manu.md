## 2021 Drivetrain Manufacturing Notes

### 3/6/21

#### Agenda:

#### For next time:

#### NOTES:
- we built a cnc today

### Useful links
wired VFD with this tutorial
  - https://www.youtube.com/watch?v=1sf2zLQu5CU&t=559s
  - https://www.youtube.com/watch?v=7OszQS_BQMk
  - https://www.youtube.com/watch?v=tZObm96Yf34&list=PLbTgCoEmMHVHJqVL7QpzmLGCx1S9UNNnQ&index=26

Used fusion 360 for CAM and tried to get adaptive clearing set up for the wasteboar but ran into issues.  Eventually landed on peck drilling with a chamfer tool to eventuall hand drill all the mounting holes for the wasteboard.  

Jack worked on creating a tool library for our current endmills.

Jared made some temporary hold plates and cut the mdf for the machine.

Wasteboard was cut out of 3/4" mdf that can be resurfaced every month or so depending on how marked up it gets.  Ideally, there would be scraps placed under cut parts to keep it fresh.  The goal of the wasteboard is to provide a machine level surface to mount parts and finish tramming the machine.  This is incredibly important when cutting metal, but not so much for wood.  The end goal is increasing the accuracy as much as we can of the shapeoko, hence why it has taken so long to get to this point.  You have to be diligent about every step along the way because of how many variables there are.  Don't half-ass any of this work, the investment you put in now will save an uncountable number of future issues down the line.

This project deserves much more documentation but today will be a start.  Look for future logs

### 4/6/21

### Useful links
	- Speed and feed information: https://shapeokoenthusiasts.gitbook.io/shapeoko-cnc-a-to-z/feeds-and-speeds-basics

# Notes about today:
	Our main goal was to manufacture the mdf wasteboard that sits on top of the shapeoko.  This board will provide mounting locations with these [1/4-20 T nuts](https://www.amazon.com/gp/product/B01MSVU3WF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1).  Next time I would go with the screw in type of insert because these need to be countersunk.  This requires us to do 2 operstions because the bolts that mount the wasteboard to the Shapeoko will also need to be countersunk.  We are not sure how to accomplish this yet, but we have thought of some ideas to get the positions right on the machine.  It is likely going to be a manual drill with a centerpunch, but it would be so nice to perfectly align the bolt holes to the X and Y of the machine.  We have to figure out how to get it perfect.
    We ran into a few issues with the tram plate to the spindle not being tightened, this resulted in imperfect bore holes for the T nuts.  After fixing that issue, the left side Y belt was incredibly loose, leading to even worse counterbores.  We ended up needing to re-face the wasteboard... but that is what it is for!  It is quite a tough thing trying to set up a full machine shop at home.  There are so many odds and ends that end up being really important to get everything done right.  You may have a CNC, but we need a way to mount stuff to it!
    
#The superglue method
	I forgort how important it is to pass this down!  Look up NYC CNC or titans of CNC on youtube and look at their superglue videos.  Take 2 pieces of blue painters tape and lay them perfectly on each part.  Just put some superglue between the tape and you have a great workholding solution!  They run some pretty crazy ops on just superglue and tape.  This worked perfect for holding down the wasteboard.
    
    Even though the box for the shapeoko is pretty crappy, I am really happy that I buiilt it.  It helps IMMENSLY with the mess.  I am so surprised how quite the shapeoko is!  The vacuum is far louder than the machine, even when it is cutting.  Hopefully we can make some more noise with it soon.
    
# Speeds and Feeds
	I have started an excel sheet in the 20-21 HPS drive under drivetrain/manufacturing to log the results of some of the speed/feed tests I have done.  The end goal will be to arrive at a custome set of parameters that work best for this machine.  I see this excel sheet becoming the go-to for future CNC information.
    
# Goals for the future:
	- I'd really like an E-stop button.  The only way to operate the machine now is to cut the power to the motors and turn of the spindle manually.
    - a physical remote with job buttons would also be incredible.  It helps so much to be able to interact without the need of a computer.
    - I WANT THE WASTEBOARD TO BE OVER WTIH ahhhh
    - Side rail stop made out of aluminum to quickly index the corner of parts
    - Hold down clamps that work witht the wasteboard
    - Instruction booklet for getting started with the shapeoko (I guess that is what this will turn into isn't it?)
