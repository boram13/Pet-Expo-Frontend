

const birds = [
    { _id: 'b1', name: 'Parrot', photo: 'https://example.com/parrot.jpg', origin: 'Australia' },
    { _id: 'b2', name: 'Sparrow', photo: 'https://example.com/sparrow.jpg', origin: 'Worldwide' },
    { _id: 'b3', name: 'Eagle', photo: 'https://example.com/eagle.jpg', origin: 'North America' },
    { _id: 'b4', name: 'Owl', photo: 'https://example.com/owl.jpg', origin: 'Worldwide' },
    { _id: 'b5', name: 'Penguin', photo: 'https://example.com/penguin.jpg', origin: 'Antarctica' },
    { _id: 'b6', name: 'Flamingo', photo: 'https://example.com/flamingo.jpg', origin: 'Africa' },
    { _id: 'b7', name: 'Seagull', photo: 'https://example.com/seagull.jpg', origin: 'Worldwide' },
    { _id: 'b8', name: 'Hummingbird', photo: 'https://example.com/hummingbird.jpg', origin: 'Americas' },
    { _id: 'b9', name: 'Peacock', photo: 'https://example.com/peacock.jpg', origin: 'India' },
    { _id: 'b10', name: 'Pigeon', photo: 'https://example.com/pigeon.jpg', origin: 'Worldwide' }
  ];
  
  const cats = [
    { _id: 'c1', name: 'Persian', photo: 'https://example.com/persian.jpg', origin: 'Iran' },
    { _id: 'c2', name: 'Siamese', photo: 'https://example.com/siamese.jpg', origin: 'Thailand' },
    { _id: 'c3', name: 'Maine Coon', photo: 'https://example.com/mainecoon.jpg', origin: 'USA' },
    { _id: 'c4', name: 'Sphynx', photo: 'https://example.com/sphynx.jpg', origin: 'Canada' },
    { _id: 'c5', name: 'Ragdoll', photo: 'https://example.com/ragdoll.jpg', origin: 'USA' },
    { _id: 'c6', name: 'British Shorthair', photo: 'https://example.com/britishshorthair.jpg', origin: 'UK' },
    { _id: 'c7', name: 'Abyssinian', photo: 'https://example.com/abyssinian.jpg', origin: 'Ethiopia' },
    { _id: 'c8', name: 'Bengal', photo: 'https://example.com/bengal.jpg', origin: 'USA' },
    { _id: 'c9', name: 'Birman', photo: 'https://example.com/birman.jpg', origin: 'France' },
    { _id: 'c10', name: 'Scottish Fold', photo: 'https://example.com/scottishfold.jpg', origin: 'Scotland' }
  ];
  
  const dogs = [
    { _id: 'd1', name: 'Labrador Retriever', photo: 'https://example.com/labrador.jpg', origin: 'Canada' },
    { _id: 'd2', name: 'German Shepherd', photo: 'https://example.com/germanshepherd.jpg', origin: 'Germany' },
    { _id: 'd3', name: 'Golden Retriever', photo: 'https://example.com/goldenretriever.jpg', origin: 'Scotland' },
    { _id: 'd4', name: 'Bulldog', photo: 'https://example.com/bulldog.jpg', origin: 'UK' },
    { _id: 'd5', name: 'Poodle', photo: 'https://example.com/poodle.jpg', origin: 'France' },
    { _id: 'd6', name: 'Beagle', photo: 'https://example.com/beagle.jpg', origin: 'UK' },
    { _id: 'd7', name: 'Rottweiler', photo: 'https://example.com/rottweiler.jpg', origin: 'Germany' },
    { _id: 'd8', name: 'Yorkshire Terrier', photo: 'https://example.com/yorkshireterrier.jpg', origin: 'UK' },
    { _id: 'd9', name: 'Boxer', photo: 'https://example.com/boxer.jpg', origin: 'Germany' },
    { _id: 'd10', name: 'Dachshund', photo: 'https://example.com/dachshund.jpg', origin: 'Germany' }
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
  