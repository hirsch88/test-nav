import { r as registerInstance, h, g as Host } from './index-2c15ff91.js';

const TagGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "bal-tag-group" }, h("slot", null)));
  }
};

export { TagGroup as bal_tag_group };
