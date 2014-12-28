/*!
 * uniGUI Library extension for ExtJS
 * by Farshad Mohajeri  
 * Copyright(c) 2009-2012 FMSoft Inc.
 * info@fmsoft.net
 * http://www.unigui.com
 !*/
var uniVars={mKeys:{},gNavigate:{},_docKeys_:{},_actFrm_:null,_actPge_:{Id1:"",Id2:""},_mouseMove_:null,_mouseUp_:null,_mouseThis_:null,_maskObjs:[],_maskCnt:0,_actCnt:null,_extVer:null};function uniGetValues(form){if(uniVars._extVer=="4.2.0"){delete form._fields}var values=form.getValues(false,true,false,true),res="",val="",encoder=encodeURIComponent;for(var propertyName in values){var ffield=null;try{ffield=eval(propertyName)}catch(err){ffield=null}if(ffield&&ffield.getValue&&!ffield.fieldEditBusy){if(ffield.submitState==undefined){ffield.submitState=0}else{ffield.submitState++}ffield.submitState%=65535;ffield.submittedValue=ffield.getValue();if(typeof ffield.originalValue!="object"){ffield.originalValue="\0"}else{if(ffield.getXTypes().indexOf("checkboxgroup")>0){_sdb_(ffield)}else{if(Ext.isDate(ffield.originalValue)){ffield.originalValue.setFullYear(0)}}}var stVal="";if(ffield.stateValue!=undefined){stVal=ffield.stateValue}var stSub=ffield.submitState.toString(16);ffield.fieldEdited=false;var xf=ffield.getXType();if(xf=="timefield"){val=_ts_(ffield.getValue())}else{if(xf=="datefield"){val=_ds_(ffield.getValue())}else{if(xf=="ux-codemirror"||xf=="canvasfield"){val=ffield.getValue()}else{val=values[propertyName]}}}if(Ext.isArray(val)){val=val.join(";")}res+="&"+encoder(propertyName)+"="+encoder("\2"+stSub+"\2"+stVal+"\2"+val)}}return(res)}function _sdb_(d){if(d.getBoxes){var c=d.getBoxes(),a,f=c.length;for(a=0;a<f;a++){c[a].originalValue=undefined}}}function _fcg_(a){if(a){a.focus()}}function _sfv_(c,b,a){c.fieldEdited=false;if(c.submitState==b||c.submitState==undefined){if(a!=undefined){c.suspendCheckChange++;try{c.setValue(a)}finally{c.suspendCheckChange--}}if(c.resetOriginalValue){c.resetOriginalValue()}else{c.originalValue=c.getValue()}c.lastValue=c.getValue();c.submittedValue=undefined}else{if(a!=undefined){c.suspendCheckChange++;try{c.setValue(a)}finally{c.suspendCheckChange--}}}}function _sfc_(a){if(a){if(a.focusDisabled){return}uniVars._actCnt=a}}function _rsov_(b,a){if(b.submitState!=undefined&&b.submitState<=a&&b.submittedValue!=undefined){if(b.getXTypes&&b.getXTypes().indexOf("checkboxgroup")>0){b.resetOriginalValue();return}b.originalValue=b.submittedValue}}function _gv_(a){var b=uniGetValues(a.getForm());if(b!=""){return('&"_fp_='+_S_ID+b+'"')}else{return("&"+_S_ID)}}function _asst_(a){a.beforeBlur();return""}function _d_(b){try{if(typeof b=="object"&&b&&b.destroy){b.destroy()}}catch(a){}}function _ueval(ss){eval(ss)}function _shm_(i,d,f){var h="Loading...";var c=0;var a=null;var b=false;if(typeof i=="object"&&i){if(i.ldMask||d){if(typeof i.maskMsg=="string"&&i.maskMsg!=""){h=i.maskMsg}if(i.UICnt!=undefined){c=i.UICnt}i.noAutoHide=f;try{if(c++==0){if(typeof i.targetObj=="object"&&i.targetObj){a=i.targetObj.getEl()}else{if(i.uwindow&&i.uwindow.hidden==false){a=i.uwindow.getEl()}else{if(i.uform){a=i.uform.getEl()}}}try{i.UIMask=new Ext.LoadMask(a,{msg:h});i.UIMask.show();i.UIMask.isBody=b}catch(g){_log(g)}if(b){}}}finally{i.UICnt=c;i.hasMask=true;if(i.maskWaitData){uniVars._maskObjs.push({o:i,c:0,u:i.UIMask})}}}}}function _hde_(d,c){if(typeof d=="object"&&d){if(!d.hasMask){return}if(d.noAutoHide&&c!==true){return}d.noAutoHide=false;var b=0;if(typeof d.UIMask=="object"){if(d.UICnt){b=d.UICnt}if(--b<=0){d.hasMask=false;var a=d.UIMask;if(a.mustWaitData!==true){if(a.__child){a.__child.style.zIndex=a.saveZIndex}a.hide();a.destroy()}d.UICnt=0;d.UIMask=undefined}else{d.UICnt=b}}}}function _ssz_(d,a,b){if(d.collapsed){var f=d.collapsed;if(f=="left"||f=="right"){if(a!=d.getWidth()){d.expand(false)}}if(f=="top"||f=="bottom"){if(b!=d.getHeight()){d.expand(false)}}}d.setSize(a,b)}function _cls_(a){if(a&&a.boundList){a.boundList.getSelectionModel().selected.clear()}}var __gcinfo__="";function _gci_(){if(__gcinfo__!=""){return(__gcinfo__)}var g=0,f=0,d=0;var c=1,a=0;function h(b){if(b){g|=c}c<<=1}h(Ext.isChrome);h(Ext.isGecko);h(Ext.isIE);h(Ext.isOpera);h(Ext.isSafari);h(Ext.isWebKit);f=g;c=1;g=0;h(Ext.isLinux);h(Ext.isMac);h(Ext.isWindows);d=g;__gcinfo__="br="+f.toString(10)+";os="+d.toString(10)+";";if(Ext.firefoxVersion){a=Ext.firefoxVersion}else{if(Ext.ieVersion){a=Ext.ieVersion}else{if(Ext.chromeVersion){a=Ext.chromeVersion}else{if(Ext.safariVersion){a=Ext.safariVersion}else{if(Ext.webKitVersion){a=Ext.webKitVersion}}}}}__gcinfo__+="bv="+a.toString(10);return(__gcinfo__)}function fobj2style(c){if(c.fc||c.ft||c.b){var b='style="';if(c.fc){b+="color:"+c.fc+";"}if(c.ft){b+="font:"+c.ft+";"}if(c.b){b+="background-color:"+c.b+";"}return(b+'"')}return null}function _rndsum_(value,summaryData,dataIndex){var sty=null;if(value&&typeof value=="object"){var v=value["_s"+dataIndex];var va=value["_sa"+dataIndex];if(va){try{eval("var fobj="+va+";")}catch(err){}if(typeof fobj!="object"){var fobj={}}sty=fobj2style(fobj)}if(v){if(sty){return("<span "+sty+">"+v+"</span>")}else{return(v)}}}return""}function _getsum_(c){if(c&&c.length){var f=c[c.length-1].data;var b={};for(key in f){var a="_s"+key;if(f[a]){b[a]=f[a]}var a="_sa"+key;if(f[a]){b[a]=f[a]}}return b}return null}function _rndcll_(value,metaData,record,rowIndex,colIndex,store){var colAttr="{}",DefColDf="d/m/Y",dVal=null,colType="",colFmt=null,cc=null,dataIndex=-1;if(store.grid){var gg=store.grid;if(gg.cachedColumns){cc=gg.cachedColumns}else{cc=gg.cachedColumns=gg.view.getGridColumns()}if(!cc){return"ERROR_1"}var col=cc[colIndex];if(!col){return"ERROR_2"}dataIndex=col.dataIndex;colAttr=col.attr;if(!colAttr||colAttr==""){colAttr="{}"}colFmt=col.cf;colType=col.ct;if(!colFmt){colFmt=null}if(!colType){colType=""}}var cellAttr=null;if(record.data._x==1){cellAttr=record.data["_"+dataIndex]}if(cellAttr&&typeof cellAttr=="object"){dVal=cellAttr.d;cellAttr=cellAttr.a}if(!cellAttr||cellAttr==""){cellAttr="{}"}if(cellAttr!="{}"||colAttr!="{}"){try{eval("var cea="+cellAttr+";")}catch(err){}try{eval("var coa="+colAttr+";")}catch(err){}if(typeof cea!="object"){var cea={}}if(typeof coa!="object"){var coa={}}if(!cea.b){cea.b=coa.b}if(!cea.fc){cea.fc=coa.fc}if(!cea.ft){cea.ft=coa.ft}var sty=fobj2style(cea);if(sty){metaData.tdAttr=sty}}if(dVal!=null){return(dVal)}switch(colType){case"":return(value);case"number":case"float":if(colFmt){return(Ext.util.Format.number(value,colFmt))}return(value);case"boolean":if(typeof value=="boolean"){if(colFmt&&typeof colFmt=="object"){return(colFmt[value])}}return(value);case"datetime":if(value.getDate){var defFmt=false;if(!colFmt){defFmt=true;colFmt=DefColDf}if(colFmt.substr(0,2)=="**"){defFmt=true;colFmt=colFmt.slice(2)}if(defFmt){var hm=Ext.Date.format(value,"His");if(hm=="000000"){return(Ext.Date.format(value,colFmt))}else{return(Ext.Date.format(value,colFmt+" H:i:s"))}}else{return(Ext.Date.format(value,colFmt))}}return(value);case"date":if(value.getDate){if(!colFmt){colFmt=DefColDf}return(Ext.Date.format(value,colFmt))}return(value);default:return(value)}}Ext.override(Ext.form.field.Radio,{getModelData:function(){var b={};var a=this.getSubmitValue();if(!a){this.originalValue="\0";return null}if(this.nm){b[this.nm]=a}else{if(this.ownerCt&&this.ownerCt.nm){b[this.ownerCt.nm]=a}else{b[this.name]=a}}return b}});Ext.override(Ext.form.ComboBox,{initList:Ext.Function.createSequence(Ext.form.ComboBox.prototype.initList,function(){if(!this.tpl){this.tpl=new Ext.XTemplate('<tpl for="."><div class="x-combo-list-item">{',this.displayField,":this.blank}</div></tpl>",{blank:function(a){return a===""?"&nbsp":a}})}})});Ext.override(Ext.form.Field,{onFocus:Ext.Function.createSequence(Ext.form.Field.prototype.onFocus,function(){if(this.uform){this.uform.activeField=this;_sfc_(this)}})});Ext.override(Ext.grid.Panel,{on:function(b,f,d,c){if(b=="keypress"||b=="keydown"||b=="keyup"){var a=this.getView();if(a){return a.addElListener(b,f,a,c)}}return this.callParent(arguments)},uniConfigColumns:function(){if(this.lockedGrid){var a=this.lockedGrid.getPlugin("uniCellEditor");if(a){a.onReconfigure()}}if(this.normalGrid){var a=this.normalGrid.getPlugin("uniCellEditor");if(a){a.onReconfigure()}}if(!this.cachedColumns&&this.view){this.cachedColumns=this.view.getGridColumns()}},focus:function(){var a=this.getView();if(a){if(a.focus){a.focus()}else{if(this.normalGrid){this.normalGrid.focus()}}}}});function _maskProcess_(){if(this.grid){this.grid.focusDisabled=false}var a=uniVars._maskObjs;if(a.length){for(var b=a.length-1;b>=0;b--){var c=a[b];if(c.c){c.c--;if(c.c==0){try{if(c.u){c.u.hide();c.u.destroy()}}finally{a.splice(b,1)}}}}}}Ext.override(Ext.data.Store,{load:function(){var c=this;try{if(c.grid){c.grid.focusDisabled=true}if(!c.proxy||c.proxy.type!="ajax"){return}if(c.hasUniListener!==true){c.hasUniListener=true;c.addListener("load",_maskProcess_,c)}var a=uniVars._maskObjs;if(a.length){for(var b=a.length-1;b>=0;b--){var d=a[b];if(d.o.maskWaitData){d.u.mustWaitData=true;d.c++}}}}finally{c.callParent(arguments)}}});Ext.override(Ext.grid.View,{initComponent:function(){var a=this;a.callParent();function b(d){if(d){var f=d.ownerCt;if(f){if(f.nm){return(f)}f=f.ownerCt;if(f&&f.nm){return(f)}}}}a.on("itemkeydown",function(){_sfc_(b(this))});a.on("itemmousedown",function(){_sfc_(b(this))})}});Ext.override(Ext.view.Table,{focusCell:function(){var b=this;var a=b.ownerCt;if(a){if(!a.nm){a=a.ownerCt}if(a&&a.nm){if(uniVars._actCnt&&uniVars._actCnt!=a){return b}}}return b.callParent(arguments)}});Ext.override(Ext.Component,{initComponent:Ext.Function.createInterceptor(Ext.Component.prototype.initComponent,function(){if(this.beforeinit){this.beforeinit(this)}return(true)}),uniCleanup:function(){try{if(this.nm){eval("delete "+this.nm+";");if(this===uniVars._actFrm_){if(this._pactFrm_){uniVars._actFrm_=this._pactFrm_}else{uniVars._actFrm_=null}}}}catch(e){}},onDestroy:function(){try{this.callParent()}finally{this.uniCleanup()}},uniAfterCreate:function(){this.elArray=[];if(!this.uniHasEvent){this.uniHasEvent=[]}this.uniCheckEvent("mouseover");this.uniCheckEvent("mouseout");this.uniCheckEvent("mousedown");this.uniCheckEvent("mouseup");this.uniCheckEvent("mousemove");this.uniCheckEvent("click");this.uniCheckEvent("dblclick");this.__X=-1;this.__Y=-1},uniCheckEvent:function(a){if(this.events[a]===true){this.uniHasEvent[a]=true}},uniSelectFirst:function(){return this.uniSelectNext()},uniSelectNext:function(t,l,h){if(this.uform){var k=this.uform,n=0,i=-1,b=-1,j=-1,g=-1,p=-1,s=1000000,r="",q="",a=true,o=0;if(l===false){a=l}if(t){if(t.uTabIndex){n=t.uTabIndex}r=t.Id1;q=t.Id2;if(r&&uniVars._actPge_.Id1&&r===uniVars._actPge_.Id1&&q!==uniVars._actPge_.Id2){return this.uniSelectFirst()}}if(!r){r=uniVars._actPge_.Id1}if(!q){q=uniVars._actPge_.Id2}if(k){k.tabItems.each(function(d,u){if(d.uTabIndex){if(r===d.Id1&&d.Id2!==q){return true}if(d.isVisible&&d.isVisible()==false){return true}if(d.isDisabled&&d.isDisabled()==true){return true}var c=d.ownerCt;while(c){if(c.isDisabled()==true){return true}if(c.isVisible()==false){return true}c=c.ownerCt}var f=d.uTabIndex;o=n-f;if(a){o=-o}if(b==-1||b>f){b=f;j=u}if(g<f){g=f;p=u}if(o>0&&o<s){s=o;i=u}}});if(i==-1&&h){if(a){i=j}else{i=p}}if(i>=0){var m=k.tabItems.get(i);if(m.focus){m.focus(false)}}}}return i},onBlur:function(b){var a=this;a.callParent(arguments);if(a.uniBlurChanged&&a.trackBlurChange){a.uniBlurChanged=false;ajaxRequest(a,"blurchange")}},addToTab:function(a){if(this.uform){if(a){this.uTabIndex=a}if(this.uform.tabItems.indexOf(this)==-1){this.uform.tabItems.add(this.id,this)}}},destroy:Ext.Function.createInterceptor(Ext.Component.prototype.destroy,function(){if(!this.isDestroyed){if(this.manualDestroy){return(false)}if(this.uform){this.uform.tabItems.remove(this);if(this.uform.activeField===this){this.uform.activeField=null}}if(this.owner){if(this.rootObj){eval("delete "+this.owner.uname+";")}else{if(this.uname){this.owner[this.uname]=null}}}}return(true)}),setPendingElProps:function(){if(this.elArray){var b=this.elArray;while(b.length>0){e=b.pop();this.setElProp(e.prop,e.val,e.mtd,e.cs,true)}}},afterRender:function(){var a=this;a.callParent();a.initUniEvents();a.setPendingElProps()},ismon:function(b){if(this.mons){for(var a=0;a<this.mons.length;a++){if(this.mons[a].ename==b){return(true)}}}return(false)},unimon:function(b,a,c){if(this.uniHasEvent[b]===true){return}if(this.events[b]===true){return}if(c&&this[c]){return}if(this.ismon(b)==false){this.addEvents(b);this.mon(this.el,b,a,this)}},initUniEvents:function(){if(this.monitorUniEvents){var a="createTouch" in document;this.unimon("mouseover",this.ev_mouseover,"onMouseOver");this.unimon("mouseout",this.ev_mouseout,"onMouseOut");if(a){this.unimon("touchstart",this.ev_mousedown);this.unimon("touchend",this.ev_mouseup);this.unimon("touchmove",this.ev_mousemove)}else{this.unimon("mousedown",this.ev_mousedown);this.unimon("mouseup",this.ev_mouseup);this.unimon("mousemove",this.ev_mousemove)}this.unimon("click",this.ev_click,"onClick");this.unimon("dblclick",this.ev_dblclick)}},uniGetXY:function(g){var d=this.__X=d;var c=this.__Y=c;var a=g.button;if(g.browserEvent.touches){var f=g.browserEvent;if(f.targetTouches&&f.targetTouches[0]){var h=this.getPosition();d=f.targetTouches[0].pageX-h[0];c=f.targetTouches[0].pageY-h[1]}}else{var h=this.getPosition();d=g.getX()-h[0];c=g.getY()-h[1]}this.__X=d;this.__Y=c;return({x:d,y:c,b:a})},do_mouseover:function(a){this.fireEvent("mouseover",this)},do_mouseout:function(a){this.fireEvent("mouseout",this)},do_mousedown:function(d,c,f,a){this.fireEvent("mousedown",this,c,f,a)},do_mouseup:function(d,c,f,a){this.fireEvent("mouseup",this,c,f,a)},do_mousemove:function(d,c,f,a){this.fireEvent("mousemove",this,c,f,a)},ev_mouseover:function(a){if(!this.disabled){this.do_mouseover(a)}},ev_mouseout:function(a){if(!this.disabled){this.do_mouseout(a)}},ev_mousedown:function(a){if(!this.disabled){var b=this.uniGetXY(a);this.do_mousedown(a,b.x,b.y,b.b)}},ev_mouseup:function(a){if(!this.disabled){var b=this.uniGetXY(a);this.do_mouseup(a,b.x,b.y,b.b)}},ev_mousemove:function(a){if(!this.disabled){var b=this.uniGetXY(a);this.do_mousemove(a,b.x,b.y,b.b)}},ev_click:function(a){if(!this.disabled){this.fireEvent("click",this)}},ev_dblclick:function(a){if(!this.disabled){this.fireEvent("dblclick",this)}},showMask:function(b,a){if(b){this.maskMsg=b}if(a){this.targetObj=a}else{if(this.uform){this.targetObj=this.uform}}_shm_(this,true)},hideMask:function(){_hde_(this)},setElProp:function(h,g,a,c,d){var b=this.getEl();if(b){switch(a){case 0:b.setStyle(h,g);break;case 1:b.down(c).setStyle(h,g);break;case 2:if(b.dom){b.dom[h]=g}break;case 3:if(b.dom&&b.dom.style){b.dom.style[h]=g}break;case 4:if(this.setFieldStyle){this.setFieldStyle(h+":"+g)}break}}else{if(d==undefined){if(this.elArray){var f=this.elArray;f.push({prop:h,val:g,mtd:a,cs:c})}}}},setBodyProp:function(c,b){var a=this.body;if(a){a.setStyle(c,b)}}});function _mnthc_(b,a){if(b&&a&&a.on){a.on("headerclick",function(d,c){b.fireEvent("headerclick",b,c)})}}function _trnd_(j,b,c,g,l,k,h){var f=c.data;if(f){if(f.fc||f.ft){var i='style="';if(f.fc){i+="color:"+f.fc+";"}if(f.ft){i+="font:"+f.ft+";"}b.tdAttr=i+'"'}}return(j)}function _htnr_(a,c,d,b){d.ui._pr=d.ui.render;d.ui.render=function(g){this._pr(g);var h=this.getTextEl();var f=this.node.attributes;if(h){if(!f._fcl){f._fcl=a._fcl}if(!f._fn){f._fn=a._fn}h.style.color=f._fcl;h.style.font=f._fn}}}function _dts_(a){if(a&&a.getDate){return(Ext.Date.format(a,"YmdHis"))}else{return("")}}function _xl_(a){if(a&&a.getDate){return("\3d\3"+_dts_(a))}else{if(typeof a=="boolean"){return("\3b\3"+a)}else{return(a)}}}function _ds_(a){if(a&&a.getDate){return(Ext.Date.format(a,"Ymd"))}else{return("")}}function _ts_(a){if(a&&a.getDate){return(Ext.Date.format(a,"H:i:s"))}else{return(a)}}function _stn_(a,c){var b=a.getRootNode().findChild("id",c,true);if(b){a.selModel.select(b)}}function _cnf_(b,d,c,a){var f=b.store.getNodeById(d);if(f){if(f[c]){f[c](a)}}}function _snatr_(b,c,a,f){var d=b.store.getNodeById(c);if(d){d.set(a,f);d.commit()}}function _cdo_(g,c,f,b,d){if(b){if(f){if(g){if(!b[g]){b[g]={}}var a=b[g]}else{var a=b}a.owner=b;a[f]=c;c.uname=f}else{if(g){c.uname=g;b[g]=c}}c.owner=b;c.uform=b.form;c.uwindow=b.window;if(b.form&&b.window&&!b.window.uform){b.window.uform=b.form;b.window.uwindow=b.window}}else{if(c){_ueval(g+"="+c.nm+";")}else{_ueval(g+"={};")}_ueval(g+'.uname="'+g+'";')}if(c){c.monitorUniEvents=true;c.retfalse={};if(c.uniAfterCreate){c.uniAfterCreate()}if(d){d(c)}}}function _coe_(b,g,h,f,d){var c="On"+f.charAt(0).toUpperCase()+f.substring(1);var a=null;if(g){if(h){a=b[g][h]}else{a=b[g]}}else{if(h){a=b[h]}else{a=b}}a.on(f,d);a[c]=d}function _coxe_(a,f,g,c,b){if(f){if(g){var d=a[f][g]}else{var d=a[f]}}else{if(g){var d=a[g]}else{var d=a}}if(!d.exEvents){d.exEvents=[]}d.exEvents[c]=b}function ajaxRequest(j,h,g){var b="";var f=encodeURIComponent;if(g&&g.length){var a=g.length;for(var d=0;d<a;d++){b=b+"&"+f(g[d])}}if(j.getXType&&j.getXType()=="combo"){_asst_(j)}var c="Ajax=1&IsEvent=1&Obj="+j.nm+"&Evt="+h+b+_gv_(j.uform);Ext.Ajax.request({url:j.owner.appRoot+"HandleEvent",params:c,success:j.owner.ajxS,failure:j.owner.ajxF,obj:j})}function _hreq_(d,a,c){if(d&&d.exEvents){var b=d.exEvents.ajaxrequest;if(b){b(d,a,c)}}}function _hcbk_(c,b){if(c&&c.exEvents){var a=c.exEvents.ajaxcallback;if(a){a(c,b)}}}function _aexc_(a){var b=a.responseText;if(b&&b.substring(0,3)=="@@@"){a.responseText=b.substring(3);return(true)}return(false)}function _srd_(b,g,c,f,a){var d=b.getAt(g);if(d){if(f===null){d.data=[" "]}else{d.set(c,f);d.set("_"+c,a);if(a!=""){d.set("_x",1)}}d.commit()}}function _axy_(d){var a=false;if(d&&d.getPosition){var c=d.getPosition();if(c[0]<0){a=true;c[0]=0}if(c[1]<0){a=true;c[1]=0}if(a){d.setPosition(c[0],c[1])}}}function _ccell_(d){var c=d;var a=c.selection;var b=c.grid;if(!a){a=c.nextSelection}if(a&&b){if(a.row===b.uniRow&&a.column===b.uniCol){return true}b.uniRow=a.row;b.uniCol=a.column}return false}function _ssevt_(d,c,a){if(!d.uniSuspenedEvents){d.uniSuspenedEvents={}}d.uniSuspenedEvents[c]=a}function _gsc_(d,c,a){if(!d.uniSuspenedEvents){d.uniSuspenedEvents={}}_ssevt_(d,"select",true);try{d.setCurrentPosition({row:c,column:a})}finally{_ssevt_(d,"select",false);if(d.grid){d.grid.focusDisabled=false}}var b=uniVars._actCnt;if(b&&b.focus){b.focus()}}function _gsr_(c,b){_ssevt_(c,"select",true);try{c.select(b)}finally{_ssevt_(c,"select",false);if(c.grid){c.grid.focusDisabled=false}}var a=uniVars._actCnt;if(a&&a.focus){a.focus()}}function _agle_(b){var a;if(b.normalGrid){a=b.normalGrid.getPlugin("uniCellEditor");if(a){a.on("beforeedit",function(g,f,i,h){this.grid.ownerCt.fireEvent("beforeedit",g,f,i,h)});a.on("edit",function(g,f,i,h){this.grid.ownerCt.fireEvent("edit",g,f,i,h)})}b.normalGrid.on("celldblclick",function(j,i,p,o,n,m,l,k){this.ownerCt.fireEvent("celldblclick",j,i,p,o,n,m,l,k)})}if(b.lockedGrid){a=b.lockedGrid.getPlugin("uniCellEditor");if(a){a.on("beforeedit",function(g,f,i,h){this.grid.ownerCt.fireEvent("beforeedit",g,f,i,h)});a.on("edit",function(g,f,i,h){this.grid.ownerCt.fireEvent("edit",g,f,i,h)});a.on("celldblclick",function(g,f,i,h){this.grid.ownerCt.fireEvent("celldblclick",g,f,i,h)})}b.lockedGrid.on("celldblclick",function(j,i,p,o,n,m,l,k){this.ownerCt.fireEvent("celldblclick",j,i,p,o,n,m,l,k)})}}function _cge_(b){var a;if(b&&b.grid){if(b.grid.plugins){a=b.grid.getPlugin("uniCellEditor");if(a&&a.editing){a.completeEdit()}return}if(b.grid.lockedGrid&&b.grid.lockedGrid.plugins){a=b.grid.lockedGrid.getPlugin("uniCellEditor");if(a&&a.editing){a.completeEdit()}}if(b.grid.normalGrid&&b.grid.normalGrid.plugins){a=b.grid.normalGrid.getPlugin("uniCellEditor");if(a&&a.editing){a.completeEdit()}}}}Ext.grid.uniCheckColumn=Ext.extend(Ext.grid.Column,{chClk:function(sender,rr,cc){if(typeof this.ogrid=="string"){this.ogrid=eval(this.ogrid)}var cb=sender.checked;if(typeof cc=="string"){cc=parseInt(cc)}var record=this.ogrid.store.getAt(rr);record.set(this.dataIndex,cb);record.commit();e={value:cb,originalValue:!cb,rowIdx:rr+32768,colIdx:cc,column:this.ogrid.cachedColumns[cc]};this.ogrid.fireEvent("edit",this.ogrid,e);return true},renderer:function(g,a,c,f,i,h){if(h.grid){var b=h.grid.cachedColumns[i]}if(b){var j="&#160;";if(b.cf&&typeof b.cf=="object"){if(typeof g=="boolean"){j+=b.cf[g]}}var d='<div>&#160;&#160;<input type="checkbox" id="'+h.nm+f+"_"+i+'" ';d+=(b.rdonly?"disabled":"")+" "+(g===true?"checked":"");d+=' onclick="'+b.nm+".chClk(this,"+f+","+i+');"/>'+j+"</div>";return d}},init:Ext.emptyFn});function _ae_(a){if(a.record&&a.record.dirty){if(a.grid){}}}function _pd_(a){return(Ext.Date.parse(a,"YmdHis"))}function is_input(a){return(a=="text")||(a=="textarea")||(a=="submit")||(a=="password")}function is_readonly(a){return(a.readOnly)}function _keyMon_(b,j,c){var d=null;var k=uniVars._actFrm_;if(k&&k.mKeys&&k.mKeys.e){d=k.mKeys}else{d=uniVars.mKeys}if(d&&d.e){if(d.ea){j.h=(d.ha!==false);return true}for(var f=0;f<d.a.length;f++){var l=d.a[f];if(c){var g=l.cs;var h=l.ce}else{var g=l.ks;var h=l.ke}if(!h){h=g}if(g&&h){if(b>=g&&b<=h){j.h=(l.h!==false);return true}}}return false}return true}function _prkeyd_(l,g,m,d,c){var i={h:true};if(uniVars._actFrm_){var k=uniVars._actFrm_;if(k.keyprv||!is_input(l)){if(_keyMon_(g,i)){if(d){k.fireEvent("keyup",uniVars._actFrm_,g,m)}else{k.fireEvent("keydown",uniVars._actFrm_,g,m)}}}if(!d){var b=null;if(k.gNavigate&&k.gNavigate.e){b=k.gNavigate}else{b=uniVars.gNavigate}if(b&&b.e){if(b.gs&&g==b.gs.k&&m==b.gs.s){k.fireEvent("submit",uniVars._actFrm_);if(b.gs.h!==true){return false}else{return true}}else{if(b.gc&&g==b.gc.k&&m==b.gc.s){k.fireEvent("cancel",uniVars._actFrm_);if(b.gc.h!==true){return false}else{return true}}}if(uniVars._actFrm_.activeField){var h=k.activeField;if(b.t&&g==9&&m==0){var j=true}else{if(b.t&&g==9&&m==1){var a=true}}if(a||b.gp&&g==b.gp.k&&m==b.gp.s){h.uniSelectNext(h,false,b.c);if(a||b.gp.h!==true){return false}}else{if(j||b.gn&&g==b.gn.k&&m==b.gn.s){h.uniSelectNext(h,true,b.c);if(j||b.gn.h!==true){return false}}}}}}}if(uniVars._docKeys_.all){return false}if(uniVars._docKeys_.tab&&g==9){return false}if(uniVars._docKeys_.ESC&&g==27){return false}if(uniVars._docKeys_.BS&&g==8){if(is_readonly(c)){return false}if(!is_input(l)){return false}}if(i.h!==true){return false}return true}function _ctu_(a,c){var b=String.fromCharCode(a);if(c){encoder=encodeURIComponent;return(encoder(b))}else{return b}}function _prkeyp_(c,d){var b={h:true};if(uniVars._actFrm_){if(uniVars._actFrm_.keyprv||!is_input(c)){var a=_ctu_(d);if(_keyMon_(a,b,true)){uniVars._actFrm_.fireEvent("keypress",uniVars._actFrm_,_ctu_(d,true))}}}if(b.h!==true){return false}return true}function _pss_(b){var a=0;if(b.shiftKey){a|=1}if(b.altKey){a|=2}if(b.ctrlKey){a|=4}return(a)}function _cwk_(){document.oncontextmenu=function(){if(uniVars._docKeys_.rClick){return false}return true};if(typeof window.event!="undefined"){document.onkeydown=function(){var c=event.srcElement;var b=c.type;var a=event.keyCode;return _prkeyd_(b,a,_pss_(event),false,c)};document.onkeypress=function(){var b=event.keyCode;var a=event.srcElement.type;return _prkeyp_(a,b)};document.onkeyup=function(){var c=event.srcElement;var b=c.type;var a=event.keyCode;return _prkeyd_(b,a,_pss_(event),true,c)}}else{document.onkeydown=function(d){var c=d.target;var b=c.type;var a=d.keyCode;return _prkeyd_(b,a,_pss_(d),false,c)};document.onkeypress=function(c){var b=c.target;var d=c.charCode||c.keyCode;var a=b.type;return _prkeyp_(a,d)};document.onkeyup=function(d){var c=d.target;var b=c.type;var a=d.keyCode;return _prkeyd_(b,a,_pss_(d),true,c)}}Ext.EventManager.addListener(document,"mousemove",function(a){if(uniVars._mouseMove_){a.preventDefault();var b=Ext.EventManager.getPageXY(a);uniVars._mouseMove_.apply(uniVars._mouseThis_,[b[0],b[1]]);return false}return true});Ext.EventManager.addListener(document,"mouseup",function(a){if(uniVars._mouseUp_){try{a.preventDefault();var b=Ext.EventManager.getPageXY(a);uniVars._mouseUp_.apply(uniVars._dragThis_,[b[0],b[1]])}finally{uniVars._mouseThis_=null;uniVars._mouseUp_=null}}return true})}function _dko_(a){if(a){uniVars._docKeys_=a}}function _saf_(a){if(a&&a.uform){a.uform._pactFrm_=uniVars._actFrm_;uniVars._actFrm_=a.uform}}function _sdl_(b){try{Ext.destroy(Ext.get("__uniDlFrame"))}catch(a){}return Ext.DomHelper.append(document.body,{tag:"iframe",id:"__uniDlFrame",frameBorder:0,width:0,height:0,css:"display:none;visibility:hidden;height:0px;",src:b})}Ext.define("Ext.uni.Splitter",{extend:"Ext.panel.Panel",orientation:"",minSize:0,monitorUniEvents:true,_down:false,_moved:false,_vert:false,overlayCls:Ext.baseCSSPrefix+"resizable-overlay",initComponent:function(){this.callParent(arguments);if(this.orientation=="n"||this.orientation=="s"){this._vert=true}},getNewPos:function(a,i){var c=null;if(this.ownerCt){var g=this.ownerCt.getPosition();if(this._vert){c=i-g[1]}else{c=a-g[0]}var b=this.minSize;if(this.orientation=="w"){b=this.ownerCt.getWidth()-b;if(c>b){c=b}}else{if(this.orientation=="n"){b=this.ownerCt.getHeight()-b;if(c>b){c=b}}else{if(c<b){c=b}else{if(this._vert){var d=this.ownerCt.getHeight()-5;if(c>d){c=d}}else{var f=this.ownerCt.getWidth()-5;if(c>f){c=f}}}}}if(c<0){c=0}}return(c)},setHandlePos:function(b){var a=this.ownerCt.getPosition();if(this._vert){this.hhandle.setY(b+a[1]-1)}else{this.hhandle.setX(b+a[0]-1)}},setNewPos:function(a){if(this._vert){this.setPosition(undefined,a)}else{this.setPosition(a)}},createDragOverlay:function(){var a;a=this.overlay=Ext.getBody().createChild({cls:this.overlayCls,html:"&#160;"});a.unselectable();a.setSize(Ext.Element.getViewWidth(true),Ext.Element.getViewHeight(true));a.dom.style.cursor=this.el.dom.style.cursor;a.dom.style.zIndex=2000000;a.show()},createDragHandle:function(){var a;a=this.hhandle=Ext.getBody().createChild({html:"&#160;"});a.unselectable();if(this._vert){a.setSize(this.getWidth(),this.getHeight()+2)}else{a.setSize(this.getWidth()+2,this.getHeight())}var b=this.getPosition();a.setXY(b);a.addCls([Ext.baseCSSPrefix+"splitter",Ext.baseCSSPrefix+"splitter-active"]);a.dom.style.zIndex=1000000;a.show()},dragMove:function(a,c){if(this.getXType){if(!this._moved){this.createDragHandle()}this._moved=true;var b=this.getNewPos(a,c);if(b!==null){this.setHandlePos(b)}}},dragEnd:function(a,f){var d=this;if(d.overlay){d.overlay.remove();delete d.overlay}if(d.hhandle){d.hhandle.remove();delete d.hhandle}if(d.getXType&&d._moved&&d._down){var c=d.getNewPos(a,f);if(c!==null){if(d.rtl&&!d._vert){var b=this.ownerCt.getWidth();c=b-c}d.setNewPos(c);d.fireEvent("moved",d,c)}d._moved=false;d._down=false}},do_mousedown:function(d,c,f,a){d.preventDefault();if(!this._down){this._down=true;this.createDragOverlay();Ext.EventManager.addListener(this.overlay,"mousemove",function(b){if(this.getXType&&this._down){var g=Ext.EventManager.getPageXY(b);this.dragMove(g[0],g[1])}},this);Ext.EventManager.addListener(this.overlay,"mouseup",function(b){var g=Ext.EventManager.getPageXY(b);this.dragEnd(g[0],g[1])},this)}}});Ext.define("Ext.iFramePanel",{extend:"Ext.panel.Panel",getEditorBody:function(){var a=this.getDoc();return a.body||a.documentElement},getDoc:function(){return Ext.isIE?this.getWin().document:(this.iframe.contentDocument||this.getWin().document)},getWin:function(){return Ext.isIE?this.iframe.contentWindow:window.frames[this.iframe.name]},setValue:function(c,a){if(this.docInited){if(a===true){this.getEditorBody().innerHTML=c}else{var b=this.getDoc();b.open();b.writeln(c);b.close()}}else{this.fhtml=c;this.fhtmlOnly=a}},initEditor:function(){this.docInited=true;if(this.fhtml){this.setValue(this.fhtml,this.fhtmlOnly)}},onRender:function(){this.callParent(arguments);var a={run:function(){if(this.iframe){var b=this.getDoc();if(b.body||b.readyState=="complete"){Ext.TaskManager.stop(a);Ext.defer(this.initEditor,10,this)}}},interval:25,duration:15000,scope:this};Ext.TaskManager.start(a)}});function _hed_(b){var a=b;if(!a.nm&&a.ownerCt&&a.ownerCt.nm){a=a.ownerCt}if(a.nm){a.uniBlurChanged=true;if(!a.sendBusy){if(!a.fieldEdited){if(a.getValue&&a.getValue()==null){return}a.fieldEdited=true;a.fieldEditBusy=true;try{a.fireEvent("edited",a)}finally{a.fieldEditBusy=false}}}}}Ext.override(Ext.form.field.Base,{onChange:function(){this.callParent(arguments);if(!this.onChangeEventHooked){_hed_(this)}},uniOnChange:function(){var c=this,b=c.getValue(),a=c.lastValue;if(!c.isEqual(b,a)&&!c.isDestroyed){_hed_(this)}},addManagedListener:function(g,b,d,c,a,h){this.callParent(arguments);var f=this;if(typeof b=="object"){return}if(f.nm&&d==f.onChangeEvent){f.onChangeEventHooked=true;f.addManagedListener(g,b,f.uniOnChange,this)}}});Ext.override(Ext.util.Observable,{fireEvent:function(a,b){var c=this;if(c.uniSuspenedEvents&&c.uniSuspenedEvents[a]===true){return}return this.callParent(arguments)}});Ext.override(Ext.form.field.HtmlEditor,{cTask:null,onChange:function(){this.callParent(arguments);_hed_(this)},checkChange:function(a){if(a===true||this.checkChangeBuffer==undefined){this.callParent();return}if(this.cTask==null){this.cTask=new Ext.util.DelayedTask(function(){this.checkChange(true)},this)}this.cTask.delay(this.checkChangeBuffer)}});Ext.override(Ext.menu.Item,{setIcon:function(b){var a=this.iconEl,c=this.icon;if(a){a.dom.src=b||Ext.BLANK_IMAGE_URL}this.icon=b;this.fireEvent("iconchange",this,c,b)}});