import"./modulepreload-polyfill-P2Xu9kJm.js";import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,Q as g,R as _,S as v,T as y,U as b,V as x,W as S,X as C,Y as w,Z as T,_ as E,a as D,b as ee,c as O,d as k,et as te,f as ne,g as re,h as ie,i as ae,j as oe,k as se,l as ce,m as le,n as ue,o as de,p as fe,q as pe,r as me,s as he,t as ge,u as _e,v as ve,w as ye,x as be,y as A,z as xe}from"./character-BKQD-4y8.js";var Se={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Ce=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},we=new h(-1,1,1,-1,0,1),Te=new class extends O{constructor(){super(),this.setAttribute(`position`,new E([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new E([0,2,0,0,2,0],2))}},Ee=class{constructor(e){this._mesh=new a(Te,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,we)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},De=class extends Ce{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=C.clone(e.uniforms),this.material=new pe({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ee(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Oe=class extends Ce{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ke=class extends Ce{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ae=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new T);this._width=n.width,this._height=n.height,t=new te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ee}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new De(Se),this.copyPass.material.blending=0,this.timer=new l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Oe!==void 0&&(r instanceof Oe?n=!0:r instanceof ke&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new T);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},je=class extends Ce{constructor(e,n,r,i={}){super(),this.pixelSize=e,this.scene=n,this.camera=r,this.normalEdgeStrength=i.normalEdgeStrength||.3,this.depthEdgeStrength=i.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new T,this._renderResolution=new T,this._normalMaterial=new t,this._beautyRenderTarget=new te,this._beautyRenderTarget.texture.minFilter=f,this._beautyRenderTarget.texture.magFilter=f,this._beautyRenderTarget.texture.type=ee,this._beautyRenderTarget.depthTexture=new ie,this._normalRenderTarget=new te,this._normalRenderTarget.texture.minFilter=f,this._normalRenderTarget.texture.magFilter=f,this._normalRenderTarget.texture.type=ee,this._fsQuad=new Ee(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._resolution.set(e,t),this._renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);let{x:n,y:r}=this._renderResolution;this._beautyRenderTarget.setSize(n,r),this._normalRenderTarget.setSize(n,r),this._fsQuad.material.uniforms.resolution.value.set(n,r,1/n,1/r)}setPixelSize(e){this.pixelSize=e,this.setSize(this._resolution.x,this._resolution.y)}render(e,t){let n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this._beautyRenderTarget),e.render(this.scene,this.camera);let r=this.scene.overrideMaterial;e.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._fsQuad.render(e)}_createPixelatedMaterial(){return new pe({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new e},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}},Me=class extends Ce{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new k}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ne={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Pe=class extends Ce{constructor(){super(),this.isOutputPass=!0,this.uniforms=C.clone(Ne.uniforms),this.material=new s({name:Ne.name,uniforms:this.uniforms,vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader}),this._fsQuad=new Ee(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Fe={time:{value:0},night:{value:0}};function Ie(e){let t=e.onBeforeCompile,n=e.customProgramCacheKey.bind(e)();return e.customProgramCacheKey=()=>`${n}-grove-clouds-v1`,e.onBeforeCompile=n=>{t.call(e,n),n.uniforms.groveTime=Fe.time,n.uniforms.groveNight=Fe.night,n.vertexShader=`varying vec3 vGroveWorld;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vec4 groveLocal=vec4(position,1.);
      #ifdef USE_INSTANCING
        groveLocal=instanceMatrix*groveLocal;
      #endif
      vGroveWorld=(modelMatrix*groveLocal).xyz;`),n.fragmentShader=`varying vec3 vGroveWorld;uniform float groveTime;uniform float groveNight;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
      vec2 cloudUV=vGroveWorld.xz*.17+vec2(groveTime*.017,groveTime*.008);
      float cloudShape=sin(cloudUV.x+sin(cloudUV.y*.8))*.55+sin(cloudUV.y*1.4-cloudUV.x*.5)*.45;
      float cloudCover=smoothstep(.02,.65,cloudShape);
      reflectedLight.directDiffuse*=1.-cloudCover*.20*(1.-groveNight);
      reflectedLight.directSpecular*=1.-cloudCover*.20*(1.-groveNight);`)},e}function Le(e,t){return e.customProgramCacheKey=()=>`sundew-surface-${t}`,e.onBeforeCompile=e=>{e.uniforms.siltTime=Fe.time,e.vertexShader=`varying vec3 vSurfacePosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vSurfacePosition=(modelMatrix*vec4(position,1.)).xyz;`),e.fragmentShader=`uniform float siltTime;varying vec3 vSurfacePosition;
float surfaceHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
`+e.fragmentShader;let n=t===`grass`?`
      vec2 turfCell=floor(vSurfacePosition.xz*2.);
      float broad=sin(turfCell.x*.41+sin(turfCell.y*.35))*cos(turfCell.y*.27);
      float speck=step(.88,surfaceHash(floor(vSurfacePosition*14.)));
      diffuseColor.rgb *= .96+broad*.055+speck*.07;
    `:t===`silt`?`
      vec2 silt=floor(vSurfacePosition.xz*25.)/25.;
      float grain=surfaceHash(vec3(floor(silt*32.),0.));
      float caustic=sin(silt.x*16.+sin(silt.y*9.-siltTime*.8))*sin(silt.y*14.-siltTime*1.3);
      diffuseColor.rgb *= .92+grain*.12+pow(max(0.,caustic),8.)*.42;
    `:t===`wood`?`
      vec3 texel=floor(vSurfacePosition*24.);
      float grain=surfaceHash(vec3(floor(texel.x*.4),floor(texel.y*.08),floor(texel.z*.4)));
      diffuseColor.rgb *= grain>.83?.84:grain<.14?1.06:1.;
    `:t===`plaster`?`
      float fleck=surfaceHash(floor(vSurfacePosition*22.));
      diffuseColor.rgb *= fleck>.92?.91:fleck<.07?1.04:1.;
    `:`
      float fleck=surfaceHash(floor(vSurfacePosition*18.));
      diffuseColor.rgb *= fleck>.85?.89:1.;
    `;e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>\n${n}`)},e}var j={grass:6916425,grassLight:10270556,grassDark:4353600,soil:7491901,wood:7491639,woodLight:11172937,cream:14863520,stone:9147264,roof:11885892,roofLight:13926481,deep:2313024},Re=new Map;function M(e,t={}){let n=JSON.stringify([e,t]);if(!Re.has(n)){let r=new oe({color:e,roughness:.85,flatShading:!0,...t});t.userData?.surface&&Le(r,t.userData.surface),Ie(r),Re.set(n,r)}return Re.get(n)}var N={box:new de(1,1,1),ball:new v(1,1),rock:new v(1,0),cylinder:new le(1,1,1,7),cone:new fe(1,1,6)};function P(e,t,n,r,i,o,s=1,c=1,l=1){let u=new a(t,n);return u.position.set(r,i,o),u.scale.set(s,c,l),u.castShadow=!0,u.receiveShadow=!0,e.add(u),u}function F(e,t,n,r,i,a,o,s,c={}){return P(e,N.box,M(t,c),n,r,i,a,o,s)}function I(e,t,n,r,i){let a=new g(...t),o=new g(...n),s=a.clone().add(o).multiplyScalar(.5),c=P(e,N.cylinder,M(i),...s.toArray(),r,a.distanceTo(o),r);return c.quaternion.setFromUnitVectors(new g(0,1,0),o.sub(a).normalize()),c}function ze(e=1){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Be(e){e.updateMatrixWorld(!0);let t=new Map;e.traverse(e=>{if(!e.isMesh)return;let n=e.material,r=(n.emissive?.getHex()||0)!==0||n.transparent||!!n.map,i=n.map?n.map.uuid:r?n.uuid:JSON.stringify([n.roughness,n.metalness,n.side,n.userData.surface]),a=t.get(i);if(!a){let e=r?n:n.clone();r||(e.onBeforeCompile=n.onBeforeCompile,e.customProgramCacheKey=n.customProgramCacheKey,e.color.set(16777215),e.vertexColors=!0),a={material:e,geometries:[]},t.set(i,a)}let o=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrixWorld);if(!r){let e=o.attributes.position.count,t=o.attributes.color,r=new Float32Array(e*3);for(let i=0;i<e;i++)r[i*3]=n.color.r*(t?t.getX(i):1),r[i*3+1]=n.color.g*(t?t.getY(i):1),r[i*3+2]=n.color.b*(t?t.getZ(i):1);o.setAttribute(`color`,new he(r,3))}n.map||o.deleteAttribute(`uv`),a.geometries.push(o)});let n=new A;for(let e of t.values()){let t=me(e.geometries);if(!t)throw Error(`Prefab geometry batch failed`);let r=new a(t,e.material);r.castShadow=!0,r.receiveShadow=!0,n.add(r),e.geometries.forEach(e=>e.dispose())}return n}function Ve(){let e=new A;F(e,j.stone,0,.22,0,5.1,.44,4.1),F(e,j.cream,0,1.6,0,4.7,2.65,3.7,{userData:{surface:`plaster`}});for(let t=-2.3;t<2.4;t+=.48)for(let n=.28;n<.7;n+=.23)F(e,t%1?8750454:10198149,t,n,1.88,.43,.19,.14);for(let t of[-2.32,0,2.32])F(e,j.wood,t,1.73,1.92,.16,2.7,.16);for(let t of[-1.8,0,1.8])F(e,j.wood,-2.38,1.73,t,.14,2.7,.16);for(let t of[-1.8,0,1.8])F(e,j.wood,2.38,1.73,t,.14,2.7,.16);for(let t of[.77,2.65])F(e,j.wood,0,t,1.93,4.8,.14,.16),F(e,j.wood,-2.4,t,0,.14,.14,3.7),F(e,j.wood,2.4,t,0,.14,.14,3.7),F(e,j.wood,0,t,-1.92,4.8,.14,.16);let t=new O;t.setAttribute(`position`,new E([-2.7,2.85,-2.2,0,4.6,-2.2,2.7,2.85,-2.2,-2.7,2.85,2.2,2.7,2.85,2.2,0,4.6,2.2],3)),t.setIndex([0,1,2,3,4,5,0,3,5,0,5,1,1,5,4,1,4,2]),t.computeVertexNormals(),P(e,t,M(j.roof,{userData:{surface:`roof`}}),0,0,0);let n=Math.atan2(1.75,2.7);for(let t of[-1,1])for(let r=0;r<7;r++)for(let i=0;i<11;i++){let a=t*(.19+r*.39),o=4.6-Math.abs(a)*1.75/2.7+.06,s=-2.08+i*.4+r%2*.07,c=F(e,[12017990,12544845,11360319,12875088][(r*5+i*3)%4],a,o,s,.48,.075,.38,{userData:{surface:`roof`}});c.rotation.z=-t*n}for(let t=-2.15;t<2.25;t+=.32)F(e,13732953,0,4.65,t,.29,.18,.29);F(e,5258797,.15,1.18,2.03,.9,1.8,.13);for(let t=-.2;t<.6;t+=.14)F(e,9790519,t,1.2,2.12,.12,1.64,.04);P(e,N.ball,M(14989134),.42,1.08,2.19,.055,.055,.055);let r=[];for(let t of[-1.4,1.47]){F(e,5852214,t,1.73,1.99,1.04,1.12,.12);let n=F(e,16764787,t,1.73,2.065,.83,.91,.08,{emissive:16753725,emissiveIntensity:.3,roughness:.4});r.push(n.material),F(e,6638641,t,1.73,2.13,.06,1,.07),F(e,6638641,t,1.73,2.13,.91,.06,.07);for(let n of[-.58,.58])F(e,5993810,t+n,1.73,2.02,.19,1.05,.13);F(e,8412216,t,1.1,2.16,1.22,.24,.36);for(let n=0;n<7;n++){let r=t-.47+n*.16;I(e,[r,1.2,2.16],[r,1.43+n%2*.13,2.16],.023,4549174),P(e,N.ball,M(n%2?14064283:15190381),r,1.43+n%2*.13,2.16,.09,.065,.08)}}for(let t=0;t<3;t++)F(e,12103308,.15,.1+t*.1,2.75-t*.28,1.6,.2,.35);for(let t of[-.85,.85])F(e,5852214,2.43,1.7,t,.12,1.03,.85),F(e,15124599,2.5,1.7,t,.06,.84,.66,{emissive:16753725,emissiveIntensity:.25}),F(e,6638641,2.55,1.7,t,.06,.95,.055),F(e,6638641,2.55,1.7,t,.06,.055,.76),F(e,8622941,2.47,1.7,t-.53,.13,.99,.2),F(e,8622941,2.47,1.7,t+.53,.13,.99,.2),F(e,10320459,2.55,1.12,t,.25,.16,1.05);for(let t of[-2.32,0,2.32])F(e,j.wood,t,1.7,-1.94,.16,2.7,.16);F(e,9606274,-1.3,4.1,-.7,.55,2,.62);for(let t=3.3;t<5.2;t+=.25)F(e,11974042,-1.3,t,-.7,.59,.07,.66);F(e,5721406,-1.3,5.16,-.7,.71,.16,.78),F(e,7361594,-3.05,.95,-.3,1.25,1.7,2.5);let i=F(e,10245180,-3.04,1.95,-.3,1.6,.13,2.9);i.rotation.z=.17;for(let t=-1.2;t<.9;t+=.34)for(let n=.4;n<1.5;n+=.29){let r=P(e,N.cylinder,M(9859657),-3.71,n,t,.14,.62,.14);r.rotation.z=Math.PI/2,P(e,N.cylinder,M(13741687),-4.03,n,t,.12,.02,.12).rotation.z=Math.PI/2}return{group:e,windows:r}}function He(e=4){let t=new A;for(let n=0;n<=e;n+=.85)F(t,12231022,n,.55,0,.12,1.1,.13),P(t,N.cone,M(14138759),n,1.15,0,.1,.14,.1);for(let n of[.35,.8])F(t,10323032,e/2,n,0,e,.09,.09);return t}function Ue(){let e=new A;for(let t=-2.25;t<=2.25;t+=.24){let n=.25+.25*Math.cos(t/2.5*Math.PI/2);F(e,11897945,t,n,0,.22,.15,2.05)}for(let t of[-1,1]){for(let n of[-2.2,0,2.2])F(e,8413759,n,.88,t,.16,1.35,.16),F(e,13809280,n,1.57,t,.21,.13,.21);I(e,[-2.2,1.28,t],[0,1.48,t],.06,12886384),I(e,[0,1.48,t],[2.2,1.28,t],.06,12886384)}return e}function We(){let e=new A;F(e,6637110,0,.06,0,3.8,.13,2.5);for(let t of[-1.3,1.3])F(e,10849115,0,.16,t,4,.2,.12);for(let t of[-2,2])F(e,10849115,t,.16,0,.12,.2,2.65);for(let t=-1.6;t<=1.7;t+=.65)for(let n=-.8;n<=.9;n+=.75){P(e,N.ball,M(8673345),t,.14,n,.27,.07,.25),I(e,[t,.16,n],[t,.55,n],.026,5471035);for(let r=0;r<3;r++){let i=r*2.1,a=P(e,N.ball,M(8364109),t+Math.cos(i)*.12,.36+r*.05,n+Math.sin(i)*.12,.17,.045,.09);a.rotation.z=.3}P(e,N.ball,M(13741647),t,.56,n,.11,.13,.1)}return e}function Ge(){let e=new A;return F(e,5130550,0,1.15,0,.1,2.3,.1),I(e,[0,2.2,0],[.45,2.2,0],.035,5130550),F(e,7492403,.45,1.88,0,.27,.4,.27),F(e,16765316,.45,1.89,0,.22,.27,.22,{emissive:16754750,emissiveIntensity:.8}),P(e,N.cone,M(5130550),.45,2.15,0,.24,.2,.24),e}var L=e=>5+Math.sin(e*.3)*.65,Ke=3.25,R=e=>Ke+Math.sin(e*.87)*.3+Math.sin(e*.31)*.17+(.85*Math.exp(-(((e-6)/2.8)**2))-.3*Math.exp(-(((e+6)/2)**2)))*Math.min(1,Math.max(0,(Math.abs(e)-1.5)/2)),qe=[{x:4.35,z:3.2,r:.46,y:-.25},{x:5.8,z:6.7,r:.62,y:-.29},{x:3.8,z:-6.1,r:.42,y:-.24},{x:5.3,z:-8.7,r:.55,y:-.28},{x:5.2,z:-4.8,r:.35,y:-.24},{x:6.2,z:4.8,r:.32,y:-.23},{x:4.7,z:9.8,r:.56,y:-.27},...[[-1,2.7,.78],[1,5.2,.95],[-1,7.6,.7],[1,-4.9,.8],[-1,-8.4,.95],[1,10.8,.85]].map(([e,t,n])=>({x:L(t)+e*(R(t)/2+.3),z:t,r:n,y:-.12}))],Je=[[-10,-7,1,`oak`],[-10.7,-2,.9,`birch`],[-11,3,.8,`oak`],[-9,7.3,.75,`amber`],[-5.6,8.3,.65,`birch`],[-.4,-8.2,1.1,`oak`],[2,-6.7,.83,`birch`],[-1,7.8,.7,`oak`],[10.1,-7.2,1.1,`oak`],[11,-2,.8,`birch`],[10.8,4.9,.83,`amber`],[7.8,8,.65,`birch`]];for(let e=0;e<8;e++)for(let t=0;t<9;t++){let n=-35+t*8+Math.sin(e*9+t)*2,r=-35+e*9+Math.cos(t*7+e)*2;Math.abs(n)<14&&Math.abs(r)<12||Math.abs(n-L(r))<3.5||Je.push([n,r,.8+(e*3+t*7)%7*.09,(e+t)%5==0?`amber`:(e+t)%3==0?`birch`:`oak`])}var Ye=[{x:-5.5,z:-4.5,w:7,h:4.7},{x:-5,z:3.5,w:4.25,h:2.8}];function Xe(e,t){return!(Math.abs(e)>23||Math.abs(t)>24||Math.abs(e-L(t))<R(t)/2+.12&&Math.abs(t)>.83||Ye.some(n=>Math.abs(e-n.x)<n.w/2+.2&&Math.abs(t-n.z)<n.h/2+.2)||qe.some(n=>Math.hypot(e-n.x,t-n.z)<n.r+.14)||Je.some(([n,r])=>Math.hypot(n-e,r-t)<.55))}var Ze=(e,t,n)=>{let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)},Qe=[[-4.8,-1.9],[-3.9,.2],[-1,2.4],[1.2,1.2],[3.1,0],[7.4,0],[10,1.6],[-1,2.4],[-1,9.3]];function $e(e,t){let n=1/0;for(let r=1;r<Qe.length;r++){if(r===7)continue;let[i,a]=Qe[r-1],[o,s]=Qe[r],c=o-i,l=s-a,u=Math.max(0,Math.min(1,((e-i)*c+(t-a)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(e-i-u*c,t-a-u*l))}return n}function z(e,t){let n=Math.abs(e-L(t))-R(t)/2,r=Ze(.95,2.4,$e(e,t))*Ze(2.8,4.5,Math.hypot(e,t-2));for(let n of Ye){let i=Math.max(Math.abs(e-n.x)-n.w/2,Math.abs(t-n.z)-n.h/2);r*=Ze(.55,1.8,i)}r*=Ze(0,1.6,Math.max(Math.abs(e+8.8)-2.2,Math.abs(t+.8)-1.8)),r*=Ze(.9,2.4,Math.abs(t));let i=0;for(let[n,r,a,o]of[[-8,8,4.8,.8],[10,7,4,.8],[9,-8,4.5,.7],[-13,-10,6,1.2],[0,-17,7,1.5],[18,17,9,1.8],[-20,19,8,1.4]])i+=o*Math.exp(-((e-n)**2+(t-r)**2)/(a*a));let a=Ze(.2,2.8,n);return i*r*a-.06*(1-Ze(0,.25,n))}function et(e,t){let n=Math.abs(e-5);return Math.abs(t)<1.05&&n<2.4?.33+.25*Math.cos(n/2.5*Math.PI/2):z(e,t)+.08}function tt(){let e=ze(83),t=new A;for(let n of[-1,1]){let r=[],i=[],o=[],s=new k(j.grass),c=new k(j.grassLight);for(let t=0;t<=240;t++)for(let a=0;a<=64;a++){let l=-65+t*130/240,u=L(l)+n*R(l)/2,d=n<0?u-(u+65)*(1-a/64)**1.35:u+(65-u)*(a/64)**1.35;r.push(d,z(d,l),l);let f=s.clone().lerp(c,e()*.12),p=Math.exp(-(((l-(n<0?5.4:-7))/2.5)**2)),m=.22+p*1.1+.12*(1+Math.sin(l*2.1+n)),h=Math.max(0,1-Math.abs(d-u)/m);if(f.lerp(new k(6649428).lerp(new k(10327921),p*.8),h),i.push(f.r,f.g,f.b),t<240&&a<64){let e=t*65+a;o.push(e,e+64+1,e+1,e+1,e+64+1,e+64+2)}}let l=new O;l.setAttribute(`position`,new E(r,3)),l.setAttribute(`color`,new E(i,3)),l.setIndex(o),l.computeVertexNormals();let u=new a(l,M(16777215,{vertexColors:!0,flatShading:!1,userData:{surface:`grass`}}));u.receiveShadow=!0,t.add(u)}let n=[],i=[];for(let e=0;e<=180;e++)for(let t=0;t<=12;t++){let r=-65+e*130/180,a=(t/12-.5)*2;if(n.push(L(r)+a*R(r)/2,-.24-.34*(1-Math.abs(a))**1.5,r),e<180&&t<12){let n=e*13+t;i.push(n,n+13,n+1,n+1,n+13,n+14)}}let o=new O;o.setAttribute(`position`,new E(n,3)),o.setIndex(i),o.computeVertexNormals();let s=new a(o,M(8164990,{userData:{surface:`silt`}}));s.receiveShadow=!0,t.add(s);for(let e of[-1,1]){let n=[],r=[],i=[];for(let t=0;t<=240;t++){let a=-65+t*130/240,o=L(a)+e*R(a)/2;for(let t=0;t<2;t++){n.push(o+e*(t===0?-.32:0),t===0?-.29:z(o,a),a);let i=new k(t===0?9148285:6649428);r.push(i.r,i.g,i.b)}if(t<240){let e=t*2;i.push(e,e+2,e+1,e+1,e+2,e+3)}}let o=new O;o.setAttribute(`position`,new E(n,3)),o.setAttribute(`color`,new E(r,3)),o.setIndex(i),o.computeVertexNormals(),t.add(new a(o,M(16777215,{vertexColors:!0,flatShading:!1,side:2,userData:{surface:`gravel`}})))}let c=new ce([new g(-4.8,.035,-1.9),new g(-3.9,.035,.2),new g(-1,.035,2.4),new g(1.2,.035,1.2),new g(3.1,.035,0),new g(7.4,.035,0),new g(10,.035,1.6)]).getPoints(85);for(let n=0;n<c.length;n++){let r=c[n];if(Math.abs(r.x-L(r.z))<2.1)continue;let i=P(t,N.cylinder,M([12428661,13350280,11904124,14008983][n%4]),r.x+(e()-.5)*.25,.04,r.z,.8,.09,.59);i.rotation.y=e()*2}for(let e=0;e<24;e++){let n=2.4+e*.3,r=-1+Math.sin(e*.19)*.4;P(t,N.cylinder,M(e%2?13021572:12034169),r,.04,n,.72,.08,.38).rotation.y=e}let l=Be(t),u=new O;u.setAttribute(`position`,new E([-.04,0,0,.04,0,0,0,.3,0],3)),u.computeVertexNormals();let d=M(16777215,{side:2}),f={value:0},m={value:0},h=d.onBeforeCompile;d.onBeforeCompile=e=>{h(e),e.uniforms.uWind=f,e.uniforms.uTime=m,e.vertexShader=`uniform float uWind; uniform float uTime;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
 transformed.x += pow(position.y,2.) * sin(uTime*1.8+instanceMatrix[3].x*1.2+instanceMatrix[3].z)*uWind;`)};let _=new r(u,d,3600),v=new p,y=0;for(let t=0;t<16e3&&y<3600;t++){let n=t%3!=0,r=e()*(n?28:58)-(n?14:29),i=e()*(n?24:58)-(n?12:29);Math.sin(r*.8)*Math.cos(i*.7)<-.45||Math.abs(r-L(i))<R(i)/2+.12||Ye.some(e=>Math.abs(r-e.x)<e.w/2+.3&&Math.abs(i-e.z)<e.h/2+.3)||c.some(e=>Math.hypot(e.x-r,e.z-i)<.85)||Math.abs(r+1)<.85&&i>2.2||(v.position.set(r,z(r,i)+.015,i),v.rotation.y=e()*Math.PI,v.scale.setScalar(.6+e()*.9),v.updateMatrix(),_.setMatrixAt(y,v.matrix),_.setColorAt(y,new k().setHSL(.19+e()*.04,.38,.33+e()*.16)),y++)}_.count=y,_.receiveShadow=!0;let b=new A;for(let t=0;t<30;t++){let n=-23+e()*46,r=-23+e()*46;if(!(Math.abs(n-L(r))<2.2))for(let i=0;i<13;i++){let i=n+(e()-.5)*1.8,a=r+(e()-.5)*1.5,o=.14+e()*.16;P(b,N.cylinder,M(6061116),i,o/2,a,.018,o,.018),P(b,N.rock,M(t%3==0?11706820:t%3==1?15259286:15853503),i,o,a,.085,.045,.075)}}let x=Be(b);return x.traverse(e=>{if(e.isMesh){let t=e.geometry.attributes.position;for(let e=0;e<t.count;e++)t.setY(e,t.getY(e)+z(t.getX(e),t.getZ(e)));t.needsUpdate=!0,e.geometry.computeBoundingSphere(),e.castShadow=!1}}),{group:l,grass:_,flowers:x,wind:f,time:m}}var nt=class t extends a{constructor(n,r={}){super(n),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let i=this,a=r.color===void 0?new k(8355711):new k(r.color),o=r.textureWidth||512,s=r.textureHeight||512,l=r.clipBias||0,u=r.shader||t.ReflectorShader,d=r.multisample===void 0?4:r.multisample,f=new c,p=new g,m=new g,h=new g,_=new y,v=new g(0,0,-1),b=new e,x=new g,S=new g,w=new e,T=new y,E=new te(o,s,{samples:d,type:ee}),D=new pe({name:u.name===void 0?`unspecified`:u.name,uniforms:C.clone(u.uniforms),fragmentShader:u.fragmentShader,vertexShader:u.vertexShader});D.uniforms.tDiffuse.value=E.texture,D.uniforms.color.value=a,D.uniforms.textureMatrix.value=T,this.material=D,this.onBeforeRender=function(e,t,n){let r=this.getReflectionCamera(n);if(m.setFromMatrixPosition(i.matrixWorld),h.setFromMatrixPosition(n.matrixWorld),_.extractRotation(i.matrixWorld),p.set(0,0,1),p.applyMatrix4(_),x.subVectors(m,h),x.dot(p)>0&&this.forceUpdate===!1)return;x.reflect(p).negate(),x.add(m),_.extractRotation(n.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(h),S.subVectors(m,v),S.reflect(p).negate(),S.add(m),r.position.copy(x),r.up.set(0,1,0),r.up.applyMatrix4(_),r.up.reflect(p),r.lookAt(S),r.far=n.far,r.updateMatrixWorld(),r.projectionMatrix.copy(n.projectionMatrix),r.projectionMatrix.elements[8]*=-1,r.projectionMatrix.elements[12]*=-1,T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(r.projectionMatrix),T.multiply(r.matrixWorldInverse),T.multiply(i.matrixWorld),f.setFromNormalAndCoplanarPoint(p,m),f.applyMatrix4(r.matrixWorldInverse),b.set(f.normal.x,f.normal.y,f.normal.z,f.constant);let a=r.projectionMatrix;r.isOrthographicCamera?(w.x=(Math.sign(b.x)+a.elements[8])/a.elements[0],w.y=(Math.sign(b.y)+a.elements[9])/a.elements[5],w.z=-n.far,w.w=1):(w.x=(Math.sign(b.x)+a.elements[8])/a.elements[0],w.y=(Math.sign(b.y)+a.elements[9])/a.elements[5],w.z=-1,w.w=(1+a.elements[10])/a.elements[14]),b.multiplyScalar(2/b.dot(w)),a.elements[2]=b.x,a.elements[6]=b.y,r.isOrthographicCamera?(a.elements[10]=b.z-l,a.elements[14]=b.w-1):(a.elements[10]=b.z+1-l,a.elements[14]=b.w),i.visible=!1;let o=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(E),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,r),e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(o);let u=n.viewport;u!==void 0&&e.state.viewport(u),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),i.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};nt.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var rt=-.16,it=qe,at=1/90,ot=e=>()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296);function st(e,t,n=0){return Math.abs(e-L(t))<R(t)/2-n}function ct(e,t,n,r=[]){let i=rt+Math.sin(t*3.2-n*2.08+e*.8)*.023+Math.sin(e*5.1+t*1.7-n*1.1)*.012;for(let a of r){let r=n-a.time;if(r<0||r>4)continue;let o=Math.hypot(e-a.x,t-a.z)-r*1.9;i+=Math.sin(o*12)*Math.exp(-o*o*2.8-r*.95)*a.strength*.055}return i}function lt(e,t){let n=e-L(t),r=(.47+.22*Math.max(0,1-Math.abs(n)/(R(t)/2)))*3.25/R(t),i=.195*Math.cos(t*.3)*r,a=r;for(let n of it){let r=e-n.x,o=t-n.z,s=r*r+o*o;if(s<2.1){let e=Math.exp(-s*1.7);i+=(r>=0?1:-1)*e*.45,a-=e*.2}}return{x:i,z:a}}function ut(e=621){let t=ot(e),n=Array.from({length:112},()=>({active:!1})),r=Array.from({length:8},()=>({active:!1})),i=Array.from({length:8},()=>({x:0,z:0,time:-100,strength:0})),a=Array.from({length:20},(e,n)=>{let r=-12+t()*25;return{x:L(r)+(t()-.5)*2.3,y:rt,z:r,vx:0,vy:0,vz:.4,angle:t()*6,kind:n%3}}),o=0,s=0,c=0,l=0,u=0,d=0,f=0;function p(e,t,n){Object.assign(i[u++%i.length],{x:e,z:t,time:o,strength:n})}function m(e,r,a=1,s=24){p(e,r,a),f++;for(let l=0;l<s;l++){let s=t()*Math.PI*2,l=(.25+t()*.85)*a;Object.assign(n[c++%n.length],{active:!0,x:e,y:ct(e,r,o,i)+.04,z:r,vx:Math.cos(s)*l,vy:(.6+t()*1.25)*a,vz:Math.sin(s)*l+.2,life:1.8,foam:!1})}}function h(e,t){if(![e.x,e.y,e.z,t.x,t.z].every(Number.isFinite)||!st(t.x,t.z,.15)||it.some(e=>Math.hypot(t.x-e.x,t.z-e.z)<e.r+.09)||Math.hypot(t.x-e.x,t.z-e.z)>12)return!1;let n=.55+Math.min(6,Math.hypot(t.x-e.x,t.z-e.z))*.045;return Object.assign(r[l++%r.length],{active:!0,x:e.x,y:e.y+1,z:e.z,vx:(t.x-e.x)/n,vy:(rt-e.y-1)/n+7*n/2,vz:(t.z-e.z)/n,life:2}),!0}function g(e){o+=e;for(let t of r)t.active&&(t.life-=e,t.y+=t.vy*e-7*e*e/2,t.vy-=7*e,t.x+=t.vx*e,t.z+=t.vz*e,t.y<=ct(t.x,t.z,o,i)&&t.vy<0&&(st(t.x,t.z)&&m(t.x,t.z,1.25,30),t.active=!1),t.life<=0&&(t.active=!1));for(let r of n)if(r.active){if(r.life-=e,r.foam){let t=lt(r.x,r.z);r.x+=t.x*e,r.z+=t.z*e,r.y=ct(r.x,r.z,o,i)+.012}else r.x+=r.vx*e,r.z+=r.vz*e,r.y+=r.vy*e-7*e*e/2,r.vy-=7*e,r.y<=ct(r.x,r.z,o,i)&&r.vy<0&&(st(r.x,r.z,.04)?(r.foam=!0,r.life=.65+t()*.6):r.active=!1);r.life<=0&&(r.active=!1)}for(let n of a){let r=lt(n.x,n.z),a=1-Math.exp(-e*2);n.vx+=(r.x-n.vx)*a,n.vz+=(r.z-n.vz)*a,n.x+=n.vx*e,n.z+=n.vz*e;for(let e of it){let t=n.x-e.x,r=n.z-e.z,i=Math.hypot(t,r),a=e.r+.11;i<a&&(n.x=e.x+(i?t/i:1)*a,n.z=e.z+(i?r/i:0)*a)}n.x=Math.max(L(n.z)-R(n.z)/2+.18,Math.min(L(n.z)+R(n.z)/2-.18,n.x));let s=ct(n.x,n.z,o,i)+.017;n.vy+=(s-n.y)*36*e,n.vy*=Math.exp(-8*e),n.y+=n.vy*e,n.angle+=e*(.08+r.x*.8),n.z>13&&(n.z=-12,n.x=L(n.z)+(t()-.5)*2.4,n.y=rt,n.vy=0)}if(d+=e,d>.095){d-=.095;let e=n[c++%n.length];Object.assign(e,{active:!0,x:3.8+t()*.25,y:.05+t()*.2,z:-3.2,vx:.2+t()*.35,vy:.6+t()*.7,vz:.4+t()*.45,life:1.5,foam:!1})}}return{drops:n,stones:r,ripples:i,floaters:a,splash:m,throwStone:h,get time(){return o},get impacts(){return f},update(e,t=!0){if(!t||!Number.isFinite(e)||e<=0)return;s+=Math.min(e,.1);let n=0;for(;s+1e-10>=.011111111111111112&&n<9;)g(at),s-=at,n++}}}var dt=`
 uniform float uTime;uniform vec4 uRipples[8];
 float groveWaterHeight(vec2 p){
  float h=sin(p.y*3.2-uTime*2.08+p.x*.8)*.023+sin(p.x*5.1+p.y*1.7-uTime*1.1)*.012;
  for(int i=0;i<8;i++){
   float age=uTime-uRipples[i].z;
   if(age>=0.&&age<4.){
    float front=distance(p,uRipples[i].xy)-age*1.9;
    h+=sin(front*12.)*exp(-front*front*2.8-age*.95)*uRipples[i].w*.055;
   }
  }return h;
 }
`;function ft(){let t=ut(),n=new nt(new d(1,1),{textureWidth:512,textureHeight:512,clipBias:.003,multisample:0});n.rotation.x=-Math.PI/2,n.position.y=-.16,n.updateMatrixWorld(!0);let i=n.matrixWorld.clone().invert(),o=1,s=new y,c={time:{value:0},ripples:{value:Array.from({length:8},()=>new e(0,0,-100,0))},shallow:{value:new k(4106911)},deep:{value:new k(618371)},foam:{value:new k(14282464)},rocks:{value:it.map(e=>new g(e.x,e.z,e.r))}},l=[],u=[],f=[];for(let e=0;e<=360;e++)for(let t=0;t<=20;t++){let n=-65+e*130/360;if(l.push(L(n)+(t/20-.5)*R(n),-.16,n),u.push(t/20,e/360),e<360&&t<20){let n=e*21+t;f.push(n,n+21,n+1,n+1,n+21,n+22)}}let m=new O;m.setAttribute(`position`,new E(l,3)),m.setAttribute(`uv`,new E(u,2)),m.setIndex(f),m.computeVertexNormals();let h=new oe({color:16777215,roughness:.19,metalness:.04,transparent:!0,opacity:.76,side:2,depthWrite:!1});h.onBeforeCompile=e=>{Object.assign(e.uniforms,{uTime:c.time,uRipples:c.ripples,uShallow:c.shallow,uDeep:c.deep,uFoam:c.foam,uRocks:c.rocks,uReflection:{value:n.getRenderTarget().texture},uReflectionMatrix:{value:s}}),e.vertexShader=dt+`uniform mat4 uReflectionMatrix;varying vec4 vReflection;varying vec3 vWater;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
    transformed.y+=groveWaterHeight(position.xz);vWater=transformed;vReflection=uReflectionMatrix*modelMatrix*vec4(transformed,1.);`),e.fragmentShader=dt+`uniform sampler2D uReflection;varying vec4 vReflection;uniform vec3 uShallow;uniform vec3 uDeep;uniform vec3 uFoam;uniform vec3 uRocks[STREAM_ROCK_COUNT];varying vec3 vWater;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
   vec2 cell=vWater.xz;
   float lateral=cell.x-(5.+sin(cell.y*.3)*.65);
   float bank=abs(vUv.x-.5)*2.;
   vec2 flow=vec2(lateral,cell.y-uTime*.65);
   float turbulence=0.;float contact=0.;
   for(int i=0;i<STREAM_ROCK_COUNT;i++){
    vec2 d=cell-uRocks[i].xy;float radius=uRocks[i].z;
    float distanceToRock=length(d);
    float downstream=max(0.,d.y);
    float width=radius*.45+downstream*.16;
    float wake=exp(-pow((d.x-sin(downstream*3.-uTime*1.5)*.04)/width,2.))*step(radius*.25,d.y)*exp(-downstream*.72);
    turbulence=max(turbulence,wake);
    float collar=(1.-smoothstep(radius*.79,radius+ .12,distanceToRock))*smoothstep(radius*.6,radius*.85,distanceToRock);
    contact=max(contact,collar);
    flow.x+=sign(d.x)*exp(-distanceToRock*1.5)*radius*.12;
   }
   float noiseA=sin(flow.x*19.+sin(flow.y*5.3)*1.8)*sin(flow.y*15.7+sin(flow.x*8.1));
   float noiseB=sin(flow.x*8.8-flow.y*3.2+sin(flow.y*2.1));
   float broken= smoothstep(.23,.82,noiseA)*smoothstep(-.45,.6,noiseB);
   float shore=smoothstep(.93,1.,bank)*smoothstep(.3,.85,noiseA)*.2;
   float foam=shore+contact*broken*.65+turbulence*broken*.52;
   float caustic=pow(max(0.,sin(flow.x*12.+sin(flow.y*6.))*sin(flow.y*10.)),10.);
   float rippleLight=0.;
   for(int i=0;i<8;i++){
    float age=uTime-uRipples[i].z;
    if(age>=0.&&age<4.){float front=distance(cell,uRipples[i].xy)-age*1.9;
     rippleLight+=pow(max(0.,cos(front*12.)),10.)*exp(-front*front*3.-age*.9)*uRipples[i].w;
    }
   }
   diffuseColor.rgb=mix(uDeep,uShallow,smoothstep(.2,1.,bank)*.85);
   diffuseColor.rgb+=caustic*vec3(.009,.022,.016);
   diffuseColor.a=mix(.8,.32,smoothstep(.42,1.,bank));
   diffuseColor.rgb=mix(diffuseColor.rgb,uFoam,clamp(foam+rippleLight*.55,0.,.82));
   // Quiet pools retain broad reflected shapes; fine highlights gather in riffles.
   float glint=pow(max(0.,noiseA),22.);
   diffuseColor.rgb=mix(diffuseColor.rgb,uFoam,glint*(.025+turbulence*.23));
  `),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
   float h=groveWaterHeight(vWater.xz);
   vec3 waterNormal=normalize(vec3((h-groveWaterHeight(vWater.xz+vec2(.045,0.)))/.045,1.,(h-groveWaterHeight(vWater.xz+vec2(0.,.045)))/.045));
   normal=normalize((viewMatrix*vec4(waterNormal,0.)).xyz);`),e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,`
   vec2 reflectedUV=vReflection.xy/vReflection.w;
   reflectedUV+=vec2(waterNormal.x,waterNormal.z)*.022;
   vec3 reflected=texture2D(uReflection,clamp(reflectedUV,.002,.998)).rgb;
   float fresnel=pow(1.-clamp(dot(normal,normalize(vViewPosition)),0.,1.),3.);
   outgoingLight=mix(outgoingLight,reflected,.1+fresnel*.38);
   #include <opaque_fragment>`)},h.defines={USE_UV:``,STREAM_ROCK_COUNT:it.length},Ie(h);let _=new a(m,h);_.receiveShadow=!0,_.name=`interactive-stream`,_.renderOrder=1;let v=new A,b=new r(N.box,new oe({color:12640464,roughness:.35}),112),x=new r(N.rock,M(8419939),8),S=new r(new _e(.075,5),M(12163665,{side:2}),20);b.frustumCulled=x.frustumCulled=S.frustumCulled=!1,v.add(b,x,S);let C=new p,w=new d(2.5,.95,18,12),T=M(5084299,{side:2,transparent:!0,opacity:.8}),D=new a(w,T);D.position.set(L(64),-.62,64);function ee(e,n){t.update(e,n),c.time.value=t.time,t.ripples.forEach((e,t)=>c.ripples.value[t].set(e.x,e.z,e.time,e.strength)),t.drops.forEach((e,t)=>{C.position.set(e.x||0,e.y||0,e.z||0),C.rotation.set(0,0,0),C.scale.set(e.active?e.foam?.055:.025:0,e.active?e.foam?.008:.045:0,e.active?e.foam?.09:.025:0),C.updateMatrix(),b.setMatrixAt(t,C.matrix)}),b.instanceMatrix.needsUpdate=!0,t.stones.forEach((e,n)=>{C.position.set(e.x||0,e.y||0,e.z||0),C.rotation.set(t.time*8,n,0),C.scale.setScalar(e.active?.065:0),C.updateMatrix(),x.setMatrixAt(n,C.matrix)}),x.instanceMatrix.needsUpdate=!0,t.floaters.forEach((e,n)=>{C.position.set(e.x,e.y+.01,e.z);let r=(ct(e.x+.05,e.z,t.time,t.ripples)-ct(e.x-.05,e.z,t.time,t.ripples))/.1;C.rotation.set(-Math.PI/2+r*.4,0,e.angle),C.scale.set(1,e.kind===0?1.8:.8,1),C.updateMatrix(),S.setMatrixAt(n,C.matrix)}),S.instanceMatrix.needsUpdate=!0}return ee(0,!1),{mesh:_,waterfall:D,effects:v,uniforms:c,simulation:t,update:ee,throwStone:t.throwStone,renderReflection(e,t,r,a){if(o+=a,o<1/24)return;o=0,_.visible=!1,D.visible=!1;let c=e.shadowMap.needsUpdate;e.shadowMap.needsUpdate=!1;try{r.updateMatrixWorld(),n.onBeforeRender(e,t,r),s.multiplyMatrices(n.material.uniforms.textureMatrix.value,i)}finally{_.visible=!0,D.visible=!0,e.shadowMap.needsUpdate=c}},dispose(){n.geometry.dispose(),n.dispose()}}}var pt=new g(5.7,6.6,9.3);function mt(e,t,n,r,i=!1){let a=new g(n.x,n.y+.9,n.z),o=i?1:1-Math.exp(-5*r),s=a.sub(t.target).multiplyScalar(o);e.position.add(s),t.target.add(s)}function ht(e,t,n){t.target.set(n.x,n.y+.9,n.z),e.position.copy(t.target).add(pt),t.update()}function gt(e){let t=new A;for(let n of[...e.children])t.add(n);e.add(Be(t))}function _t(){let e=new A,t=new A,n=ze(921),o=new A;o.position.set(3.55,.93,-3.6);for(let e of[-.33,.33]){let t=new a(new w(1.1,.065,5,28),M(6181180));t.rotation.y=Math.PI/2,t.position.x=e,o.add(t);for(let t=0;t<8;t++){let n=t*Math.PI/4;I(o,[e,0,0],[e,Math.cos(n)*1.08,Math.sin(n)*1.08],.045,11703136)}}for(let e=0;e<12;e++){let t=e*Math.PI/6,n=F(o,10057035,0,Math.cos(t)*1.03,Math.sin(t)*1.03,.8,.23,.1);n.rotation.x=t}I(t,[2.1,.96,-3.6],[4.2,.96,-3.6],.09,6443840);for(let e of[2.15,4.12])F(t,8548946,e,.45,-3.6,.24,1.25,.38);gt(o),e.add(o);for(let[e,r]of[[-7,5.4],[-8.5,-1.2],[9,2.4],[.4,-6]])for(let i=0;i<5;i++){let a=e+n()*.8,o=r+n()*.7,s=.12+n()*.12;P(t,N.cylinder,M(13220749),a,s/2,o,.025,s,.025),P(t,N.ball,M(i%2?12480847:13212256),a,s,o,.11,.045,.1)}I(t,[-7.4,.1,2],[-7.1,1.5,2],.035,12625015),F(t,7239781,-7.4,.13,2,.3,.27,.07),P(t,N.cylinder,M(9860424),-3.1,.17,4.7,.36,.3,.3);for(let e=0;e<5;e++)P(t,N.ball,M(e%2?12684104:14393941),-3.3+e%3*.18,.3+Math.floor(e/3)*.12,4.7,.13,.12,.13);for(let e=0;e<30;e++){let r=-2+n()*5,i=2+n()*5;Math.abs(r+1)<.8||(I(t,[r,0,i],[r,.25,i],.012,5731137),P(t,N.rock,M(e%3==0?12295623:14928250),r,.27,i,.07,.04,.07))}let s=Be(t);s.traverse(e=>{if(e.isMesh){let t=e.geometry.attributes.position;for(let e=0;e<t.count;e++)t.setY(e,t.getY(e)+Math.max(0,z(t.getX(e),t.getZ(e))));t.needsUpdate=!0,e.geometry.computeBoundingSphere()}}),e.add(s);let c=new A;for(let e of[-8,-3.7])I(c,[e,0,-8],[e,2,-8],.055,9400395);I(c,[-8,1.95,-8],[-3.7,1.95,-8],.012,13614994),e.add(Be(c));let l=[];for(let t=0;t<4;t++){let n=new d(.65,.8,5,7);n.translate(0,-.4,0);let r=new a(n,M([13481354,8560019,10973535,14273968][t],{side:2}));r.position.set(-7.35+t*.93,1.9,-8),r.castShadow=!0,e.add(r),l.push({mesh:r,base:n.attributes.position.array.slice()});for(let t of[-.23,.23])F(e,9073226,r.position.x+t,1.94,-8,.045,.1,.05)}let u=new d(.55,.85,5,7);u.translate(0,-.425,0);let f=new a(u,M(11897687,{side:2}));f.position.set(1.85,2.22,2),e.add(f),I(e,[1.5,0,2],[1.5,2.3,2],.045,7627076),I(e,[1.5,2.25,2],[2.2,2.25,2],.035,7627076),l.push({mesh:f,base:u.attributes.position.array.slice()});let m=[];for(let t=0;t<3;t++){let n=new A,r=new A;P(n,N.ball,M(t===1?10976849:14866612),0,.28,0,.22,.23,.3),r.position.set(0,.4,.2),n.add(r),P(r,N.ball,M(15260343),0,.05,.025,.13,.15,.13),P(r,N.cone,M(12478032),0,.22,0,.07,.13,.07),P(r,N.cone,M(13476432),0,.02,.17,.06,.12,.05).rotation.x=Math.PI/2;for(let e of[-.08,.08])P(r,N.ball,M(3423020),e,.08,.105,.017,.02,.016),I(n,[e,.04,0],[e,.15,0],.018,13082712);P(n,N.cone,M(10722684),0,.43,-.23,.16,.3,.1).rotation.x=-.7,n.remove(r),gt(n),gt(r),n.add(r),e.add(n),m.push({root:n,head:r,phase:t*2.1})}let h=[];for(let t=0;t<5;t++){let n=new A,r=[];P(n,N.ball,M(6180923),0,0,0,.018,.018,.08);for(let e of[-1,1]){let i=new A;n.add(i),P(i,N.ball,M(t%2?14925417:12693711),e*.095,0,0,.11,.015,.09),r.push(i)}e.add(n),h.push({body:n,wings:r,phase:t*1.7})}let g=new d(.14,.08),_=new r(g,M(12363353,{side:2}),42),v=Array.from({length:42},()=>({x:n()*28-14,z:n()*24-12,phase:n()*8})),y=new p;e.add(_);let b=new r(N.rock,new i({color:13021579,transparent:!0,opacity:.28,depthWrite:!1}),12);e.add(b);let x=new Set([o,_,b,...l.map(e=>e.mesh),...m.map(e=>e.root),...h.map(e=>e.body)]),S=new A;for(let t of[...e.children])x.has(t)||S.add(t);e.add(Be(S));let C=Array.from({length:12},()=>({age:2,x:0,y:0,z:0})),T=0,E=0,D=0;function ee(e,t,n,r,i,a){if(r&&(o.rotation.x+=t*.45,D+=t),l.forEach(({mesh:t,base:r},i)=>{let a=t.geometry.attributes.position;for(let t=0;t<a.count;t++){let o=-r[t*3+1];a.setZ(t,r[t*3+2]+Math.sin(e*2+r[t*3]*3+i)*o*.17*n)}a.needsUpdate=!0,t.geometry.computeVertexNormals()}),m.forEach(({root:e,head:t,phase:n})=>{let r=D*.3+n;e.position.set(-4.3+Math.sin(r)*1.7,.03,-.1+5.9+Math.sin(r*.7)*.75),e.rotation.y=Math.atan2(Math.cos(r)*1.7,Math.cos(r*.7)*.525);let i=Math.max(0,Math.sin(D*2.7+n))*.75;e.position.y+=z(e.position.x,e.position.z),t.rotation.x=i,e.position.y+=Math.abs(Math.sin(D*7+n))*.025}),h.forEach(({body:e,wings:t,phase:n},r)=>{let i=D;e.position.set((r<4?-5:8)+Math.sin(i*.45+n)*1.6,.7+Math.sin(i*.9+n)*.35,(r<4?3.5:1)+Math.cos(i*.37+n)*1.3),e.rotation.y=i*.35+n,t.forEach((e,t)=>e.rotation.z=Math.sin(i*16+n)*.85*(t?1:-1))}),_.visible=r,v.forEach((t,n)=>{let r=(e*.3+t.phase)%5;y.position.set(t.x+Math.sin(e*.6+t.phase)*1.2,5-r,t.z+r*.4),y.rotation.set(e+n,e*.6+n,Math.sin(e+n)),y.scale.setScalar(.8),y.updateMatrix(),_.setMatrixAt(n,y.matrix)}),_.instanceMatrix.needsUpdate=!0,T+=t,a&&T>.18){T=0;let e=C[E++%12];e.age=0,e.x=i.x,e.y=i.y,e.z=i.z}C.forEach((e,n)=>{e.age+=t,y.position.set(e.x,e.y+e.age*.12,e.z),y.scale.setScalar(e.age<.8?.09*(1-e.age/.8):0),y.rotation.set(0,n,0),y.updateMatrix(),b.setMatrixAt(n,y.matrix)}),b.instanceMatrix.needsUpdate=!0}return{root:e,update:ee}}function vt(e,t,n,r,i){let o=new g(...t),s=new g(...n),c=o.clone().lerp(s,.48),l=new g(-(s.z-o.z),0,s.x-o.x).normalize().multiplyScalar(r),u=[o,c.clone().add(l),s,c.clone().sub(l)],d=new O;d.setAttribute(`position`,new E(u.flatMap(e=>e.toArray()),3)),d.setIndex([0,1,2,0,2,3]),d.computeVertexNormals();for(let e=0;e<d.attributes.normal.count;e++)d.attributes.normal.setXYZ(e,0,1,0);let f=new a(d,M(i,{side:2,userData:{flora:!0}}));e.add(f)}function yt(e,t,n,r,i){for(let a=0;a<7;a++){let o=i+a*Math.PI*2/7,s=Math.cos(o),c=Math.sin(o),l=r*(.7+a%3*.13);for(let i=1;i<=5;i++){let o=i/6,u=l*o,d=Math.sin(o*Math.PI*.82)*r*.64,f=[t+s*u,d,n+c*u];for(let t of[-1,1]){let n=(1-o)*r*.29;vt(e,f,[f[0]+s*.06-c*n*t,d+.035,f[2]+c*.06+s*n*t],n*.42,[4617559,6590290,9021276][(i+a)%3])}}vt(e,[t,0,n],[t+s*l,r*.35,n+c*l],r*.035,7509833)}}function bt(){let e=ze(4401),t=new A,n=new A,r=Je.filter(([e,t])=>Math.abs(e)<16&&Math.abs(t)<15).map(([e,t])=>[e,t]);r.push([-7.7,6.6],[-8.6,2],[-2.6,8.4],[8.6,3.7],[10.8,2.8],[12,6]);for(let[i,a]of r){for(let n=0;n<6;n++){let n=e()*Math.PI*2,r=.65+e()*1.45,o=i+Math.cos(n)*r,s=a+Math.sin(n)*r;Math.abs(o-L(s))<3||Ye.some(e=>Math.abs(o-e.x)<e.w/2+.3&&Math.abs(s-e.z)<e.h/2+.3)||yt(t,o,s,.34+e()*.33,n)}for(let t=0;t<17;t++){let r=i+(e()-.5)*3,o=a+(e()-.5)*2.6;if(Math.abs(r-L(o))<1.9)continue;let s=P(n,N.rock,M([11112007,9921861,12689752][t%3]),r,.025,o,.07+e()*.05,.012,.045);s.rotation.y=e()*6}}let i=P(n,N.cylinder,M(5850931),-9.4,.24,5.4,.24,2.35,.24);i.rotation.z=Math.PI/2;for(let e of[-10.58,-8.22])P(n,N.cylinder,M(12228196),e,.24,5.4,.205,.018,.205).rotation.z=Math.PI/2,P(n,N.cylinder,M(8414273),e+(e<-9?-.012:.012),.24,5.4,.12,.02,.12).rotation.z=Math.PI/2;for(let e=0;e<8;e++)P(n,N.rock,M(e%2?7574352:5404488),-10.3+e*.25,.45,5.36,.21,.055,.18);for(let e=0;e<5;e++){let t=-9.9+e*.29;P(n,N.ball,M(13677957),t,.31,5.62,.13,.035,.1)}for(let[t,r]of[[-9,2.7],[-.1,8.6],[11,5.5]])for(let i=0;i<6;i++){let a=t+(e()-.5)*.7,o=r+(e()-.5)*.7,s=.12+e()*.13;P(n,N.cylinder,M(14470053),a,s/2,o,.027,s,.027),P(n,N.ball,M(i%2?11624003:13007950),a,s,o,.115,.05,.11);for(let e=0;e<3;e++)F(n,15129013,a+(e-1)*.045,s+.045,o+e%2*.035,.028,.012,.026)}let a=new A,o=Be(t);a.add(Be(n),o),a.traverse(e=>{if(!e.isMesh)return;let t=e.geometry.attributes.position,n=new Float32Array(t.count);for(let e=0;e<t.count;e++)n[e]=t.getY(e),t.setY(e,t.getY(e)+z(t.getX(e),t.getZ(e)));e.geometry.setAttribute(`plantHeight`,new he(n,1)),t.needsUpdate=!0,e.geometry.computeBoundingSphere()});let s={time:{value:0},wind:{value:0}};return o.traverse(e=>{if(!e.isMesh)return;let t=e.material.onBeforeCompile;e.material.onBeforeCompile=e=>{t(e),e.uniforms.underTime=s.time,e.uniforms.underWind=s.wind,e.vertexShader=`attribute float plantHeight;uniform float underTime;uniform float underWind;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
    transformed.x+=sin(underTime*1.6+position.x*.8+position.z)*plantHeight*plantHeight*.11*underWind;
    transformed.z+=cos(underTime*1.2+position.z*.9)*plantHeight*plantHeight*.06*underWind;`)},e.material.customProgramCacheKey=()=>`grove-ferns-clouds-v1`,e.castShadow=!1}),{root:a,update(e,t){s.time.value=e,s.wind.value=t}}}var xt=`./models/sundew-tree-kit.glb`;async function St(){return Ct((await new ue().loadAsync(xt)).scene)}function Ct(e,t=Je){e.updateMatrixWorld(!0);let n=new Map;e.traverse(e=>{e.isMesh&&n.set(e.name,e)});let i=new A,a=new Map,o=new p,s=new g(1/0,0,0),c={time:{value:0},wind:{value:0},viewer:{value:new g},fox:{value:new g},fade:{value:1}};function l(e,t,n){let r=e.onBeforeCompile;e.onBeforeCompile=e=>{r(e),Object.assign(e.uniforms,{treeTime:c.time,treeWind:c.wind,treeViewer:c.viewer,treeFox:c.fox,treeFade:c.fade}),e.vertexShader=`uniform float treeTime;uniform float treeWind;varying vec3 vTreeWorld;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${t?`
  vec3 treeWorld=(modelMatrix*instanceMatrix*vec4(position,1.)).xyz;
  float branch=max(0.,position.y-1.7);
  transformed.x+=sin(treeTime*.9+instanceMatrix[3].x*.7+instanceMatrix[3].z*.4)*branch*.022*treeWind;
  transformed.z+=cos(treeTime*.7+instanceMatrix[3].z*.6)*branch*.014*treeWind;
  transformed+=normal*sin(treeTime*3.2+treeWorld.x*3.1+treeWorld.z*2.7)*.018*treeWind;
 `:``}\nvTreeWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;`),n&&t&&(e.fragmentShader=`uniform vec3 treeViewer;uniform vec3 treeFox;uniform float treeFade;varying vec3 vTreeWorld;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>

  vec3 ray=treeViewer-treeFox;float rayLength=length(ray);ray/=max(rayLength,.01);
  vec3 relative=vTreeWorld-treeFox;float along=dot(relative,ray);
  float width=mix(.65,1.5,clamp(along/max(rayLength,.01),0.,1.));
  float separation=length(relative-ray*along);
  float coverage=(along>.7&&along<rayLength)?smoothstep(width*.82,width,separation):1.;
  float dither=fract(sin(dot(floor(vTreeWorld*42.),vec3(12.9898,78.233,37.719)))*43758.5453);
  if(treeFade>.5&&dither>coverage)discard;
 `))},e.customProgramCacheKey=()=>`grove-tree-${t}-${n}-v1`}for(let e of[`Oak`,`Birch`])for(let o of[`Trunk`,`Crown_Near`,`Crown_Far`]){let s=`${e}_${o}`,c=n.get(s);if(!c)throw Error(`Missing tree asset: ${s}`);let u=o!==`Trunk`,d=c.geometry.clone().applyMatrix4(c.matrixWorld),p=c.material.clone();p.vertexColors=!0,p.roughness=1,p.map&&(p.map.magFilter=f,p.map.minFilter=f,p.map.generateMipmaps=!1,p.map.colorSpace=S),Ie(p),l(p,u,!0);let h=new r(d,p,t.length);h.name=s,h.count=0,h.castShadow=!0,h.receiveShadow=!0;let g=new m({depthPacking:x,side:p.side});l(g,u,!1),h.customDepthMaterial=g;let _=new se({side:p.side});l(_,u,!1),h.customDistanceMaterial=_,i.add(h),a.set(s,h)}function u(e){for(let e of a.values())e.count=0;t.forEach(([t,n,r,i],s)=>{let c=Math.hypot(e.x-t,e.z-n);if(c>62)return;let l=i===`birch`?`Birch`:`Oak`,u=c<22?`Crown_Near`:`Crown_Far`;o.position.set(t,z(t,n)-.025,n),o.rotation.set(0,s*2.399,0),o.scale.set(r,r*(.94+s%5*.03),r),o.updateMatrix();for(let e of[`${l}_Trunk`,`${l}_${u}`]){let t=a.get(e),n=t.count++;t.setMatrixAt(n,o.matrix);let r=e.endsWith(`Trunk`)?16777215:i===`amber`?14270847:16777215;t.setColorAt(n,new k(r).multiplyScalar(.94+s%5*.025))}});for(let e of a.values())e.visible=e.count>0,e.instanceMatrix.needsUpdate=!0,e.instanceColor&&(e.instanceColor.needsUpdate=!0),e.count&&(e.computeBoundingSphere(),e.boundingSphere.radius+=.4);s.copy(e)}return{root:i,batches:a,update(e,t,n,r){c.time.value=n,c.wind.value=r,c.viewer.value.copy(e),c.fox.value.copy(t).y+=.8,s.distanceToSquared(e)>4&&u(e)},dispose(){for(let e of a.values())e.customDepthMaterial.dispose(),e.customDistanceMaterial.dispose()},setReflection(e){c.fade.value=+!e},get instanceCount(){return[...a.values()].reduce((e,t)=>e+t.count,0)}}}var wt=`./models/sundew-creek-kit.glb`;async function Tt(){return Et((await new ue().loadAsync(wt)).scene)}function Et(e){e.updateMatrixWorld(!0);let t=new A,n=ze(722),i=new p,a={},o={value:0},s={value:0},c=new Map;e.traverse(e=>{e.isMesh&&c.set(e.name,e)});for(let e of[`Boulder_A`,`Boulder_B`,`Boulder_C`,`Fern_Wide`,`Fern_Tall`,`Sedge_Clump`,`River_Broadleaf`])if(!c.has(e))throw Error(`Missing creek asset ${e}`);let l=new Map([...c.keys()].map(e=>[e,[]])),u=(e,t,n,r,i,a=0,o=1,s=!0)=>l.get(e).push({x:t,y:n+(s?z(t,r):0),z:r,s:i,angle:a,stretch:o});qe.forEach((e,t)=>u(`Boulder_${`ABC`[t%3]}`,e.x,e.y??-.21,e.z,e.r,t*2.3,1,t>=7));for(let e=0;e<110;e++){let t=n()*28-14,r=(n()-.5)*R(t)*.86,i=L(t)+r,a=-.24-.34*Math.max(0,1-Math.abs(r)/(R(t)/2))**1.5;u(`Boulder_${`ABC`[e%3]}`,i,a+.015,t,.07+n()*.13,n()*6,.45,!1)}for(let[e,t,r]of[[-1,3,.85],[1,5.5,.95],[-1,8,.65],[1,-5,.75],[-1,-8.2,.85],[1,11,.8]]){let i=L(t)+e*(R(t)/2+.5);for(let r=0;r<9;r++)u(`Boulder_${`ABC`[r%3]}`,i+e*(n()-.65)*1.1,-.09,t+(n()-.5)*2.2,.065+n()*.23,n()*6);for(let i=0;i<5;i++){let a=t+(n()-.5)*2.8,o=L(a)+e*(R(a)/2+.95+n()*.85);u(i%2?`Fern_Wide`:`Fern_Tall`,o,.01,a,r*(.7+n()*.5),n()*6)}}for(let e of[-1,1])for(let t=0;t<10;t++){let r=-13+t*2.9+(e>0?.8:0);if(!(Math.abs(r)<1.65||t%4==2)){for(let t=0;t<14;t++){let t=r+(n()-.5)*2.1,i=.18+n()*.65,a=L(t)+e*(R(t)/2+i);qe.some(e=>Math.hypot(a-e.x,t-e.z)<e.r*.8)||u(`Sedge_Clump`,a,.005,t,.6+n()*.55,n()*6,.8+n()*.5)}for(let t=0;t<4;t++){let t=r+(n()-.5)*1.6;u(`River_Broadleaf`,L(t)+e*(R(t)/2+.65+n()*.5),.01,t,.65+n()*.5,n()*6)}}}for(let[e,u]of l){let l=c.get(e),d=l.geometry.clone().applyMatrix4(l.matrixWorld),p=l.material.clone();p.vertexColors=!0,p.roughness=e.startsWith(`Boulder`)?.83:.96,p.map&&(p.map.magFilter=f,p.map.minFilter=f,p.map.generateMipmaps=!1,p.map.colorSpace=S),Ie(p);let m=p.onBeforeCompile;p.onBeforeCompile=t=>{m(t),t.uniforms.creekTime=o,t.uniforms.creekWind=s,t.vertexShader=`uniform float creekTime;uniform float creekWind;varying vec3 vKitWorld;
`+t.vertexShader;let n=e.startsWith(`Boulder`)?``:`transformed.x+=sin(creekTime*1.25+instanceMatrix[3].x*.8+instanceMatrix[3].z)*pow(max(position.y,0.),1.6)*.065*creekWind; transformed.z+=cos(creekTime*.85+instanceMatrix[3].z)*position.y*position.y*.04*creekWind;`;t.vertexShader=t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${n}\nvKitWorld=(modelMatrix*instanceMatrix*vec4(transformed,1.)).xyz;`),e.startsWith(`Boulder`)&&(t.fragmentShader=`varying vec3 vKitWorld;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
      float wet=1.-smoothstep(-.14,-.035+sin(vKitWorld.x*19.+vKitWorld.z*13.)*.008,vKitWorld.y);
      diffuseColor.rgb*=1.-wet*.38;`),t.fragmentShader=t.fragmentShader.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,.3,wet);`))},p.customProgramCacheKey=()=>`creek-kit-${e.startsWith(`Boulder`)?`rock-wet`:`plant-wind`}-v1`;let h=new r(d,p,u.length);h.name=e,u.forEach((t,r)=>{i.position.set(t.x,t.y,t.z),i.rotation.set(0,t.angle,0),i.scale.set(t.s,t.s*t.stretch,t.s),i.updateMatrix(),h.setMatrixAt(r,i.matrix),h.setColorAt(r,new k().setScalar((e.startsWith(`Boulder`)?.9:1.05)+n()*.16))}),h.castShadow=e.startsWith(`Boulder`),h.receiveShadow=!0,h.computeBoundingSphere(),t.add(h),a[e]=u.length}return{root:t,counts:a,update(e,t){o.value=e,s.value=t}}}var B=e=>document.querySelector(e),V=B(`#world`),Dt=ze(519),Ot=matchMedia(`(prefers-reduced-motion: reduce)`).matches,H=0,U=0,kt=0,At=Ot?0:.65,W=!Ot,jt=0,Mt=0,G=new Set,K=new u;K.background=new k(3428168),K.fog=new ve(7968903,24,62);var q;try{q=new D({antialias:!1,powerPreference:`high-performance`})}catch{throw B(`#loading`).textContent=`This graphics study needs WebGL 2. Try a supported browser with graphics acceleration enabled.`,Error(`WebGL unavailable`)}q.setPixelRatio(1),q.shadowMap.enabled=!0,q.shadowMap.autoUpdate=!1,q.shadowMap.type=1,q.outputColorSpace=S,q.toneMapping=4,q.toneMappingExposure=1.05,q.info.autoReset=!1,q.domElement.tabIndex=0,q.domElement.setAttribute(`aria-label`,`Modular farm world. WASD to walk, drag to orbit, scroll to zoom, Space for a gust of wind. Click nearby water to toss a pebble.`),V.appendChild(q.domElement);var J=new o(43,1,.15,130);J.position.copy(pt).add(new g(-.8,1,4.8));var Y=new ae(J,q.domElement);Y.target.set(-.8,1,4.8),Y.enableDamping=!0,Y.dampingFactor=.08,Y.enablePan=!1,Y.minPolarAngle=.5,Y.maxPolarAngle=1.3,Y.minDistance=6.8,Y.maxDistance=19,Y.rotateSpeed=.45,Y.update();var Nt=new Ae(q),Pt=new je(1,K,J,{normalEdgeStrength:.08,depthEdgeStrength:.12}),Ft=new Me(K,J);Nt.addPass(Ft),Pt.enabled=!1,Nt.addPass(Pt);var It=new Pe;Nt.addPass(It);var Lt=new be(12376547,4744008,2);K.add(Lt);var X=new re(16771528,3.5);X.position.set(-13,22,6),X.castShadow=!0,X.shadow.mapSize.set(2048,2048),X.shadow.radius=2.4,Object.assign(X.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:65}),X.shadow.normalBias=.035,X.shadow.bias=-15e-5,X.target.position.set(0,0,0),K.add(X,X.target);var Rt=new re(9218777,0);Rt.position.set(14,15,-11),K.add(Rt);var zt=tt();K.add(zt.group,zt.grass,zt.flowers);var Bt=ft();K.add(Bt.mesh,Bt.waterfall,Bt.effects);var Vt=bt();K.add(Vt.root);var Ht;try{Ht=await Tt(),K.add(Ht.root),V.dataset.creekAssets=`blender-glb`}catch(e){throw B(`#loading`).textContent=`The creek assets could not load. Refresh to try again.`,e}var Ut=new a(new d(180,180),M(3496529,{roughness:.92}));Ut.rotation.x=-Math.PI/2,Ut.position.y=-1.18,Ut.receiveShadow=!0,K.add(Ut);var Z=new A,Wt=Ve();Wt.group.position.set(-5,0,-4.5),Z.add(Wt.group);var Gt=Ue();Gt.position.set(5,0,0),Z.add(Gt);var Kt=We();Kt.position.set(-5,0,3.5),Z.add(Kt);for(let[e,t,n,r]of[[-8,1,3.4,0],[-8,1,4.2,Math.PI/2],[-7,5.4,4.2,0],[-9,-8,7,0],[8,-4,3.4,0]]){let i=He(n);i.position.set(e,0,t),i.rotation.y=r,Z.add(i)}var qt=[];for(let[e,t]of[[1.8,1.5],[-2.8,-1.2],[8.1,-1.4]]){let n=Ge();n.position.set(e,0,t),Z.add(n);let r=new _(16759648,0,5,2);r.position.set(e+.45,1.9,t),K.add(r),qt.push(r)}for(let e of[-6.4,-3.53]){let t=new _(16757846,0,5,2);t.position.set(e,1.7,-2.2),K.add(t),qt.push(t)}for(let e=0;e<12;e++){let t=e*Math.PI/6;F(Z,e%2?9213312:11054481,-9+Math.cos(t)*.6,.36,-.1+Math.sin(t)*.6,.32,.65,.3)}for(let e of[-9.7,-8.3])F(Z,8610878,e,1.1,-.1,.12,2.2,.12);F(Z,11694157,-9,2.17,-.1,1.8,.15,1.45).rotation.z=.12,P(Z,N.cylinder,M(9990723),-1.4,.45,-4,.43,.9,.43);for(let e of[.17,.7])P(Z,N.cylinder,M(6251861),-1.4,e,-4,.445,.09,.445);for(let e=0;e<18;e++){let t=-12+Dt()*24,n=-9+Dt()*18;if(Math.abs(t-L(n))<2.1||Math.abs(t)<2&&n>0)continue;let r=P(Z,N.rock,M(e%2?8096624:9017210),t,z(t,n)+.16,n,.3+Dt()*.3,.25,.4);r.rotation.y=Dt()*3}F(Z,10385227,-2.1,.25,-2.3,.6,.5,.7);for(let e=0;e<4;e++)F(Z,12687452,-2.1,.12+e*.12,-1.94,.65,.055,.055);K.add(Be(Z));var Jt;try{Jt=await St(),K.add(Jt.root),V.dataset.forestSource=`blender-instanced`}catch(e){throw B(`#loading`).textContent=`The woodland assets could not load. Refresh to try again.`,e}var Q;try{Q=await ge(),V.dataset.characterSource=`blender-glb`}catch(e){throw B(`#loading`).textContent=`The fox could not load. Refresh to try again.`,e}Q.root.position.set(-.8,et(-.8,4.8),4.8),K.add(Q.root);var Yt=_t();K.add(Yt.root),ht(J,Y,Q.root.position);var Xt=new _(16761715,0,6,2);Xt.castShadow=!1,Xt.shadow.mapSize.set(256,256),Xt.shadow.normalBias=.04,K.add(Xt);var Zt=new O,Qt=new Float32Array(96);for(let e=0;e<32;e++)Qt[e*3]=-11+Dt()*22,Qt[e*3+1]=.6+Dt()*3,Qt[e*3+2]=-8+Dt()*16;Zt.setAttribute(`position`,new he(Qt,3));var $t=new xe(Zt,new n({color:16768396,size:.055,transparent:!0,opacity:.5,depthWrite:!1}));K.add($t);var en=new A;for(let e=0;e<5;e++){let e=new a(N.ball,new i({color:13882297,transparent:!0,opacity:.1,depthWrite:!1}));en.add(e)}K.add(en);var tn=new b,nn=new T,rn,an=[],$=(e,t,n,r)=>{e.addEventListener(t,n,r),an.push(()=>e.removeEventListener(t,n,r))};function on(){q.domElement.focus({preventScroll:!0})}$(q.domElement,`pointerdown`,e=>{rn=[e.clientX,e.clientY],on()}),$(q.domElement,`pointerup`,e=>{if(!rn||Math.hypot(e.clientX-rn[0],e.clientY-rn[1])>7)return;let t=q.domElement.getBoundingClientRect();nn.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),tn.setFromCamera(nn,J);let n=tn.intersectObject(Bt.mesh)[0];if(n){if(!W){B(`#hint`).textContent=`Turn the breeze on to toss a pebble.`;return}let e=Bt.throwStone(Q.root.position,n.point);B(`#hint`).textContent=e?`A pebble, a splash, a little ripple.`:`Choose open water within a short toss of the fox.`}});function sn(){kt=1-kt,B(`#light`).textContent=kt?`☾ Moonlit`:`☀ Golden hour`,B(`#light`).ariaPressed=String(!!kt),on()}function cn(){jt=H+4,B(`#hint`).textContent=`A gust rolls through the canopy.`,on()}function ln(){Q.root.position.set(-.8,et(-.8,4.8),4.8),Q.root.rotation.set(0,0,0),ht(J,Y,Q.root.position),G.clear(),B(`#hint`).textContent=`Click the stream to toss a pebble. Cross the little bridge.`,on()}$(B(`#light`),`click`,sn),$(B(`#gust`),`click`,cn),$(B(`#reset`),`click`,ln),$(B(`#motion`),`click`,()=>{W=!W,B(`#motion`).textContent=W?`Breeze on`:`Breeze off`,B(`#motion`).ariaPressed=String(W),W&&B(`#hint`).textContent===`Turn the breeze on to toss a pebble.`&&(B(`#hint`).textContent=`Click the stream to toss a pebble. Cross the little bridge.`),on()}),$(B(`#pixels`),`click`,()=>{let e=Pt.pixelSize===1;Pt.setPixelSize(e?2:1),Pt.enabled=e,Ft.enabled=!e,B(`#pixels`).textContent=e?`Pixel view`:`Fine view`,B(`#pixels`).ariaPressed=String(e),on()});var un={KeyW:`up`,ArrowUp:`up`,KeyS:`down`,ArrowDown:`down`,KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`};$(window,`keydown`,e=>{[`BODY`,`CANVAS`].includes(document.activeElement?.tagName)&&(un[e.code]&&(G.add(un[e.code]),e.preventDefault()),(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&G.add(`run`),e.code===`Space`&&(e.preventDefault(),e.repeat||cn()),e.code===`KeyL`&&!e.repeat&&sn(),e.code===`KeyR`&&!e.repeat&&ln())}),$(window,`keyup`,e=>{un[e.code]&&G.delete(un[e.code]),(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&G.delete(`run`)}),$(window,`blur`,()=>G.clear()),$(document,`visibilitychange`,()=>{G.clear(),Mt=0}),document.querySelectorAll(`[data-dir]`).forEach(e=>{$(e,`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),G.add(e.dataset.dir)});for(let t of[`pointerup`,`pointercancel`,`lostpointercapture`])$(e,t,()=>G.delete(e.dataset.dir))});function dn(){let e=V.clientWidth,t=V.clientHeight;J.aspect=e/t,J.updateProjectionMatrix(),q.setSize(e,t,!1),Nt.setSize(e,t)}new ResizeObserver(dn).observe(V),dn();var fn=new g,pn=new g,mn=new g(0,1,0),hn=new g,gn=0,_n=1/0,vn=0,yn=1/0,bn=0;function xn(e){requestAnimationFrame(xn);let t=Mt?Math.min((e-Mt)/1e3,.04):0;if(Mt=e,document.hidden)return;H+=t;let n=W?H<jt?2.5:.65:0;At=ye.lerp(At,n,Math.min(1,t*2.8)),U=ye.lerp(U,kt,Math.min(1,t*1.5)),Lt.intensity=1.45-U*.95,X.intensity=2.65*(1-U),X.position.set(Q.root.position.x-13+U*17,22-U*14,Q.root.position.z+6-U*20),X.target.position.copy(Q.root.position),Rt.intensity=U*.75,X.castShadow=U<.9,Xt.castShadow=U>.9,Xt.intensity=U*1.7,Xt.position.copy(Q.root.position).add(new g(.5,1.6,.7)),qt.forEach(e=>e.intensity=U*5),Wt.windows.forEach(e=>e.emissiveIntensity=.3+U*1.8),K.background.setRGB(.39-U*.36,.56-U*.51,.58-U*.5),K.fog.color.copy(K.background),q.toneMappingExposure=1.05,zt.wind.value=At,zt.time.value=H,Bt.update(t,W),Vt.update(H,At),Ht.update(H,At),W&&(Fe.time.value+=t),Fe.night.value=U;let r=Number(G.has(`right`))-Number(G.has(`left`)),i=Number(G.has(`up`))-Number(G.has(`down`)),a=r||i,o=Q.root.position.x,s=Q.root.position.z;if(a){fn.copy(Y.target).sub(J.position).setY(0).normalize(),pn.crossVectors(fn,mn).normalize(),hn.copy(fn).multiplyScalar(i).addScaledVector(pn,r).normalize();let e=(G.has(`run`)?2.6:1.3)*t,n=Q.root.position.x,a=Q.root.position.z,o=n+hn.x*e,s=a+hn.z*e;Xe(o,a)&&(Q.root.position.x=o),Xe(Q.root.position.x,s)&&(Q.root.position.z=s),Q.faceDirection(hn,t)}Q.root.position.y=et(Q.root.position.x,Q.root.position.z);let c=Math.hypot(Q.root.position.x-o,Q.root.position.z-s);Q.animator.update(t,t?c/t:0,G.has(`run`)),Yt.update(H,t,At,W,Q.root.position,Math.hypot(Q.root.position.x-o,Q.root.position.z-s)>.002),$t.visible=W;let l=Zt.attributes.position;for(let e=0;e<32;e++)l.array[e*3+1]+=Math.sin(H*.8+e)*.08*t,l.array[e*3]+=Math.cos(H*.5+e)*.04*t;l.needsUpdate=!0,$t.material.opacity=.15+U*.65,en.visible=W,en.children.forEach((e,t)=>{let n=(H*.19+t*.2)%1;e.position.set(-6.3+n*.6,5.15+n*2,-5.2+Math.sin(n*3)*.13),e.scale.setScalar(.15+n*.4),e.material.opacity=(1-n)*.13}),mt(J,Y,Q.root.position,t),Jt.update(J.position,Q.root.position,H,At),Y.update(),q.info.reset(),Jt.setReflection(!0),Bt.renderReflection(q,K,J,t),Jt.setReflection(!1),q.shadowMap.needsUpdate=!0,Nt.render(),_n=Math.min(_n,q.info.render.calls),vn=Math.max(vn,q.info.render.calls),yn=Math.min(yn,q.info.render.triangles),bn=Math.max(bn,q.info.render.triangles),gn+=t,gn>1&&(gn=0,V.dataset.drawRange=_n+`–`+vn,V.dataset.triangleRange=yn+`–`+bn,_n=yn=1/0,vn=bn=0,V.dataset.characterClip=Q.animator.clip,V.dataset.waterImpacts=Bt.simulation.impacts,V.dataset.waterTime=Bt.simulation.time.toFixed(2),V.dataset.forestInstances=Jt.instanceCount,V.dataset.playerY=Q.root.position.y.toFixed(3),V.dataset.drawCalls=q.info.render.calls,V.dataset.triangles=q.info.render.triangles,V.dataset.playerX=Q.root.position.x.toFixed(2),V.dataset.playerZ=Q.root.position.z.toFixed(2),V.dataset.cameraX=J.position.x.toFixed(2),V.dataset.cameraZ=J.position.z.toFixed(2),V.dataset.targetX=Y.target.x.toFixed(2),V.dataset.targetZ=Y.target.z.toFixed(2),B(`#location`).textContent=Math.abs(Q.root.position.x-5)<2.5&&Math.abs(Q.root.position.z)<1?`WILLOWBROOK CROSSING`:`SUNDEW GROVE`)}B(`#loading`).hidden=!0,Ot&&(B(`#motion`).textContent=`Breeze off`,B(`#motion`).ariaPressed=`false`),on(),requestAnimationFrame(xn);