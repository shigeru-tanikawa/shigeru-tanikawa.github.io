
function initMap() {
       var center = {lat: 35.681236, lng: 139.767125};
       var map = new google.maps.Map(document.getElementById('gmap'), {
         zoom: 2.0,
         center: center,
         disableDefaultUI: true,
         clickableIcons: false,
         mapTypedId: "terrain",
         minZoom:2.0
       });


//エアーズロック

      var エアーズロック　= {lat: -25.344250, lng: 131.036899};
      var contentString1 = '<div class="infobox">'+
          '<div class="inner">'+
          '<div class="infobox-header">'+
          '<h2>エアーズロック</h2>'+
          '</div>'+
          '<div class="infobox-img">'+
          '<img src="./images/オセアニア/エアーズロック.jpg" alt="...">'+
          '</div>'+
          '<div class="information">'+
          '<p>'+
          '・　国　　　　　　：　フランス'+
          '</br>'+
          '・　場所　　　　　：　Page, AZ 86040'+
          '</br>'+
          '・　アクセス手段　：　車、ツアー'+
          '</br>'+
          '・　駐車場　　　　：　あり（約40台、有料）'+
          '</br>'+
          '・　営業時間　　　：　24時間'+
          '</br>'+
          '・　おススメ時期　：　7月∼9月（正午ごろ）'+
          '</br>'+
          '・　分類　　　　　：　絶景'+
          '</p>'+
          '</div>'+
          '<div class="infobox-footer">'+
          '<a href="./each-sightseeing/エアーズロック/index.html">'+
          '<h1>詳細はこちら</h1>'+
          '</a>'+
          '</div>'+
          '</div>'+
          '</div>';

       var infowindow1a = new google.maps.InfoWindow({
         content: contentString1
       });

       var marker1 = new google.maps.Marker({
         position: エアーズロック,
         map: map,
         label: {
           text:  'エアーズロック',      //ラベル文字
           color: 'white',          //ラベル文字の色
           fontFamily: 'sans-serif',  //フォント
           fontWeight: 'bold',        //フォントの太さ
           fontSize: '14px'           //フォントのサイズ
         }
       });

       marker1.addListener('click', function() {
         infowindow1a.open(map, marker1);
       });


//ユニバーサルオーランドリゾート

       var ボラボラ島 = {lat:-16.497, lng:-151.741};

       var contentString2 = '<div class="infobox">'+
           '<div class="inner">'+
           '<div class="infobox-header">'+
           '<h2>ボラボラ島</h2>'+
           '</div>'+
           '<div class="infobox-img">'+
           '<img src="./images/オセアニア/ボラボラ島.jpg" alt="レゴランド">'+
           '</div>'+
           '<div class="information">'+
           '<p>'+
           '・　国　　　　　　：　フランス'+
           '</br>'+
           '・　場所　　　　　：　Page, AZ 86040'+
           '</br>'+
           '・　アクセス手段　：　車、ツアー'+
           '</br>'+
           '・　駐車場　　　　：　あり（約40台、有料）'+
           '</br>'+
           '・　営業時間　　　：　24時間'+
           '</br>'+
           '・　おススメ時期　：　7月∼9月（正午ごろ）'+
           '</br>'+
           '・　分類　　　　　：　絶景'+
           '</p>'+
           '</div>'+
           '<div class="infobox-footer">'+
           '<a href="./each-sightseeing/ボラボラ島/index.html">'+
           '<h1>詳細はこちら</h1>'+
           '</a>'+
           '</div>'+
           '</div>'+
           '</div>';

       var infowindow2 = new google.maps.InfoWindow({
         content: contentString2
       });

       var marker2 = new google.maps.Marker({
         position: ボラボラ島,
         map: map,
         label: {
           text:  'ボラボラ島',      //ラベル文字
           color: 'white',          //ラベル文字の色
           fontFamily: 'sans-serif',  //フォント
           fontWeight: 'bold',        //フォントの太さ
           fontSize: '14px'           //フォントのサイズ
         }
       });

       marker2.addListener('click', function() {
         infowindow2.open(map, marker2);
       });

      //シーワールドオーランド
      var エッフェル塔 = {lat: 48.8583, lng: 2.2944};
      var contentString3 = '<div class="infobox">'+
          '<div class="inner">'+
          '<div class="infobox-header">'+
          '<h2>エッフェル塔</h2>'+
          '</div>'+
          '<div class="infobox-img">'+
          '<img src="./images/ヨーロッパ/エッフェル塔.jpg" alt="レゴランド">'+
          '</div>'+
          '<div class="information">'+
          '<p>'+
          '・　国　　　　　　：　フランス'+
          '</br>'+
          '・　場所　　　　　：　Page, AZ 86040'+
          '</br>'+
          '・　アクセス手段　：　車、ツアー'+
          '</br>'+
          '・　駐車場　　　　：　あり（約40台、有料）'+
          '</br>'+
          '・　営業時間　　　：　24時間'+
          '</br>'+
          '・　おススメ時期　：　7月∼9月（正午ごろ）'+
          '</br>'+
          '・　分類　　　　　：　絶景'+
          '</p>'+
          '</div>'+
          '<div class="infobox-footer">'+
          '<a href="./each-sightseeing/エッフェル塔/index.html">'+
          '<h1>詳細はこちら</h1>'+
          '</a>'+
          '</div>'+
          '</div>'+
          '</div>';

       var infowindow3 = new google.maps.InfoWindow({
         content: contentString3
       });

       var marker3 = new google.maps.Marker({
         position: エッフェル塔,
         map: map,
         label: {
           text:  'エッフェル塔',      //ラベル文字
           color: 'white',          //ラベル文字の色
           fontFamily: 'sans-serif',  //フォント
           fontWeight: 'bold',        //フォントの太さ
           fontSize: '14px'           //フォントのサイズ
         }
       });

       marker3.addListener('click', function() {
         infowindow3.open(map, marker3);
       });

//レゴランド
       var エトワール凱旋門 = {lat: 48.8737966615459, lng: 2.294976910345524};
       var contentString4 = '<div class="infobox">'+
           '<div class="inner">'+
           '<div class="infobox-header">'+
           '<h2>エトワール凱旋門</h2>'+
           '</div>'+
           '<div class="infobox-img">'+
           '<img src="./images/ヨーロッパ/エトワール凱旋門.jpg" alt="レゴランド">'+
           '</div>'+
           '<div class="information">'+
           '<p>'+
           '・　国　　　　　　：　フランス'+
           '</br>'+
           '・　場所　　　　　：　Page, AZ 86040'+
           '</br>'+
           '・　アクセス手段　：　車、ツアー'+
           '</br>'+
           '・　駐車場　　　　：　あり（約40台、有料）'+
           '</br>'+
           '・　営業時間　　　：　24時間'+
           '</br>'+
           '・　おススメ時期　：　7月∼9月（正午ごろ）'+
           '</br>'+
           '・　分類　　　　　：　絶景'+
           '</p>'+
           '</div>'+
           '<div class="infobox-footer">'+
           '<a href="./each-sightseeing/エトワール凱旋門/index.html">'+
           '<h1>詳細はこちら</h1>'+
           '</a>'+
           '</div>'+
           '</div>'+
           '</div>';

        var infowindow4 = new google.maps.InfoWindow({
          content: contentString4
        });

        var marker4 = new google.maps.Marker({
          position: エトワール凱旋門,
          map: map,
          label: {
            text:  'エトワール凱旋門',      //ラベル文字
            color: 'white',          //ラベル文字の色
            fontFamily: 'sans-serif',  //フォント
            fontWeight: 'bold',        //フォントの太さ
            fontSize: '14px'           //フォントのサイズ
          }
        });

        marker4.addListener('click', function() {
          infowindow4.open(map, marker4);
        });

        //ケネディスペースセンター
        41.890228, 12.492228
        var コロッセオ = {lat: 41.890228, lng: 12.49228};
        var contentString5 = '<div class="infobox">'+
            '<div class="inner">'+
            '<div class="infobox-header">'+
            '<h2>コロッセオ</h2>'+
            '</div>'+
            '<div class="infobox-img">'+
            '<img src="./images/ヨーロッパ/コロッセオ.jpg" alt="レゴランド">'+
            '</div>'+
            '<div class="information">'+
            '<p>'+
            '・　国　　　　　　：　フランス'+
            '</br>'+
            '・　場所　　　　　：　Page, AZ 86040'+
            '</br>'+
            '・　アクセス手段　：　車、ツアー'+
            '</br>'+
            '・　駐車場　　　　：　あり（約40台、有料）'+
            '</br>'+
            '・　営業時間　　　：　24時間'+
            '</br>'+
            '・　おススメ時期　：　7月∼9月（正午ごろ）'+
            '</br>'+
            '・　分類　　　　　：　絶景'+
            '</p>'+
            '</div>'+
            '<div class="infobox-footer">'+
            '<a href="./each-sightseeing/コロッセオ/index.html">'+
            '<h1>詳細はこちら</h1>'+
            '</a>'+
            '</div>'+
            '</div>'+
            '</div>';

         var infowindow5 = new google.maps.InfoWindow({
           content: contentString5
         });

         var marker5 = new google.maps.Marker({
           position: コロッセオ,
           map: map,
           label: {
             text:  'コロッセオ',      //ラベル文字
             color: 'white',          //ラベル文字の色
             fontFamily: 'sans-serif',  //フォント
             fontWeight: 'bold',        //フォントの太さ
             fontSize: '14px'           //フォントのサイズ
           }
         });

         marker5.addListener('click', function() {
           infowindow5.open(map, marker5);
         });

         //バインランド・プレミアム・アウトレット
         var サクラダファミリア = {lat: 41.40360905003219, lng: 2.174338884964473};
         var contentString6 = '<div class="infobox">'+
             '<div class="inner">'+
             '<div class="infobox-header">'+
             '<h2>サクラダファミリア</h2>'+
             '</div>'+
             '<div class="infobox-img">'+
             '<img src="./images/ヨーロッパ/サクラダファミリア.jpg" alt="レゴランド">'+
             '</div>'+
             '<div class="information">'+
             '<p>'+
             '・　国　　　　　　：　スペイン'+
             '</br>'+
             '・　場所　　　　　：　Page, AZ 86040'+
             '</br>'+
             '・　アクセス手段　：　車、ツアー'+
             '</br>'+
             '・　駐車場　　　　：　あり（約40台、有料）'+
             '</br>'+
             '・　営業時間　　　：　24時間'+
             '</br>'+
             '・　おススメ時期　：　7月∼9月（正午ごろ）'+
             '</br>'+
             '・　分類　　　　　：　絶景'+
             '</p>'+
             '</div>'+
             '<div class="infobox-footer">'+
             '<a href="./each-sightseeing/サクラダファミリア/index.html">'+
             '<h1>詳細はこちら</h1>'+
             '</a>'+
             '</div>'+
             '</div>'+
             '</div>';

          var infowindow6 = new google.maps.InfoWindow({
            content: contentString6
          });

          var marker6 = new google.maps.Marker({
            position: サクラダファミリア,
            map: map,
            label: {
              text:  'サクラダファミリア',      //ラベル文字
              color: 'white',          //ラベル文字の色
              fontFamily: 'sans-serif',  //フォント
              fontWeight: 'bold',        //フォントの太さ
              fontSize: '14px'           //フォントのサイズ
            }
          });

          marker6.addListener('click', function() {
            infowindow6.open(map, marker6);
          });

          //インターナショナル・プレミアム・アウトレット
          var サントリーニ島 = {lat: 36.46153122517663, lng: 25.38069244023805};
          var contentString7 = '<div class="infobox">'+
              '<div class="inner">'+
              '<div class="infobox-header">'+
              '<h2>サントリーニ島</h2>'+
              '</div>'+
              '<div class="infobox-img">'+
              '<img src="./images/ヨーロッパ/サントリーニ島.jpg" alt="レゴランド">'+
              '</div>'+
              '<div class="information">'+
              '<p>'+
              '・　国　　　　　　：　ギリシャ'+
              '</br>'+
              '・　場所　　　　　：　Page, AZ 86040'+
              '</br>'+
              '・　アクセス手段　：　車、ツアー'+
              '</br>'+
              '・　駐車場　　　　：　あり（約40台、有料）'+
              '</br>'+
              '・　営業時間　　　：　24時間'+
              '</br>'+
              '・　おススメ時期　：　7月∼9月（正午ごろ）'+
              '</br>'+
              '・　分類　　　　　：　絶景'+
              '</p>'+
              '</div>'+
              '<div class="infobox-footer">'+
              '<a href="./each-sightseeing/サントリーニ島/index.html">'+
              '<h1>詳細はこちら</h1>'+
              '</a>'+
              '</div>'+
              '</div>'+
              '</div>';

           var infowindow7 = new google.maps.InfoWindow({
             content: contentString7
           });

           var marker7 = new google.maps.Marker({
             position: サントリーニ島,
             map: map,
             label: {
               text:  'サントリーニ島',      //ラベル文字
               color: 'white',          //ラベル文字の色
               fontFamily: 'sans-serif',  //フォント
               fontWeight: 'bold',        //フォントの太さ
               fontSize: '14px'           //フォントのサイズ
             }
           });

           marker7.addListener('click', function() {
             infowindow7.open(map, marker7);
           });

           //i-drive360
           var スペイン広場 = {lat: 41.905706, lng: 12.482327};
           var contentString8 = '<div class="infobox">'+
               '<div class="inner">'+
               '<div class="infobox-header">'+
               '<h2>スペイン広場</h2>'+
               '</div>'+
               '<div class="infobox-img">'+
               '<img src="./images/ヨーロッパ/スペイン広場.jpg" alt="レゴランド">'+
               '</div>'+
               '<div class="information">'+
               '<p>'+
               '・　国　　　　　　：　イタリア'+
               '</br>'+
               '・　場所　　　　　：　Page, AZ 86040'+
               '</br>'+
               '・　アクセス手段　：　車、ツアー'+
               '</br>'+
               '・　駐車場　　　　：　あり（約40台、有料）'+
               '</br>'+
               '・　営業時間　　　：　24時間'+
               '</br>'+
               '・　おススメ時期　：　7月∼9月（正午ごろ）'+
               '</br>'+
               '・　分類　　　　　：　絶景'+
               '</p>'+
               '</div>'+
               '<div class="infobox-footer">'+
               '<a href="./each-sightseeing/スペイン広場/index.html">'+
               '<h1>詳細はこちら</h1>'+
               '</a>'+
               '</div>'+
               '</div>'+
               '</div>';

            var infowindow8 = new google.maps.InfoWindow({
              content: contentString8
            });

            var marker8 = new google.maps.Marker({
              position: スペイン広場,
              map: map,
              label: {
                text:  'スペイン広場',      //ラベル文字
                color: 'white',          //ラベル文字の色
                fontFamily: 'sans-serif',  //フォント
                fontWeight: 'bold',        //フォントの太さ
                fontSize: '14px'           //フォントのサイズ
              }
            });

            marker8.addListener('click', function() {
              infowindow8.open(map, marker8);
            });

            //フロリダモール
            var トレビの泉 = {lat: 41.90095939299408, lng: 12.48328528178079};
            var contentString9 = '<div class="infobox">'+
                '<div class="inner">'+
                '<div class="infobox-header">'+
                '<h2>トレビの泉</h2>'+
                '</div>'+
                '<div class="infobox-img">'+
                '<img src="./images/ヨーロッパ/トレビの泉.jpg" alt="レゴランド">'+
                '</div>'+
                '<div class="information">'+
                '<p>'+
                '・　国　　　　　　：　イタリア'+
                '</br>'+
                '・　場所　　　　　：　Page, AZ 86040'+
                '</br>'+
                '・　アクセス手段　：　車、ツアー'+
                '</br>'+
                '・　駐車場　　　　：　あり（約40台、有料）'+
                '</br>'+
                '・　営業時間　　　：　24時間'+
                '</br>'+
                '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                '</br>'+
                '・　分類　　　　　：　絶景'+
                '</p>'+
                '</div>'+
                '<div class="infobox-footer">'+
                '<a href="./each-sightseeing/トレビの泉/index.html">'+
                '<h1>詳細はこちら</h1>'+
                '</a>'+
                '</div>'+
                '</div>'+
                '</div>';

             var infowindow9 = new google.maps.InfoWindow({
               content: contentString9
             });

             var marker9 = new google.maps.Marker({
               position: トレビの泉,
               map: map,
               label: {
                 text:  'トレビの泉',      //ラベル文字
                 color: 'white',          //ラベル文字の色
                 fontFamily: 'sans-serif',  //フォント
                 fontWeight: 'bold',        //フォントの太さ
                 fontSize: '14px'           //フォントのサイズ
               }
             });

             marker9.addListener('click', function() {
               infowindow9.open(map, marker9);
             });

             //モールアットミレニア
             var ノートルダム大聖堂 = {lat: 48.852703, lng: 2.350049};
             var contentString10 = '<div class="infobox">'+
                 '<div class="inner">'+
                 '<div class="infobox-header">'+
                 '<h2>ノートルダム大聖堂</h2>'+
                 '</div>'+
                 '<div class="infobox-img">'+
                 '<img src="./images/ヨーロッパ/ノートルダム大聖堂.jpg" alt="レゴランド">'+
                 '</div>'+
                 '<div class="information">'+
                 '<p>'+
                 '・　国　　　　　　：　フランス'+
                 '</br>'+
                 '・　場所　　　　　：　Page, AZ 86040'+
                 '</br>'+
                 '・　アクセス手段　：　車、ツアー'+
                 '</br>'+
                 '・　駐車場　　　　：　あり（約40台、有料）'+
                 '</br>'+
                 '・　営業時間　　　：　24時間'+
                 '</br>'+
                 '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                 '</br>'+
                 '・　分類　　　　　：　絶景'+
                 '</p>'+
                 '</div>'+
                 '<div class="infobox-footer">'+
                 '<a href="./each-sightseeing/ノートルダム大聖堂/index.html">'+
                 '<h1>詳細はこちら</h1>'+
                 '</a>'+
                 '</div>'+
                 '</div>'+
                 '</div>';

              var infowindow10 = new google.maps.InfoWindow({
                content: contentString10
              });

              var marker10 = new google.maps.Marker({
                position: ノートルダム大聖堂,
                map: map,
                label: {
                  text:  'ノートルダム大聖堂',      //ラベル文字
                  color: 'white',          //ラベル文字の色
                  fontFamily: 'sans-serif',  //フォント
                  fontWeight: 'bold',        //フォントの太さ
                  fontSize: '14px'           //フォントのサイズ
                }
              });

              marker10.addListener('click', function() {
                infowindow10.open(map, marker10);
              });

              //ポワント・オーランド
              var モンサンミッシェル = {lat: 48.636017, lng: -1.511115};
              var contentString11 = '<div class="infobox">'+
                  '<div class="inner">'+
                  '<div class="infobox-header">'+
                  '<h2>モンサンミッシェル</h2>'+
                  '</div>'+
                  '<div class="infobox-img">'+
                  '<img src="./images/ヨーロッパ/モンサンミッシェル.jpg" alt="レゴランド">'+
                  '</div>'+
                  '<div class="information">'+
                  '<p>'+
                  '・　国　　　　　　：　フランス'+
                  '</br>'+
                  '・　場所　　　　　：　Page, AZ 86040'+
                  '</br>'+
                  '・　アクセス手段　：　車、ツアー'+
                  '</br>'+
                  '・　駐車場　　　　：　あり（約40台、有料）'+
                  '</br>'+
                  '・　営業時間　　　：　24時間'+
                  '</br>'+
                  '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                  '</br>'+
                  '・　分類　　　　　：　絶景'+
                  '</p>'+
                  '</div>'+
                  '<div class="infobox-footer">'+
                  '<a href="./each-sightseeing/モンサンミッシェル/index.html">'+
                  '<h1>詳細はこちら</h1>'+
                  '</a>'+
                  '</div>'+
                  '</div>'+
                  '</div>';

               var infowindow11 = new google.maps.InfoWindow({
                 content: contentString11
               });

               var marker11 = new google.maps.Marker({
                 position: モンサンミッシェル,
                 map: map,
                 label: {
                   text:  'モンサンミッシェル',      //ラベル文字
                   color: 'white',          //ラベル文字の色
                   fontFamily: 'sans-serif',  //フォント
                   fontWeight: 'bold',        //フォントの太さ
                   fontSize: '14px'           //フォントのサイズ
                 }
               });

               marker11.addListener('click', function() {
                 infowindow11.open(map, marker11);
               });

               //モールアットミレニア
               var ルーブル美術館 = {lat: 48.860632, lng: 2.337644};
               var contentString12 = '<div class="infobox">'+
                   '<div class="inner">'+
                   '<div class="infobox-header">'+
                   '<h2>ルーブル美術館</h2>'+
                   '</div>'+
                   '<div class="infobox-img">'+
                   '<img src="./images/ヨーロッパ/ルーブル美術館.jpg" alt="レゴランド">'+
                   '</div>'+
                   '<div class="information">'+
                   '<p>'+
                   '・　国　　　　　　：　フランス'+
                   '</br>'+
                   '・　場所　　　　　：　Page, AZ 86040'+
                   '</br>'+
                   '・　アクセス手段　：　車、ツアー'+
                   '</br>'+
                   '・　駐車場　　　　：　あり（約40台、有料）'+
                   '</br>'+
                   '・　営業時間　　　：　24時間'+
                   '</br>'+
                   '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                   '</br>'+
                   '・　分類　　　　　：　絶景'+
                   '</p>'+
                   '</div>'+
                   '<div class="infobox-footer">'+
                   '<a href="./each-sightseeing/ルーブル美術館/index.html">'+
                   '<h1>詳細はこちら</h1>'+
                   '</a>'+
                   '</div>'+
                   '</div>'+
                   '</div>';

                var infowindow12 = new google.maps.InfoWindow({
                  content: contentString12
                });

                var marker12 = new google.maps.Marker({
                  position: ルーブル美術館,
                  map: map,
                  label: {
                    text:  'ル―ブル美術館',      //ラベル文字
                    color: 'white',          //ラベル文字の色
                    fontFamily: 'sans-serif',  //フォント
                    fontWeight: 'bold',        //フォントの太さ
                    fontSize: '14px'           //フォントのサイズ
                  }
                });

                marker12.addListener('click', function() {
                  infowindow12.open(map, marker12);
                });

                //モールアットミレニア
                var マチュピチュ = {lat: -13.163138, lng: -72.544962};
                var contentString13 = '<div class="infobox">'+
                    '<div class="inner">'+
                    '<div class="infobox-header">'+
                    '<h2>マチュピチュ</h2>'+
                    '</div>'+
                    '<div class="infobox-img">'+
                    '<img src="./images/南米/マチュピチュ.jpg" alt="レゴランド">'+
                    '</div>'+
                    '<div class="information">'+
                    '<p>'+
                    '・　国　　　　　　：　ペルー'+
                    '</br>'+
                    '・　場所　　　　　：　Page, AZ 86040'+
                    '</br>'+
                    '・　アクセス手段　：　車、ツアー'+
                    '</br>'+
                    '・　駐車場　　　　：　あり（約40台、有料）'+
                    '</br>'+
                    '・　営業時間　　　：　24時間'+
                    '</br>'+
                    '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                    '</br>'+
                    '・　分類　　　　　：　絶景'+
                    '</p>'+
                    '</div>'+
                    '<div class="infobox-footer">'+
                    '<a href="./each-sightseeing/マチュピチュ/index.html">'+
                    '<h1>詳細はこちら</h1>'+
                    '</a>'+
                    '</div>'+
                    '</div>'+
                    '</div>';

                 var infowindow13 = new google.maps.InfoWindow({
                   content: contentString13
                 });

                 var marker13 = new google.maps.Marker({
                   position: マチュピチュ,
                   map: map,
                   label: {
                     text:  'マチュピチュ',      //ラベル文字
                     color: 'white',          //ラベル文字の色
                     fontFamily: 'sans-serif',  //フォント
                     fontWeight: 'bold',        //フォントの太さ
                     fontSize: '14px'           //フォントのサイズ
                   }
                 });

                 marker13.addListener('click', function() {
                   infowindow13.open(map, marker13);
                 });

                 //モールアットミレニア
                 var アンテロープキャニオン = {lat: 36.861911, lng: -111.374330};
                 var contentString14 = '<div class="infobox">'+
                     '<div class="inner">'+
                     '<div class="infobox-header">'+
                     '<h2>アンテロープキャニオン</h2>'+
                     '</div>'+
                     '<div class="infobox-img">'+
                     '<img src="./images/北米/アンテロープキャニオン.jpg" alt="レゴランド">'+
                     '</div>'+
                     '<div class="information">'+
                     '<p>'+
                     '・　国　　　　　　：　アメリカ'+
                     '</br>'+
                     '・　場所　　　　　：　Page, AZ 86040'+
                     '</br>'+
                     '・　アクセス手段　：　車、ツアー'+
                     '</br>'+
                     '・　駐車場　　　　：　あり（約40台、有料）'+
                     '</br>'+
                     '・　営業時間　　　：　24時間'+
                     '</br>'+
                     '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                     '</br>'+
                     '・　分類　　　　　：　絶景'+
                     '</p>'+
                     '</div>'+
                     '<div class="infobox-footer">'+
                     '<a href="./each-sightseeing/アンテロープキャニオン/index.html">'+
                     '<h1>詳細はこちら</h1>'+
                     '</a>'+
                     '</div>'+
                     '</div>'+
                     '</div>';

                  var infowindow14 = new google.maps.InfoWindow({
                    content: contentString14
                  });

                  var marker14 = new google.maps.Marker({
                    position: アンテロープキャニオン,
                    map: map,
                    label: {
                      text:  'アンテロープキャニオン',      //ラベル文字
                      color: 'white',          //ラベル文字の色
                      fontFamily: 'sans-serif',  //フォント
                      fontWeight: 'bold',        //フォントの太さ
                      fontSize: '14px'           //フォントのサイズ
                    }
                  });

                  marker14.addListener('click', function() {
                    infowindow14.open(map, marker14);
                  });

                  //モールアットミレニア
                  var イエローストーン = {lat: 44.415789, lng: -110.574315};
                  var contentString15 = '<div class="infobox">'+
                      '<div class="inner">'+
                      '<div class="infobox-header">'+
                      '<h2>イエローストーン</h2>'+
                      '</div>'+
                      '<div class="infobox-img">'+
                      '<img src="./images/北米/イエローストーン.jpg" alt="レゴランド">'+
                      '</div>'+
                      '<div class="information">'+
                      '<p>'+
                      '・　国　　　　　　：　アメリカ'+
                      '</br>'+
                      '・　場所　　　　　：　Page, AZ 86040'+
                      '</br>'+
                      '・　アクセス手段　：　車、ツアー'+
                      '</br>'+
                      '・　駐車場　　　　：　あり（約40台、有料）'+
                      '</br>'+
                      '・　営業時間　　　：　24時間'+
                      '</br>'+
                      '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                      '</br>'+
                      '・　分類　　　　　：　絶景'+
                      '</p>'+
                      '</div>'+
                      '<div class="infobox-footer">'+
                      '<a href="./each-sightseeing/イエローストーン/index.html">'+
                      '<h1>詳細はこちら</h1>'+
                      '</a>'+
                      '</div>'+
                      '</div>'+
                      '</div>';

                   var infowindow15 = new google.maps.InfoWindow({
                     content: contentString15
                   });

                   var marker15 = new google.maps.Marker({
                     position: イエローストーン,
                     map: map,
                     label: {
                       text:  'イエローストーン',      //ラベル文字
                       color: 'white',          //ラベル文字の色
                       fontFamily: 'sans-serif',  //フォント
                       fontWeight: 'bold',        //フォントの太さ
                       fontSize: '14px'           //フォントのサイズ
                     }
                   });

                   marker15.addListener('click', function() {
                     infowindow15.open(map, marker15);
                   });

                   //モールアットミレニア
                   var グリフィス天文台 = {lat: 34.118436, lng: -118.300394};
                   var contentString16 = '<div class="infobox">'+
                       '<div class="inner">'+
                       '<div class="infobox-header">'+
                       '<h2>グリフィス天文台</h2>'+
                       '</div>'+
                       '<div class="infobox-img">'+
                       '<img src="./images/北米/グリフィス天文台.jpg" alt="レゴランド">'+
                       '</div>'+
                       '<div class="information">'+
                       '<p>'+
                       '・　国　　　　　　：　アメリカ'+
                       '</br>'+
                       '・　場所　　　　　：　Page, AZ 86040'+
                       '</br>'+
                       '・　アクセス手段　：　車、ツアー'+
                       '</br>'+
                       '・　駐車場　　　　：　あり（約40台、有料）'+
                       '</br>'+
                       '・　営業時間　　　：　24時間'+
                       '</br>'+
                       '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                       '</br>'+
                       '・　分類　　　　　：　絶景'+
                       '</p>'+
                       '</div>'+
                       '<div class="infobox-footer">'+
                       '<a href="./each-sightseeing/グリフィス天文台/index.html">'+
                       '<h1>詳細はこちら</h1>'+
                       '</a>'+
                       '</div>'+
                       '</div>'+
                       '</div>';

                    var infowindow16 = new google.maps.InfoWindow({
                      content: contentString16
                    });

                    var marker16 = new google.maps.Marker({
                      position: グリフィス天文台,
                      map: map,
                      label: {
                        text:  'グリフィス天文台',      //ラベル文字
                        color: 'white',          //ラベル文字の色
                        fontFamily: 'sans-serif',  //フォント
                        fontWeight: 'bold',        //フォントの太さ
                        fontSize: '14px'           //フォントのサイズ
                      }
                    });

                    marker16.addListener('click', function() {
                      infowindow16.open(map, marker16);
                    });

                    //モールアットミレニア
                    var ゴールデンゲートブリッジ = {lat: 37.819954, lng: -122.478277};
                    var contentString17 = '<div class="infobox">'+
                        '<div class="inner">'+
                        '<div class="infobox-header">'+
                        '<h2>ゴールデンゲートブリッジ</h2>'+
                        '</div>'+
                        '<div class="infobox-img">'+
                        '<img src="./images/北米/ゴールデンゲートブリッジ.jpg" alt="レゴランド">'+
                        '</div>'+
                        '<div class="information">'+
                        '<p>'+
                        '・　国　　　　　　：　アメリカ'+
                        '</br>'+
                        '・　場所　　　　　：　Page, AZ 86040'+
                        '</br>'+
                        '・　アクセス手段　：　車、ツアー'+
                        '</br>'+
                        '・　駐車場　　　　：　あり（約40台、有料）'+
                        '</br>'+
                        '・　営業時間　　　：　24時間'+
                        '</br>'+
                        '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                        '</br>'+
                        '・　分類　　　　　：　絶景'+
                        '</p>'+
                        '</div>'+
                        '<div class="infobox-footer">'+
                        '<a href="./each-sightseeing/ゴールデンゲートブリッジ/index.html">'+
                        '<h1>詳細はこちら</h1>'+
                        '</a>'+
                        '</div>'+
                        '</div>'+
                        '</div>';

                     var infowindow17 = new google.maps.InfoWindow({
                       content: contentString17
                     });

                     var marker17 = new google.maps.Marker({
                       position: ゴールデンゲートブリッジ,
                       map: map,
                       label: {
                         text:  'ゴールデンゲートブリッジ',      //ラベル文字
                         color: 'white',          //ラベル文字の色
                         fontFamily: 'sans-serif',  //フォント
                         fontWeight: 'bold',        //フォントの太さ
                         fontSize: '14px'           //フォントのサイズ
                       }
                     });

                     marker17.addListener('click', function() {
                       infowindow17.open(map, marker17);
                     });

                     //モールアットミレニア
                     var サンタモニカ = {lat: 34.010157, lng: -118.495926};
                     var contentString18 = '<div class="infobox">'+
                         '<div class="inner">'+
                         '<div class="infobox-header">'+
                         '<h2>サンタモニカ</h2>'+
                         '</div>'+
                         '<div class="infobox-img">'+
                         '<img src="./images/北米/サンタモニカ.jpg" alt="レゴランド">'+
                         '</div>'+
                         '<div class="information">'+
                         '<p>'+
                         '・　国　　　　　　：　アメリカ'+
                         '</br>'+
                         '・　場所　　　　　：　Page, AZ 86040'+
                         '</br>'+
                         '・　アクセス手段　：　車、ツアー'+
                         '</br>'+
                         '・　駐車場　　　　：　あり（約40台、有料）'+
                         '</br>'+
                         '・　営業時間　　　：　24時間'+
                         '</br>'+
                         '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                         '</br>'+
                         '・　分類　　　　　：　絶景'+
                         '</p>'+
                         '</div>'+
                         '<div class="infobox-footer">'+
                         '<a href="./each-sightseeing/サンタモニカ/index.html">'+
                         '<h1>詳細はこちら</h1>'+
                         '</a>'+
                         '</div>'+
                         '</div>'+
                         '</div>';

                      var infowindow18 = new google.maps.InfoWindow({
                        content: contentString18
                      });

                      var marker18 = new google.maps.Marker({
                        position: サンタモニカ,
                        map: map,
                        label: {
                          text:  'サンタモニカ',      //ラベル文字
                          color: 'white',          //ラベル文字の色
                          fontFamily: 'sans-serif',  //フォント
                          fontWeight: 'bold',        //フォントの太さ
                          fontSize: '14px'           //フォントのサイズ
                        }
                      });

                      marker18.addListener('click', function() {
                        infowindow18.open(map, marker18);
                      });


                      //モールアットミレニア
                      var セントラルパーク = {lat: 40.782968, lng: -73.965361};
                      var contentString19 = '<div class="infobox">'+
                          '<div class="inner">'+
                          '<div class="infobox-header">'+
                          '<h2>セントラルパーク</h2>'+
                          '</div>'+
                          '<div class="infobox-img">'+
                          '<img src="./images/北米/セントラルパーク.jpg" alt="レゴランド">'+
                          '</div>'+
                          '<div class="information">'+
                          '<p>'+
                          '・　国　　　　　　：　アメリカ'+
                          '</br>'+
                          '・　場所　　　　　：　Page, AZ 86040'+
                          '</br>'+
                          '・　アクセス手段　：　車、ツアー'+
                          '</br>'+
                          '・　駐車場　　　　：　あり（約40台、有料）'+
                          '</br>'+
                          '・　営業時間　　　：　24時間'+
                          '</br>'+
                          '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                          '</br>'+
                          '・　分類　　　　　：　絶景'+
                          '</p>'+
                          '</div>'+
                          '<div class="infobox-footer">'+
                          '<a href="./each-sightseeing/セントラルパーク/index.html">'+
                          '<h1>詳細はこちら</h1>'+
                          '</a>'+
                          '</div>'+
                          '</div>'+
                          '</div>';

                       var infowindow19 = new google.maps.InfoWindow({
                         content: contentString19
                       });

                       var marker19 = new google.maps.Marker({
                         position: セントラルパーク,
                         map: map,
                         label: {
                           text:  'セントラルパーク',      //ラベル文字
                           color: 'white',          //ラベル文字の色
                           fontFamily: 'sans-serif',  //フォント
                           fontWeight: 'bold',        //フォントの太さ
                           fontSize: '14px'           //フォントのサイズ
                         }
                       });

                       marker19.addListener('click', function() {
                         infowindow19.open(map, marker19);
                       });


                       //モールアットミレニア
                       var タイムズスクエア = {lat: 40.757979, lng: -73.985544};
                       var contentString20 = '<div class="infobox">'+
                           '<div class="inner">'+
                           '<div class="infobox-header">'+
                           '<h2>タイムズスクエア</h2>'+
                           '</div>'+
                           '<div class="infobox-img">'+
                           '<img src="./images/北米/タイムズスクエア.jpg" alt="レゴランド">'+
                           '</div>'+
                           '<div class="information">'+
                           '<p>'+
                           '・　国　　　　　　：　アメリカ'+
                           '</br>'+
                           '・　場所　　　　　：　Page, AZ 86040'+
                           '</br>'+
                           '・　アクセス手段　：　車、ツアー'+
                           '</br>'+
                           '・　駐車場　　　　：　あり（約40台、有料）'+
                           '</br>'+
                           '・　営業時間　　　：　24時間'+
                           '</br>'+
                           '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                           '</br>'+
                           '・　分類　　　　　：　絶景'+
                           '</p>'+
                           '</div>'+
                           '<div class="infobox-footer">'+
                           '<a href="./each-sightseeing/タイムズスクエア/index.html">'+
                           '<h1>詳細はこちら</h1>'+
                           '</a>'+
                           '</div>'+
                           '</div>'+
                           '</div>';

                        var infowindow20 = new google.maps.InfoWindow({
                          content: contentString20
                        });

                        var marker20 = new google.maps.Marker({
                          position: タイムズスクエア,
                          map: map,
                          label: {
                            text:  'タイムズスクエア',      //ラベル文字
                            color: 'white',          //ラベル文字の色
                            fontFamily: 'sans-serif',  //フォント
                            fontWeight: 'bold',        //フォントの太さ
                            fontSize: '14px'           //フォントのサイズ
                          }
                        });

                        marker20.addListener('click', function() {
                          infowindow20.open(map, marker20);
                        });

                        //モールアットミレニア
                        var ハリウッド = {lat: 34.134155, lng: -118.321580};
                        var contentString21 = '<div class="infobox">'+
                            '<div class="inner">'+
                            '<div class="infobox-header">'+
                            '<h2>ハリウッドサイン</h2>'+
                            '</div>'+
                            '<div class="infobox-img">'+
                            '<img src="./images/北米/ハリウッド.jpg" alt="レゴランド">'+
                            '</div>'+
                            '<div class="information">'+
                            '<p>'+
                            '・　国　　　　　　：　アメリカ'+
                            '</br>'+
                            '・　場所　　　　　：　Page, AZ 86040'+
                            '</br>'+
                            '・　アクセス手段　：　車、ツアー'+
                            '</br>'+
                            '・　駐車場　　　　：　あり（約40台、有料）'+
                            '</br>'+
                            '・　営業時間　　　：　24時間'+
                            '</br>'+
                            '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                            '</br>'+
                            '・　分類　　　　　：　絶景'+
                            '</p>'+
                            '</div>'+
                            '<div class="infobox-footer">'+
                            '<a href="./each-sightseeing/ハリウッド/index.html">'+
                            '<h1>詳細はこちら</h1>'+
                            '</a>'+
                            '</div>'+
                            '</div>'+
                            '</div>';

                         var infowindow21 = new google.maps.InfoWindow({
                           content: contentString21
                         });

                         var marker21 = new google.maps.Marker({
                           position: ハリウッド,
                           map: map,
                           label: {
                             text:  'ハリウッドサイン',      //ラベル文字
                             color: 'white',          //ラベル文字の色
                             fontFamily: 'sans-serif',  //フォント
                             fontWeight: 'bold',        //フォントの太さ
                             fontSize: '14px'           //フォントのサイズ
                           }
                         });

                         marker21.addListener('click', function() {
                           infowindow21.open(map, marker21);
                         });

                         //モールアットミレニア
                         var ブルックリン橋 = {lat: 40.706110, lng: -73.996864};
                         var contentString22 = '<div class="infobox">'+
                             '<div class="inner">'+
                             '<div class="infobox-header">'+
                             '<h2>ブルックリン橋</h2>'+
                             '</div>'+
                             '<div class="infobox-img">'+
                             '<img src="./images/北米/ブルックリン橋.jpg" alt="レゴランド">'+
                             '</div>'+
                             '<div class="information">'+
                             '<p>'+
                             '・　国　　　　　　：　アメリカ'+
                             '</br>'+
                             '・　場所　　　　　：　Page, AZ 86040'+
                             '</br>'+
                             '・　アクセス手段　：　車、ツアー'+
                             '</br>'+
                             '・　駐車場　　　　：　あり（約40台、有料）'+
                             '</br>'+
                             '・　営業時間　　　：　24時間'+
                             '</br>'+
                             '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                             '</br>'+
                             '・　分類　　　　　：　絶景'+
                             '</p>'+
                             '</div>'+
                             '<div class="infobox-footer">'+
                             '<a href="./each-sightseeing/ブルックリン橋/index.html">'+
                             '<h1>詳細はこちら</h1>'+
                             '</a>'+
                             '</div>'+
                             '</div>'+
                             '</div>';

                          var infowindow22 = new google.maps.InfoWindow({
                            content: contentString22
                          });

                          var marker22 = new google.maps.Marker({
                            position: ブルックリン橋,
                            map: map,
                            label: {
                              text:  'ブルックリン橋',      //ラベル文字
                              color: 'white',          //ラベル文字の色
                              fontFamily: 'sans-serif',  //フォント
                              fontWeight: 'bold',        //フォントの太さ
                              fontSize: '14px'           //フォントのサイズ
                            }
                          });

                          marker22.addListener('click', function() {
                            infowindow22.open(map, marker22);
                          });

                          //モールアットミレニア
                          var フロリダディズニー = {lat: 28.385523, lng: -81.563859};
                          var contentString23 = '<div class="infobox">'+
                              '<div class="inner">'+
                              '<div class="infobox-header">'+
                              '<h2>フロリダディズニー</h2>'+
                              '</div>'+
                              '<div class="infobox-img">'+
                              '<img src="./images/北米/フロリダディズニー.jpg" alt="レゴランド">'+
                              '</div>'+
                              '<div class="information">'+
                              '<p>'+
                              '・　国　　　　　　：　アメリカ'+
                              '</br>'+
                              '・　場所　　　　　：　Page, AZ 86040'+
                              '</br>'+
                              '・　アクセス手段　：　車、ツアー'+
                              '</br>'+
                              '・　駐車場　　　　：　あり（約40台、有料）'+
                              '</br>'+
                              '・　営業時間　　　：　24時間'+
                              '</br>'+
                              '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                              '</br>'+
                              '・　分類　　　　　：　絶景'+
                              '</p>'+
                              '</div>'+
                              '<div class="infobox-footer">'+
                              '<a href="./each-sightseeing/フロリダディズニー/index.html">'+
                              '<h1>詳細はこちら</h1>'+
                              '</a>'+
                              '</div>'+
                              '</div>'+
                              '</div>';

                           var infowindow23 = new google.maps.InfoWindow({
                             content: contentString23
                           });

                           var marker23 = new google.maps.Marker({
                             position: フロリダディズニー,
                             map: map,
                             label: {
                               text:  'フロリダディズニー',      //ラベル文字
                               color: 'white',          //ラベル文字の色
                               fontFamily: 'sans-serif',  //フォント
                               fontWeight: 'bold',        //フォントの太さ
                               fontSize: '14px'           //フォントのサイズ
                             }
                           });

                           marker23.addListener('click', function() {
                             infowindow23.open(map, marker23);
                           });

                           //モールアットミレニア
                           var ホースシューベント = {lat: 36.879186, lng: -111.510413};
                           var contentString24 = '<div class="infobox">'+
                               '<div class="inner">'+
                               '<div class="infobox-header">'+
                               '<h2>ホースシューベント</h2>'+
                               '</div>'+
                               '<div class="infobox-img">'+
                               '<img src="./images/北米/ホースシューベント.jpg" alt="レゴランド">'+
                               '</div>'+
                               '<div class="information">'+
                               '<p>'+
                               '・　国　　　　　　：　アメリカ'+
                               '</br>'+
                               '・　場所　　　　　：　Page, AZ 86040'+
                               '</br>'+
                               '・　アクセス手段　：　車、ツアー'+
                               '</br>'+
                               '・　駐車場　　　　：　あり（約40台、有料）'+
                               '</br>'+
                               '・　営業時間　　　：　24時間'+
                               '</br>'+
                               '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                               '</br>'+
                               '・　分類　　　　　：　絶景'+
                               '</p>'+
                               '</div>'+
                               '<div class="infobox-footer">'+
                               '<a href="./each-sightseeing/ホースシューベント/index.html">'+
                               '<h1>詳細はこちら</h1>'+
                               '</a>'+
                               '</div>'+
                               '</div>'+
                               '</div>';

                            var infowindow24 = new google.maps.InfoWindow({
                              content: contentString24
                            });

                            var marker24 = new google.maps.Marker({
                              position: ホースシューベント,
                              map: map,
                              label: {
                                text:  'ホースシューベント',      //ラベル文字
                                color: 'white',          //ラベル文字の色
                                fontFamily: 'sans-serif',  //フォント
                                fontWeight: 'bold',        //フォントの太さ
                                fontSize: '14px'           //フォントのサイズ
                              }
                            });

                            marker24.addListener('click', function() {
                              infowindow24.open(map, marker24);
                            });

                            //モールアットミレニア
                            var メトロポリタン美術館 = {lat: 40.779498, lng: -73.963255};
                            var contentString25 = '<div class="infobox">'+
                                '<div class="inner">'+
                                '<div class="infobox-header">'+
                                '<h2>メトロポリタン美術館</h2>'+
                                '</div>'+
                                '<div class="infobox-img">'+
                                '<img src="./images/北米/メトロポリタン美術館.jpg" alt="レゴランド">'+
                                '</div>'+
                                '<div class="information">'+
                                '<p>'+
                                '・　国　　　　　　：　アメリカ'+
                                '</br>'+
                                '・　場所　　　　　：　Page, AZ 86040'+
                                '</br>'+
                                '・　アクセス手段　：　車、ツアー'+
                                '</br>'+
                                '・　駐車場　　　　：　あり（約40台、有料）'+
                                '</br>'+
                                '・　営業時間　　　：　24時間'+
                                '</br>'+
                                '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                                '</br>'+
                                '・　分類　　　　　：　絶景'+
                                '</p>'+
                                '</div>'+
                                '<div class="infobox-footer">'+
                                '<a href="./each-sightseeing/メトロポリタン美術館/index.html">'+
                                '<h1>詳細はこちら</h1>'+
                                '</a>'+
                                '</div>'+
                                '</div>'+
                                '</div>';

                             var infowindow25 = new google.maps.InfoWindow({
                               content: contentString25
                             });

                             var marker25 = new google.maps.Marker({
                               position: メトロポリタン美術館,
                               map: map,
                               label: {
                                 text:  'メトロポリタン美術館',      //ラベル文字
                                 color: 'white',          //ラベル文字の色
                                 fontFamily: 'sans-serif',  //フォント
                                 fontWeight: 'bold',        //フォントの太さ
                                 fontSize: '14px'           //フォントのサイズ
                               }
                             });

                             marker25.addListener('click', function() {
                               infowindow25.open(map, marker25);
                             });

                             //モールアットミレニア
                             var モニュメントバレー = {lat: 36.982728, lng: -110.111666};
                             var contentString26 = '<div class="infobox">'+
                                 '<div class="inner">'+
                                 '<div class="infobox-header">'+
                                 '<h2>モニュメントバレー</h2>'+
                                 '</div>'+
                                 '<div class="infobox-img">'+
                                 '<img src="./images/北米/モニュメントバレー.jpg" alt="レゴランド">'+
                                 '</div>'+
                                 '<div class="information">'+
                                 '<p>'+
                                 '・　国　　　　　　：　アメリカ'+
                                 '</br>'+
                                 '・　場所　　　　　：　Page, AZ 86040'+
                                 '</br>'+
                                 '・　アクセス手段　：　車、ツアー'+
                                 '</br>'+
                                 '・　駐車場　　　　：　あり（約40台、有料）'+
                                 '</br>'+
                                 '・　営業時間　　　：　24時間'+
                                 '</br>'+
                                 '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                                 '</br>'+
                                 '・　分類　　　　　：　絶景'+
                                 '</p>'+
                                 '</div>'+
                                 '<div class="infobox-footer">'+
                                 '<a href="./each-sightseeing/モニュメントバレー/index.html">'+
                                 '<h1>詳細はこちら</h1>'+
                                 '</a>'+
                                 '</div>'+
                                 '</div>'+
                                 '</div>';

                              var infowindow26 = new google.maps.InfoWindow({
                                content: contentString26
                              });

                              var marker26 = new google.maps.Marker({
                                position: モニュメントバレー,
                                map: map,
                                label: {
                                  text:  'モニュメントバレー',      //ラベル文字
                                  color: 'white',          //ラベル文字の色
                                  fontFamily: 'sans-serif',  //フォント
                                  fontWeight: 'bold',        //フォントの太さ
                                  fontSize: '14px'           //フォントのサイズ
                                }
                              });

                              marker26.addListener('click', function() {
                                infowindow26.open(map, marker26);
                              });

                              //モールアットミレニア
                              var 自由の女神 = {lat: 40.689282, lng: -74.044490};
                              var contentString27 = '<div class="infobox">'+
                                  '<div class="inner">'+
                                  '<div class="infobox-header">'+
                                  '<h2>自由の女神</h2>'+
                                  '</div>'+
                                  '<div class="infobox-img">'+
                                  '<img src="./images/北米/自由の女神.jpg" alt="レゴランド">'+
                                  '</div>'+
                                  '<div class="information">'+
                                  '<p>'+
                                  '・　国　　　　　　：　アメリカ'+
                                  '</br>'+
                                  '・　場所　　　　　：　Page, AZ 86040'+
                                  '</br>'+
                                  '・　アクセス手段　：　車、ツアー'+
                                  '</br>'+
                                  '・　駐車場　　　　：　あり（約40台、有料）'+
                                  '</br>'+
                                  '・　営業時間　　　：　24時間'+
                                  '</br>'+
                                  '・　おススメ時期　：　7月∼9月（正午ごろ）'+
                                  '</br>'+
                                  '・　分類　　　　　：　絶景'+
                                  '</p>'+
                                  '</div>'+
                                  '<div class="infobox-footer">'+
                                  '<a href="./each-sightseeing/自由の女神/index.html">'+
                                  '<h1>詳細はこちら</h1>'+
                                  '</a>'+
                                  '</div>'+
                                  '</div>'+
                                  '</div>';

                               var infowindow27 = new google.maps.InfoWindow({
                                 content: contentString27
                               });

                               var marker27 = new google.maps.Marker({
                                 position: 自由の女神,
                                 map: map,
                                 label: {
                                   text:  '自由の女神',      //ラベル文字
                                   color: 'white',          //ラベル文字の色
                                   fontFamily: 'sans-serif',  //フォント
                                   fontWeight: 'bold',        //フォントの太さ
                                   fontSize: '14px'           //フォントのサイズ
                                 }
                               });

                               marker27.addListener('click', function() {
                                 infowindow27.open(map, marker27);
                               });

        var markers = {
          marker1,
          marker2,
          marker3,
          marker4,
          marker5,
          marker6,
          marker7,
          marker8,
          marker9,
          marker10,
          marker11,
          marker12,
          marker13,
          marker14,
          marker15,
          marker16,
          marker17,
          marker18,
          marker19,
          marker20,
          marker21,
          marker22,
          marker23,
          marker24,
          marker25,
          marker26,
          marker27
        }

         var markerCluster = new MarkerClusterer(map, markers,
                     {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

     }
