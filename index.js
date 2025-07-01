// Animations
/** @type {typeof import("./index").Animation} */
export const Animation = Java.type("com.github.synnerz.talium.animations.Animation")
/** @type {typeof import("./index").Animations} */
export const Animations = Java.type("com.github.synnerz.talium.animations.Animations")
// Layouts
/** @type {typeof import("./index").Layout} */
export const Layout = Java.type("com.github.synnerz.talium.layout.Layout")
/** @type {typeof import("./index").GridLayout} */
export const GridLayout = Java.type("com.github.synnerz.talium.layout.GridLayout")
// Components
/** @type {typeof import("./index").UIBaseC} */
export const UIBase = Java.type("com.github.synnerz.talium.components.UIBase")
/** @type {typeof import("./index").UICheckBox} */
export const UICheckBox = Java.type("com.github.synnerz.talium.components.UICheckBox")
/** @type {typeof import("./index").UIRect} */
export const UIRect = Java.type("com.github.synnerz.talium.components.UIRect")
/** @type {typeof import("./index").UIScrollable} */
export const UIScrollable = Java.type("com.github.synnerz.talium.components.UIScrollable")
/** @type {typeof import("./index").UISlider} */
export const UISlider = Java.type("com.github.synnerz.talium.components.UISlider")
/** @type {typeof import("./index").UIDecimalSlider} */
export const UIDecimalSlider = Java.type("com.github.synnerz.talium.components.UIDecimalSlider")
/** @type {typeof import("./index").UIPercentSlider} */
export const UIPercentSlider = Java.type("com.github.synnerz.talium.components.UIPercentSlider")
/** @type {typeof import("./index").UISliderCompletion} */
export const UISliderCompletion = Java.type("com.github.synnerz.talium.components.UISliderCompletion")
/** @type {typeof import("./index").UISliderThumb} */
export const UISliderThumb = Java.type("com.github.synnerz.talium.components.UISliderThumb")
/** @type {typeof import("./index").UISwitch} */
export const UISwitch = Java.type("com.github.synnerz.talium.components.UISwitch")
/** @type {typeof import("./index").UIKnobSwitch} */
export const UIKnobSwitch = Java.type("com.github.synnerz.talium.components.UIKnobSwitch")
/** @type {typeof import("./index").UIText} */
export const UIText = Java.type("com.github.synnerz.talium.components.UIText")
/** @type {typeof import("./index").UIWrappedText} */
export const UIWrappedText = Java.type("com.github.synnerz.talium.components.UIWrappedText")
/** @type {typeof import("./index").UITextInput} */
export const UITextInput = Java.type("com.github.synnerz.talium.components.UITextInput")
/** @type {typeof import("./index").UIPasswordInput} */
export const UIPasswordInput = Java.type("com.github.synnerz.talium.components.UIPasswordInput")
/** @type {typeof import("./index").UIImage} */
export const UIImage = Java.type("com.github.synnerz.talium.components.UIImage")
/** @type {typeof import("./index").UIItem} */
export const UIItem = Java.type("com.github.synnerz.talium.components.UIItem")
/** @type {typeof import("./index").UIEntity} */
export const UIEntity = Java.type("com.github.synnerz.talium.components.UIEntity")
// Effects
/** @type {typeof import("./index").UIEffect} */
export const UIEffect = Java.type("com.github.synnerz.talium.effects.UIEffect")
/** @type {typeof import("./index").InverseEffect} */
export const InverseEffect = Java.type("com.github.synnerz.talium.effects.InverseEffect")
/** @type {typeof import("./index").OutlineEffect} */
export const OutlineEffect = Java.type("com.github.synnerz.talium.effects.OutlineEffect")
/** @type {typeof import("./index").ScissorEffect} */
export const ScissorEffect = Java.type("com.github.synnerz.talium.effects.ScissorEffect")

// Shaders
/** @type {typeof import("./index").Shader} */
export const Shader = Java.type("com.github.synnerz.talium.shaders.Shader")

let RoundedRect = null
let RoundedRectOutline = null

/** @returns {?typeof import("./index").RoundedRect} */
export const getUIRoundedRect = () => RoundedRect
/** @returns {?typeof import("./index").RoundedRectOutline} */
export const getUIRoundedRectOutline = () => RoundedRectOutline

// Lazy load these because they need to be in main thread
Client.scheduleTask(() => {
    RoundedRect = Java.type("com.github.synnerz.talium.shaders.ui.RoundedRect").INSTANCE
    RoundedRectOutline = Java.type("com.github.synnerz.talium.shaders.ui.RoundedRectOutline").INSTANCE
})

/** @type {typeof import("./index").Uniform} */
export const Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Uniform")
/** @type {typeof import("./index").FloatUniform} */
export const FloatUniform = Java.type("com.github.synnerz.talium.shaders.uniform.FloatUniform")
/** @type {typeof import("./index").IntUniform} */
export const IntUniform = Java.type("com.github.synnerz.talium.shaders.uniform.IntUniform")
/** @type {typeof import("./index").Vec2Uniform} */
export const Vec2Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Vec2Uniform")
/** @type {typeof import("./index").Vec4Uniform} */
export const Vec4Uniform = Java.type("com.github.synnerz.talium.shaders.uniform.Vec4Uniform")
/** @type {typeof import("./index").Vector2f} */
export const Vector2f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector2f")
/** @type {typeof import("./index").Vector3f} */
export const Vector3f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector3f")
/** @type {typeof import("./index").Vector4f} */
export const Vector4f = Java.type("com.github.synnerz.talium.shaders.uniform.Vector4f")
// Utils
/** @type {typeof import("./index").UIMathLib} */
export const UIMathLib = Java.type("com.github.synnerz.talium.utils.MathLib").INSTANCE
/** @type {typeof import("./index").UIRenderer} */
export const UIRenderer = Java.type("com.github.synnerz.talium.utils.Renderer").INSTANCE