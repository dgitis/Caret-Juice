---
title: Improve Your Data Quality With Human-Centered Process Design
date: 2019-08-19
tags: Data Quality
category: Reasons
author: damon
excerpt: Quality data is a byproduct of processes that support the success of the people who undertake them
facebook_img: https://www.caretjuice.com/blog/improve-data-quality-human-centered-design/improve-data-quality-human-centered-design-facebook.png
twitter_img: https://www.caretjuice.com/blog/improve-data-quality-human-centered-design/improve-data-quality-human-centered-design-twitter.png
---

The more I work with data the more I appreciate how valuable quality data is and how hard it can be for an organization to maintain quality. Data multiplies as we add new business technologies. Much of the data produced by technologies is of good quality if limited usefulness.

More useful data comes from people. But asking people to produce data that is secondary to their reasons for interacting with a business technology is going to result in bad data.

It doesn’t matter whether you are asking employees to go through these processes or your customers. Carrots and sticks deployed to entice and cajole help but are inadequate.

Quality data has long been important to businesses but that is even more true now as machine learning pushes its way into all aspects of business.

Computers are able to surface all sorts of obscure correlations within hundred- and thousand-dimensional data sets. However, the quality of machine predictions is dependant on the quality of the data on which the prediction is based.

This is why Figure Eight, known as CrowdFlower at the time, found in 2016 that data scientists spend [almost 80 percent of their time collecting and cleaning data](https://visit.figure-eight.com/rs/416-ZBE-142/images/CrowdFlower_DataScienceReport_2016.pdf) (pdf).

A data scientist confronted with incomplete data can either delete the data or impute it. Neither of these choices is a good one. And poor-quality data is best dropped no matter how hard it was to collect.

Analysts working with poor data are similarly stymied.

Quality data is a competitive advantage. It helps people make better decisions that impact every aspect of the business.

Dun and Bradstreet in their latest [B2B Marketing Data Report](https://www.dnb.com/content/dam/english/dnb-data-insight/sixth-annual-b2b-marketing-data-report-dnb.pdf) (pdf) found that 89 percent of B-to-B marketers believe that “data quality is increasingly important to the sales and marketing organization” with 69 percent responding that it is extremely important.


## Where data comes from human sources, quality data is difficult.

It doesn’t matter how many carrots or sticks that you deploy in service of getting people to create data that is secondary to the purpose of the process, data collection will slip and the quality of data will suffer.

I’ve been a minor party to a couple of medium-sized CRM implementations. In both cases, getting managers together to think about what CRM systems can do for the organization led to someone deciding that adding a bunch of fields to lead record and getting front-line sales staff to complete the data was a good idea. 

The actual benefit never really materialized.

Harvard Business Review has a piece on [Data’s Credibility Problem](https://hbr.org/2013/12/datas-credibility-problem) from 2013 that identifies the gap between the people that produce data and people that consume it. The article proposes that communication is the solution to bridging this gap.

Communication no doubt improves things. In one of the CRM implementations the front-line sales staff did buy in to collecting this data and it worked, for a time.

Employees come and go and the importance of collecting this data slipped as the organization evolved.

If you want to rely on front-line staff collecting data for you, you’re going to have to evangelize to your new staff the way you initially evangelized to the people who first collected the data.

Even people who understand the value of this data can get distracted or lazy. But pretending for a minute that everyone has fantastic attention to detail, asking humans to collect data that’s going to be used by machines introduces mistakes that aren’t mistakes in a human context but are totally wrong in a machine one.

Company names are a great example. If you have any kind of mix of people entering or importing company names to your CRM, go grab a CSV of lead or company records and start looking for duplicates (or often triplicates and x-plicates where x can get surprisingly high).

You’ll see versions with “Inc” at the end and without. You’ll see “Inc” with and without the period. And you’ll see more of the same with LLP (or is it L.L.P.?) and GMBH.

These are just corporate designations. Go look for companies with “and” in their names and see whether “and” is spelled out or in ampersand form.

We intuitively recognize these duplicates as the same but to a machine they are different.

Machine-data problems can have an effect on the human analysis. An analyst working with data processed by a machine, for example, might not get the opportunity to see that the same company appears multiple times when they query a database for the number of unique companies to use in a calculation.

This problem is not exclusive to CRM-based processes. Your marketing automation system presents another, different example of how making data the object of your processes suffers versus making it a byproduct of process.

I expect that most of you have seen an overloaded sign-up form asking everything about your business so that you can access a whitepaper or webinar or some such resource.

I have been in charge of a number of forms like this, not by choice, and can verify that the data that you get from these forms is of generally low quality.

Some people get annoyed by the forms and just enter in random information to get to whatever it is they are trying to access. Others don’t know some of the information, like annual revenue, and just make things up.

That’s just the data you see. People abandon cumbersome forms leaving you with no data on a company that may have been in the market.

It may seem a little counterintuitive to compare data collected through internal processes in CRM and similar systems with public facing data collection in marketing automation systems. However, the principle for fixing these processes is the same.


## Quality data is a byproduct of processes designed to support the success of the people who undertake them

Data quality is a business problem rather than an IT problem. The previous Harvard Business Review article recognizes this and rightly identifies communication as a possible solution. However, communication is a constant challenge that requires regular attention. There are many other important things that need to be communicated and only so much capacity for communicating or receiving communications.

Human-centered design provides techniques for uncovering the needs and motivations of the people at the center of an interaction so that you can then engineer problems out of existence.

When you are designing processes, data needs to be a secondary concern. No matter how much buy-in that you get from the people who will be undertaking the processes, the quality of data will slip over time. People will move on. New employees will come in. People will be busy or having a bad day. Or they’ll just make mistakes.

In both of the previous CRM and marketing automation examples, data is the object of the process. That’s missing the point. Success should be the object of any process.

The more your processes are oriented around the success of the people at the center of them, the better your adoption of the processes will be. The better the adoption, the better the quality of the data.

You can still tweak your processes to suit your data needs. Just make sure that success is the goal.

One way to do this is to enrich your first-party system data with third-party data. If knowing the industry of the people in your database is of value, then third-party data sources, imperfect thought they may be, will be of better quality than if you ask people to collect this data. You’ll also solve all of those company name problems in your CRM this way and make it easier for people to complete your process.

Automated date enrichment streamilines both internal and public-facing processes which should increase efficiency and encourage the successful completion of the processes.

Using third-party data to enrich your first-party data and replace manually collected data is an intuitive way to improve data quality while keeping your processes focused on the success of the people who have to do them.

Another, more fundamental way of improving data quality is to re-imagine processes to put the data at the core of what constitutes success.

For example if industry is important to you, instead of asking for a prospect to fill out an industry field when they want to download something create industry specific resources, like case studies, people the opportunity to select the industry-related resource that best helps them do whatever it is they are trying to do.

Most sales and marketing processes are designed using empathy and intuition for the users.

Human-centered design is effective because of the research that goes in to uncovering the motivations at the core of an interaction including observation and interviews. Empathy and intuition are fantastic things to have, but you can’t scale it across your team.

Processes that put researching the users before designing for them may take more time, but they also scale and you don’t need to rely on the empathic genius of a few individuals in your team.

This sort of qualitative, user research doesn’t need to be statistically significant in order to have value. Get ideas for what sort of motivations are at the core of a particular interaction and then use your A/B testing tools to figure out whether a particular research conclusion is statistically significant.

Put in the effort to research your users’ goals and motivations and be sure that you are supporting the individual’s short-term goals. The data you collect will support your long-term sales and marketing efforts much more effectively this way.

When you start questioning whether the object of the data you collect supports the success of people who are undertaking your processes you will find plenty of opportunities for flipping data collection around to support their short-term success while aligning with your long-term needs.

And because they actually benefit from giving you data, you’ll get more accurate results. Which will make your data more useful.