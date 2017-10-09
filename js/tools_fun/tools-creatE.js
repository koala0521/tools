/*
****个人工具函数
****Time：2017-5-2 
****author:gaopengfei
*/

(function( $ ){
	
	$.creat = function( elName ){
		var el = null;
		
		if( typeof elName === 'string' ){
			
			el = document.createElement( elName );
		}		
		return el;
	};
	
	$.attr = function(el,attr,value){
		
		if( typeof el !== 'object' ){
			
			throw new Error('arguments[0] is not a object!');
		}
		
		var l = arguments.length;
		
		if( l === 2 ){

			return el[attr] || el.dataset[attr];
		}
		
		if( l === 3 || l > 3 ){
			
			el.dataset[attr] = value;
			return el;
		}
	}


	$.trim = function( str ){

		var re = /(^\s*)|(\s*$)/g;

		return str.replace( re , '');

	}
	

})( $pf );




