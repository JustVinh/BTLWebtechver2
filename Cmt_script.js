const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

let isSidebarOpen = 1

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');

		// var isOpen = new URLSearchParams();
		
	})
});




// TOGGLE SIDEBAR
// const menuBar = document.querySelector('#content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
	isSidebarOpen = -isSidebarOpen
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classList.toggle('show');
// 		if(searchForm.classList.contains('show')) {
// 			searchButtonIcon.classList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })





if(window.innerWidth < 800) {
	console.log("width 800px")
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	// searchButtonIcon.classList.replace('bx-x', 'bx-search');
	// searchForm.classList.remove('show');
}

window.addEventListener('resize', (event) =>{
	if(this.innerWidth < 800){
		sidebar.classList.add('hide');
		isSidebarOpen = -1
	}
} )


// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classList.replace('bx-x', 'bx-search');
// 		searchForm.classList.remove('show');
// 	}
// })



// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classList.add('dark');
// 	} else {
// 		document.body.classList.remove('dark');
// 	}
// })


//Pagination

var tableData2 =[
	{
		'ma': '1',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '2',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '3',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '4',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '5',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '6',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '7',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '8',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '9',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '5',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '6',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '7',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '8',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '9',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '10',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '11',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '12',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '13',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '933',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '543',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '546',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '7655',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '845',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '9342',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '554',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '665',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '7234',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '8545',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '92131',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '554',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '611',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '754',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '8123',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	},
	{
		'ma': '954',
		'ten': "Magic Stick",
		'gia':'	1203 VND',
		'loai': 'Ph??? ki???n',
		'hang':'Faber Castell'
	}
]


/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/


var state = {
	'querySet': tableData2,

	'page': 1,
	'rows': 5,
	'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

	var trimStart = (page - 1) * rows
	var trimEnd = trimStart + rows

	var trimmedData = querySet.slice(trimStart, trimEnd)

	var pages = Math.round(querySet.length / rows);

	return {
		'querySet': trimmedData,
		'pages': pages,
	}
}

function pageButtons(pages) {
	var wrapper = document.getElementById('pagination-wrapper')

	wrapper.innerHTML = ``
	console.log('Pages:', pages)

	var maxLeft = (state.page - Math.floor(state.window / 2))
	var maxRight = (state.page + Math.floor(state.window / 2))

	if (maxLeft < 1) {
		maxLeft = 1
		maxRight = state.window
	}

	if (maxRight > pages) {
		maxLeft = pages - (state.window - 1)
		
		if (maxLeft < 1){
			maxLeft = 1
		}
		maxRight = pages
	}


	for (var page = maxLeft; page <= maxRight; page++) {
		let noPage = page - maxLeft + 1;
		//jquery ra <li> nen se lay value cua <li>
		//bug: label k active duoc radio button
		wrapper.innerHTML += `<li value=${page} class="page"><label for="paginacao${noPage}" class="paginacao">${page}</label></li>`
	} 

	if (state.page != 1) {
		wrapper.innerHTML = `<li value=${1} class="page"><label for="paginacaofirst" class="paginacao">&#171;</label></li>` + wrapper.innerHTML
	}

	if (state.page != pages) {
		wrapper.innerHTML += `<li value=${pages} class="page"><label for="paginacaolast" class="paginacao">&#187;</label></li>`
	}

	$('.page').on('click', function() {
		// console.log("ban dau")
		
		console.log(maxLeft)
		//phai empty truoc moi dc build table
		$('#table-body').empty()
		state.page = Number($(this).val())
		buildTable()

		//state duoc update nen max left, max right neu duoc re-calculate thi se cho ra gia tri khac
		//vi co su dich chuyen cac button
		//vi du: click button 4, vi tri button thu 4 se sa'ng, tuy nhien do max left thay doi nen vi tri cua button 4 se khong nam o vi tri so 4 nua
		//xoa doan code sau de display bug
		// console.log("luc sau")
		var localmaxLeft = (state.page - Math.floor(state.window / 2))
		var localmaxRight = (state.page + Math.floor(state.window / 2))

		if (localmaxLeft < 1) {
			localmaxLeft = 1
			localmaxRight = state.window
		}

		if (localmaxRight > pages) {
			localmaxLeft = pages - (state.window - 1)
			
			if (localmaxLeft < 1){
				localmaxLeft = 1
			}
			localmaxRight = pages
		}
		console.log(localmaxLeft)
		let noPage = Number($(this).val()) - localmaxLeft + 1
		$(`#paginacao${noPage}`).prop("checked", true)
	})


}

function buildTable() {
	var table = $('#table-body')

	var data = pagination(state.querySet, state.page, state.rows)
	var myList = data.querySet

	for (var i = 1 in myList) {
		console.log(`adding data no ${i}`)
		var product = myList[i]
		var row = `<tr>
				<td>${myList[i].ma}</td>
				<td>${myList[i].ten}</td>
				<td>${myList[i].gia}</td>
				<td>${myList[i].loai}</td>
				<td>${myList[i].hang}</td>
				<td><span class="status completed" onclick="openProdDetail(${myList[i].ma})">Xem</span></td>
				`
				// var detailTd = document.createElement("td")
				// var detailBtn = document.createElement("span")
				// detailBtn.innerHTML="Xem"
				// detailBtn.classList.add("status")
				// detailBtn.classList.add("completed")
				// detailTd.appendChild(detailBtn)
				
				// console.log(detailTd.outerHTML)
		
				// row = row.concat(detailTd.outerHTML)
		table.append(row)
	}

	pageButtons(data.pages)
}

function openProdDetail(id){
	localStorage.setItem("product2",JSON.stringify(tableData2.find(x => x.ma == id)))
	console.log(tableData2.find(x => x.ma == id))
	location.href="AdminSys_QlySP_Edit.html";
	console.log(id);
}

//sortByPrice
const priceSortBtn = document.querySelector('#content main .table-data .order table th i') 
priceSortBtn.addEventListener('click', ()=>{
	sortedData =[
		{
			'ma': '1',
			'ten': "PS5",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '2',
			'ten': "PS5",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '3',
			'ten': "PS5",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '4',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '5',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '6',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '7',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '8',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '9',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '5',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '6',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '7',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '8',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},
		{
			'ma': '9',
			'ten': "Magic Stick",
			'gia':'	1203 VND',
			'loai': 'Ph??? ki???n',
			'hang':'Faber Castell'
		},]
	state.querySet=sortedData
	state.page = 1
	console.log(state.querySet)
	$('#table-body').empty()
	buildTable()
	console.log("Xoa data")
})
