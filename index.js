// Animations
/** @type {AnimationC} */
export const Animation = Java.type("com.github.synnerz.talium.animations.Animation")
/** @type {Animations} */
export const Animations = Java.type("com.github.synnerz.talium.animations.Animations")
// Components
/** @type {UIBaseC} */
export const UIBase = Java.type("com.github.synnerz.talium.components.UIBase")
/** @type {UICheckBoxC} */
export const UICheckBox = Java.type("com.github.synnerz.talium.components.UICheckBox")
/** @type {UIRectC} */
export const UIRect = Java.type("com.github.synnerz.talium.components.UIRect")
/** @type {UIScrollableC} */
export const UIScrollable = Java.type("com.github.synnerz.talium.components.UIScrollable")
/** @type {UISliderC} */
export const UISlider = Java.type("com.github.synnerz.talium.components.UISlider")
/** @type {UISliderCompletionC} */
export const UISliderCompletion = Java.type("com.github.synnerz.talium.components.UISliderCompletion")
/** @type {UISliderThumbC} */
export const UISliderThumb = Java.type("com.github.synnerz.talium.components.UISliderThumb")
/** @type {UISwitchC} */
export const UISwitch = Java.type("com.github.synnerz.talium.components.UISwitch")
/** @type {UIKnobSwitchC} */
export const UIKnobSwitch = Java.type("com.github.synnerz.talium.components.UIKnobSwitch")
/** @type {UITextC} */
export const UIText = Java.type("com.github.synnerz.talium.components.UIText")
/** @type {UITextInputC} */
export const UITextInput = Java.type("com.github.synnerz.talium.components.UITextInput")
// Effects
/** @type {UIEffectC} */
export const UIEffect = Java.type("com.github.synnerz.talium.effects.UIEffect")
/** @type {InverseEffect} */
export const InverseEffect = Java.type("com.github.synnerz.talium.effects.InverseEffect")
/** @type {OutlineEffect} */
export const OutlineEffect = Java.type("com.github.synnerz.talium.effects.OutlineEffect")
/** @type {ScissorEffect} */
export const ScissorEffect = Java.type("com.github.synnerz.talium.effects.ScissorEffect")
// Shaders
/** @type {ShaderC} */
export const Shader = Java.type("com.github.synnerz.talium.shaders.Shader")

let RoundedRect = null
let RoundedRectOutline = null

/** @returns {RoundedRect?} */
export const getUIRoundedRect = () => RoundedRect
/** @returns {RoundedRectOutline?} */
export const getUIRoundedRectOutline = () => RoundedRectOutline

// Lazy load these because they need to be in main thread
Client.scheduleTask(() => {
    RoundedRect = Java.type("com.github.synnerz.talium.shaders.ui.RoundedRect").INSTANCE
    RoundedRectOutline = Java.type("com.github.synnerz.talium.shaders.ui.RoundedRectOutline").INSTANCE
})

/** @type {UniformC} */
export const Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Uniform")
/** @type {FloatUniform} */
export const FloatUniform = Java.type("com.github.synnerz.talium.shaders.uniform.FloatUniform")
/** @type {IntUniform} */
export const IntUniform = Java.type("com.github.synnerz.talium.shaders.uniform.IntUniform")
/** @type {Vec2Uniform} */
export const Vec2Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Vec2Uniform")
/** @type {Vec4Uniform} */
export const Vec4Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Vec4Uniform")
/** @type {Vector2fC} */
export const Vector2f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector2f")
/** @type {Vector3fC} */
export const Vector3f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector3f")
/** @type {Vector4fC} */
export const Vector4f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector4f")
// Utils
/** @type {UIMathLib} */
export const UIMathLib = Java.type("com.github.synnerz.talium.utils.MathLib").INSTANCE
/** @type {UIRenderer} */
export const UIRenderer = Java.type("com.github.synnerz.talium.utils.Renderer").INSTANCE

/**
 * @typedef {"LINEAR" | "QUAD_IN" | "QUAD_OUT" | "QUAD_IN_OUT" | "CUBIC_IN" | "CUBIC_OUT" | "CUBIC_IN_OUT" | "QUART_IN" | "QUART_OUT" | "QUART_IN_OUT" | "QUINT_IN" | "QUINT_OUT" | "QUINT_IN_OUT" | "SINE_IN" | "SINE_OUT" | "SINE_IN_OUT" | "BACK_IN" | "BACK_OUT" | "BACK_IN_OUT" | "CIRC_IN" | "CIRC_OUT" | "CIRC_IN_OUT" | "BOUNCE_IN" | "BOUNCE_OUT" | "BOUNCE_IN_OUT" | "ELASTIC_IN" | "ELASTIC_OUT" | "ELASTIC_IN_OUT" | "EASE_IN_EXPO" | "EASE_OUT_EXPO" | "EASE_IN_OUT_EXPO"} AnimationTypes
 * 
 * @typedef {Object} Animations
 * @prop {(elapsedTime: number) => number} getEase
 * @prop {Animations} LINEAR
 * @prop {Animations} QUAD_IN
 * @prop {Animations} QUAD_OUT
 * @prop {Animations} QUAD_IN_OUT
 * @prop {Animations} CUBIC_IN
 * @prop {Animations} CUBIC_OUT
 * @prop {Animations} CUBIC_IN_OUT
 * @prop {Animations} QUART_IN
 * @prop {Animations} QUART_OUT
 * @prop {Animations} QUART_IN_OUT
 * @prop {Animations} QUINT_IN
 * @prop {Animations} QUINT_OUT
 * @prop {Animations} QUINT_IN_OUT
 * @prop {Animations} SINE_IN
 * @prop {Animations} SINE_OUT
 * @prop {Animations} SINE_IN_OUT
 * @prop {Animations} BACK_IN
 * @prop {Animations} BACK_OUT
 * @prop {Animations} BACK_IN_OUT
 * @prop {Animations} CIRC_IN
 * @prop {Animations} CIRC_OUT
 * @prop {Animations} CIRC_IN_OUT
 * @prop {Animations} BOUNCE_IN
 * @prop {Animations} BOUNCE_OUT
 * @prop {Animations} BOUNCE_IN_OUT
 * @prop {Animations} ELASTIC_IN
 * @prop {Animations} ELASTIC_OUT
 * @prop {Animations} ELASTIC_IN_OUT
 * @prop {Animations} EASE_IN_EXPO
 * @prop {Animations} EASE_OUT_EXPO
 * @prop {Animations} EASE_IN_OUT_EXPO
 * 
 * @typedef {Object} Animation
 * @prop {boolean} shouldAnimate
 * @prop {number} animationStart
 * @prop {() => Animation} start
 * @prop {() => Animation} stop
 * @prop {() => void} preDraw
 * @prop {() => number} getEase
 * @typedef {new (animation: Animations, maxTime: number) => Animation} AnimationC
 * 
 * @typedef {Object} MCScaledResolution
 * @prop {() => number} func_78328_b getScaledHeight
 * @prop {() => number} func_78324_d getScaledHeight_double
 * @prop {() => number} func_78326_a getScaledWidth
 * @prop {() => number} func_78327_c getScaledWidth_double
 * @prop {() => number} func_78325_e getScaleFactor
 * 
 * @typedef {Object} UIEvent
 * @prop {boolean} propagate
 * @prop {() => void} stopPropagation
 * 
 * @typedef {UIEvent & { x: number, y: number, component: UIBase }} UIMouseEvent
 * @typedef {UIMouseEvent & { button: number }} UIClickEvent
 * @typedef {UIMouseEvent & { dx: number, dy: number, button: number }} UIDragEvent
 * @typedef {UIMouseEvent & { delta: number }} UIScrollEvent
 * @typedef {UIMouseEvent & { state: boolean }} UIFocusEvent
 * @typedef {UIEvent & { keycode: number, char: string, component: UIBase }} UIKeyType
 * 
 * @typedef {Object} UIEffect
 * @prop {UIBase?} component
 * @prop {boolean} forceColor
 * @prop {() => void} preDraw
 * @prop {() => void} postDraw
 * @prop {() => void} preChildDraw
 * @prop {() => void} postChildDraw
 * @typedef {new () => UIEffect} UIEffectC
 * 
 * @typedef {new (width: number, color: JavaTColor, radius: number) => UIEffect} OutlineEffect
 * @typedef {UIEffectC} ScissorEffect
 * @typedef {UIEffectC} InverseEffect
 * 
 * @typedef {Object} Boundaries
 * @prop {number} x1 X position in pixels
 * @prop {number} y1 Y position in pixels
 * @prop {number} x2 X + Width position in pixels
 * @prop {number} y2 Y + Height position in pixels
 * 
 * @typedef {Object} UIBase
 * @prop {UIBase[]} children
 * @prop {MCScaledResolution} scaledResolution
 * @prop {number} x
 * @prop {number} y
 * @prop {number} width
 * @prop {number} height
 * @prop {Boundaries} bounds
 * @prop {JavaTColor} bgColor
 * @prop {boolean} focused
 * @prop {Animation} xAnimation
 * @prop {Animation} yAnimation
 * @prop {Animation} widthAnimation
 * @prop {Animation} heightAnimation
 * @prop {boolean} hidden
 * @prop {(state: boolean) => UIBase} setDirty
 * @prop {() => UIBase} markDirty
 * @prop {(r: number, g: number, b: number, a: number?) => UIBase | (color: JavaTColor) => UIBase} setColor
 * @prop {(child: UIBase) => UIBase} addChild
 * @prop {(child: UIBase) => boolean} hasChild
 * @prop {(parent: UIBase) => boolean} hasParent
 * @prop {(child: UIBase) => UIBase} setChildOf
 * @prop {(child: UIBase) => boolean} removeChild
 * @prop {() => boolean} remove
 * @prop {() => UIBase} clearChildren
 * @prop {(x: number, y: number) => UIBase} setPos
 * @prop {(x: number, y: number) => UIBase} setPosition
 * @prop {(width: number, height: number) => UIBase} setSize
 * @prop {(x: number, y: number) => boolean | (event: UIMouseEvent) => boolean} inBounds
 * @prop {(effect: UIEffect) => UIBase} addEffect
 * @prop {(...UIEffect) => UIBase} addEffects
 * @prop {(effect: UIEffect) => boolean} removeEffect
 * @prop {(...UIEffect) => boolean} removeEffects
 * @prop {() => boolean} hasFocus
 * @prop {(name: AnimationTypes, maxTime: number) => UIBase} setXAnimation
 * @prop {(name: AnimationTypes, maxTime: number) => UIBase} setYAnimation
 * @prop {(name: AnimationTypes, maxTime: number) => UIBase} setWidthAnimation
 * @prop {(name: AnimationTypes, maxTime: number) => UIBase} setHeightAnimation
 * @prop {() => boolean} isDirty
 * @prop {(newComp: UIBase, oldComp: UIBase) => boolean} replaceChild
 * @prop {(comp: UIBase, index: Int) => boolean} insertChild
 * @prop {() => UIBase} hide
 * @prop {() => UIBase} unhide
 * @prop {() => boolean} isMainComponent
 * @prop {(x: number, y: number) => UIBase?} getComponentAt
 * @prop {() => void} unfocus
 * @prop {() => UIBase} update
 * @prop {() => void} preDraw
 * @prop {() => void} postDraw
 * @prop {() => void} preChildDraw
 * @prop {() => void} postChildDraw
 * @prop {() => void} render
 * @prop {(x: number, y: number) => void} drawChildren
 * @prop {(x: number, y: number) => void} draw
 * @prop {(comp: UIBase, scaledResolution: MCScaledResolution) => UIBase} onResize
 * @prop {(trace: *[]) => UIBase} onError
 * @prop {(event: UIClickEvent) => UIBase} onMouseClick
 * @prop {(event: UIDragEvent) => UIBase} onMouseDrag
 * @prop {(event: UIClickEvent) => UIBase} onMouseRelease
 * @prop {(event: UIMouseEvent) => UIBase} onMouseEnter
 * @prop {(event: UIMouseEvent) => UIBase} onMouseHover
 * @prop {(event: UIMouseEvent) => UIBase} onMouseLeave
 * @prop {(event: UIScrollEvent) => UIBase} onMouseScroll
 * @prop {(event: UIFocusEvent) => UIBase} onFocus
 * @prop {(event: UIFocusEvent) => UIBase} onUnfocus
 * @prop {(event: UIFocusEvent) => UIBase} onLostFocus
 * @prop {(event: UIKeyType) => UIBase} onKeyType
 * @prop {(event: UIKeyType) => UIBase} onKeyTyped
 * @prop {() => UIBase} onUpdate
 * @typedef {new (x: number, y: number, width: number, height: number, parent: UIBase?) => UIBase} UIBaseConstruct
 * @typedef {new (x: number, y: number, width: number, height: number, radius: number?, parent: UIBase?) => UIBase} UIRoundBaseConstruct
 * @typedef {UIBaseConstruct} UIBaseC
 * 
 * @typedef {Object} Shader
 * @prop {boolean} usable
 * @prop {boolean} inuse
 * @prop {() => void} bind
 * @prop {() => void} unbind
 * @prop {() => void} delete
 * @prop {(name: string) => number} getUniformLoc
 * @prop {(vertName: string, fragName: string) => Shader} fromResources
 * @typedef {new (vertName: string, fragName: string) => Shader} ShaderC
 * 
 * @typedef {Object} RoundedRect
 * @prop {(x: number, y: number, width: number, height: number, radius: number) => void} drawRoundedRect
 * 
 * @typedef {Object} RoundedRectOutline
 * @prop {(x: number, y: number, width: number, height: number, radius: number, lineWidth: number) => void} drawRoundedRectOutline
 * 
 * @typedef {Object} Vector2f
 * @prop {number} x
 * @prop {number} y
 * @prop {() => number} getX
 * @prop {() => number} getY
 * @prop {() => number} hashCode
 * @prop {(other: *) => boolean} equals
 * @typedef {new (x: number, y: number) => Vector2f} Vector2fC
 * 
 * @typedef {Object} Vector3f
 * @prop {number} x
 * @prop {number} y
 * @prop {number} z
 * @prop {() => number} getX
 * @prop {() => number} getY
 * @prop {() => number} getZ
 * @prop {() => number} hashCode
 * @prop {(other: *) => boolean} equals
 * @typedef {new (x: number, y: number, z: number) => Vector3f} Vector3fC
 * 
 * @typedef {Object} Vector4f
 * @prop {number} x
 * @prop {number} y
 * @prop {number} z
 * @prop {number} w
 * @prop {() => number} getX
 * @prop {() => number} getY
 * @prop {() => number} getZ
 * @prop {() => number} getW
 * @prop {() => number} hashCode
 * @prop {(other: *) => boolean} equals
 * @typedef {new (x: number, y: number, z: number, w: number) => Vector4f} Vector4fC
 * 
 * @typedef {Object} Uniform
 * @prop {() => number} getLocation
 * @typedef {new (location: number) => Uniform} UniformC
 * 
 * @typedef {UniformC & { setValue: (value: number) => void}} FloatUniform
 * @typedef {UniformC & { setValue: (value: number) => void}} IntUniform
 * @typedef {UniformC & { setValue: (value: Vector2f) => void}} Vec2Uniform
 * @typedef {UniformC & { setValue: (value: Vector4f) => void}} Vec4Uniform
 * 
 * @typedef {UIBase & { drawRect: (x: number, y: number, width: number, height: number, radius: number) => void }} UIRect
 * @typedef {new (x: number, y: number, width: number, height: number, parent: UIBase?) => UIRect} UIRectC
 * 
 * @typedef {UIBase & {
 *  enabledColor: JavaTColor,
 *  disabledColor: JavaTColor,
 *  textScale: number,
 *  check: string,
 *  cross: string
 * }} UICheckBox
 * @typedef {new (x: number, y: number, width: number, height: number, value: boolean?, radius: number?, parent: UIBase?) => UICheckBox} UICheckBoxC
 * 
 * @typedef {UIBase & {
 *  getScrollY: (yOffset: number) => number,
 *  getVisibleComponents: (scrollY: number, maxHeight: number) => UIBase[]
 * }} UIScrollable
 * @typedef {new (x: number, y: number, width: number, height: number, parent: UIBase?) => UIScrollable} UIScrollableC
 * 
 * @typedef {UIBase & {
 *  bgColor: JavaTColor,
 *  getBgColor: JavaTColor,
 *  setBgColor: (color: JavaTColor) => void
 * }} UISliderThumb
 * @typedef {new (width: number, parent: UIBase?) => UISliderThumb} UISliderThumbC
 * 
 * @typedef {UIBase & {
 *  bgColor: JavaTColor,
 *  getBgColor: JavaTColor,
 *  setBgColor: (color: JavaTColor) => void
 * }} UISliderCompletion
 * @typedef {new (parent: UIBase?) => UISliderCompletion} UISliderCompletionC
 * 
 * @typedef {UIBase & {
 *  thumb: UISliderThumb,
 *  completion: UISliderCompletion,
 *  textScale: number,
 *  keyStep: number,
 *  ctrlStep: number,
 *  setCurrentX: (x: number) => void,
 *  setCurrentValue: (value: number) => void
 * }} UISlider
 * @typedef {new (x: number, y: number, width: number, height: number, value: number, min: number, max: number, radius: number?, parent: UIBase?) => UISlider} UISliderC
 * 
 * @typedef {UIBase & {
 *  enabledColor: JavaTColor,
 *  disabledColor: JavaTColor,
 *  getEnabledColor: () => JavaTColor,
 *  getDisabledColor: () => JavaTColor,
 *  setEnabledColor: (color: JavaTColor) => void,
 *  setDisabledColor: (color: JavaTColor) => void,
 * }} UIKnobSwitch
 * @typedef {new (height: number, radius: number, parent: UIBase?) => UIKnobSwitch} UIKnobSwitchC
 * 
 * @typedef {UIBase & {
 *  enabledColor: JavaTColor,
 *  knob: UIKnobSwitch
 * }} UISwitch
 * @typedef {new (x: number, y: number, width: number, height: number, radius: number?, state: boolean, parent: UIBase?) => UISwitch} UISwitchC
 * 
 * @typedef {UIBase & {
 *  textScale: number
 *  drawText: (text: string, x: number, y: number, scale: number) => void,
 *  drawCenteredText: (text: string, x: string, y: string, width: number, height: number, scale: string) => void
 * }} UIText
 * @typedef {new (x: number, y: number, width: number, height: number, text: string, centered: boolean, parent: UIBase?) => UIText} UITextC
 * 
 * @typedef {UIBase & {
 *  cursorPos: number,
 *  textScale: number,
 *  selectionPos: number,
 *  maxLength: number,
 *  currentOffset: number,
 *  getSelectionLeft: () => number,
 *  getSelectionRight: () => number,
 *  getSelectedText: () => string,
 *  deleteText: (from: number, to: number) => string,
 *  deleteText: () => void
 *  getPreviousWord: () => number,
 *  getNextWord: () => number,
 *  write: (str: string) => void,
 *  isAllowedCharacter: (char: string) => boolean
 * }} UITextInput
 * @typedef {new (x: number, y: number, width: number, height: number, radius: number?, text: string, parent: UIBase?) => UITextInput} UITextInputC
 * 
 * @typedef {Object} UIRenderer
 * @prop {(x: number, y: number, width: number, height: number, solid: boolean) => void} drawRect
 * @prop {(x: number, y: number, width: number, height: number, alpha: number?) => void} drawInvertedColRect
 * @prop {(text: string, x: number, y: number, shadow: boolean, color: number) => void} drawString
 * 
 * @typedef {Object} UIMathLib
 * @prop {(n: number, oldMin: number, oldMax: number, newMin: number, newMax: number) => number} rescale
 * @prop {(elapsedTime: number, pow: number) => number} getPowIn
 * @prop {(elapsedTime: number, pow: number) => number} getPowOut
 * @prop {(elapsedTime: number, pow: number) => number} getPowInOut
 * @prop {(elapsedTime: number, amount: number) => number} getBackInOut
 * @prop {(elapsedTime: number) => number} getBounceIn
 * @prop {(elapsedTime: number) => number} getBounceOut
 * @prop {(elapsedTime: number, amplitude: number, period: number)} getElasticIn
 * @prop {(elapsedTime: number, amplitude: number, period: number)} getElasticOut
 * @prop {(elapsedTime: number, amplitude: number, period: number)} getElasticInOut
 */