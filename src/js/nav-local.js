const widgetsToHideSelector = [
  '.cx-theme-helsinki-blue', // Genesys chat in kymp and sote
  '#smartti-wrapper', // Smartti chatbot in kymp
  '.aca--button--desktop, .aca--button--mobile, .aca--widget--mobile, .aca--widget--desktop', // Watson chatbot in asuminen
  '#block-kuurahealthchat', // Kuurahealth in sote
  '#ed11y-panel', // Editoria11y accessibility tool
];

const toggle = document.querySelector('.js-cssmenu-toggle-button');
const checkbox = document.querySelector('.js-cssmenu-toggle-checkbox');

function toggleWidgets(hide) {
  const widgets = document.querySelectorAll(widgetsToHideSelector.join(','));
  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i];
    if (hide) {
      widget.dataset.cssmenuHide = true;
    } else {
      delete widget.dataset.cssmenuHide;
    }
  }
}

function checkboxToggle() {
  if (checkbox.checked) {
    toggle.setAttribute('aria-expanded', 'false');
    checkbox.checked = false;
    toggleWidgets(false);
    toggle.focus();
  } else {
    checkbox.checked = true;
    toggleWidgets(true);
    toggle.setAttribute('aria-expanded', 'true');
  }
}

if (toggle) {
  toggle.addEventListener('click', checkboxToggle);
}

document.addEventListener('keydown', function toggleOnEnter(e) {
  if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) && checkbox.checked) {
    checkboxToggle();
  }
});

if (checkbox) {
  checkbox.dataset.js = true; // Switch to use js-enhanced version instead of pure css version
}
