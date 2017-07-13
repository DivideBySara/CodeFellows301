# LJ Code 301 - Day 3

**Tuesday** AM I was determined to be more prepared:

1) I got off at a better bus stop, so I walked in *before* 9am and didn't feel rushed first thing.

2) I brought my own coffee, which provided the usual coffee feeling of well being.

3) I wore a warmer sweater, which helped a little with the a/c.

4) I knew who to ask for help when needed.

One more thing I must do on Wednesday: Sit at a table *without sharp corners* at knee level. It's almost 11pm, and the bruise still hurts.

**jQuery**

We had a fun musical chairs exercise presenting and learning about various jQuery functions. jQuery is incredibly useful. There's so much to learn! Here's a great [cheat sheet](https://oscarotero.com/jquery/) provided by Liz.

I still had to leave late, however. Putting paired programming at the end of the day == leaving late. I wish we had lectures first, paired programming 2nd, and solo projects third. As it stands, I'll have to stay late every time my partner and I have any difficulties, and then I won't see my kids before they go to bed. :-(

Speaking of that solo project, I'll get it started earlier now that I have a better idea of my workflow.

**Wednesday**

New plan: Bike to the bus stop and take the 1st bus to light rail because traffic is terrible. I don't take my bike onto the bus because there's no safe way to bike from Westlake to Code Fellows. The downtown bus is late, crowded, and I accidently got on without tagging my ORCA card.

At least Code Fellow's a/c didn't kick on until noon. Meanwhile, I worked on my Portfolio.

Fix day 1 work or move on to day 2? I decided to spend most of my time on the jQuery. After getting help from Ashwini with my icon fonts, I felt confident I could fix any other CSS problems later. Besides, I would be most helpful during paired programming having learned more jQuery.

**jQuery Events**

Delegate events:

Just add a child parameter to an event function so you don't have to write the same function for each child. For example, if ```section``` is the parent of several ```img```'s, and I want something to happen on a click event for each image, I don't have to write an event handler for each individual image. Instead, I can write something like

```
$('section').on('click', 'img', function () {
  // What I want to happen here.
});```

and the event handler will apply to each ```img```! Nifty :-)

Data attributes:

These are nifty for filtering data by an attribute. We used them to filter blog articles by author and by category in our [blog app assignment](https://github.com/codefellows-seattle-301d27/03-jquery-events/pull/14).
