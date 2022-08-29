import { BsEnvelope, BsWhatsapp, BsFacebook} from 'react-icons/bs'

export const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
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
  