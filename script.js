(function( $ ) {
  $.fn.smartInput = function(options) {
    
    var settings = $.extend({
      name: ''
    }, options);
    var _this = this;
    $.each(this, function(i,v){
    
    var that = $(v);
    // create parent for this awesome input
    that.wrap("<span class='smart-input-wrapper'></span>");
    
    that.parents('.smart-input-wrapper').append('<input class="realmagicNumber" type="hidden" name="'+$(v).prop('name')+'">');
    
    // remove attr from real input
    $(v).removeAttr('name')
    
    var is_input = that.is('input');
    if(is_input) {
      that.keyup(function(e){
      var input_case = ($(this).val().toLowerCase()).toString();
      var realmagicNumber = $(this).parents('.smart-input-wrapper').find('.realmagicNumber');
      var matchesM = input_case.match(/M/gi);
           var matchesB = input_case.match(/B/gi);
           var matchesT = input_case.match(/T/gi);
           var matchesK = input_case.match(/K/gi);
           // million
           var splittedM = input_case.split('m');
           var numberM = splittedM[0];
           // million
           var splittedB = input_case.split('b');
           var numberB = splittedB[0];
           // million
           var splittedK = input_case.split('k');
           var numberK = splittedK[0];
           // million
           var splittedT = input_case.split('t');
           var numberT = splittedT[0];
           // console.log(splitted)
           if (matchesM && matchesM.length > 0) {
               $(this).val('');
               $(this).val(accounting.formatNumber(parseInt((numberM + '000000'))));
               realmagicNumber.val(accounting.unformat($(this).val()));
           } else if (matchesB && matchesB.length > 0) {
               $(this).val('');
               $(this).val(accounting.formatNumber(parseInt((numberB + '000000000'))));
               realmagicNumber.val(accounting.unformat($(this).val()));
           } else if (matchesT && matchesT.length > 0) {
               $(this).val('');
               $(this).val(accounting.formatNumber(parseInt((numberT + '000000000000'))));
               realmagicNumber.val(accounting.unformat($(this).val()));
           } else if (matchesK && matchesK.length > 0) {
               $(this).val('');
               $(this).val(accounting.formatNumber(parseInt((numberK + '000'))));
               realmagicNumber.val(accounting.unformat($(this).val()));
           } else {
               $(this).val(accounting.formatNumber($(this).val()));
               realmagicNumber.val(accounting.unformat($(this).val()));
           }
    });
    
    }
    })
  };
  
}( jQuery ));