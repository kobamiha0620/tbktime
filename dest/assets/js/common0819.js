




window.addEventListener('scroll', function () {
    const totop = document.querySelector(".fixedbnr");
    const bodyHeight = document.body.clientHeight;
    const windowScrollHeight = document.documentElement.clientHeight + document.documentElement.scrollTop || document.body.scrollTop || document.scrollingElement.scrollTop || window.pageYOffset || window.scrollY;
    const footerHeight = document.querySelector('.footer').clientHeight;
    if (bodyHeight - windowScrollHeight <= footerHeight) {
        totop.style.position = 'absolute';
        totop.style.bottom = footerHeight + -20 + 'px';
    } else {
        totop.style.position = 'fixed';
        totop.style.bottom = '5vw';
    }
  });
  


  const targets = document.getElementsByClassName('fade');
  for(let i = targets.length; i--;){
   let observer = new IntersectionObserver((entries, observer) => {
    for(let j = entries.length; j--;){
     if (entries[j].isIntersecting) {
      entries[j].target.classList.add('active');
      observer.unobserve(entries[j].target);
     }
    }
   });
   observer.observe(targets[i]);
  }
  


//アコーディオン
$(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.faq__blc .faq__blc--q').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.faq__blc--a').slideToggle();
      $(this).toggleClass("open");
    });


    $('.schedule .schedule__blc--q').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.schedule__list--sblc').slideToggle();
      $(this).toggleClass("open");
    });


    $('.event__date--wrapper').click(function(){
      $(this).next('.event__details').slideToggle();

    });

  });