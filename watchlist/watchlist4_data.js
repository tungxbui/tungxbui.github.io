'use strict';

/**
* This is the data file for data entries
*/
(function (exports) {

  let dataList = [];
  dataList.push({title: "City Lights", refTitle: 'charlie-chaplin-city-lights'});
  dataList.push({title: "A Dog's Life", refTitle: 'a-dogs-life', titleUrl: 'https://www.amazon.com/gp/video/detail/B00Y36QRAO/ref=atv_hm_vid_c_B8g7Qw_1_396'});
  dataList.push({title: "The Gold Rush", refTitle: 'the-gold-rush'});
  dataList.push({title: "The Kid", refTitle: 'charlie-chaplin-the-kid'});
  dataList.push({title: "Modern Times", refTitle: 'modern-times'});
  dataList.push({title: "Shoulder Arms", refTitle: 'shoulder-arms'});

  let appConfig = {
    dataList : dataList,
    homePage : 'watchlist4.html'
  };
  exports.appConfig = appConfig;

})(typeof exports !== 'undefined' && exports !== null ? exports : window);
