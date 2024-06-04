/******************* кнопка погода и выбор погоды */

if(qs('#pogoda')){
  qs('#pogoda').addEventListener('click', (function () {

    // var pogoda_gorod_name = 'Херсон';
    var pogoda_gorod_link = 'kherson';

    if(!Cookies.get('pg_link')){
      // var pogoda_gorod = 'kherson';
    } else {
      pogoda_gorod_link = Cookies.get('pg_link')
    }

    loadDoc(
      '/pogoda/'+pogoda_gorod_link+'.html',
      'pogoda_container');

  }));

  qs('.pogoda i').addEventListener('click', (function(){

    loadDoc(
      '/pogoda/pogoda-mesta.html',
      'pogoda-mesta',
      pogodaVyborMesta);

    function pogodaVyborMesta () {
      // alert(qs('#day'));
      var ul, li, i;
      ul = qs('#pogoda_mesta ul');
      li = ul.getElementsByTagName("li");
      i;

      for (i = 0; i < li.length; i++) {
        li[i].addEventListener('click', getMestoCookies)
      }

      function getMestoCookies(){
        var pg_link = this.getAttribute("data-pg-link");
        var pg_mesto = this.innerText;
        Cookies.set('pg_link', pg_link);
        Cookies.set('pg_mesto', pg_mesto);
        changeCL('z3_modal','body');
      }


      qs('#pg-mesta-search').addEventListener('keyup', function(){
        var filter = this.value.toUpperCase();

        for (i = 0; i < li.length; i++) {
          if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }

      })
    }

  }));

}

/******************* кнопка погода и выбор погоды /z*/