---
title: Twitter List Automation
date: 2016-02-15
tags: Twitter, Zapier
category: Recipes
author: damon
excerpt: Help account and sales executives connect with prospects and leads.
facebook_img: http://www.caretjuice.com/blog/twitter-list-automation/twitter-list-automation-facebook.png
twitter_img: http://www.caretjuice.com/blog/twitter-list-automation/twitter-list-automation-twitter.png
---
Twitter lists are a feature that nearly every digital marketer has experimented with but few use for anything other than keeping track of a select group of influencers.

Lists seem like they would be quite useful to sales reps and account managers trying to build relationships with prospects and accounts. In practice, this isn’t true.

The percentage of people actively using Twitter is quite low. I would guess that perhaps 90 percent of prospects or accounts for most businesses won’t be using Twitter actively which makes for a lot of wasted time maintaining targeted lists.

However with a little automation, Twitter lists can be a practical, everyday tool for sales reps and account managers. The automation handles the basic maintenance letting your people focus on building relationships.

## Create the Twitter Lists

The first thing you’re going to need to do is create empty Twitter lists to hold customer and prospect info. 

If you want to create separate lists for each sales person or account manager, then you will have to create a separate list for each (ie. Damon’s Prospects as opposed to just Prospects).

To create the lists, log in to Twitter and open the Profile and Settings menu hidden under your Twitter icon at the top right of the web interface and select Lists.

Then create as many lists as necessary.

## Prepare Your CRM

In order to simplify later configuration and reduce the amount of redundant work that Zapier will do, we’re going to want to store the Twitter handle in CRM.

If you don’t already have one, create a Twitter Handle field in your CRM.

## Set Up the Zapier Integration

We’re going to use Zapier to pull prospect and customer info from CRM, enhance that information with social media account information from FullContact which we will return to CRM before adding any Twitter accounts found by FullContact to the appropriate list.

Create a new Zap that triggers whenever you add a **New Contact** to your CRM.

![New Contact CRM Trigger in Zapier](2016/crm-new-contact-trigger.png)

Next, create a Filter that checks that the CRM email field exists.

![Email Exists Filter in Zapier](2016/email-exists-filter.png)

Select FullContact for your action, connecting your FullContact account to Zapier if necessary, and choose **Find a Person**.

![FullContact Find a Person Zapier Search](2016/fullcontact-find-person.png)

Click **Save + Continue**, test the step and then connect your CRM email and phone number, if you like, to FullContact.

![FullContact Find a Person Zapier Search Settings](2016/fullcontact-find-person-settings.png)

Test the step again.

Note that the test will tell you whether the step was a success or not. If you get a success message but check the data returned it will be for the wrong record. That is okay. It is just a quirk of the FullContact-Zapier integration.

This is all that we need for this Zap. However, there are a lot of potentially useful additions to this Zap that are detailed in the optional selection at the end of this post.

## Automate Twitter List Creation

A lot of CRM systems are limited to triggering Zapier when a contact is created and not when it is updated.

This means that, for many CRM systems, we can’t just check if FullContact found a Twitter handle, send the handle to CRM and trigger a new series of Zaps to add contacts with Twitter handles to the appropriate list.

I cover this topic in more depth in my post titled *Creative On Update Zapier Triggers*, but basically what you will need to do is set your CRM up to create a new tag or a new note when the *Twitter Handle* field we created in the CRM gets filled out and then watch for that tag to trigger the list creation Zaps.

The specifics vary by CRM. This is what I did for Agile CRM and then set up a trigger to run this daily since I don’t have an update trigger in CRM.

![Add Tag Automation in Agile CRM](2016/crm-add-tag-automation.png)

Moving back to Zapier, we’re going to watch for this tag, or note or whatever you needed to create to trigger the Zap, and then filter contacts by Owner to get prospects in the right list.

The specifics of the trigger will depend on whether you can trigger on update or have to use a workaround and, if you used a workaround, on what workaround you used.

For me, I triggered the Zap from Agile CRM using the **New Tag to Contact** trigger with a **Tag Name** of *Twitter* matching the tag I’m automatically creating in CRM.

Once you have your trigger set up, add a *(Text) Exactly matches* Filter on the owner email field from CRM using the email address of the sales or account rep.

You may also want to filter by the status or funnel stage, however, if everyone is using CRM properly and is setting the owner of the contact, then you probably won’t need a status or funnel stage filter as we’ll be matching against the owner’s email.

Finally, create a Twitter *Add User to List* action.

![Add User to Twitter List in Zapier](2016/add-user-twitter-list.png)

Save and connect your Twitter account.

Select the Twitter list that you created and map the Twitter handle from your CRM to Zapier.

![Add User to Twitter List in Zapier Settings](2016/add-user-twitter-list-settings.png)

Now you need to repeat this last series of steps for each sales or account rep for whom you’re creating Twitter lists.

## Drawbacks

The one possible drawback of this automation is that there isn’t an easy way to remove people from lists. Zapier simply doesn’t have a Remove from List option even though Twitter’s API supports it.

Some salespeople are happy to maintain a relationship after the sale and are fine with their list of prospects including former prospects that they’ve already either won or lost. But others would like that sort of thing cleaned up.

This is less of an issue for account managers because accounts don’t normally churn as fast as sales prospects qualify or disqualify, but it is still a problem with no easy automated solution.

