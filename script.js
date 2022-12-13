let gallery = document.getElementById('gallery');
let Loader = document.getElementById('loader');
let client_id = 'I6O4m0PAwnH4uMLa3Yy9rnqLi2EMCwoY0bhc4bCBzRc'
let unsplash_url= `https://api.unsplash.com/photos/random?client_id=${client_id}&count=30`
let photos = [];

async function getPhotos(){
    try{
       //const mylist = await fetch(unsplash_url);
       //photos = await mylist.json();
       photos = await fetch(unsplash_url).then((images) => {return images.json()});
       console.log('photos',photos);
       displayphotos();

    }catch(e){
        console.log('Error',e); 
    }
  
}

function displayphotos(){
    photos.forEach((photos)=> {
        console.log('photos',photos);

        const a = document.createElement('a');
        const img = document.createElement('img');

        createAttribute(a,{
            href : photos.links.html,
            target :'_blank'
        })
        createAttribute(img,{
            src : photos.urls.regular,
            alt : photos.alt_description,
            title : photos.alt_description,
        });
        //img.addEventListener('load',imagesloaded)

        a.appendChild(img);
        gallery.appendChild(a);

    })
}
function  createAttribute(element,attribute){
    console.log(element);
    console.log(attribute);

    for (key in attribute){
        //a.setAttribute('href',photos.links.html);
        element.setAttribute(key ,attribute[key]);

    }
}
getPhotos();
