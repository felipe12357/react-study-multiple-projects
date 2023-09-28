import { faTwitter,faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWallet, faTree, faCouch  } from '@fortawesome/free-solid-svg-icons';
import img1 from './img/tour-1.jpeg';
import img2 from './img/tour-2.jpeg';
import img3 from './img/tour-3.jpeg';
import img4 from './img/tour-4.jpeg';
library.add(faTwitter, faFacebook, faInstagram);

export const pageLinks = [
    { id:1, url:'#home',text:'Home'},
    { id:2, url:'#about',text:'About'},
    { id:3, url:'#services',text:'Services'},
    { id:4, url:'#tours',text:'Tours'},
];

export const socialMedia = [
    { id:1, url:'https://www.facebook.com',icon:faFacebook},
    { id:2, url:'https://www.twitter.com',icon:faTwitter},
    { id:3, url:'https://www.instagram.com',icon:faInstagram},
]

export const services =[
    { id:1, title:"Saving Money", icon:faWallet ,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
    { id:2, title:"Endless Hiking", icon:faTree, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
    { id:3, title:"Amazing Comfort", icon:faCouch, text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
]

export const tours = [
    { id:1, title:"Tibet Adventure", location:'China', duration:"8 Days", cost:2100, img:img1, date:new Date('August 19, 2023'),text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
    { id:2, title:"Best of Java", location:'Indonesia', duration:"11 Days", cost:1400, img:img2, date:new Date('July 05, 2023'),text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
    { id:3, title:"Explore Hong Kong", location:'Hong Kong', duration:"6 Days", cost:5100, img:img3,date:new Date('June 21, 2023'), text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
    { id:4, title:"Eternal sprint", location:'Medellín', duration:"5 Days", cost:3100, img:img4,date:new Date('September 27, 2023'), text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum voluptatum exercitationem aliquam quod nihil nam ipsum aut error!"},
]