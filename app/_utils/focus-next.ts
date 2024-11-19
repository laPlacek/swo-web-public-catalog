export const FOCUSABLE_ELEMENTS =
  [
    'a:not([disabled])',
    'button:not([disabled])',
    'input[type=text]:not([disabled])',
    '[tabindex]:not([disabled]):not([tabindex="-1"])'
  ];

export const focusNext = (el: ParentNode = document) => {
  const focusables = Array.from<HTMLElement>(el.querySelectorAll(FOCUSABLE_ELEMENTS.join(",")));

  var index = focusables.indexOf(document.activeElement as HTMLElement);
  const nextElement = focusables[index + 1] || focusables[0];
  nextElement?.focus();
}