window.addEventListener('scroll' , function(){
    const header = document.querySelector('header');
    header.classlist.toggle("sticky", window.scrollY > 0);
  });