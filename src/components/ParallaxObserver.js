const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting)
            {
                entry.target.classList.add("Show");
            }else{
                entry.target.classList.remove("Show");
            }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//https://www.youtube.com/watch?v=T33NN_pPeNI