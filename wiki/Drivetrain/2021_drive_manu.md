## 2021 Drivetrain Manufacturing Page

### Speeds and Feeds Log

|Date |Tool |RPM |Feed (in/min)|Material |Depth of Cut (in) |Outcome |
|:--------|:-------:|:-------:|:-------:|:-------:|:-------:|--------:|
|4/6/21|#201 1/4" 3F|15000|30|MDF|0.25|BURN.  TOO FAST.  0.1 was fine at this speed.  Perhaps more RPM just follow Shapeoko reccomendations|
|4/24/21|#201 1/4" 3F|12500|60|high dens mdf|0.07|great.  Roughing adaptive and then finishing contour|
|4/24/21|Tool 6 Spot Drill|8300|13.33 (plunge)|high dens mdf||good, slight burn- started at 12k and slowed due to burning|
|4/24/21|1/4" 1F|1200|25|Aluminum (unsure of type)|.015|Worked, but rattly due to poor clamping- inconclusive.|

|date|tool|rpm|feed|material|depth of cut|outcome (keep this row on the bottom for easy editing!)|
#### Speeds and Feeds Notes
I have started an excel sheet in the 20-21 HPS drive under drivetrain/manufacturing to log the results of some of the speed/feed tests I have done.  The end goal will be to arrive at a custome set of parameters that work best for this machine.  I see this excel sheet becoming the go-to for future CNC information.

### Projects

#### Worktable
- to put shapeoko, computer on, storage underneath.

#### Enclosure
- Done to Reduce noise and keep chips from going everywhere. (safer too)
- Roof is removable which is essential
- Could be tiny bit taller so wires don’t scrape
- Need to cut hole for vacuum hose to go through and attach to spindle

#### Wasteboard
- Many setbacks occurred- turns out, the cutting area is much smaller than it appears to be
- 2 sets of holes were drilled into the shapeoko baseboard after the first ones were misaligned.     The ones on the right are properly spaced.
- Wasteboard is mounted into the baseboard using these 8 holes. The top of the wasteboard has 8       counterbores for the heads of these screws to go into
- The rest of the board contains holes for clamping fixtures to screw into. They have nail in screw   inserts placed in counterbores on the bottom of the board.
  * These inserts have been known to fall out of both the wasteboard and baseboard. Hammer them back   in if needed, rotating them so they go into a different position in the counterbore
  * Screw inserts would be more effective in the future
- Ran into issue where the fixture inserts had only a set height. They could not screw deeper as     they would hit the baseboard, and could not screw in shallower because the inserts had a short     threaded section. Two solutions were devised:
  * One, we could shim the wasteboard by putting thin strips of wood between the baseboard and         wasteboard, the the fixture screws could go farther in
  * Two, we could have the bolts screw all the way in and stick out far, and then place nuts on the     bolts to effectively adjust their height. This was selected.
- Used MDF. To face, the blue facing bit worked great when adjusted properly, at the speeds listed   in the table.
- Insert holes were manually drilled after being pecked by the shapeoko for accurate dimensioning.
- Counterbores were created using the shapeoko and a 3 flute endmill. A FINISHING PASS IS REQUIRED   for these to get proper tolerance. Otherwise, pretty big variation occurs, ~.005 in, and may not   be circular. In general, finishing passes are a good idea.
  * Another note- the bores ended up tearing more than cutting, leaving a lot of fraying around the     edges which could be scraped off. Mostly an MDF thing
  
### Techniques
#### Aluminum Cutting
- First, we attempted to cut ¼ in aluminum pieces with jigsaws and metal cutting blades. 
  * Cut through fine, albeit with a good deal of rattling. Cutting oil was needed to keep heat down     ect
  * Does NOT cut straight, especially with curves. Cannot expect any accuracy.
  * Cut out using glued on drawing files. Make sure the printer is scaling correctly. Try not to       tear the paper- maybe trace with sharpie
- We then tried facing a block to make metal clamps. 
  * First, our clamping system was poor and led to rattling. The clamps were on one edge and facing     occurred on the other, which was somewhat ineffective. The wood clamps worked ok, but not           incredibly. Cam lock clamps would be super helpful in restricting lateral movement.
  * Instead, we could face the middle of the block and clamp each end?
  * Carson Quotes: “Clamps gotta go on all operations, that’s just general workholding.  We can use     the superglue method if we really have to face the the top down.  Another change we could make     to the can to make our lives easier is to buy stock that is thicker than our final OD.  For ex:     the clamps: we just machine out the top 0.5” of our 0.75” stock, then we can flip it over and       face everything to the perfect height.  We wouldn’t have to mess around with drilling into our     wasteboard”
  * The blue facing bit was not very good, and extremely loud. Single flute endmill was much           better, 12000 rpm, 25in/min (allegedly, may have been adjusted.)
  
#### Wood Cutting
Information on wood cutting (particularly MDF) can be found in the wasteboard project section.

#### The Superglue Method
I forgot how important it is to pass this down!  Look up NYC CNC or titans of CNC on youtube and look at their superglue videos.  Take 2 pieces of blue painters tape and lay them perfectly on each part.  Just put some superglue between the tape and you have a great workholding solution!  They run some pretty crazy ops on just superglue and tape.  This worked perfect for holding down the wasteboard.
Even though the box for the shapeoko is pretty crappy, I am really happy that I buiilt it.  It helps IMMENSLY with the mess.  I am so surprised how quite the shapeoko is!  The vacuum is far louder than the machine, even when it is cutting.  Hopefully we can make some more noise with it soon.

### Useful Links
- Speed and feed information: 
 - [https://shapeokoenthusiasts.gitbook.io/shapeoko-cnc-a-to-z/feeds-and-speeds-basics
wired VFD with this tutorial](https://shapeokoenthusiasts.gitbook.io/shapeoko-cnc-a-to-z/feeds-and-speeds-basics)
- wired VFD with this tutorial
  - [https://www.youtube.com/watch?v=1sf2zLQu5CU&t=559s](https://www.youtube.com/watch?v=1sf2zLQu5CU&t=559s)
  - [https://www.youtube.com/watch?v=7OszQS_BQMk](https://www.youtube.com/watch?v=7OszQS_BQMk)
  - [https://www.youtube.com/watch?v=tZObm96Yf34&list=PLbTgCoEmMHVHJqVL7QpzmLGCx1S9UNNnQ&index=26](https://www.youtube.com/watch?v=tZObm96Yf34&list=PLbTgCoEmMHVHJqVL7QpzmLGCx1S9UNNnQ&index=26)

### Journals
#### 3/6/21
Used fusion 360 for CAM and tried to get adaptive clearing set up for the wasteboar but ran into issues.  Eventually landed on peck drilling with a chamfer tool to eventuall hand drill all the mounting holes for the wasteboard.  

Jack worked on creating a tool library for our current endmills.

Jared made some temporary hold plates and cut the mdf for the machine.

Wasteboard was cut out of 3/4" mdf that can be resurfaced every month or so depending on how marked up it gets.  Ideally, there would be scraps placed under cut parts to keep it fresh.  The goal of the wasteboard is to provide a machine level surface to mount parts and finish tramming the machine.  This is incredibly important when cutting metal, but not so much for wood.  The end goal is increasing the accuracy as much as we can of the shapeoko, hence why it has taken so long to get to this point.  You have to be diligent about every step along the way because of how many variables there are.  Don't half-ass any of this work, the investment you put in now will save an uncountable number of future issues down the line.

This project deserves much more documentation but today will be a start.  Look for future logs

#### 4/6/21
Our main goal was to manufacture the mdf wasteboard that sits on top of the shapeoko.  This board will provide mounting locations with these [1/4-20 T nuts](https://www.amazon.com/gp/product/B01MSVU3WF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1).  Next time I would go with the screw in type of insert because these need to be countersunk.  This requires us to do 2 operstions because the bolts that mount the wasteboard to the Shapeoko will also need to be countersunk.  We are not sure how to accomplish this yet, but we have thought of some ideas to get the positions right on the machine.  It is likely going to be a manual drill with a centerpunch, but it would be so nice to perfectly align the bolt holes to the X and Y of the machine.  We have to figure out how to get it perfect.

We ran into a few issues with the tram plate to the spindle not being tightened, this resulted in imperfect bore holes for the T nuts.  After fixing that issue, the left side Y belt was incredibly loose, leading to even worse counterbores.  We ended up needing to re-face the wasteboard... but that is what it is for!  It is quite a tough thing trying to set up a full machine shop at home.  There are so many odds and ends that end up being really important to get everything done right.  You may have a CNC, but we need a way to mount stuff to it!
    

    
    
### Goals for the Future
- I'd really like an E-stop button.  The only way to operate the machine now is to cut the power to the motors and turn of the spindle manually.
- a physical remote with job buttons would also be incredible.  It helps so much to be able to interact without the need of a computer.
- I WANT THE WASTEBOARD TO BE OVER WTIH ahhhh
- Side rail stop made out of aluminum to quickly index the corner of parts
- Hold down clamps that work witht the wasteboard
- Instruction booklet for getting started with the shapeoko (I guess that is what this will turn into isn't it?)
