/**
* Template Name: Personal - v2.1.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        // window.scroll({
        //   top: 0, 
        //   left: 0, 
        //   behavior: 'smooth'
        // });
    
        window.scrollTo(0, 0);

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var projectIsotope = $('.projects-container').isotope({
      itemSelector: '.project-item',
      layoutMode: 'fitRows'
    });

    $('#projects-flter li').on('click', function() {
      $("#projects-flter li").removeClass('filter-active');
      $(this).addClass('filter-active');

      projectIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Blogs filter
  $(window).on('load', function() {
    var blogsIsotope = $('.blogs-container').isotope({
      itemSelector: '.blogs-item',
      layoutMode: 'fitRows'
    });

    $('#blogs-flters li').on('click', function() {
      $("#blogs-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      blogsIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  $("#daktarbhai").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/daktarbhai_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#daktarbhai-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/daktarbhai_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#pacenet").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/pacenet_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#pacenet-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/pacenet_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#pacecloud").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/pacecloud_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#pacecloud-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/pacecloud_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#hisl-agent").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/hisl_agent_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#hisl-agent-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/hisl_agent_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#mdaktar").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/mdaktar_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#mdaktar-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/mdaktar_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#onems").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/onems_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

  $("#onems-link").on("click", function() {
    $('#detailModal').modal('show');
    $.get("https://yamin335.github.io/projects/onems_app.html", function(data) {
        $('#detailModal').find('.modal-body').html(data);
    });
  });

})(jQuery);