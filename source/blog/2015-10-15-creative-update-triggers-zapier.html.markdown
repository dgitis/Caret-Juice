---
title: Creative On Update Zapier Triggers
date: 2015-10-15
tags: Zapier
category: Recipes
author: damon
excerpt: Flexible Zapier triggers for inflexible CRM systems.
facebook_img: http://www.caretjuice.com/blog/creative-update-triggers-zapier/creative-update-triggers-zapier-facebook.png
twitter_img: http://www.caretjuice.com/blog/creative-update-triggers-zapier/creative-update-triggers-zapier-twitter.png
---

Zapier is limited by how the different CRM systems make your data available to other application. Zapier can only react to changes that are broadcast by the CRM (and then only after you give it permission).

Hubspot CRM’s integration with Zapier, for example, is very flexible and intuitive with a *New Contact Property Change* trigger that lets you start a Zap any time any property you choose changes.

Most CRM systems don’t work with Zapier so intuitively.

Salesforce and Sugar CRM, to name some of the most popular, can only trigger Zaps when something new is added—like a *New Contact* or a *New Note* and they don’t have a rather useful *New Value for Contact Property*.

This would seem to limit what you can automate in Zapier as you collect more information on leads in your CRM system.

For example, when you change an Opportunity to a Customer there are a lot of things that you will probably want to do many of which should be automated. You might want to send out a survey, transfer data to your project management system, send your data to the support ticketing system, or trigger on-boarding emails.

If your CRM uses a drop-down field to track progress from Lead to Opportunity to Customer and it doesn’t have Hubspot-style triggers, you are going to have to get creative with how you trigger your Zap.

That is where these workarounds come in.

## Simple On Update Workarounds

Any CRM system worth your time will have its own automation letting you move and manipulate data in a structured way.

The simplest way to work around the absence of an obvious On Update trigger for a Contact or similar entity is to combine the CRM’s own automation with different new CRM entity supported by Zapier.

I’m currently using Agile CRM which lets you tag Contacts and, sure enough, Zapier can trigger off of a New Tag.

So, for Agile CRM, I tag Contacts and Companies as #customers when the Status for an associated Opportunity is set to *Won* and then filter to only match my #customer tag.

Now I can automate all sorts of things for my new customers with the help of Zapier.

You can use Notes in Salesforce and Sugar CRM to accomplish the same thing. Just add a note that they *Became a customer* and then trigger and filter notes from Zapier.

## More Complex Workarounds

You still have options even if your CRM doesn’t let you directly trigger Zapier. These workarounds will even work for systems that aren’t directly supported by Zapier.

You will want to look for a native or third-party integration between your CRM and Google Sheets or database.

Services like [Data Everywhere](https://www.dataeverywhere.com/index) let you pull data straight out of Salesforce and import them in to Google Sheets.

You might also be able to circumvent the CRM and connect Google Sheets straight to the database that powers the CRM. Typically, this option only applies if you are using an on-premise CRM where you control the hardware, and install the CRM and database.

Other CRM systems may have existing integrations to Google Sheets or databases like MySQL, PostgreSQL, or Microsoft SQL Server that Zapier can use.

Once your data is in Google Sheets, Zapier has an *Updated Spreadsheet Row* trigger that you can use.

The various flavors of SQL that Zapier supports only have *new* triggers, no *Update Row*. But, you can create a table to log updates to your database and then trigger off of that table to get the On Update effect.

## Implementing the Workarounds

The specifics of each workaround vary by technology stack and are beyond the scope of this short post.

The techniques shared here should be enough to get Zapier to do what you need. And if they aren’t, you should probably consider running your business on better technology.

These techniques apply to the following recipes on the site:

* Twitter List Automation