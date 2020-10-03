## Making a Hull Profile in Solidworks

### Choosing Airfoils

First you will need to go to [http://airfoiltools.com](http://airfoiltools.com) to choose airfoils. 

Important considerations:

* We will only use symmetrical airfoils, which means you want a flat camber line. (max camber = 0)
* You need a vertical and a horizontal profile.
* We will use this orientation convention: see picture below

(insert img here)

### Importing Data into MATLAB (or Excel)

Because the data provided on the site in in 2D, you will need to add a column of zeroes to make it 3D.

Note: Add the extra dimensions according to our convention! This means the vertical profile needs an x column of 0, and the horizontal profile requires a y column of 0s

You can use Matlab or Excel to accomplish this.

### Scaling

Scale the curves to the desired height, width and length. Keep in mind that we are using inches for units.

### Importing Curves into SolidWorks

I will come back to this part.
