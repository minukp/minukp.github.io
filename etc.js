 document.querySelector(' li:nth-child(1)').addEventListener('click',getCourse);
 document.querySelector('.close').addEventListener('click',closeCourse);
 
 
 let courses = document.querySelector('.courses');

 
 function getCourse(e){
    courses.style.display ='block';
    e.preventDefault();
 }
 

 function closeCourse(e){
    courses.style.display ='none';  
    e.preventDefault();
 }
/*Address*/
 document.querySelector('li:nth-child(2)').addEventListener('click',getContact);
 document.querySelector('.close1').addEventListener('click',closeContact);

 let contact = document.querySelector('.address');
 function getContact(e){
     contact.style.display ='block';
     e.preventDefault();
 }
 function closeContact(e){
    contact.style.display ='none';
    e.preventDefault();
}
/*Location*/
document.querySelector('li:nth-child(3)').addEventListener('click',getLocation);
document.querySelector('.close2').addEventListener('click',closeLocation);

let loc = document.querySelector('.loc');
function getLocation(e){
    loc.style.display ='block';
    e.preventDefault();
}
function closeLocation(e){
    loc.style.display = 'none';
 e.preventDefault();
}


