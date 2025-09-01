
# Getting Started

<center> 
★ ★ ★ Blender Studio & I ★ ★ ★
</center><br>

My journey with [Blender](https://www.blender.org/) spans over five years of self-learning. It’s all about losing the fear of not knowing how something works, of messing things up, and of not knowing how to reproduce something you just did. 

<center><small>Doing is learning, and mistakes are part of the process. Feeling a little lost or "stupid" sometimes is a good sign that shows you are learning.</center></small>

I’ve discovered that the **best way to learn is to dive in with an idea in mind**. There are a million ways to do the same thing. 

Here, I want to share **how I learned to do the things I do**, my personal tricks, and what I’ve discovered along the way, so you can take inspiration and find your own path in Blender.


---


## First Impressions

So you've just managed to download Blender, open it and this is what you see. 

![Git Structure](../images/Getting-Started/Just-opened-blender.jpg)

The main areas you’ll notice are:

- **3D Viewport**: this is the big central space where you’ll do most of your work — modeling, moving things around, sculpting, and so on.

<center>
<img src="/images/Getting-Started/3d-viewport.jpg" alt="Viewport" width="400">
</center>

- **Properties Panel**: on the right side, this is where you control details of your objects, materials, modifiers, and rendering. Think of it as the “settings hub.”

<center>
<img src="/images/Getting-Started/properties-panel.jpg" alt="Properties Panel" width="200">
</center>

- **Outliner**: usually on the top right, this shows a list of all the objects in your scene. If the 3D Viewport is the stage, the Outliner is the backstage list of all the props.

<center>
<img src="/images/Getting-Started/outliner.jpg" alt="Properties Panel" width="200">
</center>


- **Timeline**: at the bottom, this is mainly for animation, but even if you’re not animating, it’s good to know it exists.

<center>
<img src="/images/Getting-Started/animation-timeline.jpg" alt="Timeline" width="600">
</center>

---

## Navigation in the 3D Viewport

Before anything, you need to get comfortable moving around.

- **Orbit**: rotate the view around your objects. (Left click and button drag)

<center>
<img src="/images/Getting-Started/orbit.gif" alt="Orbit GIF" width="500">
</center>

- **Pan**: slide the view left, right, up, or down. (Shift + Left click)

<center>
<img src="/images/Getting-Started/pan.gif" alt="Pan GIF" width="500">
</center>

- **Zoom**: move closer or further away. (Scroll wheel or Ctrl + middle mouse drag)

<center>
<img src="/images/Getting-Started/zoom.gif" alt="Zoom GIF" width="500">
</center><br>

Use the **Navigation Gizmo** in the top-right corner of the 3D Viewport to see your scene from **different perspectives**; front, side, top, bottom, etc.

<center>
<img src="/images/Getting-Started/navigation-gizmo.jpg" alt="Navigation Gizmo" width="100">
</center>

This way:

<center>
<img src="/images/Getting-Started/navigation-gizmo.gif" alt="Navigation Gizmo" width="500">
</center>

---

## Moving Things Around

<center><small>Selecting objects.</small><br>
<img src="/images/Getting-Started/selecting-objects.gif" alt="Selecting Objects GIF" width="500">
</center><br>

<code>Left click</code> an object to select it (it highlights in orange).

<code>Shift + Left click</code> to select multiple objects.

<code>A</code> selects all objects in the scene.

<center><small>Moving objects.</small><br>
<img src="/images/Getting-Started/moving-objects.gif" alt="Moving Objects GIF" width="500">
</center><br>

Press <code>G</code> (for “grab”), then move your mouse.

Press <code>X</code>, <code>Y</code>, or <code>Z</code> to lock movement to that axis.

---

## Creating Default Files 

When you open Blender, you can **set up your scene once and save it as your default** startup file.

This is important to us because using the right units keeps your models consistent and accurate, especially if you’re preparing them for 3D printing or fabrication.

To set up our file for 3D printing go to **Properties → Scene → Units** and choose **Metric**, change to **centimeters** length and set up your **Unit Scale to 0.1**.

<center>
<img src="/images/Getting-Started/units.jpg" alt="Units" width="200">
</center>

<span style="font-size: 50px; color: red;">!</span> <small>Note: Because of this change, we’ll need to adjust some offsets when exporting. We’ll cover the details in the Exporting for 3D Printing section. </small>


To make the grid more useful for precise modeling, you can change its scale.

Go to **Viewport Overlays → Guides → Scale** and set it to **0.01**. 

<center>
<img src="/images/Getting-Started/grid.jpg" alt="Grid" width="300">
</center><br>

This is the basic setup. To make Blender remember it, go to
<code>File → Defaults → Save Startup File</code>.

Now, every time you open Blender, your scene will start with these settings already in place.


## Going A Little Further (Optional)

It might be useful to leave some **other settings prepared for a practical workflow**, like installing addons or adjusting rendering settings, which we’ll look at in more detail as we go forward.

The point near the cube is a **light**, and the square is a **camera**. We don’t need these for now, so we can delete them... we can even get rid of the cube too. (¬‿¬)

<center>
<img src="/images/Getting-Started/delete.jpg" alt="Delete" width="300">
</center><br>

Select everything with <code>A</code>, then press <code>X</code> and click on **delete** the selected objects — this includes the cube, the camera, and the light.

Finally! 
