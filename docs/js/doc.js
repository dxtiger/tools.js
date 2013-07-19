/**
 *  html5
 * 
 * 
 *  **/
(function(){
	if(!document.querySelector || window.ActiveXObject){
		alert('请使用支持html5的浏览器，chrome or firefox。远离IE');
		return;
	}
})();
/**
 * menu
 * 
 *  **/
(function(window,document){
	/**
	 *   data = [
	 * 			{
	 * 				name : Y,
	 * 				link : Y.html,
	 * 				method : [
	 * 							{
	 * 								name : Y.add,
	 * 								link : #Y.add,
	 * 							}
	 * 						]
	 * 			}
	 * ]
	 * 
	 *  **/
	var URL = location.href,
		temp = '<h4><a href="<@= link @>"><@= name  @></a></h4>' + 
			  '<ul>'+
			  	'<@ for(var i=0,l=method.length;i<l;i++) { @>' + 
			  		'<li><a href="<@= !state ? link+method[i].link : method[i].link @>"><@= method[i].name  @></a></li>' +
			  	 '<@ } @>' +
			  '</ul>',
		str = '',
		te = TE(),
		data,
		current;
	
	
	function findCurrent(){
		for(var i=0,l=data.length;i<l;i++){
			if(URL.indexOf(data[i].link) > -1){
				current = i;
				return;
			}
		}
		return ;
	}
	
	function each(){
		var o;
		for(var i=0,l=data.length;i<l;i++){
			if(i==current){
				data[i].state = true;
			}
			single(data[i])
		}
		write();
	}
	
	function single(d){
		str += te.render(temp,d);
	}
	
	function write(){
		obj.innerHTML = str;
		str = '';
	}
	
	function init(id,d){
		obj = document.getElementById(id);
		data = d;
		findCurrent();
		each();
	}
	
	
	
	Domready(function(){ 
		init('menu_core',menuData);
		init('menu_plugin',menu_plugin_data);
	})
	
	
})(window,document);

(function(window,document){
	var tabs,
		cons;
	
	function init(){
		tabs = document.getElementById('tab').getElementsByTagName('strong');
		cons = [document.getElementById('menu_core'),document.getElementById('menu_plugin')];

		handler();
	}
	function handler(){
		Event.add(tabs[0],'click',function(){change(0)});
		Event.add(tabs[1],'click',function(){change(1)});
	}
	function change(n){
		tabs[1-n].className = '';
		cons[1-n].className = '';
		tabs[n].className = 'on';
		cons[n].className = 'on';
	}
	Domready(init);
})(window,document)
