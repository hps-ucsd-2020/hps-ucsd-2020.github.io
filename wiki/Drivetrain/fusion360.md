## Ressources for doing CAM with Fusion 360

Here are useful links for getting started with Fusion 360

Download Fusion 360:
[https://www.autodesk.com/education/edu-software/overview?sorting=featured&page=1&filters=individual&search=FUSION#](https://www.autodesk.com/education/edu-software/overview?sorting=featured&page=1&filters=individual&search=FUSION#)

Link to our Tutorial:
[https://youtu.be/NnO0H9JVULw](https://youtu.be/NnO0H9JVULw)

Link to Working with Geneva Drive pt1:
[https://www.youtube.com/watch?v=zcnXN52bZ04&feature=emb_logo](https://www.youtube.com/watch?v=zcnXN52bZ04&feature=emb_logo)


Link to Steven's Channel:
[https://www.youtube.com/channel/UC377whVcqvUAOeIl7Wd3CwQ](https://www.youtube.com/channel/UC377whVcqvUAOeIl7Wd3CwQ)

## Example of CAM process for mounting plate

### Open file in Fusion
Click on Design dropdown---> click on manufacture
Change units to inches
- click on "units" in branch

### Begin setup process
- click on setup (we're doing a milling program so we choose milling under setup

Choosing the orientation
- We want the Z axis to point away from the machining plane
- Since this is a flat component, we want the Z axis to be "up"

Under "work Coordinate system"
	- This was automatically chosen 
	- For this part, if this wasn't automatically chosen, we could choose "select x axis/plane & y axis and then choose an edge that's orthogonal to the top face of the component

Choosing the Stock
	- The stock is the block of material that the machine will carve into to get the desired shape
	- Click onto the stock tab (second tab with the yellow cube)
	- We choose "fixed size box" so we can set the dimensions of the material we'll be working with
	- I set this to 80mm (width) x90mm (depth) x10mm (height) (This is arbitrary for this project)
In the last tab (Program tab)
	- Can name this under "program number" or you can leave it as default
Click "ok" to finish

### Next we're going to "Face" the part (cutting the top face)
Selecting the tool
	- Go into HPS tool library and choose "1/4 (3F endmill)"
	- Click "select" in bottom right
Click "ok" to finish

### Now we're going to cut the holes on the face of the component
-Click on the dropdown under "2D" and choose "circular"
-For tool, select 1/4 3F endmill

In the Geometry tab (second tab)
	- For Circular face selections: select all holes
Click "ok" to finish

### Milling the edges of the component
Selecting the tool
	- Go into HPS tool library and choose "1/4 (3F endmill)"
	- Click "select" in bottom right
    
In Geomerty (second tab)
	- For contour selection, select bottom of component 
    
In heights (third tab)
	- Select bottom height "from stock bottom" offset 0 in
Click "ok" to finish
