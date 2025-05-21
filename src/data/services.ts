import { DecorationService, VehicleService, DrivingLicenseService } from '../types';

export const decorationServices: DecorationService[] = [
  {
    id: 'grad',
    title: 'Graduation Ceremonies',
    description: 'Celebrate academic success with elegant decorations that honor this milestone.',
    imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    description: 'Custom themes and decorations to make your birthday celebration unforgettable.',
    imageUrl: 'https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'wedding',
    title: 'Weddings & Engagement Events',
    description: 'Transform your special day with stunning decor that captures your unique love story.',
    imageUrl: 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'baby',
    title: 'Baby Showers & Gender Reveals',
    description: 'Joyful and creative decorations to welcome your little one in style.',
    imageUrl: '/dec2.png',
  },
  {
    id: 'religious',
    title: 'Religious Events',
    description: 'Respectful and beautiful decorations for all religious ceremonies and celebrations.',
    imageUrl: 'https://images.pexels.com/photos/3791666/pexels-photo-3791666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'family',
    title: 'Family Celebrations',
    description: 'Create memorable gatherings with decorations that bring your family together.',
    imageUrl: '/dec3.png',
  },
  {
    id: 'corporate',
    title: 'Corporate and Office Events',
    description: 'Professional decor solutions for business meetings, conferences, and company celebrations.',
    imageUrl: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'housewarming',
    title: 'Housewarming Parties',
    description: 'Welcome friends and family to your new home with festive and stylish decorations.',
    imageUrl:'/dec5.png',
  },
  {
    id: 'photoshoot',
    title: 'Photo Shoots & Fashion Events',
    description: 'Create the perfect backdrop for capturing stunning images and showcasing fashion.',
    imageUrl: 'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
];

export const registeredVehicleServices: VehicleService[] = [
  {
    id: 'ownership',
    title: 'Change of ownership',
    description: 'Transfer vehicle ownership with our professional assistance.',
    imageUrl: '/registration.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'titleholder',
    title: 'Change of titleholder',
    description: 'Update vehicle title information efficiently and legally.',
    imageUrl: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'personal-registration',
    title: 'Personalized number registration',
    description: 'Get a custom license plate number that reflects your personality.',
    imageUrl: '/driving lisence.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'personal-renewal',
    title: 'Personalized number renewal',
    description: 'Renew your custom plate number without the hassle.',
    imageUrl: '/logo.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'suspension',
    title: 'Motor vehicle suspension',
    description: 'Handle vehicle suspension issues with expert guidance.',
    imageUrl: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'block-unblock',
    title: 'Block/unblock motor vehicles',
    description: 'Resolve vehicle blocking issues quickly and effectively.',
    imageUrl: '/registration.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'reallocation',
    title: 'Motor vehicle reallocation',
    description: 'Change the registered location or region of your vehicle.',
    imageUrl: '/driving lisence.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'deregistration',
    title: 'Motor vehicle de-registration',
    description: 'Remove your vehicle from the motor registry with proper procedures.',
    imageUrl: '/unregistered.jpeg',
    bgColor: 'bg-amber-500'
  },
  {
    id: 'amendments',
    title: 'Post registration amendments',
    description: 'Make changes to your vehicle registration details as needed.',
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bgColor: 'bg-amber-500'
  }
];

export const unregisteredVehicleServices: VehicleService[] = [
  {
    id: 'registration',
    title: 'Motor vehicle registration',
    description: 'Complete vehicle registration process handled by professionals.',
    imageUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bgColor: 'bg-blue-600'
  },
  {
    id: 're-registration',
    title: 'Motor vehicle re-registration',
    description: 'Renew your expired vehicle registration with our expert assistance.',
    imageUrl: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bgColor: 'bg-blue-600'
  }
];

export const drivingLicenseServices: DrivingLicenseService[] = [
  {
    id: 'provisional',
    title: 'PROVISIONAL'
  },
  {
    id: 'new',
    title: 'NEW'
  },
  {
    id: 'conversion',
    title: 'CONVERSION'
  },
  {
    id: 'renewal',
    title: 'RENEWAL'
  },
  {
    id: 'duplicate',
    title: 'DUPLICATE'
  },
  {
    id: 'driving-license',
    title: 'DRIVING LICENSE'
  }
];