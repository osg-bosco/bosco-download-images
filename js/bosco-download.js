

var $ = document; // shortcut
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!$.getElementById(cssId))
{
    var head  = $.getElementsByTagName('head')[0];
    var link  = $.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.github.com/osg-bosco/bosco-download-images/test-js/css/bosco-download.css';
    link.media = 'all';
    head.appendChild(link);
}

jQuery(document).ready(function($) {
    
    $(".btn-bosco").each(function() {
    
        download_word = $("<font></font>");
            download_word.html("Download");
            
            bosco_word = $("<font>BOSCO</font>");
            download_word.addClass('download-word-blue');
            $(this).append(download_word);
            $(this).append(" ");
            $(this).append(bosco_word);
            $(this).width(300);
            $(this).attr('href', 'http://bosco.opensciencegrid.org/download/');
            
    
    });
    
    
})


