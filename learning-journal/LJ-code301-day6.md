# LJ Code 301 - Day 6

**AJAX & JSON**

Now we're getting to the good stuff! If we can send and retrieve data as JSON
via AJAX, we have a [Whole New World](https://www.youtube.com/watch?v=-kl4hJ4j48s) at our fingertips.

Of course, JSON and AJAX aren't required during development because the server
and the website are on the same machine,
but it would be nice to send the data to our deployed projects rather than
retyping it. .NET projects can do this via the [Entity Framework](https://docs.microsoft.com/en-us/aspnet/entity-framework)
(or a few older means). But sometimes even .NET projects will need data
from outside sources, and usually it's in JSON format.
