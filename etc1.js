       //Medium and large screens
let noItem= document.querySelectorAll('.hide-on-small-only');
noItem.forEach(function(item){
    item.style.display ='none';
});
//Courses
document.querySelector('a:nth-child(1)').addEventListener('click',getCourses);
function getCourses(){
    let courses = document.querySelector('#courses.hide-on-small-only');
    courses.style.display = 'block';
}
document.querySelector('.close1').addEventListener('click',closeCourses);
function closeCourses(){
    let courses = document.querySelector('#courses.hide-on-small-only');
    courses.style.display = 'none';
}
//Location
document.querySelector('a:nth-child(2)').addEventListener('click',getLocation);
function getLocation(){
    let location = document.querySelector('#location.hide-on-small-only');
    location.style.display = 'block';
}
document.querySelector('.close2').addEventListener('click',closeLocation);
function closeLocation(){
    let location = document.querySelector('#location.hide-on-small-only');
    location.style.display = 'none';
}
        //On small screens
let noDisplay = document.querySelectorAll('.hide-on-med-and-up');
noDisplay.forEach(function(dis){
    dis.style.display = 'none';
});
//Courses
document.querySelector('a:nth-child(1)').addEventListener('click',getCourseSmall);
function getCourseSmall(){
    let courses = document.querySelector('#courses.hide-on-med-and-up');
    courses.style.display = 'block';
}
document.querySelector('.close1').addEventListener('click',closeCourseSmall);
function closeCourseSmall(){
    let courses = document.querySelector('#courses.hide-on-med-and-up');
    courses.style.display = 'none';
}
//Location
document.querySelector('a:nth-child(2)').addEventListener('click',getLocationSmall);
function getLocationSmall(){
    let location = document.querySelector('#location.hide-on-med-and-up');
    location.style.display = 'block';
}
document.querySelector('.close2').addEventListener('click',closeLocationSmall);
function closeLocationSmall(){
    let location = document.querySelector('#location.hide-on-med-and-up');
    location.style.display = 'none';
}