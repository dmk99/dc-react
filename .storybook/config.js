import {addDecorator, addParameters, configure} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import "../stories/styles.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

addDecorator(withInfo);

// Option defaults:
addParameters({
  options: {
    name: 'Storybook',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.(j|t)sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
