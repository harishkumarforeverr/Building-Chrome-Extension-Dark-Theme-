// Define the CSS rules
var cssRules = `
  div, p, a, body, header, footer, nav, section, main, article, aside, details, dialog, summary, figure, figcaption, h1, h2, h3, h4, h5, h6, hr, pre, blockquote, ul, ol, li, dl, dt, dd, main, aside, mark, em, strong, small, s, cite, q, dfn, abbr, sub, sup, time, code, kbd, samp, var, del, ins, img, iframe, embed, object, param, video, audio, source, track, canvas, map, area, svg, math, table, caption, colgroup, col, tbody, thead, tfoot, tr, td, th, form, label, input, button, select, datalist, optgroup, option, textarea, output, progress, meter, fieldset, legend, details, summary, menu, menuitem, script, noscript, template, slot, caption, colgroup, tbody, thead, tfoot, tr, td, th, audio, video
 {
    background: black !important;
    color: white !important;
    border-color: black !important;
  }
`;

// Create a <style> element
var styleElement = document.createElement('style');
styleElement.type = 'text/css';

// Add CSS rules to the <style> element
if (styleElement.styleSheet) {
  // For IE
  styleElement.styleSheet.cssText = cssRules;
} else {
  // For other browsers
  styleElement.appendChild(document.createTextNode(cssRules));
}

// Append the <style> element to the <head> of the document
document.head.appendChild(styleElement);
