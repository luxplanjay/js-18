import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'material-design-icons/iconfont/material-icons.css';
// import 'pnotify/dist/PNotifyBrightTheme.css';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';

PNotify.alert({
  text: "I'm an alert.",
  type: 'notice',
});

// Automatically set the type.
PNotify.notice({
  text: "I'm a notice.",
});
PNotify.info({
  text: "I'm an info message.",
});
PNotify.success({
  text: "I'm a success message.",
});
PNotify.error({
  text: "I'm an error message.",
});
