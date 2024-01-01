import { addInfoBullet, docBy, hideDiscoverer } from '../../common';
import { planetMoonSentence } from '../../miscLogic/locationLogic';
import type { ElementFunctions } from '../../types/elements';

const baseElementFunctions: ElementFunctions = [
  {
    element: ['planetInput', 'moonInput'],
    func: () => planetMoonSentence(),
  },
  {
    element: 'builderInput',
    func: () => {
      hideDiscoverer('builderInput', 'builderlinkInput');
      docBy();
    },
  },
  {
    element: 'builderlinkInput',
    func: () => {
      hideDiscoverer('builderlinkInput', 'builderInput');
      docBy();
    },
  },
  {
    element: 'addInfoInput',
    func: () => addInfoBullet(),
  },
];

export default baseElementFunctions;
