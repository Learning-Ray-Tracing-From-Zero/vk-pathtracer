#version 460

/* --------------------------------------*/
layout (location = 0) in vec2 fragUV;
layout (location = 1) in vec2 texCoord;
/* --------------------------------------*/
layout (location = 0) out vec4 fragColor;
/* --------------------------------------*/

void main() {
    fragColor = vec4(texCoord, 0.0, 1.0);
}
