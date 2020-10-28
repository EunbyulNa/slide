$(document).ready(function(){


  $('.gnb > li > a').mouseenter(function(){
    console.log('�묐룞�섎굹��?');
    $('.gnblistBox').slideDown(300);
  });


  $('nav').mouseleave(function(){
    $('.gnblistBox').slideUp(300);
  });
  // console.log();


  //�щ씪�대뜑 slick plugin
  $('.imgs').slick({
    autoplay : true,
    autoplaySpeed : 1500,
 // arrows : false,
    dots : true,           // �섏씠吏�踰꾪듉
 // fade : true,           // �щ챸�꾨줈 �꾪솚
    pauseOnFocus : false,  // 留덉슦�ㅻ� �대┃�덉쓣�� (true)硫덉땄
    pauseOnHover : false,  // 留덉슦�ㅻ� �щ젮�볦븯�꾨븣 (true)硫덉땄
    initialSlide : 2,      // 泥섏쓬 �쒖옉�섎뒗 �대�吏� 吏��� ( 0 遺��� �쒖꽌 �쒖옉 )
    speed : 2000,           // �좊땲硫붿씠��( �대�吏� �꾪솚�곹깭 �띾룄 ) �ㅽ뵾��
 // vertical : true,       // �대�吏� �щ씪�대뱶 諛⑺뼢 ( �몃줈 )
  });

  //�щ씪�대뜑 ( PLAY / STOP )踰꾪듉
  var bb = 1;                // 蹂��� bb �덉뿉 1�� �ｌ뼱以���!(�꾩옱 play以�)

  $('.btn').click(function(){

    if(bb == 1){
      $('.imgs').slick('slickPause');
      bb = 0;
      $(this).addClass('on');    // 誘몃━ 留뚮뱾�� �볦� on �대씪��(�뚮젅�대え�묒쓽 �대�吏�)瑜� �곸슜
      console.log('踰꾪듉 �묐룞�섎굹��?')
    } else {
      $('.imgs').slick('slickPlay');
      bb = 1;
      $(this).removeClass('on');
    }
  });

  });
