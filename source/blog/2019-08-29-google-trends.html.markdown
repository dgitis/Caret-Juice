---
title: Custom Branded Google Trends Charts With Python
date: 2019-08-29
tags: Google Trends, Python
category: Recipes
author: damon
excerpt: How to remix Google Trends data to match your branding
facebook_img: https://www.caretjuice.com/blog/google-trends/google-trends-facebook.png
twitter_img: https://www.caretjuice.com/blog/google-trends/google-trends-twitter.png
---
We're going to take an export of Google Trends data and then make a custom chart of that data in Python. Why would we want to do that?

So that we can have complete control over the the presentation of the data.

Instead of screenshotting or embedding Google-branded Trends data, we'll make it match the branding of my blog. Hopefully, things will be clear enough for you to customize the colors and fonts for your brand.

Start with basic imports and upload our CSV file.


```python
import pandas as pd
import matplotlib.pyplot as plt
import io
%matplotlib inline

```

Now we're going to convert our CSV to a dataframe. I've saved the CSV file in the same folder where I'm running this script.


```python
trends = pd.read_csv('multiTimeline.csv')
trends.head()
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>Category: All categories</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Week</th>
      <th>account based marketing: (United States)</th>
      <td>marketing automation: (United States)</td>
    </tr>
    <tr>
      <th>2014-08-31</th>
      <th>0</th>
      <td>40</td>
    </tr>
    <tr>
      <th>2014-09-07</th>
      <th>0</th>
      <td>46</td>
    </tr>
    <tr>
      <th>2014-09-14</th>
      <th>4</th>
      <td>47</td>
    </tr>
    <tr>
      <th>2014-09-21</th>
      <th>3</th>
      <td>41</td>
    </tr>
  </tbody>
</table>
</div>


Oops. We only have one column called *Category: All categories* with all of our data in one row. Let's fix that.


```python
trends = pd.read_csv('multiTimeline.csv', header=1)
trends.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Week</th>
      <th>account based marketing: (United States)</th>
      <th>marketing automation: (United States)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2014-08-31</td>
      <td>0</td>
      <td>40</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2014-09-07</td>
      <td>0</td>
      <td>46</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2014-09-14</td>
      <td>4</td>
      <td>47</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2014-09-21</td>
      <td>3</td>
      <td>41</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2014-09-28</td>
      <td>3</td>
      <td>38</td>
    </tr>
  </tbody>
</table>
</div>


```python
trends.dtypes
```

    Week                                        object
    account based marketing: (United States)     int64
    marketing automation: (United States)        int64
    dtype: object

Convert the Week column to datetime.

```python
trends['Week'] = pd.to_datetime(trends['Week'], format="%Y-%m-%d")
trends.dtypes
```



    Week                                        datetime64[ns]
    account based marketing: (United States)             int64
    marketing automation: (United States)                int64
    dtype: object

Let's change our column headings.


```python
trends.columns = ['Week', 'Account-Based Marketing', 'Marketing Automation']
trends.head()
```

<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Week</th>
      <th>Account-Based Marketing</th>
      <th>Marketing Automation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2014-08-31</td>
      <td>0</td>
      <td>40</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2014-09-07</td>
      <td>0</td>
      <td>46</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2014-09-14</td>
      <td>4</td>
      <td>47</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2014-09-21</td>
      <td>3</td>
      <td>41</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2014-09-28</td>
      <td>3</td>
      <td>38</td>
    </tr>
  </tbody>
</table>
</div>

Now let's graph our data.

```python
plt.plot(trends['Week'], trends['Account-Based Marketing'])
plt.plot(trends['Week'], trends['Marketing Automation'])
plt.show()
```

![Google Trends default graph](/blog/2019-08-29-google-trends/output_12_1.png "Google Trends default graph")


Not bad for default settings, but we can make this look nicer.


```python
import matplotlib as mpl
#If you're using Jupyter on your system, the below works.
#In Google Colab, it's a pain to add fonts.
#mpl.rcParams['font.family'] = 'Open Sans'

#change border color
mpl.rcParams['axes.edgecolor'] = "#a3a3a3"

#change background color
#mpl.rcParams['axes.facecolor'] = "#a3a3a3"

#reset your changes
#mpl.rcParams.update(mpl.rcParamsDefault)


#figsize is in inches
plt.figure(figsize=[10, 6.66])
ax = plt.subplot()
ax.plot(trends['Week'], trends['Marketing Automation'], color="#ff8f4d")
ax.plot(trends['Week'], trends['Account-Based Marketing'], color="#86e400")
leg = plt.legend(frameon=False)

for text in leg.get_texts():
    plt.setp(text, color = '#212121')
ax.tick_params(bottom=False, top=False, left=False, right=False)

#change the color of the tick labels
[i.set_color("#212121") for i in plt.gca().get_xticklabels()]
[i.set_color("#212121") for i in plt.gca().get_yticklabels()]

plt.show()
```


![Google Trends improved styling](/blog/2019-08-29-google-trends/output_14_0.png "Google Trends improved styling")


Lets smooth out those lines and remove the borders.


```python
#If you're using Jupyter on your system, the below works.
#In Google Colab, it's a pain to add fonts.
#mpl.rcParams['font.family'] = 'Open Sans'

#change border color
mpl.rcParams['axes.edgecolor'] = "#a3a3a3"

#change background color
#mpl.rcParams['axes.facecolor'] = "#a3a3a3"

#reset your changes
#mpl.rcParams.update(mpl.rcParamsDefault)

from scipy.ndimage.filters import gaussian_filter1d

plt.figure(figsize=[10, 6.66])
ax = plt.subplot()
ax.plot(trends['Week'], gaussian_filter1d(trends['Marketing Automation'], sigma=2), color="#ff8f4d")
ax.plot(trends['Week'], gaussian_filter1d(trends['Account-Based Marketing'], sigma=2), color="#86e400")
leg = plt.legend(frameon=False)

for text in leg.get_texts():
    plt.setp(text, color = '#212121')
ax.tick_params(bottom=False, top=False, left=False, right=False)
ax.spines['top'].set_visible(False)
ax.spines['bottom'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['right'].set_visible(False)
#change the color of the tick labels
[i.set_color("#212121") for i in plt.gca().get_xticklabels()]
[i.set_color("#212121") for i in plt.gca().get_yticklabels()]

plt.show()
```

    No handles with labels found to put in legend.



![Google Trends smoothed graph](/blog/2019-08-29-google-trends/output_16_1.png "Google Trends smoothed graph")


We'll manually re-add the labels to the legend and de-emphasize the text.


```python
from scipy.ndimage.filters import gaussian_filter1d

#If you're using Jupyter on your system, the below works.
#In Google Colab, it's a pain to add fonts.
#mpl.rcParams['font.family'] = 'Open Sans'

#change border color
mpl.rcParams['axes.edgecolor'] = "#a3a3a3"

#change background color
#mpl.rcParams['axes.facecolor'] = "#a3a3a3"

#reset your changes
#mpl.rcParams.update(mpl.rcParamsDefault)


#figsize is in inches
plt.figure(figsize=[10, 6.66])
ax = plt.subplot()
ax.plot(trends['Week'], gaussian_filter1d(trends['Marketing Automation'], sigma=2), color="#ff8f4d", label="Marketing Automation")
ax.plot(trends['Week'], gaussian_filter1d(trends['Account-Based Marketing'], sigma=2), color="#86e400", label="Account-Based Marketing")
leg = plt.legend(frameon=False)

for text in leg.get_texts():
    plt.setp(text, color = '#a3a3a3')
ax.tick_params(bottom=False, top=False, left=False, right=False)
ax.spines['top'].set_visible(False)
ax.spines['bottom'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['right'].set_visible(False)

#change the color of the tick labels
[i.set_color("#a3a3a3") for i in plt.gca().get_xticklabels()]
[i.set_color("#a3a3a3") for i in plt.gca().get_yticklabels()]

plt.show()
```


![Google Trends final](blog/2019-08-29-google-trends/output_18_0.png "Google Trends final")

Finally, here's the whole script so you can paste it into your Jupyter Notebook or other Python environment and customize to your needs or you can just [download the complete Jupyter Notebook](../assets/google_trends.ipynb).


```python
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl
import io
%matplotlib inline
from scipy.ndimage.filters import gaussian_filter1d

trends = pd.read_csv('multiTimeline.csv', header=1)
trends['Week'] = pd.to_datetime(trends['Week'], format="%Y-%m-%d")
trends.columns = ['Week', 'Account-Based Marketing', 'Marketing Automation']

#If you're using Jupyter on your system, the below works.
#In Google Colab, it's a pain to add fonts.
mpl.rcParams['font.family'] = 'Open Sans'

#change border color
mpl.rcParams['axes.edgecolor'] = "#a3a3a3"

#change background color
#mpl.rcParams['axes.facecolor'] = "#a3a3a3"

#reset your changes
#mpl.rcParams.update(mpl.rcParamsDefault)


#figsize is in inches
plt.figure(figsize=[10, 6.66])
ax = plt.subplot()
ax.plot(trends['Week'], gaussian_filter1d(trends['Marketing Automation'], sigma=2), color="#ff8f4d", label="Marketing Automation")
ax.plot(trends['Week'], gaussian_filter1d(trends['Account-Based Marketing'], sigma=2), color="#86e400", label="Account-Based Marketing")
leg = plt.legend(frameon=False)

for text in leg.get_texts():
    plt.setp(text, color = '#a3a3a3')
ax.tick_params(bottom=False, top=False, left=False, right=False)
ax.spines['top'].set_visible(False)
ax.spines['bottom'].set_visible(False)
ax.spines['left'].set_visible(False)
ax.spines['right'].set_visible(False)

#change the color of the tick labels
[i.set_color("#a3a3a3") for i in plt.gca().get_xticklabels()]
[i.set_color("#a3a3a3") for i in plt.gca().get_yticklabels()]

plt.show()
```

<a href="https://www.linkedin.com/posts/damongudaitis_custom-branded-google-trends-charts-with-activity-6572944884225855488-_L2n">Discuss this on LinkedIn.</a>
