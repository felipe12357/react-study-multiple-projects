import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaHome,FaFolderOpen,FaQuestion,FaUserFriends,FaUserAlt} from 'react-icons/fa';

export const data = [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image: 'https://www.course-api.com/images/people/person-1.jpeg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image: 'https://www.course-api.com/images/people/person-2.jpeg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image: 'https://www.course-api.com/images/people/person-3.jpeg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image: 'https://www.course-api.com/images/people/person-4.jpeg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image: 'https://www.course-api.com/images/people/person-5.jpeg',
    },
  ];

  export const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <FaHome />,
    },
    {
      id: 2,
      url: '/about',
      text: 'about',
      icon: <FaQuestion/>
    },
    {
      id: 3,
      url: '/projects',
      text: 'projects',
      icon: <FaFolderOpen />,
    },
    {
      id: 4,
      url: '/contact',
      text: 'contact',
      icon: <FaUserFriends />
    },
    {
      id: 5,
      url: '/profile',
      text: 'profile',
      icon: <FaUserAlt />
    },
  ];
  
   export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 3,
      url: 'https://www.twitter.com',
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      url: 'https://www.twitter.com',
      icon: <FaBehance />,
    },
  ];