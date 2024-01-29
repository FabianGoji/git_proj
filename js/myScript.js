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