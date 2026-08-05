// Navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,.85)";
    } else {
        nav.style.background = "rgba(0,0,0,.35)";
    }
});

// Smooth fade-in animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});
// AUTO YOUTUBE THUMBNAIL SYSTEM


const films = [

{
title:"Chalan Beel",
url:"https://youtu.be/-fnXKx9BS5Y"
},

{
title:"Nouka Baich",
url:"https://youtu.be/xR3uxom4sYg"
}

];



function youtubeID(url){

return url.split("youtu.be/")[1];

}



const videoBox=document.getElementById("video-container");


films.forEach(film=>{

let id=youtubeID(film.url);


videoBox.innerHTML += `

<div class="video-card">

<img src="https://img.youtube.com/vi/${id}/maxresdefault.jpg">


<div class="video-info">

<h3>${film.title}</h3>


<a href="${film.url}" target="_blank">
▶ Watch Film
</a>


</div>

</div>

`;

});
