import { BsEnvelope, BsWhatsapp, BsFacebook} from 'react-icons/bs'

export const reviews = [
    {
      id: 1,
      name: 'glenda addo',
      job: 'banker',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "Bettina snacks has always been my go-to bakery. Their snacks are always fresh and delicious!",
    },
    {
      id: 2,
      name: 'rita johnson',
      job: 'teacher',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'The best pastries in Ghana for sure! So many fresh options, great service and a clean space. ',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'teacher',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'The croissants were absolutely delicious, definitely the best I have had so far. I will definitely be ordering more!',
    },
    {
      id: 4,
      name: 'bob anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Every pastry was a 10 out of 10! The family loved it, the guests loved it and I really enjoyed it. I will definitely be ordering again for my next party. ',
    },
];
  

export const pendingOrders = [
  {
    name: "Philippa Fox",
    email: "some@email.com",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
    desc: "Rock Buns - 2, Meat Pie - 5"
    
  },
  {
    name: "Jeremy Gilbert",
    email: "some@email.com",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
    desc: "Rock Buns - 2, Meat Pie - 5"

  },
  {
    name: "Stephanie Salvatore",
    email: "some@email.com",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    desc: "Rock Buns - 2, Meat Pie - 5"

  },
  {
    name: "Philip Fox",
    email: "some@email.com",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    desc: "Rock Buns - 2, Meat Pie - 5"

  },
]

export const contactData = [
  {
    id: 1,
    icon: <BsEnvelope className='contactIcon'/>,
    title: "Email",
    handle: "snacksbettina@gmail.com",
    link: "mailto:snacksbettina@gmail.com"
  },
  {
    id: 2,
    icon: <BsWhatsapp className='contactIcon' />,
    title: "WhatsApp",
    handle: "050 229 7337",
    link: "https://api.whatsapp.com/send?phone=+233502297337"
  },
  {
    id: 3,
    icon: <BsFacebook className='contactIcon' />,
    title: "Facebook",
    handle: "lorem_ipsum",
    link: "https://facebook.com"
  },
]
  