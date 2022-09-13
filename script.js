    $.getJSON("https://quotes.rest/qod?language=en",
            function (quotedata) {
                console.log(quotedata);
                var qodtitle = "Quote Of the Day: ";
             //   var credits = "   (Sherry) ";
                qodtitle = qodtitle.bold();
                credits = credits.bold();
                // qodtitle = qodtitle.italics();
                var quotestr = qodtitle + quotedata.contents.quotes[0].quote + credits;
                console.log(quotestr);
                
                $('.qod').append(quotestr.italics());
            }   
        );
