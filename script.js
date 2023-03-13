$('#search-button').on('click', function () {
   
	$.ajax({
		url:'https://api.binderbyte.com/v1/track?api_key=753f24b515a78e102c8d6c7e0fc891bc02628414da812f0bf87beda444247359',
                type:'get',
                dataType:'json',
                headers: {  'Access-Control-Allow-Origin': 'http://The web site allowed to access' },
        data:{
    		
            'courier':$('#courier_input').val(),
			'awb':$('#awb_input').val()
            
 		},

		success:function(result){
			if (result.status == 200){
				let resi = result.data;
                console.log(resi);
                $('#resi-status').html(`
                <div class="col-md-8">
                <div>`+"STATUS PENGIRIMAN"+`</div>
                <table class="table ">
                <tbody>
                    <tr>
                    <th scope="row">`+ "Status" +`</th>
                    <td>` + resi.summary.status +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Layanan" +`</th>
                    <td>` + resi.summary.courier +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Pengirim" +`</th>
                    <td>` + resi.detail.shipper +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Asal" +`</th>
                    <td>` + resi.detail.origin +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Penerima" +`</th>
                    <td>` + resi.detail.receiver +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Tanggal Kirim" +`</th>
                    <td>` + resi.summary.date +`</td>
                    </tr>
                    <tr>
                    <th scope="row">`+ "Tujuan" +`</th>
                    <td>` + resi.detail.destination +`</td>
                    </tr>
                    
                </tbody>
                </table>

                </div>
                `)

            } else {
                $('#resi-result').html(`
                <div class = "col">
                <h1 class = "text-center">` + result.message `</h1>
                </div>
                `)
            }
		}
	});
});