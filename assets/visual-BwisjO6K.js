import"./modulepreload-polyfill-P2Xu9kJm.js";import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,J as l,K as u,L as d,M as f,N as p,O as m,P as h,R as g,S as ee,T as te,U as _,W as ne,X as v,Y as re,_ as ie,a as y,b as ae,c as oe,d as se,f as ce,g as b,h as le,i as ue,j as de,k as fe,l as pe,m as me,n as he,o as ge,p as _e,q as ve,r as ye,s as x,t as be,u as xe,v as S,w as C,x as Se,y as Ce,z as we}from"./character-8ybKKNG1.js";var Te={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},w=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Ee=new e(-1,1,1,-1,0,1),De=new class extends x{constructor(){super(),this.setAttribute(`position`,new b([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new b([0,2,0,0,2,0],2))}},Oe=class{constructor(e){this._mesh=new C(De,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ee)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},ke=class extends w{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=u.clone(e.uniforms),this.material=new _({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Oe(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ae=class extends w{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},je=class extends w{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Me=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new v(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ce}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ke(Te),this.copyPass.material.blending=0,this.timer=new ne}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ae!==void 0&&(r instanceof Ae?n=!0:r instanceof je&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ne=class extends w{constructor(e,t,n,r={}){super(),this.pixelSize=e,this.scene=t,this.camera=n,this.normalEdgeStrength=r.normalEdgeStrength||.3,this.depthEdgeStrength=r.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new ve,this._renderResolution=new ve,this._normalMaterial=new i,this._beautyRenderTarget=new v,this._beautyRenderTarget.texture.minFilter=m,this._beautyRenderTarget.texture.magFilter=m,this._beautyRenderTarget.texture.type=Ce,this._beautyRenderTarget.depthTexture=new me,this._normalRenderTarget=new v,this._normalRenderTarget.texture.minFilter=m,this._normalRenderTarget.texture.magFilter=m,this._normalRenderTarget.texture.type=Ce,this._fsQuad=new Oe(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._resolution.set(e,t),this._renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);let{x:n,y:r}=this._renderResolution;this._beautyRenderTarget.setSize(n,r),this._normalRenderTarget.setSize(n,r),this._fsQuad.material.uniforms.resolution.value.set(n,r,1/n,1/r)}setPixelSize(e){this.pixelSize=e,this.setSize(this._resolution.x,this._resolution.y)}render(e,t){let n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this._beautyRenderTarget),e.render(this.scene,this.camera);let r=this.scene.overrideMaterial;e.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._fsQuad.render(e)}_createPixelatedMaterial(){return new _({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new re},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
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
			`})}},Pe={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Fe=class extends w{constructor(){super(),this.isOutputPass=!0,this.uniforms=u.clone(Pe.uniforms),this.material=new d({name:Pe.name,uniforms:this.uniforms,vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader}),this._fsQuad=new Oe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Ie(e,t){return e.customProgramCacheKey=()=>`sundew-surface-${t}`,e.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vSurfacePosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vSurfacePosition=(modelMatrix*vec4(position,1.)).xyz;`),e.fragmentShader=`varying vec3 vSurfacePosition;
float surfaceHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
`+e.fragmentShader;let n=t===`grass`?`
      vec2 turfCell=floor(vSurfacePosition.xz*2.);
      float broad=sin(turfCell.x*.41+sin(turfCell.y*.35))*cos(turfCell.y*.27);
      float speck=step(.88,surfaceHash(floor(vSurfacePosition*14.)));
      diffuseColor.rgb *= .96+broad*.055+speck*.07;
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
    `;e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>\n${n}`)},e}var T={grass:6916425,grassLight:10270556,grassDark:4353600,soil:7491901,wood:7491639,woodLight:11172937,cream:14863520,stone:9147264,roof:11885892,roofLight:13926481,deep:2313024},Le=new Map;function E(e,t={}){let n=JSON.stringify([e,t]);if(!Le.has(n)){let i=new r({color:e,roughness:.85,flatShading:!0,...t});t.userData?.surface&&Ie(i,t.userData.surface),Le.set(n,i)}return Le.get(n)}var D={box:new y(1,1,1),ball:new Se(1,1),rock:new Se(1,0),cylinder:new ce(1,1,1,7),cone:new se(1,1,6)};function O(e,t,n,r,i,a,o=1,s=1,c=1){let l=new C(t,n);return l.position.set(r,i,a),l.scale.set(o,s,c),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}function k(e,t,n,r,i,a,o,s,c={}){return O(e,D.box,E(t,c),n,r,i,a,o,s)}function A(e,t,n,r,i){let a=new l(...t),o=new l(...n),s=a.clone().add(o).multiplyScalar(.5),c=O(e,D.cylinder,E(i),...s.toArray(),r,a.distanceTo(o),r);return c.quaternion.setFromUnitVectors(new l(0,1,0),o.sub(a).normalize()),c}function Re(e=1){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function j(e){e.updateMatrixWorld(!0);let t=new Map;e.traverse(e=>{if(!e.isMesh)return;let n=e.material,r=(n.emissive?.getHex()||0)!==0||n.transparent||!!n.map,i=n.map?n.map.uuid:r?n.uuid:JSON.stringify([n.roughness,n.metalness,n.side,n.userData.surface]),a=t.get(i);if(!a){let e=r?n:n.clone();r||(e.onBeforeCompile=n.onBeforeCompile,e.customProgramCacheKey=n.customProgramCacheKey,e.color.set(16777215),e.vertexColors=!0),a={material:e,geometries:[]},t.set(i,a)}let o=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrixWorld);if(!r){let e=o.attributes.position.count,t=o.attributes.color,r=new Float32Array(e*3);for(let i=0;i<e;i++)r[i*3]=n.color.r*(t?t.getX(i):1),r[i*3+1]=n.color.g*(t?t.getY(i):1),r[i*3+2]=n.color.b*(t?t.getZ(i):1);o.setAttribute(`color`,new ge(r,3))}n.map||o.deleteAttribute(`uv`),a.geometries.push(o)});let n=new S;for(let e of t.values()){let t=he(e.geometries);if(!t)throw Error(`Prefab geometry batch failed`);let r=new C(t,e.material);r.castShadow=!0,r.receiveShadow=!0,n.add(r),e.geometries.forEach(e=>e.dispose())}return n}var ze=[`................`,`....22...2......`,`...2332.232.....`,`..2333323332....`,`.233433333332...`,`..233333433332..`,`.23333333333332.`,`233433333433332.`,`.2333333333332..`,`..233333333332..`,`.233333333332...`,`..233333332.....`,`...2333332......`,`....2332........`,`.....22.........`,`................`],Be=new Map;function Ve(e){if(Be.has(e))return Be.get(e);let n=e===`amber`?[7830589,11772746,14202717]:e===`birch`?[5665865,8889683,11517040]:[3562560,6457162,9873497],i=new Uint8Array(1024);ze.forEach((e,t)=>[...e].forEach((e,r)=>{if(e===`.`)return;let a=n[Number(e)-2],o=(t*16+r)*4;i[o]=a>>16,i[o+1]=a>>8&255,i[o+2]=a&255,i[o+3]=255}));let a=new _e(i,16,16,c);a.colorSpace=t,a.magFilter=m,a.minFilter=m,a.generateMipmaps=!1,a.needsUpdate=!0;let o=new r({map:a,alphaTest:.5,side:2,roughness:1});return Be.set(e,o),o}function He(){let e=new S;k(e,T.stone,0,.22,0,5.1,.44,4.1),k(e,T.cream,0,1.6,0,4.7,2.65,3.7,{userData:{surface:`plaster`}});for(let t=-2.3;t<2.4;t+=.48)for(let n=.28;n<.7;n+=.23)k(e,t%1?8750454:10198149,t,n,1.88,.43,.19,.14);for(let t of[-2.32,0,2.32])k(e,T.wood,t,1.73,1.92,.16,2.7,.16);for(let t of[-1.8,0,1.8])k(e,T.wood,-2.38,1.73,t,.14,2.7,.16);for(let t of[-1.8,0,1.8])k(e,T.wood,2.38,1.73,t,.14,2.7,.16);for(let t of[.77,2.65])k(e,T.wood,0,t,1.93,4.8,.14,.16),k(e,T.wood,-2.4,t,0,.14,.14,3.7),k(e,T.wood,2.4,t,0,.14,.14,3.7),k(e,T.wood,0,t,-1.92,4.8,.14,.16);let t=new x;t.setAttribute(`position`,new b([-2.7,2.85,-2.2,0,4.6,-2.2,2.7,2.85,-2.2,-2.7,2.85,2.2,2.7,2.85,2.2,0,4.6,2.2],3)),t.setIndex([0,1,2,3,4,5,0,3,5,0,5,1,1,5,4,1,4,2]),t.computeVertexNormals(),O(e,t,E(T.roof,{userData:{surface:`roof`}}),0,0,0);let n=Math.atan2(1.75,2.7);for(let t of[-1,1])for(let r=0;r<7;r++)for(let i=0;i<11;i++){let a=t*(.19+r*.39),o=4.6-Math.abs(a)*1.75/2.7+.06,s=-2.08+i*.4+r%2*.07,c=k(e,[12017990,12544845,11360319,12875088][(r*5+i*3)%4],a,o,s,.48,.075,.38,{userData:{surface:`roof`}});c.rotation.z=-t*n}for(let t=-2.15;t<2.25;t+=.32)k(e,13732953,0,4.65,t,.29,.18,.29);k(e,5258797,.15,1.18,2.03,.9,1.8,.13);for(let t=-.2;t<.6;t+=.14)k(e,9790519,t,1.2,2.12,.12,1.64,.04);O(e,D.ball,E(14989134),.42,1.08,2.19,.055,.055,.055);let r=[];for(let t of[-1.4,1.47]){k(e,5852214,t,1.73,1.99,1.04,1.12,.12);let n=k(e,16764787,t,1.73,2.065,.83,.91,.08,{emissive:16753725,emissiveIntensity:.3,roughness:.4});r.push(n.material),k(e,6638641,t,1.73,2.13,.06,1,.07),k(e,6638641,t,1.73,2.13,.91,.06,.07);for(let n of[-.58,.58])k(e,5993810,t+n,1.73,2.02,.19,1.05,.13);k(e,8412216,t,1.1,2.16,1.22,.24,.36);for(let n=0;n<7;n++){let r=t-.47+n*.16;A(e,[r,1.2,2.16],[r,1.43+n%2*.13,2.16],.023,4549174),O(e,D.ball,E(n%2?14064283:15190381),r,1.43+n%2*.13,2.16,.09,.065,.08)}}for(let t=0;t<3;t++)k(e,12103308,.15,.1+t*.1,2.75-t*.28,1.6,.2,.35);for(let t of[-.85,.85])k(e,5852214,2.43,1.7,t,.12,1.03,.85),k(e,15124599,2.5,1.7,t,.06,.84,.66,{emissive:16753725,emissiveIntensity:.25}),k(e,6638641,2.55,1.7,t,.06,.95,.055),k(e,6638641,2.55,1.7,t,.06,.055,.76),k(e,8622941,2.47,1.7,t-.53,.13,.99,.2),k(e,8622941,2.47,1.7,t+.53,.13,.99,.2),k(e,10320459,2.55,1.12,t,.25,.16,1.05);for(let t of[-2.32,0,2.32])k(e,T.wood,t,1.7,-1.94,.16,2.7,.16);k(e,9606274,-1.3,4.1,-.7,.55,2,.62);for(let t=3.3;t<5.2;t+=.25)k(e,11974042,-1.3,t,-.7,.59,.07,.66);k(e,5721406,-1.3,5.16,-.7,.71,.16,.78),k(e,7361594,-3.05,.95,-.3,1.25,1.7,2.5);let i=k(e,10245180,-3.04,1.95,-.3,1.6,.13,2.9);i.rotation.z=.17;for(let t=-1.2;t<.9;t+=.34)for(let n=.4;n<1.5;n+=.29){let r=O(e,D.cylinder,E(9859657),-3.71,n,t,.14,.62,.14);r.rotation.z=Math.PI/2,O(e,D.cylinder,E(13741687),-4.03,n,t,.12,.02,.12).rotation.z=Math.PI/2}return{group:e,windows:r}}function Ue(e=1,t=`oak`){let n=Re(e),r=new S,i=new S,a=new S;r.add(a,i);let o=t===`birch`?4.8:3.9;A(a,[0,0,0],[.08,o*.75,0],t===`birch`?.13:.22,t===`birch`?14013879:7690560);for(let e=0;e<5;e++){let t=e*2.4,r=.6+n()*.5,i=o*.45+n()*.6;A(a,[.05,i,0],[Math.cos(t)*r,i+1.1,Math.sin(t)*r],.07,8479560)}if(t===`birch`)for(let e=.5;e<3.4;e+=.43)k(a,7239530,.02,e,.135,.23,.075,.035);let s=t===`amber`?[10265419,13151311,14728807,9146686]:t===`birch`?[7575889,10335833,11913334,6194502]:[4159825,5936213,8038487,4618823];for(let e=0;e<7;e++){let t=e*2.4,n=e===0?0:.9,r=o+.45+(e===0?.45:Math.sin(e)*.25);O(i,D.ball,E(s[e%4]),Math.cos(t)*n,r,Math.sin(t)*n,.85,.58,.8)}let c=new f(1,1),l=Ve(t);for(let e=0;e<85;e++){let e=n()*Math.PI*2,r=Math.sqrt(n())*(t===`birch`?1.6:2.05),a=o+.75-r*.28+n()*.65;O(i,c,l,Math.cos(e)*r,a,Math.sin(e)*r,.65+n()*.65,.6+n()*.6,1).rotation.set(-.35+n()*.5,e,(n()-.5)*.6)}let u=j(i);u.traverse(e=>{e.isMesh&&(e.material=e.material.clone())}),r.remove(i),r.add(u);let d=j(a);return r.remove(a),r.add(d),{group:r,canopy:u,phase:e*.9}}function We(e=4){let t=new S;for(let n=0;n<=e;n+=.85)k(t,12231022,n,.55,0,.12,1.1,.13),O(t,D.cone,E(14138759),n,1.15,0,.1,.14,.1);for(let n of[.35,.8])k(t,10323032,e/2,n,0,e,.09,.09);return t}function Ge(){let e=new S;for(let t=-2.25;t<=2.25;t+=.24){let n=.25+.25*Math.cos(t/2.5*Math.PI/2);k(e,11897945,t,n,0,.22,.15,2.05)}for(let t of[-1,1]){for(let n of[-2.2,0,2.2])k(e,8413759,n,.88,t,.16,1.35,.16),k(e,13809280,n,1.57,t,.21,.13,.21);A(e,[-2.2,1.28,t],[0,1.48,t],.06,12886384),A(e,[0,1.48,t],[2.2,1.28,t],.06,12886384)}return e}function Ke(){let e=new S;k(e,6637110,0,.06,0,3.8,.13,2.5);for(let t of[-1.3,1.3])k(e,10849115,0,.16,t,4,.2,.12);for(let t of[-2,2])k(e,10849115,t,.16,0,.12,.2,2.65);for(let t=-1.6;t<=1.7;t+=.65)for(let n=-.8;n<=.9;n+=.75){O(e,D.ball,E(8673345),t,.14,n,.27,.07,.25),A(e,[t,.16,n],[t,.55,n],.026,5471035);for(let r=0;r<3;r++){let i=r*2.1,a=O(e,D.ball,E(8364109),t+Math.cos(i)*.12,.36+r*.05,n+Math.sin(i)*.12,.17,.045,.09);a.rotation.z=.3}O(e,D.ball,E(13741647),t,.56,n,.11,.13,.1)}return e}function qe(){let e=new S;return k(e,5130550,0,1.15,0,.1,2.3,.1),A(e,[0,2.2,0],[.45,2.2,0],.035,5130550),k(e,7492403,.45,1.88,0,.27,.4,.27),k(e,16765316,.45,1.89,0,.22,.27,.22,{emissive:16754750,emissiveIntensity:.8}),O(e,D.cone,E(5130550),.45,2.15,0,.24,.2,.24),e}var M=e=>5+Math.sin(e*.3)*.65,Je=3.25,Ye=[[-10,-7,1,`oak`],[-10.7,-2,.9,`birch`],[-11,3,.8,`oak`],[-9,7.3,.75,`amber`],[-5.6,8.3,.65,`birch`],[-.4,-8.2,1.1,`oak`],[2,-6.7,.83,`birch`],[-1,7.8,.7,`oak`],[10.1,-7.2,1.1,`oak`],[11,-2,.8,`birch`],[10.8,4.9,.83,`amber`],[7.8,8,.65,`birch`]];for(let e=0;e<8;e++)for(let t=0;t<9;t++){let n=-35+t*8+Math.sin(e*9+t)*2,r=-35+e*9+Math.cos(t*7+e)*2;Math.abs(n)<14&&Math.abs(r)<12||Math.abs(n-M(r))<3.5||Ye.push([n,r,.8+(e*3+t*7)%7*.09,(e+t)%5==0?`amber`:(e+t)%3==0?`birch`:`oak`])}var Xe=[{x:-5.5,z:-4.5,w:7,h:4.7},{x:-5,z:3.5,w:4.25,h:2.8}];function Ze(e,t){return!(Math.abs(e)>23||Math.abs(t)>24||Math.abs(e-M(t))<1.745&&Math.abs(t)>.83||Xe.some(n=>Math.abs(e-n.x)<n.w/2+.2&&Math.abs(t-n.z)<n.h/2+.2)||Ye.some(([n,r])=>Math.hypot(n-e,r-t)<.55))}function Qe(e,t){let n=Math.abs(e-5);return Math.abs(t)<1.05&&n<2.4?.33+.25*Math.cos(n/2.5*Math.PI/2):.08}function $e(){let e=Re(83),t=new S;for(let n of[-1,1]){let r=[],i=[],a=[],o=new pe(T.grass),s=new pe(T.grassLight);for(let t=0;t<=120;t++)for(let c=0;c<=30;c++){let l=-65+t*130/120,u=M(l)+n*Je/2,d=n<0?-65+(u+65)*c/30:u+(65-u)*c/30;r.push(d,0,l);let f=o.clone().lerp(s,e()*.18);if(i.push(f.r,f.g,f.b),t<120&&c<30){let e=t*31+c;a.push(e,e+31,e+1,e+1,e+31,e+32)}}let c=new x;c.setAttribute(`position`,new b(r,3)),c.setAttribute(`color`,new b(i,3)),c.setIndex(a),c.computeVertexNormals();let l=new C(c,E(16777215,{vertexColors:!0,userData:{surface:`grass`}}));l.receiveShadow=!0,t.add(l)}k(t,4545355,5,-.4,0,5.5,.14,130);for(let n=0;n<65;n++)for(let r of[-1,1]){let i=-9.9+n*.31,a=M(i)+r*(Je/2+.08);O(t,D.rock,E([8489584,9608061,10987656,6585186][n%4]),a,-.03,i,.25+e()*.12,.18+e()*.11,.23).rotation.set(e(),e(),e()),n%3==0&&O(t,D.ball,E(5406016),a+r*.13,.14,i,.22,.1,.23)}let n=new oe([new l(-4.8,.035,-1.9),new l(-3.9,.035,.2),new l(-1,.035,2.4),new l(1.2,.035,1.2),new l(3.1,.035,0),new l(7.4,.035,0),new l(10,.035,1.6)]).getPoints(85);for(let r=0;r<n.length;r++){let i=n[r];if(Math.abs(i.x-M(i.z))<2.1)continue;let a=O(t,D.cylinder,E([12428661,13350280,11904124,14008983][r%4]),i.x+(e()-.5)*.25,.04,i.z,.8,.09,.59);a.rotation.y=e()*2}for(let e=0;e<24;e++){let n=2.4+e*.3,r=-1+Math.sin(e*.19)*.4;O(t,D.cylinder,E(e%2?13021572:12034169),r,.04,n,.72,.08,.38).rotation.y=e}for(let n=0;n<70;n++){let r=e()*20-10,i=M(r)+(e()-.5)*2.5;O(t,D.rock,E(n%2?5537395:8167047),i,-.29,r,.12+e()*.2,.07,.12+e()*.2)}let r=j(t),i=new x;i.setAttribute(`position`,new b([-.04,0,0,.04,0,0,0,.3,0],3)),i.computeVertexNormals();let a=E(16777215,{side:2}),o={value:0},s={value:0};a.onBeforeCompile=e=>{e.uniforms.uWind=o,e.uniforms.uTime=s,e.vertexShader=`uniform float uWind; uniform float uTime;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
 transformed.x += pow(position.y,2.) * sin(uTime*1.8+instanceMatrix[3].x*1.2+instanceMatrix[3].z)*uWind;`)};let c=new ee(i,a,3600),u=new fe,d=0;for(let t=0;t<16e3&&d<3600;t++){let r=t%3!=0,i=e()*(r?28:58)-(r?14:29),a=e()*(r?24:58)-(r?12:29);Math.sin(i*.8)*Math.cos(a*.7)<-.45||Math.abs(i-M(a))<2||Xe.some(e=>Math.abs(i-e.x)<e.w/2+.3&&Math.abs(a-e.z)<e.h/2+.3)||n.some(e=>Math.hypot(e.x-i,e.z-a)<.85)||Math.abs(i+1)<.85&&a>2.2||(u.position.set(i,.015,a),u.rotation.y=e()*Math.PI,u.scale.setScalar(.6+e()*.9),u.updateMatrix(),c.setMatrixAt(d,u.matrix),c.setColorAt(d,new pe().setHSL(.19+e()*.04,.38,.33+e()*.16)),d++)}c.count=d,c.receiveShadow=!0;let f=new S;for(let t=0;t<30;t++){let n=-23+e()*46,r=-23+e()*46;if(!(Math.abs(n-M(r))<2.2))for(let i=0;i<13;i++){let i=n+(e()-.5)*1.8,a=r+(e()-.5)*1.5,o=.14+e()*.16;O(f,D.cylinder,E(6061116),i,o/2,a,.018,o,.018),O(f,D.rock,E(t%3==0?11706820:t%3==1?15259286:15853503),i,o,a,.085,.045,.075)}}return{group:r,grass:c,flowers:j(f),wind:o,time:s}}function et(){let e={time:{value:0},wind:{value:1},ripple:{value:new l(5,0,-100)}},t=[],n=[],i=[];for(let e=0;e<=360;e++)for(let r=0;r<=20;r++){let a=-65+e*130/360;if(t.push(M(a)+(r/20-.5)*Je,-.16,a),n.push(r/20,e/360),e<360&&r<20){let t=e*21+r;i.push(t,t+21,t+1,t+1,t+21,t+22)}}let a=new x;a.setAttribute(`position`,new b(t,3)),a.setAttribute(`uv`,new b(n,2)),a.setIndex(i),a.computeVertexNormals();let o=new r({color:3776156,roughness:.22,metalness:.24,transparent:!0,opacity:.85,side:2});o.onBeforeCompile=t=>{t.uniforms.uTime=e.time,t.uniforms.uWind=e.wind,t.uniforms.uRipple=e.ripple,t.vertexShader=`uniform float uTime;uniform float uWind;uniform vec3 uRipple;varying vec3 vWater;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
   float age=max(0.,uTime-uRipple.z);float d=distance(position.xz,uRipple.xy);
   float ring=sin(d*11.-age*6.)*exp(-d*.65-age*.9)*step(age,5.);
   transformed.y += (sin(position.z*4.-uTime*1.9)*.025+sin(position.x*6.+uTime*1.2)*.018+ring*.10)*uWind;
   vWater=transformed;`),t.fragmentShader=`uniform float uTime;uniform float uWind;uniform vec3 uRipple;varying vec3 vWater;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
   float p=sin(vWater.x*15.+sin(vWater.z*9.-uTime*1.4))*sin(vWater.z*13.-uTime*2.);
   float caustic=pow(max(0.,p),7.);
   float edge=pow(abs(vUv.x-.5)*2.,12.);
   float age=max(0.,uTime-uRipple.z);float d=distance(vWater.xz,uRipple.xy);
   float ring=pow(max(0.,sin(d*11.-age*6.)),12.)*exp(-age*.9-d*.3)*step(age,5.);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.6,.87,.76),clamp(caustic*.23+edge*.32+ring*.3,0.,.75));`),t.fragmentShader=t.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
   normal=normalize(normal+vec3(sin(vWater.z*4.-uTime*1.9)*.12,0.,cos(vWater.x*6.+uTime)*.1)*uWind);`)},o.defines={USE_UV:``};let s=new C(a,o);s.receiveShadow=!0,s.name=`interactive-stream`;let c=new f(2.5,.95,18,12),u=new _({transparent:!0,side:2,uniforms:{uTime:e.time},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`precision mediump float;varying vec2 vUv;uniform float uTime;void main(){float streak=sin(vUv.x*76.+sin(vUv.y*13.+uTime*3.));float f=pow(max(0.,streak),4.);vec3 c=mix(vec3(.14,.46,.47),vec3(.72,.92,.84),f*.65+vUv.y*.14);gl_FragColor=vec4(c,.7);}`}),d=new C(c,u);return d.position.set(M(64),-.62,64),{mesh:s,waterfall:d,uniforms:e}}var tt=new l(6.7,8.4,10.8);function nt(e,t,n,r,i=!1){let a=new l(n.x,n.y+.9,n.z),o=i?1:1-Math.exp(-5*r),s=a.sub(t.target).multiplyScalar(o);e.position.add(s),t.target.add(s)}function rt(e,t,n){t.target.set(n.x,n.y+.9,n.z),e.position.copy(t.target).add(tt),t.update()}function it(e){let t=new S;for(let n of[...e.children])t.add(n);e.add(j(t))}function at(){let e=new S,t=new S,n=Re(921),r=new S;r.position.set(3.55,.93,-3.6);for(let e of[-.33,.33]){let t=new C(new o(1.1,.065,5,28),E(6181180));t.rotation.y=Math.PI/2,t.position.x=e,r.add(t);for(let t=0;t<8;t++){let n=t*Math.PI/4;A(r,[e,0,0],[e,Math.cos(n)*1.08,Math.sin(n)*1.08],.045,11703136)}}for(let e=0;e<12;e++){let t=e*Math.PI/6,n=k(r,10057035,0,Math.cos(t)*1.03,Math.sin(t)*1.03,.8,.23,.1);n.rotation.x=t}A(t,[2.1,.96,-3.6],[4.2,.96,-3.6],.09,6443840);for(let e of[2.15,4.12])k(t,8548946,e,.45,-3.6,.24,1.25,.38);it(r),e.add(r);for(let[e,r]of[[-7,5.4],[-8.5,-1.2],[9,2.4],[.4,-6]])for(let i=0;i<5;i++){let a=e+n()*.8,o=r+n()*.7,s=.12+n()*.12;O(t,D.cylinder,E(13220749),a,s/2,o,.025,s,.025),O(t,D.ball,E(i%2?12480847:13212256),a,s,o,.11,.045,.1)}A(t,[-7.4,.1,2],[-7.1,1.5,2],.035,12625015),k(t,7239781,-7.4,.13,2,.3,.27,.07),O(t,D.cylinder,E(9860424),-3.1,.17,4.7,.36,.3,.3);for(let e=0;e<5;e++)O(t,D.ball,E(e%2?12684104:14393941),-3.3+e%3*.18,.3+Math.floor(e/3)*.12,4.7,.13,.12,.13);for(let e=0;e<30;e++){let r=-2+n()*5,i=2+n()*5;Math.abs(r+1)<.8||(A(t,[r,0,i],[r,.25,i],.012,5731137),O(t,D.rock,E(e%3==0?12295623:14928250),r,.27,i,.07,.04,.07))}e.add(j(t));let i=new S;for(let e of[-8,-3.7])A(i,[e,0,-8],[e,2,-8],.055,9400395);A(i,[-8,1.95,-8],[-3.7,1.95,-8],.012,13614994),e.add(j(i));let a=[];for(let t=0;t<4;t++){let n=new f(.65,.8,5,7);n.translate(0,-.4,0);let r=new C(n,E([13481354,8560019,10973535,14273968][t],{side:2}));r.position.set(-7.35+t*.93,1.9,-8),r.castShadow=!0,e.add(r),a.push({mesh:r,base:n.attributes.position.array.slice()});for(let t of[-.23,.23])k(e,9073226,r.position.x+t,1.94,-8,.045,.1,.05)}let s=new f(.55,.85,5,7);s.translate(0,-.425,0);let c=new C(s,E(11897687,{side:2}));c.position.set(1.85,2.22,2),e.add(c),A(e,[1.5,0,2],[1.5,2.3,2],.045,7627076),A(e,[1.5,2.25,2],[2.2,2.25,2],.035,7627076),a.push({mesh:c,base:s.attributes.position.array.slice()});let l=[];for(let t=0;t<3;t++){let n=new S,r=new S;O(n,D.ball,E(t===1?10976849:14866612),0,.28,0,.22,.23,.3),r.position.set(0,.4,.2),n.add(r),O(r,D.ball,E(15260343),0,.05,.025,.13,.15,.13),O(r,D.cone,E(12478032),0,.22,0,.07,.13,.07),O(r,D.cone,E(13476432),0,.02,.17,.06,.12,.05).rotation.x=Math.PI/2;for(let e of[-.08,.08])O(r,D.ball,E(3423020),e,.08,.105,.017,.02,.016),A(n,[e,.04,0],[e,.15,0],.018,13082712);O(n,D.cone,E(10722684),0,.43,-.23,.16,.3,.1).rotation.x=-.7,n.remove(r),it(n),it(r),n.add(r),e.add(n),l.push({root:n,head:r,phase:t*2.1})}let u=[];for(let t=0;t<5;t++){let n=new S,r=[];O(n,D.ball,E(6180923),0,0,0,.018,.018,.08);for(let e of[-1,1]){let i=new S;n.add(i),O(i,D.ball,E(t%2?14925417:12693711),e*.095,0,0,.11,.015,.09),r.push(i)}e.add(n),u.push({body:n,wings:r,phase:t*1.7})}let d=new f(.14,.08),p=new ee(d,E(12363353,{side:2}),42),m=Array.from({length:42},()=>({x:n()*28-14,z:n()*24-12,phase:n()*8})),h=new fe;e.add(p);let g=new ee(D.rock,new te({color:13021579,transparent:!0,opacity:.28,depthWrite:!1}),12);e.add(g);let _=new Set([r,p,g,...a.map(e=>e.mesh),...l.map(e=>e.root),...u.map(e=>e.body)]),ne=new S;for(let t of[...e.children])_.has(t)||ne.add(t);e.add(j(ne));let v=Array.from({length:12},()=>({age:2,x:0,z:0})),re=0,ie=0,y=0;function ae(e,t,n,i,o,s){if(i&&(r.rotation.x+=t*.45,y+=t),a.forEach(({mesh:t,base:r},i)=>{let a=t.geometry.attributes.position;for(let t=0;t<a.count;t++){let o=-r[t*3+1];a.setZ(t,r[t*3+2]+Math.sin(e*2+r[t*3]*3+i)*o*.17*n)}a.needsUpdate=!0,t.geometry.computeVertexNormals()}),l.forEach(({root:e,head:t,phase:n})=>{let r=y*.3+n;e.position.set(-4.3+Math.sin(r)*1.7,.03,-.1+5.9+Math.sin(r*.7)*.75),e.rotation.y=Math.atan2(Math.cos(r)*1.7,Math.cos(r*.7)*.525);let i=Math.max(0,Math.sin(y*2.7+n))*.75;t.rotation.x=i,e.position.y+=Math.abs(Math.sin(y*7+n))*.025}),u.forEach(({body:e,wings:t,phase:n},r)=>{let i=y;e.position.set((r<4?-5:8)+Math.sin(i*.45+n)*1.6,.7+Math.sin(i*.9+n)*.35,(r<4?3.5:1)+Math.cos(i*.37+n)*1.3),e.rotation.y=i*.35+n,t.forEach((e,t)=>e.rotation.z=Math.sin(i*16+n)*.85*(t?1:-1))}),p.visible=i,m.forEach((t,n)=>{let r=(e*.3+t.phase)%5;h.position.set(t.x+Math.sin(e*.6+t.phase)*1.2,5-r,t.z+r*.4),h.rotation.set(e+n,e*.6+n,Math.sin(e+n)),h.scale.setScalar(.8),h.updateMatrix(),p.setMatrixAt(n,h.matrix)}),p.instanceMatrix.needsUpdate=!0,re+=t,s&&re>.18){re=0;let e=v[ie++%12];e.age=0,e.x=o.x,e.z=o.z}v.forEach((e,n)=>{e.age+=t,h.position.set(e.x,.07+e.age*.12,e.z),h.scale.setScalar(e.age<.8?.09*(1-e.age/.8):0),h.rotation.set(0,n,0),h.updateMatrix(),g.setMatrixAt(n,h.matrix)}),g.instanceMatrix.needsUpdate=!0}return{root:e,update:ae}}var N=e=>document.querySelector(e),P=N(`#world`),F=Re(519),ot=matchMedia(`(prefers-reduced-motion: reduce)`).matches,I=0,L=0,R=0,z=ot?0:.65,B=!ot,st=0,ct=0,V=new Set,H=new s;H.background=new pe(3428168),H.fog=new ie(7968903,24,62);var U;try{U=new ue({antialias:!1,powerPreference:`high-performance`})}catch{throw N(`#loading`).textContent=`This graphics study needs WebGL 2. Try a supported browser with graphics acceleration enabled.`,Error(`WebGL unavailable`)}U.setPixelRatio(1),U.shadowMap.enabled=!0,U.shadowMap.autoUpdate=!1,U.shadowMap.type=1,U.outputColorSpace=t,U.toneMapping=4,U.toneMappingExposure=1.05,U.info.autoReset=!1,U.domElement.tabIndex=0,U.domElement.setAttribute(`aria-label`,`Modular farm world. WASD to walk, drag to orbit, scroll to zoom, Space for a gust of wind.`),P.appendChild(U.domElement);var W=new de(43,1,.15,130);W.position.copy(tt).add(new l(-.8,1,4.8));var G=new ye(W,U.domElement);G.target.set(-.8,1,4.8),G.enableDamping=!0,G.dampingFactor=.08,G.enablePan=!1,G.minPolarAngle=.5,G.maxPolarAngle=1.13,G.minDistance=9,G.maxDistance=19,G.rotateSpeed=.45,G.update();var lt=new Me(U),ut=new Ne(2,H,W,{normalEdgeStrength:.08,depthEdgeStrength:.12});lt.addPass(ut);var dt=new Fe;lt.addPass(dt);var ft=new ae(15002567,5072462,2);H.add(ft);var K=new le(16766624,3.5);K.position.set(-13,22,6),K.castShadow=!0,K.shadow.mapSize.set(1024,1024),Object.assign(K.shadow.camera,{left:-20,right:20,top:18,bottom:-18,near:1,far:65}),K.shadow.normalBias=.035,K.shadow.bias=-15e-5,K.target.position.set(0,0,0),H.add(K,K.target);var pt=new le(9218777,0);pt.position.set(14,15,-11),H.add(pt);var q=$e();H.add(q.group,q.grass,q.flowers);var J=et();H.add(J.mesh,J.waterfall);var mt=new C(new f(180,180),E(3496529,{roughness:.92}));mt.rotation.x=-Math.PI/2,mt.position.y=-1.18,mt.receiveShadow=!0,H.add(mt);var Y=new S,ht=He();ht.group.position.set(-5,0,-4.5),Y.add(ht.group);var gt=Ge();gt.position.set(5,0,0),Y.add(gt);var _t=Ke();_t.position.set(-5,0,3.5),Y.add(_t);for(let[e,t,n,r]of[[-8,1,3.4,0],[-8,1,4.2,Math.PI/2],[-7,5.4,4.2,0],[-9,-8,7,0],[8,-4,3.4,0]]){let i=We(n);i.position.set(e,0,t),i.rotation.y=r,Y.add(i)}var vt=[];for(let[e,t]of[[1.8,1.5],[-2.8,-1.2],[8.1,-1.4]]){let n=qe();n.position.set(e,0,t),Y.add(n);let r=new p(16759648,0,5,2);r.position.set(e+.45,1.9,t),H.add(r),vt.push(r)}for(let e of[-6.4,-3.53]){let t=new p(16757846,0,5,2);t.position.set(e,1.7,-2.2),H.add(t),vt.push(t)}for(let e=0;e<12;e++){let t=e*Math.PI/6;k(Y,e%2?9213312:11054481,-9+Math.cos(t)*.6,.36,-.1+Math.sin(t)*.6,.32,.65,.3)}for(let e of[-9.7,-8.3])k(Y,8610878,e,1.1,-.1,.12,2.2,.12);k(Y,11694157,-9,2.17,-.1,1.8,.15,1.45).rotation.z=.12,O(Y,D.cylinder,E(9990723),-1.4,.45,-4,.43,.9,.43);for(let e of[.17,.7])O(Y,D.cylinder,E(6251861),-1.4,e,-4,.445,.09,.445);for(let e=0;e<18;e++){let t=-12+F()*24,n=-9+F()*18;if(Math.abs(t-M(n))<2.1||Math.abs(t)<2&&n>0)continue;let r=O(Y,D.rock,E(e%2?8096624:9017210),t,.16,n,.3+F()*.3,.25,.4);r.rotation.y=F()*3}k(Y,10385227,-2.1,.25,-2.3,.6,.5,.7);for(let e=0;e<4;e++)k(Y,12687452,-2.1,.12+e*.12,-1.94,.65,.055,.055);H.add(j(Y));var yt=[],bt=new S;Ye.forEach(([e,t,n,r],i)=>{let a=Ue(i+13,r);a.group.position.set(e,0,t),a.group.scale.setScalar(n),Math.abs(e)>22||Math.abs(t)>23?bt.add(a.group):(H.add(a.group),yt.push(a))}),H.add(j(bt));var X;try{X=await be(),P.dataset.characterSource=`blender-glb`}catch(e){throw N(`#loading`).textContent=`The fox could not load. Refresh to try again.`,e}X.root.position.set(-.8,Qe(-.8,4.8),4.8),H.add(X.root);var xt=at();H.add(xt.root),rt(W,G,X.root.position);var Z=new p(16761715,0,6,2);Z.castShadow=!1,Z.shadow.mapSize.set(256,256),Z.shadow.normalBias=.04,H.add(Z);var St=new x,Ct=new Float32Array(96);for(let e=0;e<32;e++)Ct[e*3]=-11+F()*22,Ct[e*3+1]=.6+F()*3,Ct[e*3+2]=-8+F()*16;St.setAttribute(`position`,new ge(Ct,3));var wt=new h(St,new a({color:16768396,size:.055,transparent:!0,opacity:.5,depthWrite:!1}));H.add(wt);var Tt=new S;for(let e=0;e<5;e++){let e=new C(D.ball,new te({color:13882297,transparent:!0,opacity:.1,depthWrite:!1}));Tt.add(e)}H.add(Tt);var Et=[],Dt=new g,Ot=new ve,kt,At=[],Q=(e,t,n,r)=>{e.addEventListener(t,n,r),At.push(()=>e.removeEventListener(t,n,r))};function $(){U.domElement.focus({preventScroll:!0})}Q(U.domElement,`pointerdown`,e=>{kt=[e.clientX,e.clientY],$()}),Q(U.domElement,`pointerup`,e=>{if(!kt||Math.hypot(e.clientX-kt[0],e.clientY-kt[1])>7)return;let t=U.domElement.getBoundingClientRect();Ot.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),Dt.setFromCamera(Ot,W);let n=Dt.intersectObject(J.mesh)[0];if(n){J.uniforms.ripple.value.set(n.point.x,n.point.z,I);for(let e=0;e<3;e++){let t=new C(new we(.12,.15,48),new te({color:13168354,transparent:!0,opacity:.5,depthWrite:!1,side:2}));t.rotation.x=-Math.PI/2,t.position.set(n.point.x,-.1,n.point.z),H.add(t),Et.push({mesh:t,age:-e*.2})}N(`#hint`).textContent=`A ripple in the current.`}});function jt(){R=1-R,N(`#light`).textContent=R?`☾ Moonlit`:`☀ Golden hour`,N(`#light`).ariaPressed=String(!!R),$()}function Mt(){st=I+4,N(`#hint`).textContent=`A gust rolls through the canopy.`,$()}function Nt(){X.root.position.set(-.8,Qe(-.8,4.8),4.8),X.root.rotation.set(0,0,0),rt(W,G,X.root.position),V.clear(),N(`#hint`).textContent=`Follow the stream. Take the little bridge.`,$()}Q(N(`#light`),`click`,jt),Q(N(`#gust`),`click`,Mt),Q(N(`#reset`),`click`,Nt),Q(N(`#motion`),`click`,()=>{B=!B,N(`#motion`).textContent=B?`Breeze on`:`Breeze off`,N(`#motion`).ariaPressed=String(B),$()}),Q(N(`#pixels`),`click`,()=>{let e=ut.pixelSize===1;ut.setPixelSize(e?2:1),N(`#pixels`).textContent=e?`Pixel view`:`Fine view`,N(`#pixels`).ariaPressed=String(e),$()});var Pt={KeyW:`up`,ArrowUp:`up`,KeyS:`down`,ArrowDown:`down`,KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`};Q(window,`keydown`,e=>{[`BODY`,`CANVAS`].includes(document.activeElement?.tagName)&&(Pt[e.code]&&(V.add(Pt[e.code]),e.preventDefault()),(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&V.add(`run`),e.code===`Space`&&(e.preventDefault(),e.repeat||Mt()),e.code===`KeyL`&&!e.repeat&&jt(),e.code===`KeyR`&&!e.repeat&&Nt())}),Q(window,`keyup`,e=>{Pt[e.code]&&V.delete(Pt[e.code]),(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&V.delete(`run`)}),Q(window,`blur`,()=>V.clear()),Q(document,`visibilitychange`,()=>{V.clear(),ct=0}),document.querySelectorAll(`[data-dir]`).forEach(e=>{Q(e,`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),V.add(e.dataset.dir)});for(let t of[`pointerup`,`pointercancel`,`lostpointercapture`])Q(e,t,()=>V.delete(e.dataset.dir))});function Ft(){let e=P.clientWidth,t=P.clientHeight;W.aspect=e/t,W.updateProjectionMatrix(),U.setSize(e,t,!1),lt.setSize(e,t)}new ResizeObserver(Ft).observe(P),Ft();var It=new l,Lt=new l,Rt=new l(0,1,0),zt=new l,Bt=0;function Vt(e){requestAnimationFrame(Vt);let t=ct?Math.min((e-ct)/1e3,.04):0;if(ct=e,document.hidden)return;I+=t;let r=B?I<st?2.5:.65:0;z=n.lerp(z,r,Math.min(1,t*2.8)),L=n.lerp(L,R,Math.min(1,t*1.5)),ft.intensity=1.1-L*.6,K.intensity=2.5*(1-L),K.position.set(X.root.position.x-13+L*17,22-L*14,X.root.position.z+6-L*20),K.target.position.copy(X.root.position),pt.intensity=L*.75,K.castShadow=L<.9,Z.castShadow=L>.9,Z.intensity=L*3.5,Z.position.copy(X.root.position).add(new l(.25,1,.2)),vt.forEach(e=>e.intensity=L*5),ht.windows.forEach(e=>e.emissiveIntensity=.3+L*1.8),H.background.setRGB(.31-L*.28,.4-L*.35,.32-L*.24),H.fog.color.copy(H.background),U.toneMappingExposure=1.05,yt.forEach((e,t)=>{e.canopy.rotation.z=Math.sin(I*.9+e.phase)*.025*z,e.canopy.rotation.x=Math.cos(I*.67+e.phase)*.018*z,e.canopy.position.x=Math.sin(I*1.1+e.phase)*.035*z}),q.wind.value=z,q.time.value=I,J.uniforms.time.value=B?I:J.uniforms.time.value,J.uniforms.wind.value=+!!B;let i=Number(V.has(`right`))-Number(V.has(`left`)),a=Number(V.has(`up`))-Number(V.has(`down`)),o=i||a,s=X.root.position.x,c=X.root.position.z;if(o){It.copy(G.target).sub(W.position).setY(0).normalize(),Lt.crossVectors(It,Rt).normalize(),zt.copy(It).multiplyScalar(a).addScaledVector(Lt,i).normalize();let e=(V.has(`run`)?2.6:1.3)*t,n=X.root.position.x,r=X.root.position.z,o=n+zt.x*e,s=r+zt.z*e;Ze(o,r)&&(X.root.position.x=o),Ze(X.root.position.x,s)&&(X.root.position.z=s),X.faceDirection(zt,t)}X.root.position.y=Qe(X.root.position.x,X.root.position.z);let u=Math.hypot(X.root.position.x-s,X.root.position.z-c);X.animator.update(t,t?u/t:0,V.has(`run`)),xt.update(I,t,z,B,X.root.position,Math.hypot(X.root.position.x-s,X.root.position.z-c)>.002),wt.visible=B;let d=St.attributes.position;for(let e=0;e<32;e++)d.array[e*3+1]+=Math.sin(I*.8+e)*.08*t,d.array[e*3]+=Math.cos(I*.5+e)*.04*t;d.needsUpdate=!0,wt.material.opacity=.15+L*.65,Tt.visible=B,Tt.children.forEach((e,t)=>{let n=(I*.19+t*.2)%1;e.position.set(-6.3+n*.6,5.15+n*2,-5.2+Math.sin(n*3)*.13),e.scale.setScalar(.15+n*.4),e.material.opacity=(1-n)*.13});for(let e=Et.length-1;e>=0;e--){let n=Et[e];n.age+=t,n.mesh.visible=n.age>0,n.mesh.scale.setScalar(1+Math.max(0,n.age)*7),n.mesh.material.opacity=Math.max(0,.45-n.age*.25),n.age>1.8&&(H.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),Et.splice(e,1))}nt(W,G,X.root.position,t);let f=W.position.clone().sub(X.root.position),p=f.length();f.normalize(),yt.forEach(e=>{let r=e.group.position.clone().add(new l(0,4*e.group.scale.x,0)).sub(X.root.position),i=r.dot(f),a=r.addScaledVector(f,-i).length()<2.7*e.group.scale.x&&i>1&&i<p?.25:1;e.canopy.traverse(e=>{e.isMesh&&(e.material.opacity=n.lerp(e.material.opacity,a,Math.min(1,t*8)),e.material.map&&(e.material.alphaTest=.5*e.material.opacity),e.material.transparent=e.material.opacity<.99,e.material.depthWrite=!e.material.transparent,e.castShadow=a===1)})}),G.update(),U.info.reset(),U.shadowMap.needsUpdate=!0,lt.render(),Bt+=t,Bt>1&&(Bt=0,P.dataset.characterClip=X.animator.clip,P.dataset.drawCalls=U.info.render.calls,P.dataset.triangles=U.info.render.triangles,P.dataset.playerX=X.root.position.x.toFixed(2),P.dataset.playerZ=X.root.position.z.toFixed(2),P.dataset.cameraX=W.position.x.toFixed(2),P.dataset.cameraZ=W.position.z.toFixed(2),P.dataset.targetX=G.target.x.toFixed(2),P.dataset.targetZ=G.target.z.toFixed(2),N(`#location`).textContent=Math.abs(X.root.position.x-5)<2.5&&Math.abs(X.root.position.z)<1?`WILLOWBROOK CROSSING`:`SUNDEW GROVE`)}N(`#loading`).hidden=!0,ot&&(N(`#motion`).textContent=`Breeze off`,N(`#motion`).ariaPressed=`false`),$(),requestAnimationFrame(Vt);