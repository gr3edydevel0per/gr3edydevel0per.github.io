jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command) {
        $(this).css("background-image", "url('assets/images/anon2.png')");
        if(command === 'help') {
            this.echo('Available commands:ls, whoami, clear, socials, root, help\nTip: There\'s always something more than what meets the eye');
        }
        else if(command === 'whoami') {
            if (this.get_prompt().includes('root')) {
                this.echo('root');
            } else {
                this.echo('www-data');
            }
        }
        else if(command === 'root'){
           this.set_prompt('┌──(root㉿cursedbook)-[~]\n└─#'); 
        }
        else if(command==="cat"){
            this.echo("Usage: cat [file]");
        }
        else if(command === 'socials') {
                this.echo(` <div class="terminal-socials"> <i class="fa-brands fa-github"></i>  Visit <a href="https://github.com/gr3edydevel0per">Github</a> <i class="fas fa-external-link-alt"></i>\n
                            <BR>
                           <i class="fa-brands fa-linkedin"></i>  Visit <a href="https://github.com/gr3edydevel0per">LinkedIN</a> <i class="fas fa-external-link-alt"></i>
                            <br>
                             <span id="thm-logo-text"> THM </span> Visit <a href="https://tryhackme.com/p/gr3edydevel0per">TryHackMe</a> <i class="fas fa-external-link-alt"></i>
                            </div>`, { raw: true });
                      
            }
        else if(command === 'ls') {
            this.echo('robots.txt');
        }
        else if(command === 'ls -la'){
            this.echo(`<pre>total 16
drwxrwxr-x   2 www-data www-data 4096 Jun 21 18:16 .
drwx--x---+ 79 www-data www-data 4096 Jun 21 18:11 ..
-rw-rw-r--   1 www-data www-data  764 Jun 21 18:16 .hidden
-rw-rw-r--   1 www-data www-data   36 Jun 21 18:13 robots.txt
</pre>`,{raw:true});
        }
        else if(command === 'cat robots.txt') {
            this.echo('User-agent: *\nDisallow: /youfoundme');
        }
        else if(command === 'cat .hidden') {
            this.echo("\nCongratulations, adventurer! 🎉\n\nYou've stumbled upon a hidden treasure trove. Not many venture this far, and fewer still find what you've just discovered. \n\nHere are some secrets and tips for the curious:\n\n1. The Hidden Path: Sometimes the most interesting paths are those less traveled. Keep exploring!\n2. Easter Eggs: Just like this one, there are hidden gems all around. Pay attention to the details.\n3. Curiosity: Never stop asking questions and seeking answers. Curiosity leads to discovery.\n\nAs a reward for your curiosity, here's a riddle for you:\n\"I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?\"\n\nEnjoy your journey, and may you uncover many more hidden secrets!\n\nHappy exploring! 🌟\n")
        }   
        else{
            this.echo("Command not found. Type `help` to get started.")
        }
    }, {
        greetings: `Welcome to GreedyDev's Cursed Book! Type 'help' to get started.`,
        name: 'js_demo',
        width: '100%',
        prompt: '┌──(www-data㉿cursedbook)-[~]\n└─$',
    });
});
