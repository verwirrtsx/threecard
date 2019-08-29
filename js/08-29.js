	var cards =document.getElementById('mycard');
	for(let a=1;a<17;a++){
	var img='pic/'+a+'.jpg';
	cards.innerHTML +='<img src='+img+'  id="a'+a+'" class="card"  onclick="showit('+a+')">';
	// console.log(img);
	}

	var cardlist=[];
	function showit(id){
	cid = 'a'+id;
	if($('#'+cid).hasClass("card")){
		$('#'+cid).removeClass("card");
		$('#'+cid).addClass("card1");
		cardlist.push(cid);
	}else{
		$('#'+cid).removeClass("card1");
		$('#'+cid).addClass("card");
	}
	
	}
	
	function send(){	
		console.log(cardlist)
		var parent=document.getElementById("mycard");
		for(let i=0;i<cardlist.length;i++){
			let child=document.getElementById(cardlist[i]);
			parent.removeChild(child);
			//aa.shift();
		}
		showintable(cardlist);
		cardlist = [];	
	}
	
	function showintable(list){
		console.log(list);
		var timg = document.getElementById('table');
		for(let b=0;b<list.length;b++){
			
			timg.innerHTML +='<img src=pic/'+b+'.jpg  id="'+list[b]+'" class="card">';
		}
	}
	