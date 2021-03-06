Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: false,
      backgroundColor: '#B37100',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<p class="loading-message">Avajo</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';