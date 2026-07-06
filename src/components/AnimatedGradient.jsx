import { useEffect, useRef } from 'react';

export default function AnimatedGradient({ children, className = '' }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let gl;
    try {
      gl = canvas.getContext('webgl2', { premultipliedAlpha: true, alpha: true, antialias: true });
    } catch (e) {}
    
    if (!gl) {
      canvas.style.display = 'none';
      return;
    }

    const VERT = [
      '#version 300 es',
      'in vec4 a_position;',
      'void main(){gl_Position=a_position;}'
    ].join('\n');

    const FRAG = [
      '#version 300 es',
      'precision highp float;',
      'uniform float u_time,u_pixelRatio,u_scale,u_rotation;',
      'uniform vec2 u_resolution;',
      'uniform vec4 u_color1,u_color2,u_color3;',
      'uniform float u_proportion,u_softness,u_shape,u_shapeScale,u_distortion,u_swirl,u_swirlIterations;',
      'out vec4 fragColor;',
      '#define TWO_PI 6.28318530718',
      '#define PI 3.14159265358979323846',
      'vec2 rot(vec2 uv,float th){return mat2(cos(th),sin(th),-sin(th),cos(th))*uv;}',
      'float rnd(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}',
      'float ns(vec2 st){',
      '  vec2 i=floor(st);vec2 f=fract(st);',
      '  float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+vec2(1,1));',
      '  vec2 u=f*f*(3.0-2.0*f);',
      '  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}',
      'vec4 blend(vec4 c1,vec4 c2,vec4 c3,float m,float ew,float eb){',
      '  float r1=smoothstep(0.0+0.35*ew,0.7-0.35*ew+0.5*eb,m);',
      '  float r2=smoothstep(0.3+0.35*ew,1.0-0.35*ew+eb,m);',
      '  vec3 m2=mix(c1.rgb*c1.a,c2.rgb*c2.a,r1);',
      '  float o2=mix(c1.a,c2.a,r1);',
      '  return vec4(mix(m2,c3.rgb*c3.a,r2),mix(o2,c3.a,r2));}',
      'void main(){',
      '  vec2 uv=gl_FragCoord.xy/u_resolution.xy;',
      '  float t=0.5*u_time;',
      '  float nsc=0.0005+0.006*u_scale;',
      '  uv-=0.5;uv*=(nsc*u_resolution);',
      '  uv=rot(uv,u_rotation*0.5*PI);',
      '  uv/=u_pixelRatio;uv+=0.5;',
      '  float n1=ns(uv*1.0+t);',
      '  float n2=ns(uv*2.0-t);',
      '  float angle=n1*TWO_PI;',
      '  uv.x+=4.0*u_distortion*n2*cos(angle);',
      '  uv.y+=4.0*u_distortion*n2*sin(angle);',
      '  float iters=ceil(clamp(u_swirlIterations,1.0,30.0));',
      '  for(float i=1.0;i<=iters;i++){',
      '    uv.x+=clamp(u_swirl,0.0,2.0)/i*cos(t+i*1.5*uv.y);',
      '    uv.y+=clamp(u_swirl,0.0,2.0)/i*cos(t+i*1.0*uv.x);}',
      '  float proportion=clamp(u_proportion,0.0,1.0);',
      '  vec2 cuv=uv*(0.5+3.5*u_shapeScale);',
      '  float shape=0.5+0.5*sin(cuv.x)*cos(cuv.y);',
      '  float mixer=shape+0.48*sign(proportion-0.5)*pow(abs(proportion-0.5),0.5);',
      '  vec4 col=blend(u_color1,u_color2,u_color3,mixer,1.0-clamp(u_softness,0.0,1.0),0.01+0.01*u_scale);',
      '  fragColor=vec4(col.rgb,col.a);}'
    ].join('\n');

    const P = {
      color1: [0.059, 0.165, 0.290, 1.0],
      color2: [0.180, 0.373, 0.518, 1.0],
      color3: [0.910, 0.929, 0.949, 1.0],
      rotation: -50, proportion: 0.10, scale: 0.01,
      speed: 18, distortion: 0, swirl: 0.50,
      swirlIterations: 16, softness: 0.47,
      offset: -299, shapeScale: 0.45
    };

    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('Shader error:', gl.getShaderInfoLog(s));
      }
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.warn('Program link error:', gl.getProgramInfoLog(prog));
      canvas.style.display = 'none';
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const U = {};
    ['u_time','u_pixelRatio','u_scale','u_rotation','u_resolution',
     'u_color1','u_color2','u_color3','u_proportion','u_softness',
     'u_shape','u_shapeScale','u_distortion','u_swirl','u_swirlIterations'
    ].forEach(n => { U[n] = gl.getUniformLocation(prog, n); });

    function resize() {
      if (!host) return;
      const w = host.clientWidth, h = host.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    
    // We use a simple window resize event or ResizeObserver
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let start = null;
    let reqId;
    function frame(ts) {
      if (!start) start = ts;
      const t = ((ts - start) / 1000) * (P.speed / 100 * 5) + P.offset * 0.01;
      gl.uniform1f(U.u_time, t);
      gl.uniform2f(U.u_resolution, canvas.width, canvas.height);
      gl.uniform1f(U.u_pixelRatio, window.devicePixelRatio || 1);
      gl.uniform1f(U.u_scale, P.scale);
      gl.uniform1f(U.u_rotation, P.rotation * Math.PI / 180);
      gl.uniform4fv(U.u_color1, P.color1);
      gl.uniform4fv(U.u_color2, P.color2);
      gl.uniform4fv(U.u_color3, P.color3);
      gl.uniform1f(U.u_proportion, P.proportion);
      gl.uniform1f(U.u_softness, P.softness);
      gl.uniform1f(U.u_shape, 0.0);
      gl.uniform1f(U.u_shapeScale, P.shapeScale);
      gl.uniform1f(U.u_distortion, P.distortion / 50);
      gl.uniform1f(U.u_swirl, P.swirl);
      gl.uniform1f(U.u_swirlIterations, P.swirlIterations);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      reqId = requestAnimationFrame(frame);
    }
    reqId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(reqId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef} className={`ca-gradient-host ${className}`}>
      <canvas ref={canvasRef} className="ca-gc" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
