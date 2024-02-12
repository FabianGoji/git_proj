//trying to generate toc content through js

// let topics = document.querySelectorAll('.topic_container');
// let toc = [];

// topics.forEach((topic) => {
//     let id = topic.getAttribute('id');
//     let header = String(topic.getElementsByTagName("h3"));
//     console.log(header);
//     let link = document.createElement('a');
//     link.setAttribute('href', '#' + id);
//     link.innerText = header;
//     console.log(link);
//     toc.push(link);
// });

// let tocContainer = document.querySelector('.toc_container');

// toc.forEach((element, index) => {
//     let tocContent = document.createElement('div');
//     tocContent.classList.add('toc_content');
//     tocContent.id = 'index_' + (index + 1); // assuming ids start from 1
//     let link_string = String(element);
//     const link_array = link_string.split("#");
//     let topic_name = link_array[1];
//     tocContent.innerHTML = topic_name;
//     tocContainer.appendChild(tocContent);
// });


//getting the links to a scroll position that accounts for header height

function scrollToHeading(event) {
    event.preventDefault(); // Prevent the default link behavior
    var targetElement = document.querySelector(event.target.getAttribute('href'));
    console.log(targetElement);
    var headerHeight = document.querySelector('.header').offsetHeight;
    console.log(headerHeight);
    if (targetElement){
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight
      });
    }
  }
  
  // Attaches the event listener to each link in "stactic_col"
  var staticLinks = document.querySelectorAll('.static_col a');
  for (var i =  0; i < staticLinks.length; i++) {
    staticLinks[i].addEventListener('click', scrollToHeading);
  }