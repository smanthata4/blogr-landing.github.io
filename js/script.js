window.onload = function(){
    //Main section

    //variables: stores the content text(parallel editor illustration)
    content_header = "Introducing an extensible editor";
    content_paragraph ="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content." 
                    +"The editor supports management of multiple blogs and allows easy manipulation of embeds such as images," 
                    +"videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or" 
                    +"change the looks of a blog.";
    content_header2 = "Robust content management";
    content_paragraph2 = "Flexible content management enables users to easily move through posts. Increase the usability of your blog" 
                        +"by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.";

    //assigning content variables to innerHTML
    document.getElementById("content-head-editor").innerHTML = content_header;
    document.getElementById("content-para-editor").innerHTML = content_paragraph;
    document.getElementById("content-head-editor2").innerHTML = content_header2;
    document.getElementById("content-para-editor2").innerHTML = content_paragraph2;

    //variables: stores the content text(parallel mobile illustration)
    content_header = "State of the Art Infrastructure";
    content_paragraph = "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity." 
                    +"This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."

    //assigning content variables to innerHTML
    document.getElementById("content-head-mobile").innerHTML = content_header;
    document.getElementById("content-para-mobile").innerHTML = content_paragraph;

    //variables: stores the content text(parallel laptop illustration)
    content_header = "Free, open, simple";
    content_paragraph ="Blogr is a free and open source application backed by a large community of helpful developers. It supports" 
                    +"features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools," 
                    +"and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.";
    content_header2 = "Powerful tooling";
    content_paragraph2 ="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but"
                    +"capable of producing even the most complicated sites.";

    //assigning content variables to innerHTML
    document.getElementById("content-head-laptop").innerHTML = content_header;
    document.getElementById("content-para-laptop").innerHTML = content_paragraph;
    document.getElementById("content-head-laptop2").innerHTML = content_header2;
    document.getElementById("content-para-laptop2").innerHTML = content_paragraph2;  
}

  
