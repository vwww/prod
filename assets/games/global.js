function $(a){return document.getElementById(a)}function $remove(a){if(a)return a.parentNode.removeChild(a)}var core={root:null,cdn:null,GetXmlHttpObject:function(){var a=null;try{a=new XMLHttpRequest}catch(c){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(f){a=new ActiveXObject("Microsoft.XMLHTTP")}}return a},AjaxPost:function(a,c,f){var e=this.GetXmlHttpObject();null==e?(this.ajaxNotified||alert("Your browser doesn't support AJAX. You should really upgrade it!"),this.ajaxNotified=!0):(f&&(e.onreadystatechange=function(){4===e.readyState&&200===e.status&&f(e.responseText)}),e.open("POST",a,!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(c))},checkAll:function(a,c){var f=document.getElementsByName(a),e;for(e in f)f[e].checked=c},login:{timestamp_offset:0,prepare:function(a){$("btnLogin").disabled=!1;$("btnLogin").value="Login!";this.timestamp_offset=a-Math.round((new Date).getTime()/1E3)},send:function(){function a(a){var c=function(a,c){return a<<c|a>>>32-c},e=function(a){var c="",b;for(b=7;0<=b;b--){var e=a>>>4*b&15;c+=e.toString(16)}return c},b,g=Array(80),n=1732584193,t=4023233417,u=2562383102,v=271733878,w=3285377520;a=function(a){if(null===a||"undefined"===typeof a)return"";a+="";var c="",b;var e=b=0;var d=a.length;for(var f=0;f<d;f++){var h=a.charCodeAt(f),g=null;if(128>h)b++;else if(127<h&&2048>h)g=String.fromCharCode(h>>6|192,h&63|128);else if(h&1)g=String.fromCharCode(h>>12|224,h>>6&63|128,h&63|128);else{if(h&1)throw new RangeError("Unmatched trail surrogate at "+f);g=a.charCodeAt(++f);if(g&1)throw new RangeError("Unmatched lead surrogate at "+(f-1));h=((h&1023)<<10)+(g&1023)+65536;g=String.fromCharCode(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)}null!==g&&(b>e&&(c+=a.slice(e,b)),c+=g,e=b=f+1)}b>e&&(c+=a.slice(e,d));return c}(a);var d=a.length;var r=[];for(b=0;b<d-3;b+=4){var k=a.charCodeAt(b)<<24|a.charCodeAt(b+1)<<16|a.charCodeAt(b+2)<<8|a.charCodeAt(b+3);r.push(k)}switch(d%4){case 0:b=2147483648;break;case 1:b=a.charCodeAt(d-1)<<24|8388608;break;case 2:b=a.charCodeAt(d-2)<<24|a.charCodeAt(d-1)<<16|32768;break;case 3:b=a.charCodeAt(d-3)<<24|a.charCodeAt(d-2)<<16|a.charCodeAt(d-1)<<8|128}for(r.push(b);14!=r.length%16;)r.push(0);r.push(d>>>29);r.push(d<<3&4294967295);for(a=0;a<r.length;a+=16){for(b=0;16>b;b++)g[b]=r[a+b];for(b=16;79>=b;b++)g[b]=c(g[b-3]^g[b-8]^g[b-14]^g[b-16],1);k=n;d=t;var l=u;var m=v;var p=w;for(b=0;19>=b;b++){var q=c(k,5)+(d&l|~d&m)+p+g[b]+1518500249&4294967295;p=m;m=l;l=c(d,30);d=k;k=q}for(b=20;39>=b;b++)q=c(k,5)+(d^l^m)+p+g[b]+1859775393&4294967295,p=m,m=l,l=c(d,30),d=k,k=q;for(b=40;59>=b;b++)q=c(k,5)+(d&l|d&m|l&m)+p+g[b]+2400959708&4294967295,p=m,m=l,l=c(d,30),d=k,k=q;for(b=60;79>=b;b++)q=c(k,5)+(d^l^m)+p+g[b]+3395469782&4294967295,p=m,m=l,l=c(d,30),d=k,k=q;n=n+k&4294967295;t=t+d&4294967295;u=u+l&4294967295;v=v+m&4294967295;w=w+p&4294967295}q=e(n)+e(t)+e(u)+e(v)+e(w);return q.toLowerCase()}$("auth_timestamp").value=this.timestamp_offset+Math.round((new Date).getTime()/1E3);$("auth_randomself").value=Math.floor(9007199254740992*Math.random());$("auth_final").value=a(">"+a($("password").value)+"@"+$("auth_timestamp").value+":"+$("auth_randomassist").value+"!"+$("auth_randomself").value+"<");$("password").value="";$("btnLogin").disabled=!0;$("loginform").submit()}}},pub={_:function(a,c,f){core.AjaxPost(core.root+"async_public.php","task="+a+"&"+c,f)},newCaptcha:function(a){a.src=a.src.replace(/&time=\d*$/,"&time="+(new Date).getTime())},commentCallback:function(a){"!"==a[0]?alert(a.slice(1)):(data_sep=a.indexOf("|"),$("total_comments").innerText=a.slice(0,data_sep),$("comments").innerHTML=a.slice(data_sep+1))},getComments:function(a,c){this._("comments","id="+a+"&page="+c,this.commentCallback)},checkRegisterUsername:function(){this._("register_username","user="+encodeURIComponent($("username").value),function(a){"!"==a[0]?($("ival_username").innerText=a.slice(1),$("ival_username").className="ival_fail"):($("username").value!=a&&($("ival_username").innerText="Fixed: "+a),$("ival_username").className="ival_pass")});$("ival_username").innerText="";$("ival_username").className="ival_progress"},checkRegiserPasswords:function(){$("password").value?($("ival_password").innerText="",$("ival_password").className="ival_pass"):($("ival_password").innerText="Enter a password.",$("ival_password").className="ival_fail");$("password2").value?$("password").value==$("password2").value?($("ival_password2").innerText="",$("ival_password2").className="ival_pass"):($("ival_password2").innerText="The passwords differ.",$("ival_password2").className="ival_fail"):($("ival_password2").innerText="Enter a password.",$("ival_password2").className="ival_fail")},checkRegisterEmail:function(){this._("register_email","email="+encodeURIComponent($("email").value),function(a){"!"==a[0]?($("ival_email").innerText=a.slice(1),$("ival_email").className="ival_fail"):($("ival_email").innerText="",$("ival_email").className="ival_pass")});$("ival_email").innerText="";$("ival_email").className="ival_progress"}},user={_:function(a,c,f){core.AjaxPost(core.root+"async_user.php","task="+a+"&"+c,f)},togglefav:function(a,c){-1<a.src.search("0.")?this._("fav","id="+c,function(){a.src=a.src.replace("progress.gif","fav_1.png")}):-1<a.src.search("1.")&&this._("unfav","id="+c,function(){a.src=a.src.replace("progress.gif","fav_0.png");$remove($("fav_"+c))});a.src=a.src.replace(/fav_[01]\.png/,"progress.gif");return!1},rate_locked:!1,rate:function(a,c){if(this.rate_locked)return!1;var f=this;this._("rate","id="+a+(c?"&up=1":""),function(a){a=a.split("|");$("vote-up").src=$("vote-up").src.replace("progress.gif","vote_up_"+(0<a[0]?1:0)+".png");$("vote-down").src=$("vote-down").src.replace("progress.gif","vote_down_"+(0>a[0]?1:0)+".png");$("vote-up-num").innerText=a[1];$("vote-down-num").innerText=a[2];$("vote-val").innerText=0>a[1]-a[2]?a[1]-a[2]:"+"+(a[1]-a[2]);f.rate_locked=!1});$("vote-up").src=$("vote-up").src.replace(/vote_up_[01]\.png/,"progress.gif");$("vote-down").src=$("vote-down").src.replace(/vote_down_[01]\.png/,"progress.gif");this.rate_locked=!0;return!1},toggleFriends:function(a,c,f){if(-1<c.src.search("progress.gif"))return!1;this._("friend","id="+a,function(a){a="0"!=a;c.src=f?c.src.replace("progress.gif","remove_"+(a?0:1)+".png"):c.src.replace("progress.gif","add_"+(a?1:0)+".png")});c.src=f?c.src.replace(/remove_[01]\.png/,"progress.gif"):c.src.replace(/add_[01]\.png/,"progress.gif");return!1},postComment:function(a){this._("add_comment","id="+a+"&content="+encodeURIComponent($("the_comment").value),function(a){pub.commentCallback(a);"!"!=a[0]&&($("the_comment").value="")});return!1},deleteComment:function(a){this._("delete_comment","id="+a,pub.commentCallback);return!1}},resizer={expanded:!1,origWidth:void 0,origHeight:void 0,fadeInCallback:function(a,c){c+=.08;.5>c?($("overlay").style.opacity=c,window.setTimeout(function(){a(a,c)},10)):$("overlay").style.opacity=.5},overlayIn:function(){this.fadeInCallback(this.fadeInCallback,0)},getWidth:function(){return self.innerWidth?self.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:0},getHeight:function(){return self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body?document.body.clientHeight:0},expand:function(a,c){var f=$("resizer_target");if(null==f)return!1;this.origWidth=a;this.origHeight=c;var e=this.getWidth(),b=this.getHeight(),g,n;e*c>=b*a?n=(g=b)*a/c:g=(n=e)*c/a;f.setAttribute("width",n);f.setAttribute("height",g);$("game_container").className="flash_popup";$("game_container").style.marginLeft="-"+n/2+"px";$("game_container").style.marginTop="-"+g/2+"px";$("overlay").style.display="inline";this.overlayIn();$("close_fs").style.display="inline";this.expanded=!0;return!1},unexpand:function(){var a=$("resizer_target");null!=a&&this.expanded&&(a.setAttribute("width",this.origWidth),a.setAttribute("height",this.origHeight),$("game_container").className="flash_nopopup",$("game_container").style.marginLeft="0px",$("game_container").style.marginTop="0px",$("overlay").style.display="none",$("close_fs").style.display="none",this.expanded=!1)},resized:function(){window.resizer.expanded&&window.resizer.expand.call(window.resizer,window.resizer.origWidth,window.resizer.origHeight)}};window.onresize=resizer.resized;