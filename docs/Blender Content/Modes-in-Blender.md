
# Modes in Blender

<center> 
★ ★ ★ Object, Edit, and Sculpt ★ ★ ★
</center><br>

Blender has **different modes** depending on what you want to do with your objects. The three main ones we’ll use are:


  [Object Mode](#object-mode) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Edit Mode](#edit-mode) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sculpt Mode


<center>
<img src="/images/Modes-in-Blender/modes-in-blender.gif" alt="Modes in Blender GIF" width="500">
</center>

- Object Mode: the big picture. Move, rotate, scale, or duplicate entire objects.

- Edit Mode: dive inside the object and shape its building blocks -> vertices, edges, and faces.

- Sculpt Mode: work like digital clay, pushing, pulling, and smoothing surfaces.

---

## Object Mode

Object Mode is **where you treat each object as a whole unit**. Here’s what you can do:

- **Select objects**: <code> Left click</code> to pick one, <code>Shift + Left click</code> for multiple. [Like we saw on the last module](Getting-Started.md#moving-things-around).

- **Add objects**: <code>Shift + A</code> → choose Mesh (cube, sphere, cylinder, etc.).

<center>
<img src="/images/Modes-in-Blender/add-object.gif" alt="Add Objects GIF" width="500">
</center>

- **Duplicate**: <code>Shift + D</code> makes a copy of your object.

<center>
<img src="/images/Modes-in-Blender/duplicate.gif" alt="Duplicate GIF" width="500">
</center>

- **Delete objects**: Select and press <code>X</code>, then delete.

<center>
<img src="/images/Modes-in-Blender/delete.gif" alt="Delete GIF" width="500">
</center>

- **Hide/Unhide**: Press <code>H</code> to hide, <code>Alt + H</code> (<code class="mac">Option + H</code> in Mac) to unhide.

<center>
<img src="/images/Modes-in-Blender/hide.gif" alt="Hide GIF" width="500">
</center>

- **Move** <code>G</code>, **Rotate** <code>R</code>, **Scale** <code>S</code>: The core transformations. Add <code>X, Y, Z</code> after the key to **lock it to an axis**.

<center>
<img src="/images/Modes-in-Blender/move-rotate-scale.gif" alt="Move Rotate Scale GIF" width="500"><br><small>Transformation in Z axis</small>
</center>

Notice that all transformations (location, rotation, and scale) show up live in the **Item panel** on the right. Open it by pressing <code>N</code>. 

- **Apply transforms**: <code>Ctrl + A</code>(<code class="mac">Command + A</code> in Mac) → Apply Location, Rotation, or Scale. 

<center>
<img src="/images/Modes-in-Blender/apply-transforms.gif" alt="Apply Transforms GIF" width="500">
</center>

This “locks in” your changes and is **essential before exporting for 3D printing**. Ideally, before exporting, your object should have:

Location: 0 on X, Y, Z

Rotation: 0 on X, Y, Z

Scale: 1 on X, Y, Z

Don’t worry if this last part feels confusing, we’ll dive deeper into it later. For now, just apply transforms and focus on **making your modifications in Edit Mode**. 

---

## Edit Mode

Edit Mode is where you go inside an object to **modify its actual geometry**.You can switch between Object Mode and Edit Mode with <code>tab</code>.

Before we start editing, let’s understand what we’re working with:

### What is a Mesh?

A **mesh** is the 3D structure of most objects in Blender. It’s made up of three building blocks:

- **Vertices**: Points in 3D space.
<center>
<img src="/images/Modes-in-Blender/vertices.jpg" alt="Vertices" width="300">
</center>

- **Edges**: Lines connecting vertices.

<center>
<img src="/images/Modes-in-Blender/edges.jpg" alt="Edges" width="300">
</center>

- **Faces**: Flat surfaces enclosed by edges.

<center>
<img src="/images/Modes-in-Blender/faces.jpg" alt="Faces" width="300">
</center>

You can switch between vertices, edges, and faces by clicking the icons to the right of “Edit Mode,” or use the shortcuts: <code>1</code> for vertices, <code>2</code> for edges, and <code>3</code> for faces.

<center>
<img src="/images/Modes-in-Blender/selection-edit-mode.jpg" alt="Selecting Element in Edit Mode" width="200">
</center>

Like this:

<center>
<img src="/images/Modes-in-Blender/switching-through-elements.gif" alt="Switching Through Elements GIF" width="500"><br><small>I am using Wireframe View.</small>
</center>

Just like in Object Mode, you can **select everything** in the scene by pressing <code>A</code>.

## Basic Actions in Edit Mode

Now that you know what a mesh is, here’s what you can do inside Edit Mode:

- **Move, Rotate, Scale**: you can transform parts of your mesh just like in Object Mode. Select a vertex, edge, face or the whole object, then:

Press <code>G</code> to move (grab) it.

Press <code>R</code> to rotate.

Press <code>S</code> to scale.

You can constrain the transformation to an axis by pressing <code>X</code>, <code>Y</code>, or <code>Z</code> after <code>G</code>, <code>R</code>, or <code>S</code>.

You can also **type a number** after pressing <code>G</code>, <code>R</code>, or <code>S</code> **to move, rotate, or scale by an exact amount**. For example, press <code>A</code> to select everything, <code>G</code>, then <code>X</code>, then type <code>2</code>, and the selection moves exactly 2 units along the X axis.

<center>
<img src="/images/Modes-in-Blender/adding-numbers-to-transformations.gif" alt="Adding Numbers To Transformations" width="500">
</center>

- **Extrude**: press <code>E</code> to creates a new geometry from your selection. Like stretching a face or edge into a new shape by dragging the cursor. 

<center>
<img src="/images/Modes-in-Blender/extrude.gif" alt="Extrude GIF" width="500">
</center>

- **Loop Cut**: press <code>Ctrl + R</code>(<code class="mac">Command + R</code> in Mac) to add a loop cut, which creates a new edge loop around your mesh. This is useful for adding more detail or controlling how your mesh deforms.

<center>
<img src="/images/Modes-in-Blender/loop-cut.gif" alt="Loop Cut GIF" width="500"><br><small>Here I added a loop cut and then scaled it.</small>
</center>

- **Bevel**: smooths out edges or corners by creating extra geometry. Select an edge (or a group of edges), then press <code>Ctrl + B</code> (<code class="mac">Command + B</code> in Mac) and drag your mouse. You can increase or decrease the number of segments for a smoother bevel.

<center>
<img src="/images/Modes-in-Blender/bevel.gif" alt="Bevel GIF" width="500">
</center>

Let’s add a cube as an example to see the difference when beveling an edge and a vertex:

<center>
<img src="/images/Modes-in-Blender/bevel-cube.gif" alt="Bevel Cube GIF" width="500">
</center>

<div style="display: flex; justify-content: center; gap: 20px; text-align: center;">
  <div>
    <img src="/images/Modes-in-Blender/vertex-bevel.jpg" alt="Vertex Bevel" width="190"><br>
    <small>Vertex Bevel</small>
  </div>
  <div>
    <img src="/images/Modes-in-Blender/edge-bevel.jpg" alt="Edge Bevel" width="200"><br>
    <small>Edge Bevel</small>
  </div>
</div>

Beveling is especially handy for making objects feel less “sharp”.

---

Alright! Now we know the basics of 2 out 3 modes. Not bad at all. Just **a few more tools and a bit of theory to go**, and then we’ll dive straight into making. Hang in there and see you on the next module. (ง •̀_•́)ง




