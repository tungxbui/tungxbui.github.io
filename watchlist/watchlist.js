$(function() {
  var sites = []
  sites.push("amazon")
  sites.push("vudu")
  sites.push("google")

  var homePage = window.appConfig.homePage;
  var navList = [];
  navList.push({title: "Watch List", page: 'watchlist1.html'});
  navList.push({title: "Apple TV", page: 'watchlist2.html'});
  navList.push({title: "Music Video", page: 'watchlist3.html'});
  navList.push({title: "Charlie Chaplin", page: 'watchlist4.html'});
  navList.push({title: "War Pictures", page: 'watchlist5.html'});
  var navs = document.getElementById("navs")
  if (navs) {
    nav_html = '<ul>'
    for (var i = 0; i < navList.length; i++) {
      var entry = navList[i]
      var title = entry["title"]
      var page = entry["page"]
      if (homePage == page) {
        nav_html += '<li><a class="active" href="#home">' + title + '</a></li>'
      } else {
        nav_html += '<li><a href="' + page + '">' + title + '</a></li>'
      }
    }
    nav_html += '</ul>'
    navs.innerHTML = nav_html
  }

  var dataList = window.appConfig.dataList;
  document.getElementById("itemcount").innerHTML = dataList.length
  var listingTable = document.getElementById("listing")
  for(var i = 0; i < dataList.length; i++) {
    var entry = dataList[i]
    var title = entry["title"]
    var ref_title = entry["refTitle"]
    var ref_tvtitle = entry["refTvTitle"]
    var title_url = entry["titleUrl"]
    var tr = listingTable.insertRow(-1)
    var td = tr.insertCell(-1)
    td.innerHTML = title
    td = tr.insertCell(-1)
    if (ref_title) {
      td.innerHTML = '<a target="_blank" href="https://www.justwatch.com/us/movie/' + ref_title + '">JustWatch</a>'
    } else if (ref_tvtitle) {
      td.innerHTML = '<a target="_blank" href="https://www.justwatch.com/us/tv-show/' + ref_tvtitle + '">JustWatch</a>'
    } else {
      td.innerHTML = '---'
    }
    if (title_url) {
      td = tr.insertCell(-1)
      var site_name = 'Title Site'
      for (var ii = 0; ii < sites.length; ii++) {
        var name = sites[ii]
        if (title_url.indexOf(name) > 0) {
          site_name = name
        }
      }
      td.innerHTML = '<a target="_blank" href="' + title_url + '">' + site_name + '</a>'
    }
  }
})
