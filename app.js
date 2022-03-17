// EXAMPLE 1
const names = ['Karen', 'Richard', 'Tyler'];

const shortNamesLengths = names.filter( name => name.length < 6 ).map( name => name.length );const cities = ['NewYork', 'Bali', 'Bangkok', 'Colombo', 'Kathmandu', 'London', 'Rome']
const shortNames = cities.filter(city => city.length < 7); //map is called in the new array, generated from the application of the function passed by filter method
console.log(shortNames);

// EXAMPLE 2
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const popular = musicData.filter(album => album.sales > 1000000).map(eachArtist => eachArtist.artist + ' is a great performer')

console.log(popular);