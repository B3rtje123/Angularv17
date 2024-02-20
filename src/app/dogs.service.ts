import { Injectable } from '@angular/core';

export interface Dog {
  name: string;
  ownerName: string;
  description: string;
  longDescription: string;
  photoUrl: string;
  location: string;
}

@Injectable({ providedIn: 'root' })
export class DogsService {
  dogs: Dog[] = [
    {
      name: 'Robbie',
      ownerName: 'Esther Fraiser',
      description: 'Morbi in urna in nunc hendrerit dignissim.',
      longDescription:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum in quam sit amet justo laoreet facilisis non eget nulla. Cras elit mauris, tristique ac nisl in, ullamcorper tincidunt turpis. Maecenas in condimentum sapien. Proin pharetra turpis non justo varius luctus. Praesent in risus lorem. Curabitur et nibh viverra, mollis est vitae, vestibulum libero. Pellentesque vitae turpis pharetra, sollicitudin nunc quis, efficitur augue. Mauris eu sollicitudin eros, id finibus quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      photoUrl: 'https://images.pexels.com/photos/1346086/pexels-photo-1346086.jpeg',
      location: 'Mountain View, CA',
    },
    {
      name: 'Oberon',
      ownerName: 'Rebecca Bustoire',
      description:
        'Vestibulum venenatis arcu sit amet ligula lobortis volutpat.',
      longDescription:
        'Pellentesque in sodales quam. Suspendisse metus risus, tristique eget gravida quis, condimentum id mi. Fusce magna ex, facilisis vitae tempor non, efficitur pharetra metus. Quisque et arcu sed eros posuere maximus. Curabitur iaculis varius volutpat. Pellentesque maximus, tellus id congue dictum, velit ipsum elementum lacus, quis ultrices nisl orci et tellus. Praesent semper enim eu eros consequat, vitae semper tortor maximus. Nunc eleifend interdum auctor.',
      photoUrl: 'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Chicago, IL',
    },
    {
      name: 'Rin Tin',
      ownerName: 'Rachel Marzo',
      description:
        'Vestibulum venenatis arcu sit amet ligula lobortis volutpat.',
      longDescription:
        'In sagittis iaculis tortor, sit amet hendrerit velit dapibus eu. Quisque semper a urna non egestas. Aliquam ultrices pulvinar ligula, et placerat est luctus lobortis. In venenatis neque ac tellus semper scelerisque. Praesent eu ornare felis. Proin sagittis augue eu elementum lacinia. Suspendisse eu felis pellentesque, auctor mauris nec, mattis dui. Etiam fringilla dui nec nulla scelerisque, non fringilla massa porta. Aliquam aliquet purus ligula, eu blandit dui eleifend sit amet. Nulla facilisi. In vel ornare elit, ut tempor nulla.',
      photoUrl: 'https://images.pexels.com/photos/594687/pexels-photo-594687.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Boston, MA',
    },
    {
      name: 'Lasser',
      ownerName: 'Lashawn Pierre',
      description: 'In quis nisl ac sem hendrerit hendrerit.',
      longDescription:
        'Quisque consequat vulputate arcu vel lobortis. Maecenas non tristique sapien. Duis tincidunt pretium quam eu ultrices. Nam eget nisi dignissim, vulputate lacus sed, faucibus elit. Fusce eget vulputate lacus. Quisque sed nisi id massa vestibulum eleifend eu id sapien. Phasellus venenatis, leo eu vehicula sagittis, ligula mi ultricies enim, a elementum enim enim vitae lorem. Nam sit amet turpis sem. Integer augue mi, hendrerit sit amet molestie et, varius eu dolor. Vivamus in iaculis tellus, nec hendrerit quam. Nulla vitae sapien risus. Curabitur semper, turpis sit amet venenatis tristique, urna tellus efficitur ipsum, a scelerisque sem purus ut velit. Phasellus faucibus blandit enim vitae consequat.',
      photoUrl: 'https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Las Vegas, NV',
    },
    {
      name: 'Capo',
      ownerName: 'Tosin Leaders',
      description: 'In quis nisl ac sem hendrerit hendrerit.',
      longDescription:
        'Quisque consequat vulputate arcu vel lobortis. Maecenas non tristique sapien. Duis tincidunt pretium quam eu ultrices. Nam eget nisi dignissim, vulputate lacus sed, faucibus elit. Fusce eget vulputate lacus. Quisque sed nisi id massa vestibulum eleifend eu id sapien. Phasellus venenatis, leo eu vehicula sagittis, ligula mi ultricies enim, a elementum enim enim vitae lorem. Nam sit amet turpis sem. Integer augue mi, hendrerit sit amet molestie et, varius eu dolor. Vivamus in iaculis tellus, nec hendrerit quam. Nulla vitae sapien risus. Curabitur semper, turpis sit amet venenatis tristique, urna tellus efficitur ipsum, a scelerisque sem purus ut velit. Phasellus faucibus blandit enim vitae consequat.',
      photoUrl: 'https://images.pexels.com/photos/906065/pexels-photo-906065.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Reno, NV',
    },
    {
      name: 'Party',
      ownerName: 'Harold Bria',
      description: 'In quis nisl ac sem hendrerit hendrerit.',
      longDescription:
        'Quisque consequat vulputate arcu vel lobortis. Maecenas non tristique sapien. Duis tincidunt pretium quam eu ultrices. Nam eget nisi dignissim, vulputate lacus sed, faucibus elit. Fusce eget vulputate lacus. Quisque sed nisi id massa vestibulum eleifend eu id sapien. Phasellus venenatis, leo eu vehicula sagittis, ligula mi ultricies enim, a elementum enim enim vitae lorem. Nam sit amet turpis sem. Integer augue mi, hendrerit sit amet molestie et, varius eu dolor. Vivamus in iaculis tellus, nec hendrerit quam. Nulla vitae sapien risus. Curabitur semper, turpis sit amet venenatis tristique, urna tellus efficitur ipsum, a scelerisque sem purus ut velit. Phasellus faucibus blandit enim vitae consequat.',
      photoUrl: 'https://images.pexels.com/photos/1189673/pexels-photo-1189673.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Detroit, MI',
    },
  ];
}