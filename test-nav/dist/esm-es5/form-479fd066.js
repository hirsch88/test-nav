var scrollToFirstInvalidField=function(l){var r=l.selector||".bal-field--invalid";var e=l.formEl.querySelectorAll(r);var a=Array.from(e);if(a.length>0){var i=a[0];if(i){var d=i.closest("bal-field");if(d&&d.scrollIntoView){d.scrollIntoView()}}}};var defaultBalAriaForm={controlId:undefined,labelId:undefined,messageId:undefined};export{defaultBalAriaForm as d,scrollToFirstInvalidField as s};