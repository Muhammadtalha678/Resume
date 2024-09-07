"use strict";
// function toggleContent(button) {
//     const sectionContent = button.parentElement.nextElementSibling;
//     console.log(sectionContent);
//             if (sectionContent.style.display === 'none') {
//                 sectionContent.style.display = 'block';
//                 button.innerText = 'Hide';
//             } else {
//                 sectionContent.style.display = 'none';
//                 button.innerText = 'Show';
//             }
//         }
// hide show content
const toggleButtons = document.querySelectorAll('.hide-button');
for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function (event) {
        const target = event.target; // Assert event.target as HTMLElement
        const parentElement = target.parentElement; // Access parentElement
        const sibling = parentElement.nextElementSibling; // Access nextElementSibling
        if (window.getComputedStyle(sibling).display === 'block') {
            // console.log(window.getComputedStyle(sibling).display);
            sibling.style.display = 'none';
            target.innerText = 'Show';
        }
        else {
            sibling.style.display = 'block';
            target.innerText = 'Hide';
        }
    });
}
