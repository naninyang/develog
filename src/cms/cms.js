import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import { ko } from 'netlify-cms-locales';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import DevelogPreview from './preview-templates/DevelogPagePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerLocale('ko', ko);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('develog', DevelogPreview);

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'YouTube',
  fields: [
    {
      name: 'url',
      label: 'Youtube video URL',
      widget: 'string',
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    };
  },
  toBlock: function (obj) {
    return '`youtube: ' + obj.url + '`';
  },
  toPreview: function (obj) {
    return obj.url;
  },
});
