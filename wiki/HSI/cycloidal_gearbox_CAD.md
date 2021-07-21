# Cycloidal Gearbox

Use [Desmos](https://www.desmos.com/calculator/s5uort2vxz) in order to create and refine the parameters for your gears.
C is the radius of the pins inside of which the cycloidal gears will rotate.
R is the radius of the pins.
N is the number of pins. The gear reduction of the cycloidal drive will be equal to 1/(N-1).
E is the eccentricity of the driveshaft, basically how many units off-center the cycloidal gears are. This setting is useful for fine-tuning the cycloidal equation.

If the settings are correct, the line should be smooth with no visual sharp edges and especially no discontinuities.

Once you have the four input variables, use the following matlab code to procure the parametric equations required for SolidWorks input.

```
function [yeqn, xeqn]=cycloidal(C,R,N,E)
% Function to generate the outer cycloidal pattern with C= outer radius of
% static pins, R= radius of pins, N= number of pins (gear ratio), E
% eccentricity of shaft
    yeqn=fprintf('X=(%.2f*cos(t))-(%.2f*cos(t+arctan(sin((1-%.2f)*t)/((%.2f/(%.2f*%.2f))-cos((1-%.2f)*t)))))-(%.2f*cos(%.2f*t)) \n',C,R,N,C,E,N,N,E,N);
    xeqn=fprintf('Y=(-%.2f*sin(t))+(%.2f*sin(t+arctan(sin((1-%.2f)*t)/((%.2f/(%.2f*%.2f))-cos((1-%.2f)*t)))))+(%.2f*sin(%.2f*t)) \n',C,R,N,C,E,N,N,E,N);
```

In matlab, assign the variables C, R, N, and E to their corresponding values from Desmos. Then, run `cycloidal(C,R,N,E);`  in matlab.
This will print two equations, which you will use later in the equation driven curve in SolidWorks.

In SolidWorks, create a new sketch on the top plane. Insert an equation driven curve,

![Visual showing where to insert an equation driven curve](assets/img/wiki-img/insert_eq_curve.png)

In the pop-up box, select parametric curve

![Equation driven curve pop-up](https://github.com/hps-ucsd-2020/hps-ucsd-2020.github.io/blob/1d744bead89d08bc74b5d667f373cb764cedb1d1/assets/img/wiki-img/eq_curve_parameters.png)

Make sure to leave Matlab open, as you will need to copy-paste each equation twice.
In the pop-up box for equation driven curve, input your x and y equations and select a t of 0 to pi.
Repeat this process selecting a t of 0 to pi. No, you can not select a t of pi to 2\*pi. No, I do not know why.
