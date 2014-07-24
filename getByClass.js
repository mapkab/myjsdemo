// getByClass
function getByClass(node,name){
	if(node.getElementsByClassName){
		return node.getElementByClassName(name);
	}else{
		var node = document.getElementByTagName(node);
		var nodeAll = [];
		for(var i= 0; i<node.length;i++){
			if(node[i].className==name){
				nodeAll[nodeAll.length] = node[i].className;
 			}
		}
		return nodeAll;
	}
}