export class MCScaledResolution {
    /** * getScaledHeight */
    func_78328_b(): number
    /** * getScaledHeight_double */
    func_78324_d(): number
    /** * getScaledWidth */
    func_78326_a(): number
    /** * getScaledWidth_double */
    func_78327_c(): number
    /** * getScaleFactor */
    func_78325_e(): number
}

export class UIEvent {
    propagate: boolean
    stopPropagation(): void
}

export class UIMouseEvent<T extends UIBase<T>> extends UIEvent {
    constructor(
        x: number,
        y: number,
        component: T
    )
}

export class UIScrollEvent<T extends UIBase<T>> extends UIMouseEvent {
    constructor(
        x: number,
        y: number,
        delta: number,
        component: T
    )
}

export class UIClickEvent<T extends UIBase<T>> extends UIMouseEvent {
    constructor(
        x: number,
        y: number,
        button: number,
        component: T
    )
}

export class UIDragEvent<T extends UIBase<T>> extends UIMouseEvent {
    constructor(
        dx: number,
        dy: number,
        x: number,
        y: number,
        button: number,
        component: T
    )
}

export class UIFocusEvent<T extends UIBase<T>> extends UIMouseEvent {
    constructor(
        x: number,
        y: number,
        state: boolean,
        component: T
    )
}

export class UIKeyType<T extends UIBase<T>> extends UIEvent {
    constructor(
        keycode: number,
        char: any,
        string: string,
        component: T
    )
}

export class Boundaries {
    constructor(
        x1: number,
        y1: number,
        x2: number,
        y2: number
    )

    /** * X position in pixels */
    x1: number
    /** * Y position in pixels */
    y1: number
    /** * X + Width position in pixels */
    x2: number
    /** * Y + Height position in pixels */
    y2: number
}

export type AnimationTypes = "LINEAR" | "QUAD_IN" | "QUAD_OUT" | "QUAD_IN_OUT" | "CUBIC_IN" | "CUBIC_OUT" | "CUBIC_IN_OUT" | "QUART_IN" | "QUART_OUT" | "QUART_IN_OUT" | "QUINT_IN" | "QUINT_OUT" | "QUINT_IN_OUT" | "SINE_IN" | "SINE_OUT" | "SINE_IN_OUT" | "BACK_IN" | "BACK_OUT" | "BACK_IN_OUT" | "CIRC_IN" | "CIRC_OUT" | "CIRC_IN_OUT" | "BOUNCE_IN" | "BOUNCE_OUT" | "BOUNCE_IN_OUT" | "ELASTIC_IN" | "ELASTIC_OUT" | "ELASTIC_IN_OUT" | "EASE_IN_EXPO" | "EASE_OUT_EXPO" | "EASE_IN_OUT_EXPO"

export interface IAnimation {
    getEase(elapsedTime: number): number
}

export class Animations implements IAnimation {
    static LINEAR: IAnimation
    static QUAD_IN: IAnimation
    static QUAD_OUT: IAnimation
    static QUAD_IN_OUT: IAnimation
    static CUBIC_IN: IAnimation
    static CUBIC_OUT: IAnimation
    static CUBIC_IN_OUT: IAnimation
    static QUART_IN: IAnimation
    static QUART_OUT: IAnimation
    static QUART_IN_OUT: IAnimation
    static QUINT_IN: IAnimation
    static QUINT_OUT: IAnimation
    static QUINT_IN_OUT: IAnimation
    static SINE_IN: IAnimation
    static SINE_OUT: IAnimation
    static SINE_IN_OUT: IAnimation
    static BACK_IN: IAnimation
    static BACK_OUT: IAnimation
    static BACK_IN_OUT: IAnimation
    static CIRC_IN: IAnimation
    static CIRC_OUT: IAnimation
    static CIRC_IN_OUT: IAnimation
    static BOUNCE_IN: IAnimation
    static BOUNCE_OUT: IAnimation
    static BOUNCE_IN_OUT: IAnimation
    static ELASTIC_IN: IAnimation
    static ELASTIC_OUT: IAnimation
    static ELASTIC_IN_OUT: IAnimation
    static EASE_IN_EXPO: IAnimation
    static EASE_OUT_EXPO: IAnimation
    static EASE_IN_OUT_EXPO: IAnimation
}

export class Animation {
    constructor(animation: IAnimation)
    constructor(animation: IAnimation, maxTime: number)
    shouldAnimate: boolean
    animationStart: number
    start(): this
    stop(): this
    preDraw(): void
    getEase(): number
}

export class UIEffect {
    constructor()

    component: ?UIBase
    forceColor: boolean
    preDraw(): void
    postDraw(): void
    preChildDraw(): void
    postChildDraw(): void
}

export class InverseEffect extends UIEffect {
    private color: JavaTColor
}

export class OutlineEffect extends UIEffect {
    constructor(width: number, color: JavaTColor, radius: number)
    constructor(width: number, color: JavaTColor)
    constructor(width: number)
    constructor()
}

export class ScissorEffect extends UIEffect {
    static enableScissor(comp: UIBase): void
    static enableScissor(
        x: number,
        y: number,
        width: number,
        height: number,
        sr: MCScaledResolution
    ): void
    static disableScissor(): void
}

export class Layout {
    parent: ?UIBase
    onUpdate(): void
    preChildDraw(): void
    postChildDraw(): void
}

export class GridComp {
    xOffset: number
    yOffset: number
    comp: UIBase
    offset: boolean
}

export class GridLayout extends Layout {
    constructor(columns: number)
    constructor(columns: number, xPadding: number)
    constructor(columns: number, xPadding: number, yPadding: number)
    grid: GridComp[]
}

export class UIBase<T extends UIBase<T> = any> {
    constructor(x: number, y: number, width: number, height: number)
    constructor(x: number, y: number, width: number, height: number, parent: ?any)

    private hookMouseScroll: ?((event: UIScrollEvent<T>) => void)
    private hookMouseClick: ?((event: UIClickEvent<T>) => void)
    private hookMouseRelease: ?((event: UIClickEvent<T>) => void)
    private hookMouseEnter: ?((event: UIMouseEvent<T>) => void)
    private hookMouseHover: ?((event: UIMouseEvent<T>) => void)
    private hookMouseLeave: ?((event: UIMouseEvent<T>) => void)
    private hookMouseDrag: ?((event: UIDragEvent<T>) => void)
    private hookFocus: ?((event: UIFocusEvent<T>) => void)
    private hookUnfocus: ?((event: UIFocusEvent<T>) => void)
    private hookKeyType: ?((event: UIKeyType<T>) => void)
    private hookResize: ?((comp: UIBase<T>, scaledResolution: MCScaledResolution) => void)
    private hookError: ?((trace: any[]) => void)
    private hookUpdate: ?(() => void)
    private preChildPropagate: ?((event: UIMouseEvent<T>) => void)
    private postChildPropagate: ?((event: UIMouseEvent<T>) => void)
    children: T[]
    scaledResolution: MCScaledResolution
    x: number
    y: number
    width: number
    height: number
    bounds: Boundaries
    bgColor: JavaTColor
    focused: boolean
    xAnimation: ?Animation
    yAnimation: ?Animation
    widthAnimation: ?Animation
    heightAnimation: ?Animation
    hidden: boolean
    layout: ?Layout
    setDirty(): T
    setDirty(state: boolean): T
    markDirty(): T
    setColor(color: JavaTColor): T
    setColor(r: number, g: number, b: number): T
    setColor(r: number, g: number, b: number, a: number): T
    addChild(child: UIBase): T
    hasChild(child: UIBase): boolean
    hasParent(parent: ?UIBase): boolean
    setChildOf(parent: UIBase): T
    removeChild(child: UIBase): boolean
    remove(): boolean
    clearChildren(): T
    setPos(x: number, y: number): T
    setPosition(x: number, y: number): T
    setSize(width: number, height: number): T
    inBounds(x: number, y: number): boolean
    inBounds(event: UIMouseEvent<any>): boolean
    addEffect(effect: UIEffect): T
    addEffects(...effects: UIEffect): T
    removeEffect(effect: UIEffect): boolean
    removeEffects<P extends UIEffect>(clazz: P): boolean
    hasFocus(): boolean
    setXAnimation(name: AnimationTypes, maxTime: number): T
    setYAnimation(name: AnimationTypes, maxTime: number): T
    setWidthAnimation(name: AnimationTypes, maxTime: number): T
    setHeightAnimation(name: AnimationTypes, maxTime: number): T
    isDirty(): boolean
    replaceChild(newComp: UIBase, oldComp: UIBase): boolean
    insertChild(comp: UIBase, index: number): boolean
    hide(): T
    unhide(): T
    isMainComponent(): boolean
    getComponentAt(x: number, y: number): ?UIBase
    unfocus(): void
    addLayout(layout: Layout): T
    removeLayout(): T
    update(): T
    preDraw(): void
    postDraw(): void
    preChildDraw(): void
    postChildDraw(): void
    render(): void
    drawChildren(): void
    drawChildren(x: number, y: number): void
    draw(): void
    draw(x: number, y: number): void
    handleKeyInput(keycode: number, char: any): void
    onResize(cb: (comp: UIBase, scaledResolution: MCScaledResolution) => void): T
    onError(cb: (trace: any[]) => void): T
    onMouseClick(cb: ((event: UIClickEvent) => void)): T
    onMouseRelease(cb: ((event: UIClickEvent) => void)): T
    onMouseDrag(cb: ((event: UIDragEvent) => void)): T
    onMouseEnter(cb: ((event: UIMouseEvent) => void)): T
    onMouseHover(cb: ((event: UIMouseEvent) => void)): T
    onMouseLeave(cb: ((event: UIMouseEvent) => void)): T
    onMouseScroll(cb: ((event: UIScrollEvent) => void)): T
    onFocus(cb: ((event: UIFocusEvent) => void)): T
    onUnfocus(cb: ((event: UIFocusEvent) => void)): T
    onLostFocus(cb: ((event: UIFocusEvent) => void)): T
    onKeyType(cb: ((event: UIKeyType) => void)): T
    onKeyTyped(cb: ((event: UIKeyType) => void)): T
    onUpdate(cb: (() => void)): T
    onPreChildPropagate(cb: ((event: UIMouseEvent) => void)): T
    onPostChildPropagation(cb: ((event: UIMouseEvent) => void)): T
}

export class UIBaseC extends UIBase<UIBaseC> {}

export class UIRect extends UIBase<UIRect> {
    static drawRect(x: number, y: number, width: number, height: number): void
    static drawRect(x: number, y: number, width: number, height: number, radius: number): void

    constructor(x: number, y: number, width: number, height: number)
    constructor(x: number, y: number, width: number, height: number, radius: ?number)
    constructor(x: number, y: number, width: number, height: number, radius: ?number, parent: ?any)
}

export class UICheckBox extends UIBase<UICheckBox> {
    constructor(x: number, y: number, width: number, height: number)
    constructor(x: number, y: number, width: number, height: number, value: boolean)
    constructor(x: number, y: number, width: number, height: number, value: boolean, radius: number)
    constructor(x: number, y: number, width: number, height: number, value: boolean, radius: number, parent: UIBase)

    enabledColor: JavaTColor
    disabledColor: JavaTColor
    textScale: number
    check: string
    cross: string
    private currentAlpha: number
}

export class UIScrollable extends UIBase<UIScrollable> {
    visibleComponents: UIBase[]
    miny: number
    getScrollY(yOffset: number): number
    getVisibleComponents(scrollY: number, maxHeight: number): UIBase[]
}

export class UISliderThumb extends UIBase<UISliderThumb> {
    constructor(width: number)
    constructor(width: number, parent: UIBase)
}

export class UISliderCompletion extends UIBase<UISliderCompletion> {
    constructor()
    constructor(parent: UIBase)
}

export class UISlider extends UIBase<UISlider> {
    constructor(x: number, y: number, width: number, height: number)
    constructor(x: number, y: number, width: number, height: number, value: number)
    constructor(x: number, y: number, width: number, height: number, value: number, min: number)
    constructor(x: number, y: number, width: number, height: number, value: number, min: number, max: number)
    constructor(x: number, y: number, width: number, height: number, value: number, min: number, max: number, radius: number)
    constructor(x: number, y: number, width: number, height: number, value: number, min: number, max: number, radius: number, parent: UIBase)

    thumb: UISliderThumb
    completion: UISliderCompletion
    textScale: number
    keyStep: number
    ctrlStep: number
    getCurrentValue(): number
    getDisplayValue(): string
    setCurrentX(x: number): void
    setCurrentValue(value: number): void
}

export class UIDecimalSlider extends UISlider {}
export class UIPercentSlider extends UISlider {}

export class UIKnobSwitch extends UIBase<UIKnobSwitch> {
    constructor(height: number, radius: number)
    constructor(height: number, radius: number, parent: UIBase)
    constructor(height: number)
    constructor()

    enabledColor: JavaTColor
    disabledColor: JavaTColor
}

export class UISwitch extends UIBase<UISwitch> {
    constructor(x: number, y: number, width: number, height: number)
    constructor(x: number, y: number, width: number, height: number, state: boolean)
    constructor(x: number, y: number, width: number, height: number, state: boolean, radius: number)
    constructor(x: number, y: number, width: number, height: number, state: boolean, radius: number, parent: UIBase)

    enabledColor: JavaTColor
    knob: UIKnobSwitch
    initial: boolean
}

export class UIText extends UIBase<UIText> {
    static drawText(text: string, x: number, y: number): void
    static drawText(text: string, x: number, y: number, scale: number): void
    static drawCenteredText(text: string, x: number, y: number, width: number, height: number): void
    static drawCenteredText(text: string, x: number, y: number, width: number, height: number, scale: number): void

    constructor(x: number, y: number, width: number, height: number, text: string)
    constructor(x: number, y: number, width: number, height: number, text: string, centered: boolean)
    constructor(x: number, y: number, width: number, height: number, text: string, centered: boolean, parent: UIBase)

    textScale: number
}

export class UIWrappedText extends UIBase<UIWrappedText> {
    static drawWrappedString(text: string, x: number, y: number, width: number, height: number): void
    static drawWrappedString(text: string, x: number, y: number, width: number, height: number, scale: number): void
    static drawWrappedStringCentered(text: string, x: number, y: number, width: number, height: number): void
    static drawWrappedStringCentered(text: string, x: number, y: number, width: number, height: number, scale: number): void

    constructor(x: number, y: number, width: number, height: number, text: string)
    constructor(x: number, y: number, width: number, height: number, text: string, centered: boolean)
    constructor(x: number, y: number, width: number, height: number, text: string, centered: boolean, parent: UIBase)

    textScale: number
}

export class UITextInput extends UIBase<UITextInput> {
    static isAllowedCharacter: (char: string) => boolean

    constructor(x: number, y: number, width: number, height: number, text: string)
    constructor(x: number, y: number, width: number, height: number, text: string, radius: number)
    constructor(x: number, y: number, width: number, height: number, text: string, radius: number, parent: UIBase)

    cursorPos: number
    textScale: number
    selectionPos: number
    maxLength: number
    currentOffset: number
    getSelectionLeft(): number
    getSelectionRight(): number
    getSelectedText(): string
    deleteText(from: number, to: number): string
    deleteText(): void
    getPreviousWord(): number
    getNextWord(): number
    write(str: string): void
}

export class UIPasswordInput extends UIBase<UIPasswordInput> {
    static isAllowedCharacter: (char: string) => boolean

    constructor(x: number, y: number, width: number, height: number, text: string)
    constructor(x: number, y: number, width: number, height: number, text: string, secretChar: string)
    constructor(x: number, y: number, width: number, height: number, text: string, secretChar: string, radius: number)
    constructor(x: number, y: number, width: number, height: number, text: string, secretChar: string, radius: number, parent: UIBase)

    protected: boolean
    cursorPos: number
    textScale: number
    selectionPos: number
    maxLength: number
    currentOffset: number
    getSelectionLeft(): number
    getSelectionRight(): number
    getSelectedText(): string
    deleteText(from: number, to: number): string
    deleteText(): void
    getPreviousWord(): number
    getNextWord(): number
    write(str: string): void
}

/** @link `java.awt.image.BufferedImage` */
export class BufferedImage {}
/** @link `net.minecraft.client.renderer.texture.DynamicTexture` */
export class DynamicTexture{}

export class UIImage extends UIBase<UIImage> {
    static fromFile(x: number, y: number, width: number, height: number, file: JavaTFile): UIImage
    static fromFile(x: number, y: number, width: number, height: number, file: JavaTFile, scale: number, parent: UIBase): UIImage

    constructor(x: number, y: number, width: number, height: number, image: BufferedImage)
    constructor(x: number, y: number, width: number, height: number, image: BufferedImage, scale: number)
    constructor(x: number, y: number, width: number, height: number, image: BufferedImage, scale: number, parent: UIBase)

    private imgUploaded: boolean
    textureWidth: number
    textureHeight: number
    dynamicTexture: ?DynamicTexture
    destroy(): void
}

export class UIItem extends UIBase<UIItem> {
    constructor(x: number, y: number, width: number, height: number, itemStack: MCTItemStack)
    constructor(x: number, y: number, width: number, height: number, itemStack: MCTItemStack, scale: number)
    constructor(x: number, y: number, width: number, height: number, itemStack: MCTItemStack, scale: number, zlevel: number)
    constructor(x: number, y: number, width: number, height: number, itemStack: MCTItemStack, scale: number, zlevel: number, parent: UIBase)
}

export class UIEntity extends UIBase<UIEntity> {
    static fromAny(x: number, y: number, width: number, height: number, entityIn: any): UIEntity
    static fromAny(x: number, y: number, width: number, height: number, entityIn: any, scale: number): UIEntity
    static fromAny(x: number, y: number, width: number, height: number, entityIn: any, scale: number, parent: UIBase): UIEntity
    static fromPlayer(x: number, y: number, width: number, height: number, uuid: string, name: string): UIEntity
    static fromPlayer(x: number, y: number, width: number, height: number, uuid: string, name: string, scale: number): UIEntity
    static fromPlayer(x: number, y: number, width: number, height: number, uuid: string, name: string, scale: number, parent: UIBase): UIEntity

    constructor(x: number, y: number, width: number, height: number, entityIn: MCTEntityLivingBase)
    constructor(x: number, y: number, width: number, height: number, entityIn: MCTEntityLivingBase, scale: number)
    constructor(x: number, y: number, width: number, height: number, entityIn: MCTEntityLivingBase, scale: number, parent: UIBase)

    getmx(): number
    getmy(): number
}

export class Shader {
    static fromResources(vertName: string, fragName: string): Shader

    constructor(vertName: string, fragName: string)

    usable: boolean
    inuse: boolean
    bind(): void
    unbind(): void
    delete(): void
    getUniformLoc(name: string): number
}

export const RoundedRect = {
    drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): void
}

export const RoundedRectOutline = {
    drawRoundedRectOutline(x: number, y: number, width: number, height: number, radius: number, lineWidth: ?number): void
}

export class Vector2f {
    constructor(x: number, y: number)

    x: number
    y: number
    getX(): number
    getY(): number
    hashCode(): number
    equals<P extends Vector2f>(other: P): boolean
}

export class Vector3f extends Vector2f {
    constructor(x: number, y: number, z: number)

    z: number
    getZ(): number
}

export class Vector4f extends Vector2f {
    constructor(x: number, y: number, z: number, w: number)

    w: number
    getW(): number
}

export class Uniform<T = any> {
    constructor(location: number)
    setValue(value: T): void
    getLocation(): number
}

export class FloatUniform extends Uniform<number> {}
export class IntUniform extends Uniform<number> {}
export class Vec2Uniform extends Uniform<Vector2f> {}
export class Vec4Uniform extends Uniform<Vector4f> {}

export type UIRendererT = {
    drawRect(x: number, y: number, width: number, height: number, solid: boolean): void,
    drawInvertedColRect(x: number, y: number, width: number, height: number, alpha: ?number): void,
    drawString(text: string, x: number, y: number, shadow: boolean, color: ?number): void
}

export type UIMathLibT = {
    rescale(n: number, oldMin: number, oldMax: number, newMin: number, newMax: number): number,
    getPowIn(elapsedTime: number, pow: number): number,
    getPowOut(elapsedTime: number, pow: number): number,
    getPowInOut(elapsedTime: number, pow: number): number,
    getBackInOut(elapsedTime: number, amount: number): number,
    getBounceIn(elapsedTime: number): number,
    getBounceOut(elapsedTime: number): number,
    getElasticIn(elapsedTime: number, amplitude: number, period: number): number,
    getElasticOut(elapsedTime: number, amplitude: number, period: number): number,
    getElasticInOut(elapsedTime: number, amplitude: number, period: number): number
}

export const UIMathLib: UIMathLibT
export const UIRenderer: UIRendererT