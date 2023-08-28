export class VariantRenderer {
  constructor(renderer) {
    this.renderer = renderer;
  }
  async present(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.present(component);
    if (didRender) {
      component.presented = true;
      component.balDidAnimate.emit();
    }
    return didRender;
  }
  async update(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.update(component);
    if (didRender) {
      component.balDidAnimate.emit();
    }
    return didRender;
  }
  async dismiss(component) {
    component.balWillAnimate.emit();
    const didRender = await this.renderer.dismiss(component);
    if (didRender) {
      component.presented = false;
      component.balDidAnimate.emit();
    }
    return didRender;
  }
}
