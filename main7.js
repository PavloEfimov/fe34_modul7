function createPostCard(img, title, text, link){
    const posting = document.createElement('div');
    posting.classList.add('post');
    console.log(posting);
    const image = document.createElement('img');
    image.classList.add('post__image');
    image.src = `${img}`;
    image.alt = `${link}`;
    console.log(image);
    const heading = document.createElement('h2');
    heading.textContent=`${title}`
    console.log(heading);
    const texting = document.createElement('p');
    texting.textContent=`${text}`
    console.log(texting);
    const but = document.createElement('a');
    but.textContent='Read more';
    but.href='#';
    but.classList.add('button');
    console.log(but);
    posting.append(image, heading, texting, but);

    document.querySelector('body').append(posting)
    return posting
}

function createCards(posts){
   return posts.forEach(item=>createPostCard(item.img, item.title, item.text, item.link))
    
}

// const post0 = {
//       img: "https://placeimg.com/400/150/arch",
//       title: "Post title 1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
//       link: 'link-1.com'
// }

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

// createPostCard(post0.img, post0.title, post0.text, post0.link)
createCards(posts)