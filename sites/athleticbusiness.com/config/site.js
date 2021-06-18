const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');

module.exports = {
  gam,
  nativeX,
  navigation,
  company: 'Athletic Business Publications, Inc.',
  copyrightNotice: 'Athletic Business is the Resource for Athletic, Fitness and Recreation Professionals',
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/abmedia/all/image/static/ab-site-logo.png?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/abmedia/all/image/static/ab-site-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/abmedia/all/image/static/ab-site-logo.png?h=60',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/abmedia/all/image/static/ab-site-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/athleticbusiness' },
    { provider: 'twitter', href: 'https://twitter.com/Athleticbiz' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/773251' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/AthleticBusinessMag' },
    { provider: 'instagram', href: 'https://www.instagram.com/athleticbiz' },
  ],
  gtm: {
    containerId: 'GTM-KT2C786',
  },
  gcse: {
    id: '003355913687346718228:umsz385a4q4',
  },
  contactUs: {
    branding: {
      bgColor: '#a6181c',
      logo: 'https://base.imgix.net/files/base/abm/ab/logo.png?h=60',
    },
    to: 'jworden@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'jworden@endeavorb2b.com',
    sendFrom: 'AthleticBusiness.com <support@athleticbusiness.com>',
    logo: 'https://base.imgix.net/files/base/abm/ab/logo.png?h=60',
    bgColor: '#a6181c',
  },
};
