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

const toggleButtons = document.querySelectorAll('.hide-button') as NodeListOf<HTMLButtonElement>
 
for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function (event) {
      const target = event.target as HTMLButtonElement; // Assert event.target as HTMLElement
        const parentElement = target.parentElement as HTMLHeadingElement; // Access parentElement
        const sibling = parentElement.nextElementSibling as HTMLParagraphElement; // Access nextElementSibling
        
        if (window.getComputedStyle(sibling).display === 'block') {
            // console.log(window.getComputedStyle(sibling).display);
            sibling.style.display = 'none'
            target.innerText = 'Show'
            
        } else {
            sibling.style.display = 'block'
            target.innerText = 'Hide'
            }
            
        
    })
    
}
