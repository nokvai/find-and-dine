const businessDetailMapper = data => ({
    name: data.name,
    phone: data.phone,
    location: data.location,
    rating: data.rating,
    imageSrc: data.image_url,
    coordinates: data.coordinates,
    photos: data.photos,
    hours: data.hours
  });
  
  export default businessDetailMapper;
