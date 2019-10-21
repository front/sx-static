import $ from 'jquery';

class Styleguide {
  constructor() {
    this.viewCode = $('.view-code')
    this.githubView = $('.view-on-github')
  }

  events() {
    this.viewCode.on('click', e => {
      const ctaSection = $(e.target).closest('.styleguide-actions')
      const styleguideSection = $(e.target).closest('.styleguide-section-header')
      var code = $('.styleguide-code')
      styleguideSection.next().toggle('normal')
      // $('#template_typography pre').show('slow')
    })
  }

  init() {
    this.events();
  }
}

export default Styleguide;
