    $.getJSON("https://quotes.rest/qod?language=en",
            function (quotedata) {
                console.log(quotedata);
                var qodtitle = "Quote Of the Day: ";
      
                qodtitle = qodtitle.bold();
            
                var quotestr = qodtitle + quotedata.contents.quotes[0].quote ;
                console.log(quotestr);
                
                $('.qod').append(quotestr.italics());
            }   
        );
