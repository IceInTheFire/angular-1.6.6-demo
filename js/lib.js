(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){a(require("jquery"))}else{a(jQuery)}}}(function(f,c){if(!("indexOf" in Array.prototype)){Array.prototype.indexOf=function(k,j){if(j===c){j=0}if(j<0){j+=this.length}if(j<0){j=0}for(var l=this.length;j<l;j++){if(j in this&&this[j]===k){return j}}return -1}}function e(l){var k=f(l);var j=k.add(k.parents());var m=false;j.each(function(){if(f(this).css("position")==="fixed"){m=true;return false}});return m}function h(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var j=new Date();return h(j.getUTCFullYear(),j.getUTCMonth(),j.getUTCDate(),j.getUTCHours(),j.getUTCMinutes(),j.getUTCSeconds(),0)}var i=function(l,k){var n=this;this.element=f(l);this.container=k.container||"body";this.language=k.language||this.element.data("date-language")||"en";this.language=this.language in a?this.language:this.language.split("-")[0];this.language=this.language in a?this.language:"en";this.isRTL=a[this.language].rtl||false;this.formatType=k.formatType||this.element.data("format-type")||"standard";this.format=g.parseFormat(k.format||this.element.data("date-format")||a[this.language].format||g.getDefaultFormat(this.formatType,"input"),this.formatType);this.isInline=false;this.isVisible=false;this.isInput=this.element.is("input");this.fontAwesome=k.fontAwesome||this.element.data("font-awesome")||false;this.bootcssVer=k.bootcssVer||(this.isInput?(this.element.is(".form-control")?3:2):(this.bootcssVer=this.element.is(".input-group")?3:2));this.component=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent():this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()):false;this.componentReset=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.linkField=k.linkField||this.element.data("link-field")||false;this.linkFormat=g.parseFormat(k.linkFormat||this.element.data("link-format")||g.getDefaultFormat(this.formatType,"link"),this.formatType);this.minuteStep=k.minuteStep||this.element.data("minute-step")||5;this.pickerPosition=k.pickerPosition||this.element.data("picker-position")||"bottom-right";this.showMeridian=k.showMeridian||this.element.data("show-meridian")||false;this.initialDate=k.initialDate||new Date();this.zIndex=k.zIndex||this.element.data("z-index")||c;this.title=typeof k.title==="undefined"?false:k.title;this.defaultTimeZone=(new Date).toString().split("(")[1].slice(0,-1);this.timezone=k.timezone||this.defaultTimeZone;this.icons={leftArrow:this.fontAwesome?"fa-arrow-left":(this.bootcssVer===3?"glyphicon-arrow-left":"icon-arrow-left"),rightArrow:this.fontAwesome?"fa-arrow-right":(this.bootcssVer===3?"glyphicon-arrow-right":"icon-arrow-right")};this.icontype=this.fontAwesome?"fa":"glyphicon";this._attachEvents();this.clickedOutside=function(o){if(f(o.target).closest(".datetimepicker").length===0){n.hide()}};this.formatViewType="datetime";if("formatViewType" in k){this.formatViewType=k.formatViewType}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType")}}this.minView=0;if("minView" in k){this.minView=k.minView}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view")}}this.minView=g.convertViewMode(this.minView);this.maxView=g.modes.length-1;if("maxView" in k){this.maxView=k.maxView}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view")}}this.maxView=g.convertViewMode(this.maxView);this.wheelViewModeNavigation=false;if("wheelViewModeNavigation" in k){this.wheelViewModeNavigation=k.wheelViewModeNavigation}else{if("wheelViewModeNavigation" in this.element.data()){this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")}}this.wheelViewModeNavigationInverseDirection=false;if("wheelViewModeNavigationInverseDirection" in k){this.wheelViewModeNavigationInverseDirection=k.wheelViewModeNavigationInverseDirection}else{if("wheelViewModeNavigationInverseDirection" in this.element.data()){this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")}}this.wheelViewModeNavigationDelay=100;if("wheelViewModeNavigationDelay" in k){this.wheelViewModeNavigationDelay=k.wheelViewModeNavigationDelay}else{if("wheelViewModeNavigationDelay" in this.element.data()){this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")}}this.startViewMode=2;if("startView" in k){this.startViewMode=k.startView}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view")}}this.startViewMode=g.convertViewMode(this.startViewMode);this.viewMode=this.startViewMode;this.viewSelect=this.minView;if("viewSelect" in k){this.viewSelect=k.viewSelect}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select")}}this.viewSelect=g.convertViewMode(this.viewSelect);this.forceParse=true;if("forceParse" in k){this.forceParse=k.forceParse}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")}}var m=this.bootcssVer===3?g.templateV3:g.template;while(m.indexOf("{iconType}")!==-1){m=m.replace("{iconType}",this.icontype)}while(m.indexOf("{leftArrow}")!==-1){m=m.replace("{leftArrow}",this.icons.leftArrow)}while(m.indexOf("{rightArrow}")!==-1){m=m.replace("{rightArrow}",this.icons.rightArrow)}this.picker=f(m).appendTo(this.isInline?this.element:this.container).on({click:f.proxy(this.click,this),mousedown:f.proxy(this.mousedown,this)});if(this.wheelViewModeNavigation){if(f.fn.mousewheel){this.picker.on({mousewheel:f.proxy(this.mousewheel,this)})}else{console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")}}if(this.isInline){this.picker.addClass("datetimepicker-inline")}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu")}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");var j=this.bootcssVer===3?".prev span, .next span":".prev i, .next i";this.picker.find(j).toggleClass(this.icons.leftArrow+" "+this.icons.rightArrow)}f(document).on("mousedown",this.clickedOutside);this.autoclose=false;if("autoclose" in k){this.autoclose=k.autoclose}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")}}this.keyboardNavigation=true;if("keyboardNavigation" in k){this.keyboardNavigation=k.keyboardNavigation}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")}}this.todayBtn=(k.todayBtn||this.element.data("date-today-btn")||false);this.clearBtn=(k.clearBtn||this.element.data("date-clear-btn")||false);this.todayHighlight=(k.todayHighlight||this.element.data("date-today-highlight")||false);this.weekStart=((k.weekStart||this.element.data("date-weekstart")||a[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.datesDisabled=[];this.daysOfWeekDisabled=[];this.setStartDate(k.startDate||this.element.data("date-startdate"));this.setEndDate(k.endDate||this.element.data("date-enddate"));this.setDatesDisabled(k.datesDisabled||this.element.data("date-dates-disabled"));this.setDaysOfWeekDisabled(k.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(k.minutesDisabled||this.element.data("date-minute-disabled"));this.setHoursDisabled(k.hoursDisabled||this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show()}};i.prototype={constructor:i,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:f.proxy(this.show,this),keyup:f.proxy(this.update,this),keydown:f.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:f.proxy(this.show,this),keyup:f.proxy(this.update,this),keydown:f.proxy(this.keydown,this)}],[this.component,{click:f.proxy(this.show,this)}]];if(this.componentReset){this._events.push([this.componentReset,{click:f.proxy(this.reset,this)}])}}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:f.proxy(this.show,this)}]]}}}for(var j=0,k,l;j<this._events.length;j++){k=this._events[j][0];l=this._events[j][1];k.on(l)}},_detachEvents:function(){for(var j=0,k,l;j<this._events.length;j++){k=this._events[j][0];l=this._events[j][1];k.off(l)}this._events=[]},show:function(j){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();if(this.forceParse){this.update()}this.place();f(window).on("resize",f.proxy(this.place,this));if(j){j.stopPropagation();j.preventDefault()}this.isVisible=true;this.element.trigger({type:"show",date:this.date})},hide:function(j){if(!this.isVisible){return}if(this.isInline){return}this.picker.hide();f(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){f(document).off("mousedown",this.hide)}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this.isVisible=false;this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents();f(document).off("mousedown",this.clickedOutside);this.picker.remove();delete this.picker;delete this.element.data().datetimepicker},getDate:function(){var j=this.getUTCDate();return new Date(j.getTime()+(j.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},getInitialDate:function(){return this.initialDate},setInitialDate:function(j){this.initialDate=j},setDate:function(j){this.setUTCDate(new Date(j.getTime()-(j.getTimezoneOffset()*60000)))},setUTCDate:function(j){if(j>=this.startDate&&j<=this.endDate){this.date=j;this.setValue();this.viewDate=this.date;this.fill()}else{this.element.trigger({type:"outOfRange",date:j,startDate:this.startDate,endDate:this.endDate})}},setFormat:function(k){this.format=g.parseFormat(k,this.formatType);var j;if(this.isInput){j=this.element}else{if(this.component){j=this.element.find("input")}}if(j&&j.val()){this.setValue()}},setValue:function(){var j=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(j)}this.element.data("date",j)}else{this.element.val(j)}if(this.linkField){f("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))}},getFormattedDate:function(j){if(j==c){j=this.format}return g.formatDate(this.date,j,this.language,this.formatType,this.timezone)},setStartDate:function(j){this.startDate=j||-Infinity;if(this.startDate!==-Infinity){this.startDate=g.parseDate(this.startDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setEndDate:function(j){this.endDate=j||Infinity;if(this.endDate!==Infinity){this.endDate=g.parseDate(this.endDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setDatesDisabled:function(j){this.datesDisabled=j||[];if(!f.isArray(this.datesDisabled)){this.datesDisabled=this.datesDisabled.split(/,\s*/)}this.datesDisabled=f.map(this.datesDisabled,function(k){return g.parseDate(k,this.format,this.language,this.formatType,this.timezone).toDateString()});this.update();this.updateNavArrows()},setTitle:function(j,k){return this.picker.find(j).find("th:eq(1)").text(this.title===false?k:this.title)},setDaysOfWeekDisabled:function(j){this.daysOfWeekDisabled=j||[];if(!f.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)}this.daysOfWeekDisabled=f.map(this.daysOfWeekDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},setMinutesDisabled:function(j){this.minutesDisabled=j||[];if(!f.isArray(this.minutesDisabled)){this.minutesDisabled=this.minutesDisabled.split(/,\s*/)}this.minutesDisabled=f.map(this.minutesDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},setHoursDisabled:function(j){this.hoursDisabled=j||[];if(!f.isArray(this.hoursDisabled)){this.hoursDisabled=this.hoursDisabled.split(/,\s*/)}this.hoursDisabled=f.map(this.hoursDisabled,function(k){return parseInt(k,10)});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}if(!this.zIndex){var k=0;f("div").each(function(){var p=parseInt(f(this).css("zIndex"),10);if(p>k){k=p}});this.zIndex=k+10}var o,n,m,l;if(this.container instanceof f){l=this.container.offset()}else{l=f(this.container).offset()}if(this.component){o=this.component.offset();m=o.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){m+=this.component.outerWidth()-this.picker.outerWidth()}}else{o=this.element.offset();m=o.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){m+=this.element.outerWidth()-this.picker.outerWidth()}}var j=document.body.clientWidth||window.innerWidth;if(m+220>j){m=j-220}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){n=o.top-this.picker.outerHeight()}else{n=o.top+this.height}n=n-l.top;m=m-l.left;this.picker.css({top:n,left:m,zIndex:this.zIndex})},update:function(){var j,k=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){j=arguments[0];k=true}else{j=(this.isInput?this.element.val():this.element.find("input").val())||this.element.data("date")||this.initialDate;if(typeof j=="string"||j instanceof String){j=j.replace(/^\s+|\s+$/g,"")}}if(!j){j=new Date();k=false}this.date=g.parseDate(j,this.format,this.language,this.formatType,this.timezone);if(k){this.setValue()}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var j=this.weekStart,k="<tr>";while(j<this.weekStart+7){k+='<th class="dow">'+a[this.language].daysMin[(j++)%7]+"</th>"}k+="</tr>";this.picker.find(".datetimepicker-days thead").append(k)},fillMonths:function(){var k="",j=0;while(j<12){k+='<span class="month">'+a[this.language].monthsShort[j++]+"</span>"}this.picker.find(".datetimepicker-months td").html(k)},fill:function(){if(this.date==null||this.viewDate==null){return}var H=new Date(this.viewDate),u=H.getUTCFullYear(),I=H.getUTCMonth(),n=H.getUTCDate(),D=H.getUTCHours(),y=H.getUTCMinutes(),z=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,E=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,q=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,A=this.endDate!==Infinity?this.endDate.getUTCMonth()+1:Infinity,r=(new h(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),G=new Date();this.setTitle(".datetimepicker-days",a[this.language].months[I]+" "+u);if(this.formatViewType=="time"){var k=this.getFormattedDate();this.setTitle(".datetimepicker-hours",k);this.setTitle(".datetimepicker-minutes",k)}else{this.setTitle(".datetimepicker-hours",n+" "+a[this.language].months[I]+" "+u);this.setTitle(".datetimepicker-minutes",n+" "+a[this.language].months[I]+" "+u)}this.picker.find("tfoot th.today").text(a[this.language].today||a.en.today).toggle(this.todayBtn!==false);this.picker.find("tfoot th.clear").text(a[this.language].clear||a.en.clear).toggle(this.clearBtn!==false);this.updateNavArrows();this.fillMonths();var K=h(u,I-1,28,0,0,0,0),C=g.getDaysInMonth(K.getUTCFullYear(),K.getUTCMonth());K.setUTCDate(C);K.setUTCDate(C-(K.getUTCDay()-this.weekStart+7)%7);var j=new Date(K);j.setUTCDate(j.getUTCDate()+42);j=j.valueOf();var s=[];var v;while(K.valueOf()<j){if(K.getUTCDay()==this.weekStart){s.push("<tr>")}v="";if(K.getUTCFullYear()<u||(K.getUTCFullYear()==u&&K.getUTCMonth()<I)){v+=" old"}else{if(K.getUTCFullYear()>u||(K.getUTCFullYear()==u&&K.getUTCMonth()>I)){v+=" new"}}if(this.todayHighlight&&K.getUTCFullYear()==G.getFullYear()&&K.getUTCMonth()==G.getMonth()&&K.getUTCDate()==G.getDate()){v+=" today"}if(K.valueOf()==r){v+=" active"}if((K.valueOf()+86400000)<=this.startDate||K.valueOf()>this.endDate||f.inArray(K.getUTCDay(),this.daysOfWeekDisabled)!==-1||f.inArray(K.toDateString(),this.datesDisabled)!==-1){v+=" disabled"}s.push('<td class="day'+v+'">'+K.getUTCDate()+"</td>");if(K.getUTCDay()==this.weekEnd){s.push("</tr>")}K.setUTCDate(K.getUTCDate()+1)}this.picker.find(".datetimepicker-days tbody").empty().append(s.join(""));s=[];var w="",F="",t="";var l=this.hoursDisabled||[];for(var B=0;B<24;B++){if(l.indexOf(B)!==-1){continue}var x=h(u,I,n,B);v="";if((x.valueOf()+3600000)<=this.startDate||x.valueOf()>this.endDate){v+=" disabled"}else{if(D==B){v+=" active"}}if(this.showMeridian&&a[this.language].meridiem.length==2){F=(B<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(F!=t){if(t!=""){s.push("</fieldset>")}s.push('<fieldset class="hour"><legend>'+F.toUpperCase()+"</legend>")}t=F;w=(B%12?B%12:12);s.push('<span class="hour'+v+" hour_"+(B<12?"am":"pm")+'">'+w+"</span>");if(B==23){s.push("</fieldset>")}}else{w=B+":00";s.push('<span class="hour'+v+'">'+w+"</span>")}}this.picker.find(".datetimepicker-hours td").html(s.join(""));s=[];w="",F="",t="";var m=this.minutesDisabled||[];for(var B=0;B<60;B+=this.minuteStep){if(m.indexOf(B)!==-1){continue}var x=h(u,I,n,D,B,0);v="";if(x.valueOf()<this.startDate||x.valueOf()>this.endDate){v+=" disabled"}else{if(Math.floor(y/this.minuteStep)==Math.floor(B/this.minuteStep)){v+=" active"}}if(this.showMeridian&&a[this.language].meridiem.length==2){F=(D<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(F!=t){if(t!=""){s.push("</fieldset>")}s.push('<fieldset class="minute"><legend>'+F.toUpperCase()+"</legend>")}t=F;w=(D%12?D%12:12);s.push('<span class="minute'+v+'">'+w+":"+(B<10?"0"+B:B)+"</span>");if(B==59){s.push("</fieldset>")}}else{w=B+":00";s.push('<span class="minute'+v+'">'+D+":"+(B<10?"0"+B:B)+"</span>")}}this.picker.find(".datetimepicker-minutes td").html(s.join(""));var L=this.date.getUTCFullYear();var p=this.setTitle(".datetimepicker-months",u).end().find("span").removeClass("active");if(L==u){var o=p.length-12;p.eq(this.date.getUTCMonth()+o).addClass("active")}if(u<z||u>q){p.addClass("disabled")}if(u==z){p.slice(0,E).addClass("disabled")}if(u==q){p.slice(A).addClass("disabled")}s="";u=parseInt(u/10,10)*10;var J=this.setTitle(".datetimepicker-years",u+"-"+(u+9)).end().find("td");u-=1;for(var B=-1;B<11;B++){s+='<span class="year'+(B==-1||B==10?" old":"")+(L==u?" active":"")+(u<z||u>q?" disabled":"")+'">'+u+"</span>";u+=1}J.html(s);this.place()},updateNavArrows:function(){var n=new Date(this.viewDate),l=n.getUTCFullYear(),m=n.getUTCMonth(),k=n.getUTCDate(),j=n.getUTCHours();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()&&k<=this.startDate.getUTCDate()&&j<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()&&k>=this.endDate.getUTCDate()&&j>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()&&k<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()&&k>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 2:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()&&m<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()&&m>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 3:case 4:if(this.startDate!==-Infinity&&l<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&l>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},mousewheel:function(k){k.preventDefault();k.stopPropagation();if(this.wheelPause){return}this.wheelPause=true;var j=k.originalEvent;var m=j.wheelDelta;var l=m>0?1:(m===0)?0:-1;if(this.wheelViewModeNavigationInverseDirection){l=-l}this.showMode(l);setTimeout(f.proxy(function(){this.wheelPause=false},this),this.wheelViewModeNavigationDelay)},click:function(n){n.stopPropagation();n.preventDefault();var o=f(n.target).closest("span, td, th, legend");if(o.is("."+this.icontype)){o=f(o).parent().closest("span, td, th, legend")}if(o.length==1){if(o.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});return}switch(o[0].nodeName.toLowerCase()){case"th":switch(o[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var j=g.modes[this.viewMode].navStep*(o[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,j);break;case 1:this.viewDate=this.moveDate(this.viewDate,j);break;case 2:this.viewDate=this.moveMonth(this.viewDate,j);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,j);break}this.fill();this.element.trigger({type:o[0].className+":"+this.convertViewModeText(this.viewMode),date:this.viewDate,startDate:this.startDate,endDate:this.endDate});break;case"clear":this.reset();if(this.autoclose){this.hide()}break;case"today":var k=new Date();k=h(k.getFullYear(),k.getMonth(),k.getDate(),k.getHours(),k.getMinutes(),k.getSeconds(),0);if(k<this.startDate){k=this.startDate}else{if(k>this.endDate){k=this.endDate}}this.viewMode=this.startViewMode;this.showMode(0);this._setDate(k);this.fill();if(this.autoclose){this.hide()}break}break;case"span":if(!o.is(".disabled")){var q=this.viewDate.getUTCFullYear(),p=this.viewDate.getUTCMonth(),r=this.viewDate.getUTCDate(),s=this.viewDate.getUTCHours(),l=this.viewDate.getUTCMinutes(),t=this.viewDate.getUTCSeconds();if(o.is(".month")){this.viewDate.setUTCDate(1);p=o.parent().find("span").index(o);r=this.viewDate.getUTCDate();this.viewDate.setUTCMonth(p);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.viewSelect>=3){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".year")){this.viewDate.setUTCDate(1);q=parseInt(o.text(),10)||0;this.viewDate.setUTCFullYear(q);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.viewSelect>=4){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".hour")){s=parseInt(o.text(),10)||0;if(o.hasClass("hour_am")||o.hasClass("hour_pm")){if(s==12&&o.hasClass("hour_am")){s=0}else{if(s!=12&&o.hasClass("hour_pm")){s+=12}}}this.viewDate.setUTCHours(s);this.element.trigger({type:"changeHour",date:this.viewDate});if(this.viewSelect>=1){this._setDate(h(q,p,r,s,l,t,0))}}else{if(o.is(".minute")){l=parseInt(o.text().substr(o.text().indexOf(":")+1),10)||0;this.viewDate.setUTCMinutes(l);this.element.trigger({type:"changeMinute",date:this.viewDate});if(this.viewSelect>=0){this._setDate(h(q,p,r,s,l,t,0))}}}}}if(this.viewMode!=0){var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}}break;case"td":if(o.is(".day")&&!o.is(".disabled")){var r=parseInt(o.text(),10)||1;var q=this.viewDate.getUTCFullYear(),p=this.viewDate.getUTCMonth(),s=this.viewDate.getUTCHours(),l=this.viewDate.getUTCMinutes(),t=this.viewDate.getUTCSeconds();if(o.is(".old")){if(p===0){p=11;q-=1}else{p-=1}}else{if(o.is(".new")){if(p==11){p=0;q+=1}else{p+=1}}}this.viewDate.setUTCFullYear(q);this.viewDate.setUTCMonth(p,r);this.element.trigger({type:"changeDay",date:this.viewDate});if(this.viewSelect>=2){this._setDate(h(q,p,r,s,l,t,0))}}var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}break}}},_setDate:function(j,l){if(!l||l=="date"){this.date=j}if(!l||l=="view"){this.viewDate=j}this.fill();this.setValue();var k;if(this.isInput){k=this.element}else{if(this.component){k=this.element.find("input")}}if(k){k.change();if(this.autoclose&&(!l||l=="date")){}}this.element.trigger({type:"changeDate",date:this.getDate()});if(j==null){this.date=this.viewDate}},moveMinute:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCMinutes(l.getUTCMinutes()+(j*this.minuteStep));return l},moveHour:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCHours(l.getUTCHours()+j);return l},moveDate:function(k,j){if(!j){return k}var l=new Date(k.valueOf());l.setUTCDate(l.getUTCDate()+j);return l},moveMonth:function(j,k){if(!k){return j}var n=new Date(j.valueOf()),r=n.getUTCDate(),o=n.getUTCMonth(),m=Math.abs(k),q,p;k=k>0?1:-1;if(m==1){p=k==-1?function(){return n.getUTCMonth()==o}:function(){return n.getUTCMonth()!=q};q=o+k;n.setUTCMonth(q);if(q<0||q>11){q=(q+12)%12}}else{for(var l=0;l<m;l++){n=this.moveMonth(n,k)}q=n.getUTCMonth();n.setUTCDate(r);p=function(){return q!=n.getUTCMonth()}}while(p()){n.setUTCDate(--r);n.setUTCMonth(q)}return n},moveYear:function(k,j){return this.moveMonth(k,j*12)},dateWithinRange:function(j){return j>=this.startDate&&j<=this.endDate},keydown:function(n){if(this.picker.is(":not(:visible)")){if(n.keyCode==27){this.show()}return}var p=false,k,q,o,r,j;switch(n.keyCode){case 27:this.hide();n.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break}k=n.keyCode==37?-1:1;viewMode=this.viewMode;if(n.ctrlKey){viewMode+=2}else{if(n.shiftKey){viewMode+=1}}if(viewMode==4){r=this.moveYear(this.date,k);j=this.moveYear(this.viewDate,k)}else{if(viewMode==3){r=this.moveMonth(this.date,k);j=this.moveMonth(this.viewDate,k)}else{if(viewMode==2){r=this.moveDate(this.date,k);j=this.moveDate(this.viewDate,k)}else{if(viewMode==1){r=this.moveHour(this.date,k);j=this.moveHour(this.viewDate,k)}else{if(viewMode==0){r=this.moveMinute(this.date,k);j=this.moveMinute(this.viewDate,k)}}}}}if(this.dateWithinRange(r)){this.date=r;this.viewDate=j;this.setValue();this.update();n.preventDefault();p=true}break;case 38:case 40:if(!this.keyboardNavigation){break}k=n.keyCode==38?-1:1;viewMode=this.viewMode;if(n.ctrlKey){viewMode+=2}else{if(n.shiftKey){viewMode+=1}}if(viewMode==4){r=this.moveYear(this.date,k);j=this.moveYear(this.viewDate,k)}else{if(viewMode==3){r=this.moveMonth(this.date,k);j=this.moveMonth(this.viewDate,k)}else{if(viewMode==2){r=this.moveDate(this.date,k*7);j=this.moveDate(this.viewDate,k*7)}else{if(viewMode==1){if(this.showMeridian){r=this.moveHour(this.date,k*6);j=this.moveHour(this.viewDate,k*6)}else{r=this.moveHour(this.date,k*4);j=this.moveHour(this.viewDate,k*4)}}else{if(viewMode==0){r=this.moveMinute(this.date,k*4);j=this.moveMinute(this.viewDate,k*4)}}}}}if(this.dateWithinRange(r)){this.date=r;this.viewDate=j;this.setValue();this.update();n.preventDefault();p=true}break;case 13:if(this.viewMode!=0){var m=this.viewMode;this.showMode(-1);this.fill();if(m==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}n.preventDefault();break;case 9:this.hide();break}if(p){var l;if(this.isInput){l=this.element}else{if(this.component){l=this.element.find("input")}}if(l){l.change()}this.element.trigger({type:"changeDate",date:this.getDate()})}},showMode:function(j){if(j){var k=Math.max(0,Math.min(g.modes.length-1,this.viewMode+j));if(k>=this.minView&&k<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:k});this.viewMode=k}}this.picker.find(">div").hide().filter(".datetimepicker-"+g.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()},reset:function(j){this._setDate(null,"date")},convertViewModeText:function(j){switch(j){case 4:return"decade";case 3:return"year";case 2:return"month";case 1:return"day";case 0:return"hour"}}};var b=f.fn.datetimepicker;f.fn.datetimepicker=function(l){var j=Array.apply(null,arguments);j.shift();var k;this.each(function(){var o=f(this),n=o.data("datetimepicker"),m=typeof l=="object"&&l;if(!n){o.data("datetimepicker",(n=new i(this,f.extend({},f.fn.datetimepicker.defaults,m))))}if(typeof l=="string"&&typeof n[l]=="function"){k=n[l].apply(n,j);if(k!==c){return false}}});if(k!==c){return k}else{return this}};f.fn.datetimepicker.defaults={};f.fn.datetimepicker.Constructor=i;var a=f.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["am","pm"],suffix:["st","nd","rd","th"],today:"Today",clear:"Clear"}};var g={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(j){return(((j%4===0)&&(j%100!==0))||(j%400===0))},getDaysInMonth:function(j,k){return[31,(g.isLeapYear(j)?29:28),31,30,31,30,31,31,30,31,30,31][k]},getDefaultFormat:function(j,k){if(j=="standard"){if(k=="input"){return"yyyy-mm-dd hh:ii"}else{return"yyyy-mm-dd hh:ii:ss"}}else{if(j=="php"){if(k=="input"){return"Y-m-d H:i"}else{return"Y-m-d H:i:s"}}else{throw new Error("Invalid format type.")}}},validParts:function(j){if(j=="standard"){return/t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g}else{if(j=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g}else{throw new Error("Invalid format type.")}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(m,k){var j=m.replace(this.validParts(k),"\0").split("\0"),l=m.match(this.validParts(k));if(!j||!j.length||!l||l.length==0){throw new Error("Invalid date format.")}return{separators:j,parts:l}},parseDate:function(A,y,v,j,r){if(A instanceof Date){var u=new Date(A.valueOf()-A.getTimezoneOffset()*60000);u.setMilliseconds(0);return u}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(A)){y=this.parseFormat("yyyy-mm-dd",j)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(A)){y=this.parseFormat("yyyy-mm-dd hh:ii",j)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(A)){y=this.parseFormat("yyyy-mm-dd hh:ii:ss",j)}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(A)){var l=/([-+]\d+)([dmwy])/,q=A.match(/([-+]\d+)([dmwy])/g),t,p;A=new Date();for(var x=0;x<q.length;x++){t=l.exec(q[x]);p=parseInt(t[1]);switch(t[2]){case"d":A.setUTCDate(A.getUTCDate()+p);break;case"m":A=i.prototype.moveMonth.call(i.prototype,A,p);break;case"w":A.setUTCDate(A.getUTCDate()+p*7);break;case"y":A=i.prototype.moveYear.call(i.prototype,A,p);break}}return h(A.getUTCFullYear(),A.getUTCMonth(),A.getUTCDate(),A.getUTCHours(),A.getUTCMinutes(),A.getUTCSeconds(),0)}var q=A&&A.toString().match(this.nonpunctuation)||[],A=new Date(0,0,0,0,0,0,0),m={},z=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P","z","Z"],o={hh:function(C,s){return C.setUTCHours(s)},h:function(C,s){return C.setUTCHours(s)},HH:function(C,s){return C.setUTCHours(s==12?0:s)},H:function(C,s){return C.setUTCHours(s==12?0:s)},ii:function(C,s){return C.setUTCMinutes(s)},i:function(C,s){return C.setUTCMinutes(s)},ss:function(C,s){return C.setUTCSeconds(s)},s:function(C,s){return C.setUTCSeconds(s)},yyyy:function(C,s){return C.setUTCFullYear(s)},yy:function(C,s){return C.setUTCFullYear(2000+s)},m:function(C,s){s-=1;while(s<0){s+=12}s%=12;C.setUTCMonth(s);while(C.getUTCMonth()!=s){if(isNaN(C.getUTCMonth())){return C}else{C.setUTCDate(C.getUTCDate()-1)}}return C},d:function(C,s){return C.setUTCDate(s)},p:function(C,s){return C.setUTCHours(s==1?C.getUTCHours()+12:C.getUTCHours())},z:function(){return r}},B,k,t;o.M=o.MM=o.mm=o.m;o.dd=o.d;o.P=o.p;o.Z=o.z;A=h(A.getFullYear(),A.getMonth(),A.getDate(),A.getHours(),A.getMinutes(),A.getSeconds());if(q.length==y.parts.length){for(var x=0,w=y.parts.length;x<w;x++){B=parseInt(q[x],10);t=y.parts[x];if(isNaN(B)){switch(t){case"MM":k=f(a[v].months).filter(function(){var s=this.slice(0,q[x].length),C=q[x].slice(0,s.length);return s==C});B=f.inArray(k[0],a[v].months)+1;break;case"M":k=f(a[v].monthsShort).filter(function(){var s=this.slice(0,q[x].length),C=q[x].slice(0,s.length);return s.toLowerCase()==C.toLowerCase()});B=f.inArray(k[0],a[v].monthsShort)+1;break;case"p":case"P":B=f.inArray(q[x].toLowerCase(),a[v].meridiem);break;case"z":case"Z":r;break}}m[t]=B}for(var x=0,n;x<z.length;x++){n=z[x];if(n in m&&!isNaN(m[n])){o[n](A,m[n])}}}return A},formatDate:function(l,q,m,p,o){if(l==null){return""}var k;if(p=="standard"){k={t:l.getTime(),yy:l.getUTCFullYear().toString().substring(2),yyyy:l.getUTCFullYear(),m:l.getUTCMonth()+1,M:a[m].monthsShort[l.getUTCMonth()],MM:a[m].months[l.getUTCMonth()],d:l.getUTCDate(),D:a[m].daysShort[l.getUTCDay()],DD:a[m].days[l.getUTCDay()],p:(a[m].meridiem.length==2?a[m].meridiem[l.getUTCHours()<12?0:1]:""),h:l.getUTCHours(),i:l.getUTCMinutes(),s:l.getUTCSeconds(),z:o};if(a[m].meridiem.length==2){k.H=(k.h%12==0?12:k.h%12)}else{k.H=k.h}k.HH=(k.H<10?"0":"")+k.H;k.P=k.p.toUpperCase();k.Z=k.z;k.hh=(k.h<10?"0":"")+k.h;k.ii=(k.i<10?"0":"")+k.i;k.ss=(k.s<10?"0":"")+k.s;k.dd=(k.d<10?"0":"")+k.d;k.mm=(k.m<10?"0":"")+k.m}else{if(p=="php"){k={y:l.getUTCFullYear().toString().substring(2),Y:l.getUTCFullYear(),F:a[m].months[l.getUTCMonth()],M:a[m].monthsShort[l.getUTCMonth()],n:l.getUTCMonth()+1,t:g.getDaysInMonth(l.getUTCFullYear(),l.getUTCMonth()),j:l.getUTCDate(),l:a[m].days[l.getUTCDay()],D:a[m].daysShort[l.getUTCDay()],w:l.getUTCDay(),N:(l.getUTCDay()==0?7:l.getUTCDay()),S:(l.getUTCDate()%10<=a[m].suffix.length?a[m].suffix[l.getUTCDate()%10-1]:""),a:(a[m].meridiem.length==2?a[m].meridiem[l.getUTCHours()<12?0:1]:""),g:(l.getUTCHours()%12==0?12:l.getUTCHours()%12),G:l.getUTCHours(),i:l.getUTCMinutes(),s:l.getUTCSeconds()};k.m=(k.n<10?"0":"")+k.n;k.d=(k.j<10?"0":"")+k.j;k.A=k.a.toString().toUpperCase();k.h=(k.g<10?"0":"")+k.g;k.H=(k.G<10?"0":"")+k.G;k.i=(k.i<10?"0":"")+k.i;k.s=(k.s<10?"0":"")+k.s}else{throw new Error("Invalid format type.")}}var l=[],r=f.extend([],q.separators);for(var n=0,j=q.parts.length;n<j;n++){if(r.length){l.push(r.shift())}l.push(k[q.parts[n]])}if(r.length){l.push(r.shift())}return l.join("")},convertViewMode:function(j){switch(j){case 4:case"decade":j=4;break;case 3:case"year":j=3;break;case 2:case"month":j=2;break;case 1:case"day":j=1;break;case 0:case"hour":j=0;break}return j},headTemplate:'<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',headTemplateV3:'<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};g.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplate+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+"</table></div></div>";g.templateV3='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplateV3+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+"</table></div></div>";f.fn.datetimepicker.DPGlobal=g;f.fn.datetimepicker.noConflict=function(){f.fn.datetimepicker=b;return this};f(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(k){var j=f(this);if(j.data("datetimepicker")){return}k.preventDefault();j.datetimepicker("show")});f(function(){f('[data-provide="datetimepicker-inline"]').datetimepicker()})}));
/**
 * French translation for bootstrap-datetimepicker
 * Nico Mollet <nico.mollet@gmail.com>
 */
;(function($){
	$.fn.datetimepicker.dates['fr'] = {
		days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
		daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		daysMin:  ["日", "一", "二", "三", "四", "五", "六", "日"],
		months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		today: "今天",
		suffix: [],
		meridiem: ["上午", "下午"]
	};
}(jQuery));

//
// Copyright Kamil Pękala http://github.com/kamilkp
// angular-sortable-view v0.0.15 2015/01/18
//

;(function(window, angular){
	'use strict';
	/* jshint eqnull:true */
	/* jshint -W041 */
	/* jshint -W030 */

	var module = angular.module('angular-sortable-view', []);
	module.directive('svRoot', [function(){
		function shouldBeAfter(elem, pointer, isGrid){
			return isGrid ? elem.x - pointer.x < 0 : elem.y - pointer.y < 0;
		}
		function getSortableElements(key){
			return ROOTS_MAP[key];
		}
		function removeSortableElements(key){
			delete ROOTS_MAP[key];
		}

		var sortingInProgress;
		var ROOTS_MAP = Object.create(null);
		// window.ROOTS_MAP = ROOTS_MAP; // for debug purposes

		return {
			restrict: 'A',
			controller: ['$scope', '$attrs', '$interpolate', '$parse', function($scope, $attrs, $interpolate, $parse){
				var mapKey = $interpolate($attrs.svRoot)($scope) || $scope.$id;
				if(!ROOTS_MAP[mapKey]) ROOTS_MAP[mapKey] = [];

				var that         = this;
				var candidates;  // set of possible destinations
				var $placeholder;// placeholder element
				var options;     // sortable options
				var $helper;     // helper element - the one thats being dragged around with the mouse pointer
				var $original;   // original element
				var $target;     // last best candidate
				var isGrid       = false;
				var onSort       = $parse($attrs.svOnSort);

				// ----- hack due to https://github.com/angular/angular.js/issues/8044
				$attrs.svOnStart = $attrs.$$element[0].attributes['sv-on-start'];
				$attrs.svOnStart = $attrs.svOnStart && $attrs.svOnStart.value;

				$attrs.svOnStop = $attrs.$$element[0].attributes['sv-on-stop'];
				$attrs.svOnStop = $attrs.svOnStop && $attrs.svOnStop.value;
				// -------------------------------------------------------------------

				var onStart = $parse($attrs.svOnStart);
				var onStop = $parse($attrs.svOnStop);

				this.sortingInProgress = function(){
					return sortingInProgress;
				};

				if($attrs.svGrid){ // sv-grid determined explicite
					isGrid = $attrs.svGrid === "true" ? true : $attrs.svGrid === "false" ? false : null;
					if(isGrid === null)
						throw 'Invalid value of sv-grid attribute';
				}
				else{
					// check if at least one of the lists have a grid like layout
					$scope.$watchCollection(function(){
						return getSortableElements(mapKey);
					}, function(collection){
						isGrid = false;
						var array = collection.filter(function(item){
							return !item.container;
						}).map(function(item){
							return {
								part: item.getPart().id,
								y: item.element[0].getBoundingClientRect().top
							};
						});
						var dict = Object.create(null);
						array.forEach(function(item){
							if(dict[item.part])
								dict[item.part].push(item.y);
							else
								dict[item.part] = [item.y];
						});
						Object.keys(dict).forEach(function(key){
							dict[key].sort();
							dict[key].forEach(function(item, index){
								if(index < dict[key].length - 1){
									if(item > 0 && item === dict[key][index + 1]){
										isGrid = true;
									}
								}
							});
						});
					});
				}

				this.$moveUpdate = function(opts, mouse, svElement, svOriginal, svPlaceholder, originatingPart, originatingIndex){
					var svRect = svElement[0].getBoundingClientRect();
					if(opts.tolerance === 'element')
						mouse = {
							x: ~~(svRect.left + svRect.width/2),
							y: ~~(svRect.top + svRect.height/2)
						};

					sortingInProgress = true;
					candidates = [];
					if(!$placeholder){
						if(svPlaceholder){ // custom placeholder
							$placeholder = svPlaceholder.clone();
							$placeholder.removeClass('ng-hide');
						}
						else{ // default placeholder
							$placeholder = svOriginal.clone();
							$placeholder.addClass('sv-visibility-hidden');
							$placeholder.addClass('sv-placeholder');
							$placeholder.css({
								'height': svRect.height + 'px',
								'width': svRect.width + 'px'
							});
						}

						svOriginal.after($placeholder);
						svOriginal.addClass('ng-hide');

						// cache options, helper and original element reference
						$original = svOriginal;
						options = opts;
						$helper = svElement;

						onStart($scope, {
							$helper: {element: $helper},
							$part: originatingPart.model(originatingPart.scope),
							$index: originatingIndex,
							$item: originatingPart.model(originatingPart.scope)[originatingIndex]
						});
						$scope.$root && $scope.$root.$$phase || $scope.$apply();
					}

					// ----- move the element
					$helper[0].reposition({
						x: mouse.x + document.body.scrollLeft - mouse.offset.x*svRect.width,
						y: mouse.y + document.body.scrollTop - mouse.offset.y*svRect.height
					});

					// ----- manage candidates
					getSortableElements(mapKey).forEach(function(se, index){
						if(opts.containment != null){
							// TODO: optimize this since it could be calculated only once when the moving begins
							if(
								!elementMatchesSelector(se.element, opts.containment) &&
								!elementMatchesSelector(se.element, opts.containment + ' *')
							) return; // element is not within allowed containment
						}
						var rect = se.element[0].getBoundingClientRect();
						var center = {
							x: ~~(rect.left + rect.width/2),
							y: ~~(rect.top + rect.height/2)
						};
						if(!se.container && // not the container element
							(se.element[0].scrollHeight || se.element[0].scrollWidth)){ // element is visible
							candidates.push({
								element: se.element,
								q: (center.x - mouse.x)*(center.x - mouse.x) + (center.y - mouse.y)*(center.y - mouse.y),
								view: se.getPart(),
								targetIndex: se.getIndex(),
								after: shouldBeAfter(center, mouse, isGrid)
							});
						}
						if(se.container && !se.element[0].querySelector('[sv-element]:not(.sv-placeholder):not(.sv-source)')){ // empty container
							candidates.push({
								element: se.element,
								q: (center.x - mouse.x)*(center.x - mouse.x) + (center.y - mouse.y)*(center.y - mouse.y),
								view: se.getPart(),
								targetIndex: 0,
								container: true
							});
						}
					});
					var pRect = $placeholder[0].getBoundingClientRect();
					var pCenter = {
						x: ~~(pRect.left + pRect.width/2),
						y: ~~(pRect.top + pRect.height/2)
					};
					candidates.push({
						q: (pCenter.x - mouse.x)*(pCenter.x - mouse.x) + (pCenter.y - mouse.y)*(pCenter.y - mouse.y),
						element: $placeholder,
						placeholder: true
					});
					candidates.sort(function(a, b){
						return a.q - b.q;
					});

					candidates.forEach(function(cand, index){
						if(index === 0 && !cand.placeholder && !cand.container){
							$target = cand;
							cand.element.addClass('sv-candidate');
							if(cand.after)
								cand.element.after($placeholder);
							else
								insertElementBefore(cand.element, $placeholder);
						}
						else if(index === 0 && cand.container){
							$target = cand;
							cand.element.append($placeholder);
						}
						else
							cand.element.removeClass('sv-candidate');
					});
				};

				this.$drop = function(originatingPart, index, options){
					if(!$placeholder) return;

					if(options.revert){
						var placeholderRect = $placeholder[0].getBoundingClientRect();
						var helperRect = $helper[0].getBoundingClientRect();
						var distance = Math.sqrt(
							Math.pow(helperRect.top - placeholderRect.top, 2) +
							Math.pow(helperRect.left - placeholderRect.left, 2)
						);

						var duration = +options.revert*distance/200; // constant speed: duration depends on distance
						duration = Math.min(duration, +options.revert); // however it's not longer that options.revert

						['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function(prefix){
							if(typeof $helper[0].style[prefix + 'transition'] !== "undefined")
								$helper[0].style[prefix + 'transition'] = 'all ' + duration + 'ms ease';
						});
						setTimeout(afterRevert, duration);
						$helper.css({
							'top': placeholderRect.top + document.body.scrollTop + 'px',
							'left': placeholderRect.left + document.body.scrollLeft + 'px'
						});
					}
					else
						afterRevert();

					function afterRevert(){
						sortingInProgress = false;
						$placeholder.remove();
						$helper.remove();
						$original.removeClass('ng-hide');

						candidates = void 0;
						$placeholder = void 0;
						options = void 0;
						$helper = void 0;
						$original = void 0;

						// sv-on-stop callback
						onStop($scope, {
							$part: originatingPart.model(originatingPart.scope),
							$index: index,
							$item: originatingPart.model(originatingPart.scope)[index]
						});

						if($target){
							$target.element.removeClass('sv-candidate');
							var spliced = originatingPart.model(originatingPart.scope).splice(index, 1);
							var targetIndex = $target.targetIndex;
							if($target.view === originatingPart && $target.targetIndex > index)
								targetIndex--;
							if($target.after)
								targetIndex++;
							$target.view.model($target.view.scope).splice(targetIndex, 0, spliced[0]);

							// sv-on-sort callback
							if($target.view !== originatingPart || index !== targetIndex)
								onSort($scope, {
									$partTo: $target.view.model($target.view.scope),
									$partFrom: originatingPart.model(originatingPart.scope),
									$item: spliced[0],
									$indexTo: targetIndex,
									$indexFrom: index
								});

						}
						$target = void 0;

						$scope.$root && $scope.$root.$$phase || $scope.$apply();
					}
				};

				this.addToSortableElements = function(se){
					getSortableElements(mapKey).push(se);
				};
				this.removeFromSortableElements = function(se){
					var elems = getSortableElements(mapKey);
					var index = elems.indexOf(se);
					if(index > -1){
						elems.splice(index, 1);
						if(elems.length === 0)
							removeSortableElements(mapKey);
					}
				};
			}]
		};
	}]);

	module.directive('svPart', ['$parse', function($parse){
		return {
			restrict: 'A',
			require: '^svRoot',
			controller: ['$scope', function($scope){
				$scope.$ctrl = this;
				this.getPart = function(){
					return $scope.part;
				};
				this.$drop = function(index, options){
					$scope.$sortableRoot.$drop($scope.part, index, options);
				};
			}],
			scope: true,
			link: function($scope, $element, $attrs, $sortable){
				if(!$attrs.svPart) throw new Error('no model provided');
				var model = $parse($attrs.svPart);
				if(!model.assign) throw new Error('model not assignable');

				$scope.part = {
					id: $scope.$id,
					element: $element,
					model: model,
					scope: $scope
				};
				$scope.$sortableRoot = $sortable;

				var sortablePart = {
					element: $element,
					getPart: $scope.$ctrl.getPart,
					container: true
				};
				$sortable.addToSortableElements(sortablePart);
				$scope.$on('$destroy', function(){
					$sortable.removeFromSortableElements(sortablePart);
				});
			}
		};
	}]);

	module.directive('svElement', ['$parse', function($parse){
		return {
			restrict: 'A',
			require: ['^svPart', '^svRoot'],
			controller: ['$scope', function($scope){
				$scope.$ctrl = this;
			}],
			link: function($scope, $element, $attrs, $controllers){
				var sortableElement = {
					element: $element,
					getPart: $controllers[0].getPart,
					getIndex: function(){
						return $scope.$index;
					}
				};
				$controllers[1].addToSortableElements(sortableElement);
				$scope.$on('$destroy', function(){
					$controllers[1].removeFromSortableElements(sortableElement);
				});

				var handle = $element;
				handle.on('mousedown touchstart', onMousedown);
				$scope.$watch('$ctrl.handle', function(customHandle){
					if(customHandle){
						handle.off('mousedown touchstart', onMousedown);
						handle = customHandle;
						handle.on('mousedown touchstart', onMousedown);
					}
				});

				var helper;
				$scope.$watch('$ctrl.helper', function(customHelper){
					if(customHelper){
						helper = customHelper;
					}
				});

				var placeholder;
				$scope.$watch('$ctrl.placeholder', function(customPlaceholder){
					if(customPlaceholder){
						placeholder = customPlaceholder;
					}
				});

				var body = angular.element(document.body);
				var html = angular.element(document.documentElement);

				var moveExecuted;

				function onMousedown(e){
                    if($parse($attrs.svStop)($scope)) {
                        return;
                    }

					touchFix(e);

					if($controllers[1].sortingInProgress()) return;
					if(e.button != 0 && e.type === 'mousedown') return;

					moveExecuted = false;
					var opts = $parse($attrs.svElement)($scope);
					opts = angular.extend({}, {
						tolerance: 'pointer',
						revert: 200,
						containment: 'html'
					}, opts);
					if(opts.containment){
						var containmentRect = closestElement.call($element, opts.containment)[0].getBoundingClientRect();
					}

					var target = $element;
					var clientRect = $element[0].getBoundingClientRect();
					var clone;

					if(!helper) helper = $controllers[0].helper;
					if(!placeholder) placeholder = $controllers[0].placeholder;
					if(helper){
						clone = helper.clone();
						clone.removeClass('ng-hide');
						clone.css({
							'left': clientRect.left + document.body.scrollLeft + 'px',
							'top': clientRect.top + document.body.scrollTop + 'px'
						});
						target.addClass('sv-visibility-hidden');
					}
					else{
						clone = target.clone();
						clone.addClass('sv-helper').css({
							'left': clientRect.left + document.body.scrollLeft + 'px',
							'top': clientRect.top + document.body.scrollTop + 'px',
							'width': clientRect.width + 'px'
						});
					}

					clone[0].reposition = function(coords){
						var targetLeft = coords.x;
						var targetTop = coords.y;
						var helperRect = clone[0].getBoundingClientRect();

						var body = document.body;

						if(containmentRect){
							if(targetTop < containmentRect.top + body.scrollTop) // top boundary
								targetTop = containmentRect.top + body.scrollTop;
							if(targetTop + helperRect.height > containmentRect.top + body.scrollTop + containmentRect.height) // bottom boundary
								targetTop = containmentRect.top + body.scrollTop + containmentRect.height - helperRect.height;
							if(targetLeft < containmentRect.left + body.scrollLeft) // left boundary
								targetLeft = containmentRect.left + body.scrollLeft;
							if(targetLeft + helperRect.width > containmentRect.left + body.scrollLeft + containmentRect.width) // right boundary
								targetLeft = containmentRect.left + body.scrollLeft + containmentRect.width - helperRect.width;
						}
						this.style.left = targetLeft - body.scrollLeft + 'px';
						this.style.top = targetTop - body.scrollTop + 'px';
					};

					var pointerOffset = {
						x: (e.clientX - clientRect.left)/clientRect.width,
						y: (e.clientY - clientRect.top)/clientRect.height
					};
					html.addClass('sv-sorting-in-progress');
					html.on('mousemove touchmove', onMousemove).on('mouseup touchend touchcancel', function mouseup(e){
						html.off('mousemove touchmove', onMousemove);
						html.off('mouseup touchend', mouseup);
						html.removeClass('sv-sorting-in-progress');
						if(moveExecuted){
							$controllers[0].$drop($scope.$index, opts);
						}
						$element.removeClass('sv-visibility-hidden');
					});

					// onMousemove(e);
					function onMousemove(e){
						touchFix(e);
						if(!moveExecuted){
							$element.parent().prepend(clone);
							moveExecuted = true;
						}
						$controllers[1].$moveUpdate(opts, {
							x: e.clientX,
							y: e.clientY,
							offset: pointerOffset
						}, clone, $element, placeholder, $controllers[0].getPart(), $scope.$index);
					}
				}
			}
		};
	}]);

	module.directive('svHandle', function(){
		return {
			require: '?^svElement',
			link: function($scope, $element, $attrs, $ctrl){
				if($ctrl)
					$ctrl.handle = $element.add($ctrl.handle); // support multiple handles
			}
		};
	});

	module.directive('svHelper', function(){
		return {
			require: ['?^svPart', '?^svElement'],
			link: function($scope, $element, $attrs, $ctrl){
				$element.addClass('sv-helper').addClass('ng-hide');
				if($ctrl[1])
					$ctrl[1].helper = $element;
				else if($ctrl[0])
					$ctrl[0].helper = $element;
			}
		};
	});

	module.directive('svPlaceholder', function(){
		return {
			require: ['?^svPart', '?^svElement'],
			link: function($scope, $element, $attrs, $ctrl){
				$element.addClass('sv-placeholder').addClass('ng-hide');
				if($ctrl[1])
					$ctrl[1].placeholder = $element;
				else if($ctrl[0])
					$ctrl[0].placeholder = $element;
			}
		};
	});

	angular.element(document.head).append([
		'<style>' +
		'.sv-helper{' +
			'position: fixed !important;' +
			'z-index: 99999;' +
			'margin: 0 !important;' +
		'}' +
		'.sv-candidate{' +
		'}' +
		'.sv-placeholder{' +
			// 'opacity: 0;' +
		'}' +
		'.sv-sorting-in-progress{' +
			'-webkit-user-select: none;' +
			'-moz-user-select: none;' +
			'-ms-user-select: none;' +
			'user-select: none;' +
		'}' +
		'.sv-visibility-hidden{' +
			'visibility: hidden !important;' +
			'opacity: 0 !important;' +
		'}' +
		'</style>'
	].join(''));

	function touchFix(e){
		if(!('clientX' in e) && !('clientY' in e)) {
			var touches = e.touches || e.originalEvent.touches;
			if(touches && touches.length) {
				e.clientX = touches[0].clientX;
				e.clientY = touches[0].clientY;
			}
			e.preventDefault();
		}
	}

	function getPreviousSibling(element){
		element = element[0];
		if(element.previousElementSibling)
			return angular.element(element.previousElementSibling);
		else{
			var sib = element.previousSibling;
			while(sib != null && sib.nodeType != 1)
				sib = sib.previousSibling;
			return angular.element(sib);
		}
	}

	function insertElementBefore(element, newElement){
		var prevSibl = getPreviousSibling(element);
		if(prevSibl.length > 0){
			prevSibl.after(newElement);
		}
		else{
			element.parent().prepend(newElement);
		}
	}

	var dde = document.documentElement,
	matchingFunction = dde.matches ? 'matches' :
						dde.matchesSelector ? 'matchesSelector' :
						dde.webkitMatches ? 'webkitMatches' :
						dde.webkitMatchesSelector ? 'webkitMatchesSelector' :
						dde.msMatches ? 'msMatches' :
						dde.msMatchesSelector ? 'msMatchesSelector' :
						dde.mozMatches ? 'mozMatches' :
						dde.mozMatchesSelector ? 'mozMatchesSelector' : null;
	if(matchingFunction == null)
		throw 'This browser doesn\'t support the HTMLElement.matches method';

	function elementMatchesSelector(element, selector){
		if(element instanceof angular.element) element = element[0];
		if(matchingFunction !== null)
			return element[matchingFunction](selector);
	}

	var closestElement = angular.element.prototype.closest || function (selector){
		var el = this[0].parentNode;
		while(el !== document.documentElement && !el[matchingFunction](selector))
			el = el.parentNode;

		if(el[matchingFunction](selector))
			return angular.element(el);
		else
			return angular.element();
	};

	/*
		Simple implementation of jQuery's .add method
	 */
	if(typeof angular.element.prototype.add !== 'function'){
		angular.element.prototype.add = function(elem){
			var i, res = angular.element();
			elem = angular.element(elem);
			for(i=0;i<this.length;i++){
				res.push(this[i]);
			}
			for(i=0;i<elem.length;i++){
				res.push(elem[i]);
			}
			return res;
		};
	}

})(window, window.angular);