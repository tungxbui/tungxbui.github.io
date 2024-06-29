'use strict';

/**
* This is the data file for data entries
*/
(function (exports) {

  let dataList = [];
  dataList[0] =  {title: 'Dragons Forever', refTitle: 'dragons-forever'};
  dataList[1] =  {title: 'Wheels On Meals', refTitle: 'wheels-on-meals'};
  dataList[2] =  {title: 'Gamera: Guardian Of The Universe', refTitle: 'gamera-guardian-of-the-universe'};
  dataList[3] =  {title: 'Gamera 2: Attack Of The Legion', refTitle: 'gamera-2-attack-of-the-legion'};
  dataList[4] =  {title: 'Gamera 3: Revenge Of Iris', refTitle: 'gamera-revenge-of-iris'};
  dataList[5] =  {title: 'Gamera The Brave', refTitle: 'gamera-the-brave'};
  dataList[6] =  {title: 'Cemetery Without Crosses', refTitle: 'cemetery-without-crosses'};
  dataList.push({title: 'Django 1966', refTitle: 'django'});
  dataList.push({title: 'The Grand Duel 1972', refTitle: 'the-grand-duel'});
  dataList.push({title: 'Have a Good Funeral My Friend... Sartana Will Pay', refTitle: 'have-a-good-funeral-my-friend-sartana-will-pay'});
  dataList.push({title: 'I Am Sartana, Your Angel Of Death', refTitle: 'sartana-the-gravedigger'});
  dataList.push({title: 'If You Meet Sartana... Pray For Your Death', refTitle: 'if-you-meet-sartana-pray-for-your-death'});
  dataList.push({title: 'Keoma', refTitle: 'keoma'});
  dataList.push({title: 'Light The Fuse... Sartana Is Coming', refTitle: 'light-the-fuse-sartana-is-coming'});
  dataList.push({title: 'A Pistal for Ringo', refTitle: 'a-pistol-for-ringo'});
  dataList.push({title: 'The Return of Ringo', refTitle: 'the-return-of-ringo'});
  dataList.push({title: "Sartana's Here... Trade Your Pistol for a Coffin", refTitle: 'a-fistful-of-lead'});

  let appConfig = {
    dataList : dataList,
    homePage : 'watchlist2.html'
  };
  exports.appConfig = appConfig;

})(typeof exports !== 'undefined' && exports !== null ? exports : window);
