var global_ticker_symbol;  
     
     
        
function my_search(){  
    
        var keyword = document.getElementById("search_box").value; 
        if (keyword==""){
            var ele = document.getElementById("search_box");
            ele.setCustomValidity('Please fill out this field.');
            ele.reportValidity();
           // document.getElementById('search_cancel').style.opacity= 0.3;
            
            return;
        }
    
    else{
        var urls = Array('/search_company_profile?keyword=','/search_stock_summary?keyword=','/search_recommendation?keyword=','/search_stock_candles?keyword=','/search_company_news?keyword=');
        for (let i = 0; i < urls.length; i++) {
            let http = new XMLHttpRequest();
            http.open("GET",urls[i]+keyword);
            
            http.onreadystatechange= function(){
            if (http.status == 200 && http.readyState== 4) {
               
               var jsonObj= JSON.parse(http.responseText);
               
                
                if (i==0){
                    
                    
                    document.getElementById('result1').innerHTML="";
                    document.getElementById('error').innerHTML="";
                    
                    var test_name =document.createElement('p');
                    test_name.innerHTML = jsonObj.name;
                    //ticker_name = jsonObj.ticker;
                    global_ticker_symbol = jsonObj.ticker;
                    
                                      
                    if (test_name.innerHTML == 'undefined'){
                        
                        tabs = document.getElementsByClassName('tab');
                            tabs[0].style.display = 'none';
                            tabs[1].style.display = 'none';
                            tabs[2].style.display = 'none';
                            tabs[3].style.display = 'none';
                        
                            document.getElementById('result1').innerHTML="";
                            document.getElementById('error').innerHTML="";
                            document.getElementById('result2_part1').innerHTML="";
                            document.getElementById('result2_part2').innerHTML="";
                            
                            document.getElementById('result4').innerHTML="";
                            document.getElementById('container').innerHTML="";
                   
                        
                        var error_message = document.createElement('p');
                        error_message.id = 'error_message';
                        
                        error_message.innerHTML = "Error: No record has been found,please enter a valid symbol";
                        
                        //document.getElementById('search_box').value =test_name.innerHTML;//test
                        document.getElementById('error').appendChild(error_message);
                        return;
                    }
  
                   tabs = document.getElementsByClassName('tab');
                    tabs[0].style.display = 'unset';
                    tabs[1].style.display = 'unset';
                    tabs[2].style.display = 'unset';
                    tabs[3].style.display = 'unset';
                    
                    
                    
                    
                    
                    
                    var company_name = document.createElement('div');
                    company_name.className = 'company_profile_result';
                    company_name.id = 'company_name_id';
                    var l1 = document.createElement('p');
                    l1.innerHTML = "<b>Company Name</b>"+ "    ";
                    var r1 = document.createElement('p');
                    r1.innerHTML = jsonObj.name;

                    var company_symbol_area = document.createElement('div');
                    company_symbol_area
                    company_symbol_area.className = 'company_profile_result';
                    company_symbol_area.id = 'company_profile_result_first_area';
                    
                    
                    
                    var company_symbol = document.createElement('img');
                    company_symbol.src = jsonObj.logo;
                   // company_symbol.className = 'company_profile_result';
                    company_symbol.id = 'company_profile_result_first';
                    
                    
                   
                    
                    //company_name.innerHTML = "<b>Company Name</b> " +jsonObj.name; 
                    
                    var stock_ticker_symbol = document.createElement('div');
                    stock_ticker_symbol.className = 'company_profile_result';
                    stock_ticker_symbol.id = 'stock_ticker_symbol_id';
                    
                    
                    var l2 = document.createElement('p');
                    l2.innerHTML = "<b>Stock Ticker Symbol</b> ";
                    var r2= document.createElement('p');
                    r2.id = 'r2';
                    r2.innerHTML =  jsonObj.ticker;
                    
                    
                    
                   //
                    //stock_ticker_symbol.innerHTML = "<b>Stock Ticker Symbol</b>" + jsonObj.ticker;
                        
                    var stock_exchange_code = document.createElement('div');
                    stock_exchange_code.className = 'company_profile_result';
                    stock_exchange_code.id = 'stock_exchange_code_id';
                    
                    var l3 = document.createElement('p');
                    l3.innerHTML = "<b>Stock Exchange Code</b>";
                    var r3= document.createElement('p');
                    r3.innerHTML =  jsonObj.exchange;
                    
                    
                 //   stock_exchange_code.innerHTML ="<b>Stock Exchange Code</b> " + jsonObj.exchange;
                        
                    var company_start_date = document.createElement('div');
                    company_start_date.className = 'company_profile_result';
                    company_start_date.id = 'company_start_date_id';
                    
                    var l4 = document.createElement('p');
                    l4.innerHTML = "<b>Company Start Date </b>";
                    var r4= document.createElement('p');
                    r4.innerHTML =  jsonObj.ipo;
                    
                    
                    //company_start_date.innerHTML = "<b>Company Start Date </b>" + jsonObj.ipo;
                        
                    var category = document.createElement('p');
                    category.className = 'company_profile_result';
                    category.id = 'category_id';
                    
                    var l5 = document.createElement('p');
                    l5.innerHTML = "<b>Category </b>";
                    var r5= document.createElement('p');
                    r5.innerHTML =  jsonObj.finnhubIndustry;
                    
                    l1.className = 'left_content_company_profile';
                    r1.className = 'right_content_company_profile';
                    l2.className = 'left_content_company_profile';
                    r2.className = 'right_content_company_profile';
                    l3.className = 'left_content_company_profile';
                    r3.className = 'right_content_company_profile';
                    l4.className = 'left_content_company_profile';
                    r4.className = 'right_content_company_profile';
                    l5.className = 'left_content_company_profile';
                    r5.className = 'right_content_company_profile';
                    
                    
                    
                    
                    
                  //  category.innerHTML = "<b>Category </b>" + jsonObj.finnhubIndustry;
                    
                    document.getElementById('result1').appendChild(company_symbol_area);
                    document.getElementById('company_profile_result_first_area').appendChild(company_symbol);
                    
                    
                    
                    document.getElementById('result1').appendChild(company_name);
                    document.getElementById('company_name_id').appendChild(l1);
                    document.getElementById('company_name_id').appendChild(r1);
                    
                    
                    document.getElementById('result1').appendChild(stock_ticker_symbol);
                    document.getElementById('stock_ticker_symbol_id').appendChild(l2);
                    document.getElementById('stock_ticker_symbol_id').appendChild(r2);
                    
                    document.getElementById('result1').appendChild(stock_exchange_code);
                    document.getElementById('stock_exchange_code_id').appendChild(l3);
                    document.getElementById('stock_exchange_code_id').appendChild(r3);
                    
                    
                    document.getElementById('result1').appendChild(company_start_date);
                    document.getElementById('company_start_date_id').appendChild(l4);
                    document.getElementById('company_start_date_id').appendChild(r4);
                    
                    
                    document.getElementById('result1').appendChild(category);
                    document.getElementById('category_id').appendChild(l5);
                    document.getElementById('category_id').appendChild(r5);
                    
                    
                    
                } //end of i==0;
                else if(i==1){
                document.getElementById('result2_part1').innerHTML="";
;
                    
                    stock_ticker_symbol_2 = document.createElement('p');
                    
                    
                    stock_ticker_symbol_2.className = 'stock_summary_result';
                    stock_ticker_symbol_2.innerHTML = "<b>Stock Ticker Symbol</b> " +keyword;

                    stock_ticker_symbol_2.id = 'stock_ticker_symbol_2';
                    document.getElementById('result2_part1').appendChild(stock_ticker_symbol_2);
                    
                    
                    var trading_day = document.createElement('p');
                    trading_day.className = 'stock_summary_result';
                    trading_date = unix_to_date(jsonObj.t);
                    
                    trading_day.innerHTML = "<b>Trading Day</b> " +trading_date;
                    document.getElementById('result2_part1').appendChild(trading_day);
                    
                    var previous_closing_price = document.createElement('p');
                    previous_closing_price.className = 'stock_summary_result';
                    previous_closing_price.innerHTML = "<b>Previous Closing Price</b> " + jsonObj.pc;
                    document.getElementById('result2_part1').appendChild(previous_closing_price);
                    
                    var opening_price = document.createElement('p');
                    opening_price.className = 'stock_summary_result';
                    opening_price.innerHTML = "<b>Opening Price</b> " + jsonObj.o;
                    document.getElementById('result2_part1').appendChild(opening_price);
                    
                    var high_price = document.createElement('p');
                    high_price.className = 'stock_summary_result';
                    high_price.innerHTML = "<b>High Price</b> " + jsonObj.h;
                    document.getElementById('result2_part1').appendChild(high_price);
                    
                    var low_price = document.createElement('p');
                    low_price.className = 'stock_summary_result';
                    low_price.innerHTML = "<b>Low Price</b> " + jsonObj.l;
                    document.getElementById('result2_part1').appendChild(low_price);
                    
                    var change = document.createElement('p');
                    change.className = 'stock_summary_result';
                    change.id = 'change_id';
                    change.innerHTML = "<b>Change </b> " + jsonObj.d;
                    document.getElementById('result2_part1').appendChild(change);

                    
                    
                    var change_percent = document.createElement('p');
                    change_percent.className = 'stock_summary_result';
                    change_percent.innerHTML = "<b>Change Percent</b> " + jsonObj.dp;
                    change_percent.id = 'change_percent_id';
                    document.getElementById('result2_part1').appendChild(change_percent);
                    
                    
                    if (jsonObj.d >0){
                        //arrow_up = document.createElement('img');
                        //arrow_up.src = 'img/GreenArrowUp.png';
                        document.getElementById('change_id').id = 'change_id_green';
                        document.getElementById('change_percent_id').id = 'change_percent_id_green';
                        
                        
                        
                    }
                    else{
                        document.getElementById('change_id').id = 'change_id_red';
                        document.getElementById('change_percent_id').id = 'change_percent_id_red';
                       // arrow_down = document.createElement('img');
                        //arrow_down.src = 'img/RedArrowDown.png';
                        //document.getElementById('change_id').style.background-image = "url('img/RedArrowDown.png')";
                    }
                    
                    
                    
                    
                    
                    
                    
                }//end of i==1;
                else if (i==2){
                    document.getElementById('result2_part2').innerHTML="";
                    var grid_value = [jsonObj.strongSell,jsonObj.sell,jsonObj.hold,jsonObj.buy,jsonObj.strongBuy];
                    
                    var result_2_grid = document.createElement('div');
                    
                    result_2_grid.className = 'grid';
                    result_2_grid.id = 'grid';
                    
                    document.getElementById('result2_part2').appendChild(result_2_grid);
                    
                    var strongSell = document.createElement('p');
                    var strongBuy = document.createElement('p');
                    
                    strongSell.className = 'grid_element';
                    strongBuy.className = 'grid_element';
                    strongSell.id='strongSell';
                    strongBuy.id = 'strongBuy';
                    strongSell.innerHTML = 'Strong <br> Sell';
                    strongBuy.innerHTML = 'Strong <br> Buy';
                
                    document.getElementById('grid').appendChild(strongSell);
                    
                    for (var m=0;m<5;m++){
                        var one_grid = document.createElement('p');
                        one_grid.className= 'grid_element';
                        one_grid.id = 'grid_'+m;
                        one_grid.innerHTML = grid_value[m];
                        document.getElementById('grid').appendChild(one_grid);

                        
                    }
                    
                   
                    document.getElementById('grid').appendChild(strongBuy);

                    
                    var recommendation_trends = document.createElement('p');
                    //recommendation_trends.className = 'stock_summary_result';
                    recommendation_trends.id = 'recommendation_trends_id';
                    recommendation_trends.innerHTML = "Recommendation Trends"
                    document.getElementById('result2_part2').appendChild(recommendation_trends);
                    
                }//end of i==2;
                else if (i==3){
                //document.getElementById('search_cancel').style.opacity = 0.1;
                    document.getElementById('container').innerHTML="";
                var dates_chart = jsonObj.t;
                var stock_price_chart = jsonObj.c;
                var volume_chart = jsonObj.v;
                
            
                     //document.getElementById('result3').innerHTML = "";
                    
                    
                    highcharts(keyword,dates_chart,stock_price_chart,volume_chart);
                    
                                        
                    
                     //document.getElementById('result3').innerHTML = dates_chart;
                    
                }//end of i==3;
                
                else if (i==4){
                    document.getElementById('result4').innerHTML="";
                    
                    for (let j =0;j<Object.keys(jsonObj).length;j++){
                        var news = document.createElement('div');
                        news.className = 'company_news_result';
                        news.id = 'news_' +j;
                        
                        
                        var news_title= document.createElement('p');
                        news_title.className = 'news_title';
                        news_title.innerHTML = jsonObj[j].headline;
                        
                        var news_image = document.createElement('img');
                        news_image.className = 'news_image';
                        news_image.src = jsonObj[j].image;
                        
                        
                        var news_date = document.createElement('p');
                        news_date.className = 'news_date';
                        var date_utc = unix_to_date(jsonObj[j].datetime);
                        news_date.innerHTML = date_utc;

                        
                        var news_url = document.createElement('a');
                        var link = document.createTextNode("See Original Post");
                        news_url.appendChild(link); 
                        
                        
                        news_url.className = 'news_url';
                        //news_url.title = 'See Original Post';
                        news_url.href = jsonObj[j].url; 
                        news_url.target = "_blank";
                        
                        
                        document.getElementById('result4').appendChild(news);
                        document.getElementById('news_' +j).appendChild(news_image);
                        document.getElementById('news_' +j).appendChild(news_title);
                        document.getElementById('news_' +j).appendChild(news_date);
                        document.getElementById('news_' +j).appendChild(news_url);
                        
                        
                        
                        
                        

                  }


                }//end of i==4;

               
                
           }//end of http if;
                
        
            }//end of readystatechange;
        http.send();
        
        }//end of for loop;
        
        
        
        
        
    }//end of else;
    
    
     //summary_change_ticker();
     setTimeout(function () {
        stock_ticker_symbol_2.innerHTML =  "<b>Stock Ticker Symbol</b> " + global_ticker_symbol;
            
    }, 1400);
    
    
    
    
    }//end of function;
              

    function clean_search_box(){
            document.getElementById('search_box').value = ""
            document.getElementById('error').innerHTML = "";
            document.getElementById('result1').innerHTML = "";
            document.getElementById('result2_part1').innerHTML = "";
            document.getElementById('result2_part2').innerHTML = "";
            document.getElementById('container').innerHTML = "";
            document.getElementById('result4').innerHTML = "";
            var tabs = document.getElementsByClassName('tab');
                            tabs[0].style.display = 'none';
                            tabs[1].style.display = 'none';
                            tabs[2].style.display = 'none';
                            tabs[3].style.display = 'none';
       
        }
            
            
    function unix_to_date(timestamp){
        var a = new Date(timestamp*1000);
        var months_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var year = a.getFullYear();
        var month = months_name[a.getMonth()];
        var date = a.getDate();
        var result = date + ' ' + month +','+year ;
        return result;
    }    
                
            
    function openresult(num){
        document.getElementById('result1').style.display = "none";
        document.getElementById('result2').style.display = "none";
        document.getElementById('container').style.display = "none";
        document.getElementById('result4').style.display = "none";
        if (num=='3'){
            document.getElementById('container').style.display = 'unset';
            
        }
        else{document.getElementById('result'+num).style.display = "unset";}
    }

    
   function highcharts(keyword,dates_chart,stock_price_chart,volume_chart){    

       let current_date = new Date();
       mm = current_date.getMonth()+1;
       yyyy = current_date.getFullYear();
       dd = current_date.getDate();
       if (mm <=9){
           mm = '0' + mm.toString();
       };
       if (dd <=9){
           dd = '0' + dd.toString();
       };

       
       var time_volume = new Array();
       var time_price = new Array();
       
       for (var k =0;k <dates_chart.length;k++){
                        time_price.push([dates_chart[k]*1000,stock_price_chart[k]]);
                        time_volume.push([dates_chart[k]*1000,volume_chart[k]]);
                        };
       
       
        Highcharts.stockChart('container', {
  plotOptions: {
            series: {
                pointPlacement: 'on',
                pointWidth: 6,
                states: {
            inactive: {
                opacity: 0.5
                
            }
        }
                
            }//end of series;
        },//end of plotOptions;
            
            
         column: {
                stacking: 'normal'
         },
                              
                     
        rangeSelector: {
            buttons: [{
                type: 'day',
                count: 7,
                text: '7d'
            }, {
                type: 'day',
                count: 15,
                text: '15d'
            }, 
                      {
                type: 'month',
                count: 1,
                text: '1m'
            },{
                type: 'month',
                count: 3,
                text: '3m'
                
            },{
                type: 'month',
                count: 6,
                text: '6m'
            }],
            selected: 0,
            inputEnabled: true
        },

            
        xAxis: {
    type: 'datetime',
            ordinal: true
    

  },
        title: {
            text: keyword + ' Stock Price '+ yyyy +'-'+mm + '-' + dd
        },
        
        subtitle: {
            useHTML: true,
            text: ' <a href="https://finnhub.io/" target="_blank"> <u>Source:Finnhub</u></a>'
        },
        yAxis:[{
            opposite: false,
           
            title: {
                text: 'Stock Price'
            }
        },{
 
            title: {
                text: 'Volume'
            }
        }   
            ],
        legend: {
        enabled: true
    },
            
            
        series: [{
            name: 'Stock Price',
            data: time_price,
            type: 'area',
            yAxis: 0,
     
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
                
            }
            
            
            
        } //end of price data;
                 ,{
            name: 'Volume',
            data: time_volume,
            type: 'column',
            linkedTo: ':previous',        
            yAxis: 1,        

            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }
                  
                
                ]
    });
       
      
            
        
   }//end of high charts;
