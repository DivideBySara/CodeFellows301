'use strict';

var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

articleView.initNewArticlePage = function() {
  // DONE: Make the tabs work. Right now, you're seeing all the tab content (items with a class of tab-content) on the page at once.
  //The section with the id of "write" should show when the "write" tab is clicked; it is also the default and should be shown on page load.
  //The section with the id of "articles" should show when the "preview" tab is clicked.
  // Completed - took about 10 minutes - Made it work at minimum
  $('#articles').hide();
  $('.tab').on('click', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  })

  // DONE: Hide the article-export section on page load
  // est: 5min act: 1min
  $('#article-export').hide();

  $('#article-json').on('focus', function(){
    this.select();
  });

  // DONE: Add an event handler to update the preview and the article-export field if any inputs change.
  // Completed in about 5 minutes

  $('#articleForm').on('change', function(event) {
    event.preventDefault();
    var preview = articleView.create();
    $('#articles').append(preview);

    // DONE: The new articles we create will be shown as JSON in an element in our article-export section.
    // From there, we can copy/paste the JSON into our source data file.
    // Set up this "export" functionality. When data is inputted into the form, that data should be converted to stringified JSON.
    //Then, display that JSON in the element inside the article-export section. The article-export section was hidden on page load;
    // make sure to show it as soon as data is entered in the form.
    //Completed in about 25 minutes.
    var stringified = JSON.stringify(preview);
    $('#article-export').show();
    $('#article-json').attr('value', stringified);
  })
};

// this is the function that generates the preview and shows the export field
articleView.create = function() {
  // DONE: Set up a var to hold the new article we are creating.
  // Completed in 2 minutes

  let newArticle = {};
  // Clear out the #articles element, so we can put in the updated preview
  // est: 5min act: 1min
  $('#articles').empty();

  // DONE: Instantiate an article based on what's in the form fields:
  // Completed in about 15 minutes

  newArticle.title = $('#title').val();
  newArticle.author = $('#author').val();
  newArticle.authorURL = $('#authorURL').val();
  newArticle.category = $('#category').val();
  newArticle.bodyText = $('#bodyText').val();
  if ($('#published').is(':checked')) {
    newArticle.published = 'Published';
  } else {
    newArticle.published = 'Draft';
  }


  // DONE: Use our interface to the Handblebars template to put the article preview into the DOM:
  // Completed in about 15 minutes

  var template = $('#newArticleTemplate').html();
  var compiled = Handlebars.compile(template);
  var html = compiled(newArticle);
  return html;
};


articleView.initIndexPage = function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
