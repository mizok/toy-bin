function counterCore(ele,arr){
  const arrRandom = ()=>{
    return arr[Math.floor((arr.length)*Math.random())]
  }
  ele.each((i,o)=>{
    const cells= $(o).find('[class*="__cell"]');
    const refresh = $(o).find('[class*="__btn"]');
    const refreshFunc = ()=>{
      cells.each((index,cell)=>{
        $(cell).find('[class*="__text"]').text(arrRandom());
      })
      cells.each((index,cell)=>{
        $(cell).find('[class*="__text"]').css('opacity',0.3);
      })  
    }
    let timer;
    const countdownRefresh = ()=>{
      let delayInitail = 20;
      let  func = ()=>{
        return setTimeout(()=>{
          refreshFunc();
          delayInitail+=20;
          if(delayInitail<300){
            timer = func();
          }
          else{
            clearTimeout(timer);
            cells.each((index,cell)=>{
              $(cell).find('[class*="__text"]').css('opacity',1);
            })  
          }
        },delayInitail) 
      }
      timer = func(); 
    }

    refreshFunc();

    refresh.on('click',(e)=>{
      e.preventDefault();
      clearTimeout(timer);
      countdownRefresh();
    })
    
  })
}

function initZhTwAlphabet(){
  const ele = $('.zh-tw-alphabet');
  const arr = ['ㄅ','ㄆ','ㄇ','ㄈ','ㄉ','ㄊ','ㄋ','ㄌ','ㄍ','ㄎ','ㄏ','ㄐ','ㄑ','ㄒ','ㄓ','ㄔ','ㄕ','ㄖ','ㄗ','ㄘ','ㄙ','ㄧ','ㄨ','ㄩ','ㄚ','ㄛ','ㄜ','ㄝ','ㄞ','ㄟ','ㄠ','ㄡ','ㄢ','ㄣ','ㄤ','ㄥ','ㄦ'];
  counterCore(ele,arr)
}

function initZhTwVacabularyPicking(){
  const ele = $('.zh-tw-vocabulary-picking');
  const arr = ['烏龜','IPhone','Chrome','樂透彩','台北101','NEUX','劉信義','高爾夫','獎牌','三明治','音響','運動鞋','第二次世界大戰','洗衣粉','溜冰','NEUX','劉信義','風箏','外套','鍵盤','滑鼠','插頭','原住民','聖母峰','台語','彩虹','酒','磁鐵','手錶','郵差','警察','總統','籃球','口罩','皮鞋','NEUX','劉信義'];
  counterCore(ele,arr)
}

function initZhTwLyricPicking(){
  const ele = $('.zh-tw-lyric-picking');
  const arr = ['太陽','星星','月亮','水','河','天堂','翅膀','傲慢','雨','夢','離開','殺','浪','簡單','蝦','東西','手心','知道','死了','痛快','煙','好想','丟掉','手錶','外套','絕對','動物','彩虹','情歌','風箏','病','思念','陌生人','燃燒','勇敢','悲劇','生命'];
  counterCore(ele,arr)
}

function initSiteContentSwitcher(){
  const ele = $('.site-content-switcher');
  ele.each((i,o)=>{
    let item = $(o).find('.site-content-switcher__item');
    item.eq(0).addClass('site-content-switcher__item--active');
    let func = (id)=>{
      item.removeClass('site-content-switcher__item--active');
      item.filter($(id)).addClass('site-content-switcher__item--active');
    } 
    $(o).data('switch',func)
  })
}

function initMenuBtn(){
  const ele = $('.menu-btn')
  ele.each((i,o)=>{
    $(o).on('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      $('#menu').fadeIn(500);
    })
  })
}

function initMenuCloseBtn(){
  const ele = $('.menu-close-btn')
  ele.each((i,o)=>{
    $(o).on('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      $('#menu').fadeOut(500);
    })
  })
}

function initMenuList(){
  const ele = $('.menu-list')
  ele.each((i,o)=>{
    $(o).find('a').on('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      const id = $(e.currentTarget).attr('href');
      $('#site-content-switcher').data('switch')(id);
      $('#menu').fadeOut(500);
    })
  })
}

function initMenu(){
  const ele = $('.menu')
  ele.each((i,o)=>{
    $('body').on('click',(e)=>{
      $(o).fadeOut(500);
    })
    $(o).on('click',(e)=>{
      e.stopPropagation();
    })
  })
}




function initComponents(){
  initMenuBtn();
  initMenuCloseBtn();
  initSiteContentSwitcher();
  initMenuList();
  initMenu();
  initZhTwAlphabet();
  initZhTwVacabularyPicking();
  initZhTwLyricPicking();
}

$(()=>{
  initComponents()
})
  


