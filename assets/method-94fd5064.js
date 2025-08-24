import{j as n,F as a}from"./index-483eb8af.js";function i(t){const e={h1:"h1",img:"img",p:"p",...t.components};return n(a,{children:[n(e.h1,{children:"Method"}),`
`,n(e.p,{children:`VirtualSqueeze consists of four core
components: (1) Pressure capture and input encoding, where the
SenseGlove Development Kit is used to record temporally evolving
per-finger joint angles and estimated pressure during object squeezing; (2) Deformation prediction, where a graph-based neural network, trained on a dataset of simulated mesh deformations, predicts per-vertex displacements based on the encoded interaction signals; (3) Photorealistic visual synthesis, where the predicted deformation trajectory is converted into control signals (e.g., edge or
depth maps) and used to condition AnimateDiff via the MotionCtrl adapter, generating high-fidelity video frames aligned with the
user’s manipulation trajectory; and (4) 4D dynamic scene reconstruction, where the generated video frames are lifted to a temporally consistent 4D representation using 3D Gaussian Splatting
(3DGS) and its dynamic extension, 4DGS . The proposed
VirtualSqueeze forms a closed visuo-haptic loop: real-time finger
interaction alters object state, and drives visual synthesis, enabling
immersive and responsive virtual interaction with deformable objects. Each component is modular and can be adapted independently, allowing VirtualSqueeze to generalize across different object geometries and material types`}),`
`,n(e.p,{children:n(e.img,{src:"./method-framework.png",alt:"framework"})})]})}function r(t={}){const{wrapper:e}=t.components||{};return e?n(e,{...t,children:n(i,{...t})}):i(t)}export{r as default};
