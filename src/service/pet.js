

const birds = [
    { _id: 'b1', name: 'Parrot', photo: 'https://rb.gy/o40ew3', origin: 'Australia' },
    { _id: 'b2', name: 'Sparrow', photo: 'https://rb.gy/sw5vqs', origin: 'Worldwide' },
    { _id: 'b3', name: 'Eagle', photo: 'https://rb.gy/n64vom', origin: 'North America' },
    { _id: 'b4', name: 'Owl', photo: 'https://shorturl.at/aPvJ7', origin: 'Worldwide' },
    { _id: 'b5', name: 'Penguin', photo: 'https://shorturl.at/TBYvO', origin: 'Antarctica' },
    { _id: 'b6', name: 'Flamingo', photo: 'https://shorturl.at/YH5if', origin: 'Africa' },
    { _id: 'b7', name: 'Seagull', photo: 'https://shorturl.at/VGS54', origin: 'Worldwide' },
    { _id: 'b8', name: 'Hummingbird', photo: 'https://www.birdlife.org/wp-content/uploads/2021/06/Hummingbird-Norbert-Hentges-Unsplash-edited-scaled.jpg', origin: 'Americas' },
    { _id: 'b9', name: 'Peacock', photo: 'https://rb.gy/9idhap', origin: 'India' },
    { _id: 'b10', name: 'Pigeon', photo: 'https://shorturl.at/uU2Ge', origin: 'Worldwide' }
  ];
  
  const cats = [
    { _id: 'c1', name: 'Persian', photo: 'https://shorturl.at/fSD0e', origin: 'Iran' },
    { _id: 'c2', name: 'Siamese', photo: 'https://t.ly/dZD98', origin: 'Thailand' },
    { _id: 'c3', name: 'Maine Coon', photo: 'https://t.ly/1LqMc', origin: 'USA' },
    { _id: 'c4', name: 'Sphynx', photo: 'https://t.ly/cvIOC', origin: 'Canada' },
    { _id: 'c5', name: 'Ragdoll', photo: 'https://rb.gy/fb4kbx', origin: 'USA' },
    { _id: 'c6', name: 'British Shorthair', photo: 'https://rb.gy/mikqek', origin: 'UK' },
  ];
  
  const dogs = [
    { _id: 'd1', name: 'Labrador Retriever', photo: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg', origin: 'Canada' },
    { _id: 'd2', name: 'German Shepherd', photo: 'https://cdn.pixabay.com/photo/2016/02/22/17/49/dog-1210559_960_720.jpg', origin: 'Germany' },
    { _id: 'd3', name: 'Golden Retriever', photo: 'https://cdn.pixabay.com/photo/2016/10/21/17/46/dog-1758178_960_720.jpg', origin: 'Scotland' },
    { _id: 'd4', name: 'Bulldog', photo: 'https://example.com/bulldog.jpg', origin: 'UK' },
    { _id: 'd5', name: 'Poodle', photo: 'https://example.com/poodle.jpg', origin: 'France' },
    { _id: 'd6', name: 'Beagle', photo: 'https://example.com/beagle.jpg', origin: 'UK' }
  ];
  
  const animals = { birds, cats, dogs };
  
  export const getAll = (type) => {
    return animals[type] || [];
  };
  
  export const create = (type, animal) => {
    animal._id = `${type[0]}${Date.now()}`;
    animals[type].push(animal);
  };
  
  export const update = (type, _id, updatedAnimal) => {
    const index = animals[type].findIndex(animal => animal._id === _id);
    if (index !== -1) {
      animals[type][index] = { ...animals[type][index], ...updatedAnimal };
    }
  };
  
  export const deleteAnimal = (type, _id) => {
    const index = animals[type].findIndex(animal => animal._id === _id);
    if (index !== -1) {
      animals[type].splice(index, 1);
    }
  };
  