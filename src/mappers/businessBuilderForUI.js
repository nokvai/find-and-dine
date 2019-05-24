const businessBuilderForUI = data => ({
  id: data.id,
  name: data.name,
  phone: data.phone,
  location: data.location,
  rating: data.rating,
  categories: data.categories,
  imageSrc: data.image_url
});

export default businessBuilderForUI;
