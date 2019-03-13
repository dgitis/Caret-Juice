---
title: US Population Data for Google Analytics
date: 2019-03-13
tags: Google Analytics
category: Recipes
author: damon
excerpt: Format US census data and import into GA
facebook_img: https://www.caretjuice.com/blog/geo-data-for-ga/geo-data-for-ga-facebook.png
twitter_img: https://www.caretjuice.com/blog/geo-data-for-ga/geo-data-for-ga-twitter.png
---
Geography data import in Google Analytics is a lesser-used feature. In their docs, Google emphasizes the ability to create custom sales districts. While this is quite useful for the right type of business, you can also use geo-data import to augment your data.

Please note, this covers how to format the data for Google. If you just want to import the data that I've formatted, skip to the end of this post, grab the CSV and follow the instructions in the last section.

Google lets you match your imported data to City ID, Country ISO code, Region ID, and Sub-Continent Code so to start you’ll want some data that you can match at that level.

Additionally, you can only import custom dimensions this way. This isn’t really a problem but it means that you’ll probably need to do some pre-processing of your data to, for example, turn numerical data in to buckets that are suitable as dimensions.

I looked at importing raw numerical data and then bucketing the data via custom segments, but GA doesn’t let you create segments using less than or greater than operators and doing this via regular expressions seems like a quick way to give myself nightmares.

First, let's look at [Google's geo data]('https://developers.google.com/analytics/devguides/collection/protocol/v1/geoid').


```python

import pandas as pd
import numpy as np

ga = pd.read_csv('geotargets-2019-02-11.csv')
ga.head()

```




<div class="dataframe-wrapper">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Criteria ID</th>
      <th>Name</th>
      <th>Canonical Name</th>
      <th>Parent ID</th>
      <th>Country Code</th>
      <th>Target Type</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1000002</td>
      <td>Kabul</td>
      <td>Kabul,Kabul,Afghanistan</td>
      <td>9075393.0</td>
      <td>AF</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1000003</td>
      <td>Luanda</td>
      <td>Luanda,Luanda Province,Angola</td>
      <td>9070431.0</td>
      <td>AO</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1000004</td>
      <td>The Valley</td>
      <td>The Valley,Anguilla</td>
      <td>2660.0</td>
      <td>AI</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1000010</td>
      <td>Abu Dhabi</td>
      <td>Abu Dhabi,Abu Dhabi,United Arab Emirates</td>
      <td>9041082.0</td>
      <td>AE</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1000011</td>
      <td>Ajman</td>
      <td>Ajman,Ajman,United Arab Emirates</td>
      <td>9047096.0</td>
      <td>AE</td>
      <td>City</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
</div>



## Google Analytics Geo Data

GA uses the Criteria ID to match city data so we need to find a way to match our external data with this ID.

For that, we can replicate the Canonical Name in our external data without too much manual intervention and then merge the two data sets on Canonical Name before uploading the merged data to GA.

It's not evident in the above sample, but there are many more *Target Types* than just the four entities that we can match to GA data. The techniques I describe here would be fantastic when combined with Zip/Postal Code census data to analyze conversion rates by average household income.

However, Google's geo data is used for more products than just GA, Ads being a prime example. It doesn't seem like you can back door postal code and other data types into GA using the data import feature.


```python
ga['Target Type'].value_counts()
```




    Postal Code               48390
    City                      38101
    Neighborhood               4666
    County                     3417
    Municipality               2117
    Province                   1131
    District                    948
    Region                      909
    Congressional District      441
    Airport                     395
    Department                  240
    State                       235
    University                  219
    Country                     213
    City Region                 183
    Governorate                 121
    National Park                96
    Borough                      88
    Prefecture                   49
    Okrug                        28
    Canton                       26
    Autonomous Community         22
    TV Region                    14
    Union Territory               7
    Territory                     4
    Name: Target Type, dtype: int64



The basic pattern for city canonicals seems to be *City,State,Country*. However, a deeper look into the data reveals that this pattern doesn't hold one-hundred percent of the time as there are sometimes multiple non-city entities that would have naming collisions if without modifying the canonical. As a result, some cities canonicalize to *City,City,State,Country*.

Luckily, these collisions don't seem to be a problem if you remove the non-city entities from this data. So we're going to remove anything that isn't a city.

We'll be matching US city population data in this example, so let's also remove the non-US data.


```python

ga = ga[ga['Country Code'] == 'US']
ga = ga[ga['Target Type'] == 'City']
ga.head()
```




<div class="dataframe-wrapper">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Criteria ID</th>
      <th>Name</th>
      <th>Canonical Name</th>
      <th>Parent ID</th>
      <th>Country Code</th>
      <th>Target Type</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>10642</th>
      <td>1012873</td>
      <td>Anchorage</td>
      <td>Anchorage,Anchorage,Alaska,United States</td>
      <td>21132.0</td>
      <td>US</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>10643</th>
      <td>1012874</td>
      <td>Anderson</td>
      <td>Anderson,Alaska,United States</td>
      <td>21132.0</td>
      <td>US</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>10644</th>
      <td>1012875</td>
      <td>Angoon</td>
      <td>Angoon,Alaska,United States</td>
      <td>21132.0</td>
      <td>US</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>10645</th>
      <td>1012876</td>
      <td>Atqasuk</td>
      <td>Atqasuk,Alaska,United States</td>
      <td>21132.0</td>
      <td>US</td>
      <td>City</td>
      <td>Active</td>
    </tr>
    <tr>
      <th>10646</th>
      <td>1012877</td>
      <td>Utqiagvik</td>
      <td>Utqiagvik,Alaska,United States</td>
      <td>21132.0</td>
      <td>US</td>
      <td>City</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>
</div>



You can see Anchorage as an example of a canonical that uses the *City,City,State,Country* pattern.

Another pattern that is used to avoid collisions is *City,County,State,Country*. Luckily Google seems to add "County" to the end of every county name so this will be fairly easy to detect and fix.

In addition, a little birdie told me that we're going to have problems with matching "Saint" and "St." as well as consitently matching names with "Town" and "Township" in city names.

So let's make canonicals that are more useful to us by using just the *City,State,Country* pattern, standardizing all names to use "St." rather than "Saint" and drop "Town" and "Township" from names.

We'll drop some columns that we're done with while we're at it. Please note I spent days comparing source and formatted columns for potential collisions and errors before dropping any data. If you're following along with another data set, don't drop anything just yet.


```python

import re
no_match = []
def ga_format_temp_canonical(string):
  if "Saint" in string:
    string = string.replace('Saint', 'St.')
  if "Township" in string:
    string = string.replace(' Township', '')
  if " Town" in string:
    string = string.replace(' Town', '')
  #find and remove County
  match = re.search(r"^([\w \-\.\/]+),([\w ]+) County,(.*)", string)
  if match:
    string = match.group(1) + ',' + match.group(3)
  #find and remove duplicate City patterns
  match = re.search(r"^([\w \-\.\/]+),([\w ]+),(.*)", string)
  if match:
    if match.group(1) == match.group(2):
      string = match.group(2) + ',' + match.group(3)
      return string
    else:
      return string
  else:
    no_match.append(string) #for finding holes in our regex
    return string
  return "Function failed"


 
ga['Temp Canonical'] = ga['Canonical Name'].apply(ga_format_temp_canonical)


ga = ga.drop(['Name','Canonical Name', 'Parent ID', 'Country Code', 'Target Type', 'Status'], axis=1)
ga.head()
```




<div class="dataframe-wrapper">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Criteria ID</th>
      <th>Temp Canonical</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>10642</th>
      <td>1012873</td>
      <td>Anchorage,Alaska,United States</td>
    </tr>
    <tr>
      <th>10643</th>
      <td>1012874</td>
      <td>Anderson,Alaska,United States</td>
    </tr>
    <tr>
      <th>10644</th>
      <td>1012875</td>
      <td>Angoon,Alaska,United States</td>
    </tr>
    <tr>
      <th>10645</th>
      <td>1012876</td>
      <td>Atqasuk,Alaska,United States</td>
    </tr>
    <tr>
      <th>10646</th>
      <td>1012877</td>
      <td>Utqiagvik,Alaska,United States</td>
    </tr>
  </tbody>
</table>
</div>



## US Census Data
So for this exercise, I'm going to grab [city and town population data from the US census](https://www.census.gov/data/tables/2017/demo/popest/total-cities-and-towns.html). This dataset is particularly convenient because it is offered in CSV format without any need for scraping or other processing. It is also very thorough as it includes geographical estimates for the entire US population.

By comparison, Canadian data seems to be limited to actual cities (as defined by their respective provinces) or broken out into census geo codes that need to be remapped separately.

Let's grab the US data and look at it.


```python

us = pd.read_csv('sub-est2017_all.csv', encoding = "ISO-8859-1")
us.head()
```




<div class="dataframe-wrapper">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>SUMLEV</th>
      <th>STATE</th>
      <th>COUNTY</th>
      <th>PLACE</th>
      <th>COUSUB</th>
      <th>CONCIT</th>
      <th>PRIMGEO_FLAG</th>
      <th>FUNCSTAT</th>
      <th>NAME</th>
      <th>STNAME</th>
      <th>CENSUS2010POP</th>
      <th>ESTIMATESBASE2010</th>
      <th>POPESTIMATE2010</th>
      <th>POPESTIMATE2011</th>
      <th>POPESTIMATE2012</th>
      <th>POPESTIMATE2013</th>
      <th>POPESTIMATE2014</th>
      <th>POPESTIMATE2015</th>
      <th>POPESTIMATE2016</th>
      <th>POPESTIMATE2017</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>40</td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>A</td>
      <td>Alabama</td>
      <td>Alabama</td>
      <td>4779736</td>
      <td>4780135</td>
      <td>4785579</td>
      <td>4798649</td>
      <td>4813946</td>
      <td>4827660</td>
      <td>4840037</td>
      <td>4850858</td>
      <td>4860545</td>
      <td>4874747</td>
    </tr>
    <tr>
      <th>1</th>
      <td>162</td>
      <td>1</td>
      <td>0</td>
      <td>124</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>A</td>
      <td>Abbeville city</td>
      <td>Alabama</td>
      <td>2688</td>
      <td>2688</td>
      <td>2684</td>
      <td>2677</td>
      <td>2629</td>
      <td>2612</td>
      <td>2595</td>
      <td>2587</td>
      <td>2575</td>
      <td>2567</td>
    </tr>
    <tr>
      <th>2</th>
      <td>162</td>
      <td>1</td>
      <td>0</td>
      <td>460</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>A</td>
      <td>Adamsville city</td>
      <td>Alabama</td>
      <td>4522</td>
      <td>4522</td>
      <td>4516</td>
      <td>4502</td>
      <td>4479</td>
      <td>4457</td>
      <td>4437</td>
      <td>4409</td>
      <td>4376</td>
      <td>4347</td>
    </tr>
    <tr>
      <th>3</th>
      <td>162</td>
      <td>1</td>
      <td>0</td>
      <td>484</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>A</td>
      <td>Addison town</td>
      <td>Alabama</td>
      <td>758</td>
      <td>754</td>
      <td>751</td>
      <td>751</td>
      <td>744</td>
      <td>743</td>
      <td>740</td>
      <td>734</td>
      <td>734</td>
      <td>728</td>
    </tr>
    <tr>
      <th>4</th>
      <td>162</td>
      <td>1</td>
      <td>0</td>
      <td>676</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>A</td>
      <td>Akron town</td>
      <td>Alabama</td>
      <td>356</td>
      <td>356</td>
      <td>355</td>
      <td>345</td>
      <td>345</td>
      <td>341</td>
      <td>337</td>
      <td>335</td>
      <td>332</td>
      <td>332</td>
    </tr>
  </tbody>
</table>
</div>



Well that's an easy way to get a headache.

Once again presenting a veneer of confidence that masks the trial and error that went in to producing this, let's fix this data and drop everything we don't need.

We're going to take the name and state name fields and fuse them together with some commas and a country name to match against the *Temp Canonical* that we created in the GA set.

I don't know what the *PRIMGEO_FLAG*, or primitive geography flag, is for. But what it does is duplicate all of the data. Let's drop every row where it equals 0. This will also have the side-benefit of removing state populations from our data.

If you look through the source data, you will see all sorts of post-fixes in the *NAME* field like *city* and *charter township*. We'll need to drop them and while we're at it we're going to make sure "Saint," "Township," and "Town" are standardized the same way as our Google data.

This will create quite a few duplicate canonicals. The (pt.) post-fix stands for part and to match the Google data we want to amalgamate everything and look at the whole. So we'll do that, sum the 2017 population estimate and drop all of the other fields in the process.

Finally, we'll drop rural and county data that isn't located in a town or city that we can match to the Google data.


```python

us = us[us['PRIMGEO_FLAG'] != 0]

def format_canonical_name(city, state):
  #US data uses St. for Saint consistently, Google is mixed so standardize on US
  if "Saint" in city:
    city = city.replace('Saint', 'St.')
  if "Township" in city:
    city = city.replace(' Township', '')
  if " Town" in city:
    city = city.replace(' Town', '')
  #Careful with the order here
  if city.endswith(' city and borough'):
    city = city[:-17]
  elif city.endswith(' charter township'):
    city = city[:-17]
  elif city.endswith(' municipality'):
    city = city[:-13]
  elif city.endswith(' city'):
    city = city[:-5]
  elif city.endswith(' town'):
    city = city[:-5]
  elif city.endswith(' borough'):
    city = city[:-8]
  elif city.endswith(' city (pt.)'):
    city  = city[:-11]
  elif city.endswith(' township'):
    city = city[:-9]
  elif city.endswith(' village'):
    city = city[:-8]
  elif city.endswith(' charter'):
    city = city[:-8]
  elif city.endswith(' town (pt.)'):
    city = city[:-11]
  elif city.endswith(' borough (pt.)'):
    city = city[:-14]
  elif city.endswith(' village (pt.)'):
    city = city[:-14]
  elif city.endswith(' city (balance) (pt.)'):
    city = city[:-21]
  elif city.endswith(' city (balance)'):
    city = city[:-15]
  return city + ',' + state +',United States'

us[['Temp Canonical']] = us.apply( lambda row: pd.Series(format_canonical_name(row[8], row[9])), axis=1 )

us = us.groupby(['Temp Canonical'], as_index=False)['POPESTIMATE2017'].sum()

#sometimes we can't automatically generate working canonicals
manual_interventions = {
    'Nashville-Davidson metropolitan government (balance),Tennessee,United States': 'Nashville,Tennessee,United States',
    'Louisville/Jefferson County metro government (balance),Kentucky,United States': 'Louisville,Kentucky,United States',
    'Urban Honolulu CDP,Hawaii,United States': 'Honolulu,Hawaii,United States',
    'Lexington-Fayette urban county,Kentucky,United States': 'Lexington,Kentucky,United States',
    'Boise City,Idaho,United States': 'Boise,Idaho,United States',
    'San Buenaventura (Ventura),California,United States': 'Ventura,California,United States',
    'New York,New York,United States': 'New York,United States',
    'Union City,Ohio,United States': 'Union,Ohio,United States',
    'Penn Run,Pennsylvania,United States': 'Penn,Pennsylvania,United States',
    'Lakewood,Pierce,Washington,United States': 'Lakewood,Washington,United States',        
}
for key, value in manual_interventions.items():
  us.loc[us['Temp Canonical'] == key, 'Temp Canonical' ] = value

#We're only interested in urban population
us = us[~us['Temp Canonical'].str.startswith('Balance of')  ]

#Let's also get rid of county data
us = us[~us['Temp Canonical'].str.contains('County')]


us.head()
```




<div class="dataframe-wrapper">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Temp Canonical</th>
      <th>POPESTIMATE2017</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Aastad,Minnesota,United States</td>
      <td>213</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Abbeville,Alabama,United States</td>
      <td>2567</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Abbeville,Georgia,United States</td>
      <td>2789</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Abbeville,Louisiana,United States</td>
      <td>12272</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Abbeville,Mississippi,United States</td>
      <td>436</td>
    </tr>
  </tbody>
</table>
</div>



## Blending US and GA Datasets

Now we merge the datasets. We'll rename some columns while we're at it.


```python

us_ga = pd.merge(ga, us, on="Temp Canonical", suffixes=('_ga','_us'), how="inner" )
us_ga.rename(columns={'Criteria ID': 'ga:cityId', 'POPESTIMATE2017': '2017'}, inplace=True)
us_ga.set_index('ga:cityId')
us_ga.head()

```




<div class="dataframe-wrapper">
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ga:cityId</th>
      <th>Temp Canonical</th>
      <th>2017</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1012873</td>
      <td>Anchorage,Alaska,United States</td>
      <td>294356</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1012874</td>
      <td>Anderson,Alaska,United States</td>
      <td>337</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1012875</td>
      <td>Angoon,Alaska,United States</td>
      <td>452</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1012876</td>
      <td>Atqasuk,Alaska,United States</td>
      <td>244</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1012878</td>
      <td>Bethel,Alaska,United States</td>
      <td>6456</td>
    </tr>
  </tbody>
</table>
</div>



Sort the cities into buckets by population.


```python

a = us_ga['2017'].tolist()
a.sort()
p = sum(a) / 5
curr_percentile = p
q = []
q.append(min(a) -1 )
r = 0
for each in a:    
    if r < curr_percentile:
        r = r + each
    else:
        q.append(each + 1)
        r = r + each
        curr_percentile = curr_percentile + p
q.append(max(a) +1)

labels = ['small town', 'town', 'large town','city','major city']

us_ga['quintile'] = pd.cut(us_ga['2017'], q, include_lowest=True, labels=labels)

#check that our buckets are roughly equal
us_ga.groupby('quintile')['2017'].sum()
```




    quintile
    small town    43610647
    town          43637694
    large town    43716638
    city          44237984
    major city    42709542
    Name: 2017, dtype: int64




```python

#GA throws an error if there are columns in your csv that you don't use
us_ga = us_ga.drop(columns=['Temp Canonical', '2017'], axis=1)
#export to CSV
us_ga.to_csv('us-geo-ga.csv', index=False)
#we dropped the index column from the CSV
us_ga.head()
```




<div class="dataframe-wrapper">

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ga:cityId</th>
      <th>quintile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1012873</td>
      <td>city</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1012874</td>
      <td>small town</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1012875</td>
      <td>small town</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1012876</td>
      <td>small town</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1012878</td>
      <td>small town</td>
    </tr>
  </tbody>
</table>
</div>



## Google Analytics Data Import

From here on we are following [Google's documentation](https://support.google.com/analytics/answer/6160509?ref_topic=6015090) starting at Step 3. If you need more detailed instructions, I encourage you to go to there.

You can just [grab the finished CSV](2019-03-13-geo-data-for-ga/us_city_pop_ga.csv) and following along from here.

1. Create a Custom Dimension with session scope.
2. Create a Data Set (under Admin > Property > Data Import) where you assign the newly created Custom Dimension to the import.
3. At the end of the Data Set creation dialogue, copy the dimension ID (it will look like ga:dimension10).
4. Open the CSV, replace "quintile" with the dimension ID and save it again as a CSV.
5. Upload the CSV manually (Admin > Property > Data Import) select the Data Set you created previously and Manage Uploads.

And there, you're done.
