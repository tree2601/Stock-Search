# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START gae_python38_app]
# [START gae_python3_app]
from flask import Flask,request
import requests
from datetime import datetime
from dateutil.relativedelta import relativedelta, MO

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return app.send_static_file("index.html")

    #return 'No route hello tree World!'

@app.route('/search_company_news')
def search_company_news():
    keyword = request.args.get("keyword")
    to_date = datetime.today() + relativedelta(hours=-8)
    from_date = to_date + relativedelta( days=-30)
    time_to_date = to_date.strftime("%Y-%m-%d")
    time_from_date = from_date.strftime("%Y-%m-%d")
    payload = {'symbol': keyword, 'from':time_from_date,'to':time_to_date,'token': "c83vt8iad3ide9heec6g"}
    r_company_news = requests.get('https://finnhub.io/api/v1/company-news',params = payload)
    res_company_news = r_company_news.json()

    i, j = 0, 0
    company_news_dict = {}
    for i in range(0, len(res_company_news)):
        if res_company_news[i]['image'] != '' and res_company_news[i]['headline'] != '' and res_company_news[i]['url'] != '' and res_company_news[i]['datetime'] != '':
            company_news_dict[j] = res_company_news[i]
            if len(company_news_dict) >= 5:
                break
            j += 1

    company_news_dict
    return company_news_dict




@app.route('/search_stock_candles')
def search_stock_candles():
    keyword = request.args.get("keyword")
    to_date = datetime.today() + relativedelta(hours=-8)
    from_date = to_date + relativedelta(months=-6, days=-1)
    timestamp_to_date = int(to_date.timestamp())
    timestamp_from_date = int(from_date.timestamp())
    payload = {'symbol': keyword, 'resolution':'D', 'from':timestamp_from_date,'to':timestamp_to_date,'token': "c83vt8iad3ide9heec6g"}
    r_stock_candles = requests.get(' https://finnhub.io/api/v1/stock/candle',params = payload)
    res_stock_candles = r_stock_candles.json()
    return res_stock_candles


@app.route('/search_stock_summary')
def search_stock_summary():
    keyword = request.args.get("keyword")
    payload = {'symbol': keyword, 'token': "c83vt8iad3ide9heec6g"}
    r_quote = requests.get(' https://finnhub.io/api/v1/quote',params = payload)
    res_quote = r_quote.json()
    return res_quote

@app.route('/search_recommendation')
def search_recommendation():
    keyword = request.args.get("keyword")
    payload = {'symbol': keyword, 'token': "c83vt8iad3ide9heec6g"}
    r_recommendation= requests.get("https://finnhub.io/api/v1/stock/recommendation",params = payload)
    res_recommendation = r_recommendation.json()

    return res_recommendation[0]


@app.route('/search_company_profile')
def search_company_profile():
    keyword = request.args.get("keyword")
    payload = {'symbol': keyword,'token':"c83vt8iad3ide9heec6g"}
    r_company_profile = requests.get("https://finnhub.io/api/v1/stock/profile2",params = payload)
    res_company_profile = r_company_profile.json()
    return res_company_profile





    #payload_company_news = {'symbol':"AAPL"}
    #r_company_news = requests.get("https://finnhub.io/api/v1/company-news",params = payload_company_news)

    #res_stock_candles = r_stock_candles.json()
    #res_company_news = r_company_news.json()




if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. You
    # can configure startup instructions by adding `entrypoint` to app.yaml.
    app.run(host='0.0.0.0', port=8080, debug=True)
# [END gae_python3_app]
# [END gae_python38_app]
