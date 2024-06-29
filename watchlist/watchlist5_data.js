'use strict';

/**
* This is the data file for data entries
*/
(function (exports) {

  let dataList = [];
  dataList.push({title: "The Fall of France", titleUrl: 'https://www.amazon.com/gp/video/detail/B01DEFZSFO/ref=atv_wl_hom_c_unkc_1_42'});
  dataList.push({title: "The Purple Horizon", refTitle: 'chan-troi-tim'});
  dataList.push({title: "The Vietnam War Collection: Jungles of Death", refTvTitle: 'the-vietnam-war-collection'});
  dataList.push({title: "The Vietnam War Collection: The Invisible Enemy", refTvTitle: 'the-vietnam-war-collection', titleUrl: 'https://www.amazon.com/gp/video/detail/B01DWPFNPG/ref=atv_wl_hom_c_unkc_1_7'});
  dataList.push({title: "The Vietnam War Collection: Defeat & Departure", refTvTitle: 'the-vietnam-war-collection', titleUrl: 'https://www.amazon.com/gp/video/detail/B01DWPFKX6/ref=atv_wl_hom_c_unkc_1_6'});

  let appConfig = {
    dataList : dataList,
    homePage : 'watchlist5.html'
  };
  exports.appConfig = appConfig;

})(typeof exports !== 'undefined' && exports !== null ? exports : window);
