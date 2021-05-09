# 2021 Drivetrain Manufacturing Page

## Speeds and Feeds Log

|Date |Tool |RPM |Feed (in/min)|Material |Depth of Cut (in) |Outcome |
|:--------|:-------:|:-------:|:-------:|:-------:|:-------:|--------:|
|4/6/21|#201 1/4" 3F|15000|30|MDF|0.25|BURN.  TOO FAST.  0.1 was fine at this speed.  Perhaps more RPM just follow Shapeoko reccomendations|
|4/24/21|#201 1/4" 3F|12500|60|high dens mdf|0.07|great.  Roughing adaptive and then finishing contour|
|4/24/21|Tool 6 Spot Drill|8300|13.33 (plunge)|high dens mdf||good, slight burn- started at 12k and slowed due to burning|
|4/24/21|1/4" 1F|12000|25|Aluminum (unsure of type)|.015|Worked, but rattly due to poor clamping- inconclusive.|
|5/4/21|1/4" 1F|18k->13.5k|25->25*110%|Aluminum (unsure of type)|.015| Started fast to try to be "safe" .... we were too catious.  We produced a ton of heat and tool deflection on our superglue method workholding that ended up freeing the part.  We made it through a facing operation at 0.015 and failed on our second pass.  Single flute endmill has a fair bit of tram error still that we couldn't see in the MDF  This could be where the aluminu was melting out.  We weren't even producing many chips, the machine was basically melting through the metal.  It's ripping hot.|

|5/8/21|1/4" 1F|17.5k|30|Aluminum (unsure of type)|.015|Could stepdown be too small? shapeoko reccomends .03 and we do half (rest of specs is thier reccomended.) This essentially just tore through. cutting oil was used - wierd smell but slightly helpful- still just pushing it out the way BAD|
|date|tool|rpm|feed|material|depth of cut|outcome (keep this row on the bottom for easy editing!)|
#### Speeds and Feeds Notes
I have started an excel sheet in the 20-21 HPS drive under drivetrain/manufacturing to log the results of some of the speed/feed tests I have done.  The end goal will be to arrive at a custome set of parameters that work best for this machine.  I see this excel sheet becoming the go-to for future CNC information.

### Feed and Speed Calculations
<a class="cpn_l" href="https://www.custompartnet.com/calculator/milling-speed-and-feed">Milling Speed and Feed Calculator</a>
<script type="text/javascript" src="https://www.custompartnet.com/gembed/milling-speed-and-feed.js"></script>

Summaries:
- https://static1.squarespace.com/static/59efc96d90badec50a4afa15/t/5a21f4b6e2c483bcf39a2c84/1512174775486/FeedsandSpeeds.pdf
- https://www.harveyperformance.com/in-the-loupe/speeds-and-feeds-101/

[**Crash Course Video**]https://www.youtube.com/watch?v=S9bceJxpqG0

We can change 2 main things while the machine is running:

**Feed Rate** (inches/minute) - How fast the spindle travels (in translation) when cutting
**Spindle Speed** (RPM) - How fast the spindle rotates

These effect one big factor: **Chip Load**

**Chip Load**: = Feed Rate /(RPM x number of flutes) (**IPR**) or **Cutting Feed**. **IPT** is inches per tooth, and is often reccomended in the tool specifications.
chip load is the size of the pieces getting cleared by the machine, or the chips.
- **Too Big:** A chip load that is too large can pack up chips in the cutter, causing poor chip evacuation and eventual breakage. 
- **Too Small:** A chip load that is too small can cause rubbing, chatter, deflection, and a poor overall cutting action.

[**Material Reccomendations:**] https://www.harveytool.com/resources/general-machining-guidelines
 
 Tool reccomendations are specified for each tool and should be researched (by manufacturer, ect)

**SFM**, or Surface Feet Per Minute, is also specified in tool parameters, but should be less important on the shapeoko as it tends to reccomend RPMS we can't achieve (too low) because the shapeoko is so unstable.



## Workholding
### The Superglue Method
I forgot how important it is to pass this down!
 * [NYC CNC superglue workholding video](https://www.youtube.com/watch?v=r6DCvtcU8_M)
  - They run some pretty crazy ops on just superglue and tape.  This worked perfect for holding down the wasteboard.

The method:
1) apply blue painters tape to underside of part stock surface.  Ensure surface is clean, and that there is a lot of surface area for the glue.
2) Ensure good contact is made, tape is flat, and there are no ridges between the seams.
3) Apply blue painters tape to the wasteboard or cutting surface.
4) apply a //////// pattern of superglue lines, (less than you think).  Not much superglue is needed.  Maybe space them 0.5" ~ 1" apart.  It may be less or more depending on the size of your part.  The product of too much glue is a slipping and sliding mess, too little and you your part will move on you. 
5) Align the part as best you can to the machine axis.  You can try fun things like running the side of a smooth shaft in the cnc and squaring things up that way.  You could mark the outline of the part in pencil.  You shouldn't ever count on this alignment being perfect coming off the CNC.  It is good practice to machine all the critical faces that matter to you.  But how you get things mostly correct is your call. 

You can actually do many operations using this method.  It works better than you think.  Watch the video to see some examples, Titans of CNC has som crazy ones too really push this style of workholding, but I would reccomend an aluminum baseplate if you are doing any serious operations.

### The thick Onion
It is common in CNC machining to leave an "Onion skin" layer at the bottom of your part.  Tabs would be another method to easily hold a part in material.  This can be quite a clean method, but requires a good deal of precision to get right.  The thick onion skin method has the positive of being much more reliable and precise, but at the cost of material thickeness.

When making 2.5D parts, one can easily use thicker material stock than needed and machine the object with respect to the top surface.  Then, in a second operation, the part can be flipped and the bottom surface can now be faced down to the correct height.  You can get creative wwith the kind of "reverse" tabs you'll have to create.

## Techniques
### Fusion (CAM)
It should go wihtout saying, but you always need to be thinking 10 steps ahead when doing CAM.  It is very complicated, especially when you are learning.  You will make mistakes, but you will also learn from them when you WRITE THEM DOWN.  This isn't to shame you or embarass you, it is for us to be better machinists in the future.
#### Stock creation and sizing
 It is a good idea to create stock that is larger than your real stock.  This will help ensure adpatives clear all material something is slightly misaligned, will help facing operations not overcut, and help all mating faces be machined accurately.  Our reccomendation is to use the following setup:
 * Fixed size box
 * Model coordinate offsets from the origin or sides of the material from 1 locating corner
 
#### Custom cut area geometry
 It is common for us to use the design tab in fusion to create a custom 2d sketch to highly a specific cut area for facing, or a tab using the Thick Onion method.

 
### Aluminum Cutting
- First, we attempted to cut ¼ in aluminum pieces with jigsaws and metal cutting blades. 
  * Cut through fine, albeit with a good deal of rattling. Cutting oil was needed to keep heat down     ect
  * Does NOT cut straight, especially with curves. Cannot expect any accuracy.
  * Cut out using glued on drawing files. Make sure the printer is scaling correctly. Try not to       tear the paper- maybe trace with sharpie
- We then tried facing a block to make metal clamps. 
  * First, our clamping system was poor and led to rattling. The clamps were on one edge and facing     occurred on the other, which was somewhat ineffective. The wood clamps worked ok, but not           incredibly. Cam lock clamps would be super helpful in restricting lateral movement.
  * Instead, we could face the middle of the block and clamp each end?
  * Carson Quotes: “Clamps gotta go on all operations, that’s just general workholding.  We can use     the superglue method if we really have to face the the top down.  Another change we could make     to the can to make our lives easier is to buy stock that is thicker than our final OD.  For ex:     the clamps: we just machine out the top 0.5” of our 0.75” stock, then we can flip it over and       face everything to the perfect height.  We wouldn’t have to mess around with drilling into our     wasteboard”
  * The blue facing bit was not very good, and extremely loud. Single flute endmill was much           better, 12000 rpm, 25in/min (allegedly, may have been adjusted.)
  
### Wood Cutting
Information on wood cutting (particularly MDF) can be found in the wasteboard project section.

## Projects

### Worktable
- to put shapeoko, computer on, storage underneath.

### Enclosure
- Done to Reduce noise and keep chips from going everywhere. (safer too)
- Roof is removable which is essential
- Could be tiny bit taller so wires don’t scrape
- Need to cut hole for vacuum hose to go through and attach to spindle
Even though the box for the shapeoko is pretty crappy, I am really happy that I buiilt it.  It helps IMMENSLY with the mess.  I am so surprised how quite the shapeoko is!  The vacuum is far louder than the machine, even when it is cutting.  Hopefully we can make some more noise with it soon.

### Wasteboard
- Many setbacks occurred- turns out, the cutting area is much smaller than it appears to be
- 2 sets of holes were drilled into the shapeoko baseboard after the first ones were misaligned. The ones on the right are properly spaced.
- Wasteboard is mounted into the baseboard using these 8 holes. The top of the wasteboard has 8 counterbores for the heads of these screws to go into
- The rest of the board contains holes for clamping fixtures to screw into. They have nail in screw inserts placed in counterbores on the bottom of the board.
  * These inserts have been known to fall out of both the wasteboard and baseboard. Hammer them back in if needed, rotating them so they go into a different position in the counterbore
  * Screw inserts would be more effective in the future
- Ran into issue where the fixture inserts had only a set height. They could not screw deeper as they would hit the baseboard, and could not screw in shallower because the inserts had a short     threaded section. Two solutions were devised:
  * One, we could shim the wasteboard by putting thin strips of wood between the baseboard and wasteboard, the the fixture screws could go farther in
  * Two, we could have the bolts screw all the way in and stick out far, and then place nuts on the bolts to effectively adjust their height. This was selected.
- Used MDF. To face, the blue facing bit worked great when adjusted properly, at the speeds listed in the table.
- Insert holes were manually drilled after being pecked by the shapeoko for accurate dimensioning.
- Counterbores were created using the shapeoko and a 3 flute endmill. A FINISHING PASS IS REQUIRED for these to get proper tolerance. Otherwise, pretty big variation occurs, ~.005 in, and may not   be circular. In general, finishing passes are a good idea.
  * Another note- the bores ended up tearing more than cutting, leaving a lot of fraying around the edges which could be scraped off. Mostly an MDF thing

## Useful Links
- Speed and feed information: 
 - [https://shapeokoenthusiasts.gitbook.io/shapeoko-cnc-a-to-z/feeds-and-speeds-basics
wired VFD with this tutorial](https://shapeokoenthusiasts.gitbook.io/shapeoko-cnc-a-to-z/feeds-and-speeds-basics)
- wired VFD with this tutorial
  - [https://www.youtube.com/watch?v=1sf2zLQu5CU&t=559s](https://www.youtube.com/watch?v=1sf2zLQu5CU&t=559s)
  - [https://www.youtube.com/watch?v=7OszQS_BQMk](https://www.youtube.com/watch?v=7OszQS_BQMk)
  - [https://www.youtube.com/watch?v=tZObm96Yf34&list=PLbTgCoEmMHVHJqVL7QpzmLGCx1S9UNNnQ&index=26](https://www.youtube.com/watch?v=tZObm96Yf34&list=PLbTgCoEmMHVHJqVL7QpzmLGCx1S9UNNnQ&index=26)

## Journals
### 3/6/21
Used fusion 360 for CAM and tried to get adaptive clearing set up for the wasteboar but ran into issues.  Eventually landed on peck drilling with a chamfer tool to eventuall hand drill all the mounting holes for the wasteboard.  

Jack worked on creating a tool library for our current endmills.

Jared made some temporary hold plates and cut the mdf for the machine.

Wasteboard was cut out of 3/4" mdf that can be resurfaced every month or so depending on how marked up it gets.  Ideally, there would be scraps placed under cut parts to keep it fresh.  The goal of the wasteboard is to provide a machine level surface to mount parts and finish tramming the machine.  This is incredibly important when cutting metal, but not so much for wood.  The end goal is increasing the accuracy as much as we can of the shapeoko, hence why it has taken so long to get to this point.  You have to be diligent about every step along the way because of how many variables there are.  Don't half-ass any of this work, the investment you put in now will save an uncountable number of future issues down the line.

This project deserves much more documentation but today will be a start.  Look for future logs

### 4/6/21
Our main goal was to manufacture the mdf wasteboard that sits on top of the shapeoko.  This board will provide mounting locations with these [1/4-20 T nuts](https://www.amazon.com/gp/product/B01MSVU3WF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1).  Next time I would go with the screw in type of insert because these need to be countersunk.  This requires us to do 2 operstions because the bolts that mount the wasteboard to the Shapeoko will also need to be countersunk.  We are not sure how to accomplish this yet, but we have thought of some ideas to get the positions right on the machine.  It is likely going to be a manual drill with a centerpunch, but it would be so nice to perfectly align the bolt holes to the X and Y of the machine.  We have to figure out how to get it perfect.

We ran into a few issues with the tram plate to the spindle not being tightened, this resulted in imperfect bore holes for the T nuts.  After fixing that issue, the left side Y belt was incredibly loose, leading to even worse counterbores.  We ended up needing to re-face the wasteboard... but that is what it is for!  It is quite a tough thing trying to set up a full machine shop at home.  There are so many odds and ends that end up being really important to get everything done right.  You may have a CNC, but we need a way to mount stuff to it!
    
### 5/4/21
See cut log from today for fun notes about our new heat generator.

We cut way too slow today in aluminum.  Our RPMs were very high at 18k to be "safe" but that ended up hurting us.  it would be a good idea for us to buy clamps, take lighter DOC, and increase our feed rate.  This machine can handle quite a bit thrown at it.  It's ok not to baby it, but it's hard to build that confidence when we really are just learning what it can do.  On the bright side, the surface finish of the torn up part ain't too (on 1 side).

Notice in this linked video how it did at the beginning, but it quickly got too hot to do anything.  It throw chips at the very beginning, that is what we are looking for to get that heat away from the part.  

[PHOTO OF SHINY ALUMINUM FROM TODAY]({{site.baseurl}}/https://drive.google.com/file/d/1Tf0aHiJYn9jxIuZfn1pFTvZ05TfxPd4C/view?usp=sharing)

    
    
## Goals for the Future
- I'd really like an E-stop button.  The only way to operate the machine now is to cut the power to the motors and turn of the spindle manually.
- a physical remote with job buttons would also be incredible.  It helps so much to be able to interact without the need of a computer.
- I WANT THE WASTEBOARD TO BE OVER WTIH ahhhh
- Side rail stop made out of aluminum to quickly index the corner of parts
- Hold down clamps that work witht the wasteboard
- Instruction booklet for getting started with the shapeoko (I guess that is what this will turn into isn't it?)
