import { h } from '@stencil/core';
import { BEM } from '../../../utils/bem';
import { balBrowser } from '../../../utils/browser';
export const TabSelect = ({ items, value, onSelectTab }) => {
  const bemEl = BEM.block('tabs').element('select');
  const onChange = (ev) => {
    const selectedTabs = items.filter(tab => tab.value === ev.detail);
    if (selectedTabs.length > 0) {
      const selectedTab = selectedTabs[0];
      if (selectedTab.href !== '' && selectedTab.href !== undefined) {
        if (balBrowser.hasWindow) {
          window.open(selectedTab.href, selectedTab.target);
        }
      }
      onSelectTab(ev, selectedTab);
    }
  };
  return (h("bal-select", { class: Object.assign({}, bemEl.class()), value: value, onBalChange: event => onChange(event) }, items
    .filter(tab => !tab.disabled && !tab.hidden)
    .map(tab => (h("bal-select-option", { label: tab.label, value: tab.value }, tab.label)))));
};
