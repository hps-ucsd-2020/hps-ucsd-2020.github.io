## Making a Hull Profile in Solidworks

### Choosing Airfoils

First you will need to go to [http://airfoiltools.com](http://airfoiltools.com){:target="_blank"} to choose airfoils. 

Important considerations:

* We will only use symmetrical airfoils, which means you want a flat camber line. (max camber = 0)
* You need a vertical and a horizontal profile.
* We will use this orientation convention: see picture below

![Hull Profile Orientation Convention](assets/img/hull_profiles_convention.png =400x)


### Importing Data into MATLAB (or Excel)

Because the data provided on the site in in 2D, you will need to add a column of zeroes to make it 3D.

Note: Add the extra dimensions according to our convention! This means the vertical profile needs an x column of 0, and the horizontal profile requires a y column of 0s

You can use Matlab or Excel to accomplish this.

### Scaling

Scale the curves to the desired height, width and length. Keep in mind that we are using inches for units.

Considerations:
* pilot's height
* pilot's shoulder width
* Our past hulls have been around 120 inches long.

### Importing Curves into SolidWorks
(Work in progress)
In the Top Ribbon, click Insert > Curve > from Points. You should be able to copy paste the curve data.
You might need to add or connect points to join the profiles at the end (dont worry about accuracy here, because the back end of the hull is cut off anyway.)

Then, you can make a spline at an arbitrary distance from the front of the sub, and use that as a guiding curve to loft the submarine into existence.
