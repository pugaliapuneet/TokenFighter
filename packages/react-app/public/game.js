if( document.getElementById('flf-config'))
{
	var flf_config = document.getElementById('flf-config').innerHTML;
	flf_config = JSON.parse(flf_config);
	requirejs.config(
	{
		baseUrl: flf_config.root || '',
		paths:
		{
		},
		config:
		{
		}
	});
}

if (screen.width < 800 ) {
	document.getElementById('loading_img').src = "TK_res/UI/loading_mobile.gif";
}

requirejs(['F.LF/core/support',
'F.LF/modules/loader.js?v=0.1.2-10!'+flf_config.package,'F.LF/modules/manager',
'F.LF/modules/util','buildinfo.js','F.LF/core/css!F.LF/modules/application.css', 'F.LF/third_party/web3.min',
'F.LF/third_party/TKFR_abi', 'F.LF/third_party/MEME_abi', 'F.LF/third_party/YFI_abi', 'F.LF/third_party/TKSLE_abi',
'F.LF/third_party/PICKLE_abi', 'F.LF/third_party/SUSHI_abi', 'F.LF/third_party/USDT_abi', 'F.LF/third_party/EM3D_abi'],
function(Fsupport,
package,Manager,
util,buildinfo, _,  Web3,
TKFR_ABI, MEME_ABI, YFI_ABI, TKSLE_ABI,
PICKLE_ABI, SUSHI_ABI, USDT_ABI, EM3D_ABI){

	if(typeof(console) === 'undefined') {
		console = {};
		console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
	}

	if( flf_config.package.indexOf('http')===0)
	{
		package.path = flf_config.package;
		package.location = flf_config.package;
	}
	else
	{
		package.path = util.normalize_path(flf_config.package);
		package.location = util.normalize_path(flf_config.root+flf_config.package);
	}

	util.div('window_caption_title').innerHTML = buildinfo.version;

	var TKFR_address = top.mainnet ? "0x16B9805A107d0c2803D1F995f68379B975a970D2" : "0x707B22FBd79D8aba8893CA120Af3f2AA568ba4b6";
	var MEME_address = top.mainnet ? "0xe4605d46fd0b3f8329d936a8b258d69276cba264" : "0x821B1AE0a115DA21E6B5d04e7d0fA80097C08eA1";
	var YFI_address = top.mainnet ? "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e" : "0x8BE4c5f9BF23545729dFd567fEc0978df743aFc7";
	var PICKLE_address = top.mainnet ? "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5" : "0x8BE4c5f9BF23545729dFd567fEc0978df743aFc7";
	var SUSHI_address = top.mainnet ? "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2" : "0x8BE4c5f9BF23545729dFd567fEc0978df743aFc7";
	var USDT_address = top.mainnet ? "0xdAC17F958D2ee523a2206206994597C13D831ec7" : "0x8BE4c5f9BF23545729dFd567fEc0978df743aFc7";
	var EM3D_address = top.mainnet ? "0x2E7F7d6866691142Cfac9E366be1075FeD502A84" : "0x821B1AE0a115DA21E6B5d04e7d0fA80097C08eA1";
	var TKSLE_address = top.mainnet ? "0x81b0c8cb62daf41f3b6629c38914dbe898a9fbe7" : "0x2CA0EaD518Ee1087f2aDaa5E610C4745c322ac9d";
	var web3 = top.pweb3 || new Web3(window.web3.currentProvider);
	var TKFR_contract = new web3.eth.Contract(TKFR_ABI(), TKFR_address);
	var MEME_contract = new web3.eth.Contract(MEME_ABI(), MEME_address);
	var YFI_contract = new web3.eth.Contract(YFI_ABI(), YFI_address);
	var PICKLE_contract = new web3.eth.Contract(PICKLE_ABI(), PICKLE_address);
	var SUSHI_contract = new web3.eth.Contract(SUSHI_ABI(), SUSHI_address);
	var USDT_contract = new web3.eth.Contract(USDT_ABI(), USDT_address);
	var EM3D_contract = new web3.eth.Contract(EM3D_ABI(), EM3D_address);
	var TKSLE_contract = new web3.eth.Contract(TKSLE_ABI(), TKSLE_address)
	var MemeBoi_id = top.mainnet ? 1 : 2;
	var Mai_id = 1;
	var Zeig_id = 1;

	// DApp has connected to wallet already
	// Fetch the TKFR tokens
	var promise = top.pweb3 ? top.pweb3.eth.getAccounts() : window.ethereum.request({ method: "eth_accounts" });
	promise.then(function(accounts) {
		var account = accounts[0];
		TKFR_contract.methods.balanceOf(account).call().then(function(balance) {
			balance = parseInt(balance)
			var promises = []
			for (var i=0; i < balance; i++ ) {
				var p = new Promise(function (resolve, reject) {
					TKFR_contract.methods.tokenOfOwnerByIndex(account, i).call().then(function(tokenID) {
						TKFR_contract.methods.tokenURI(tokenID).call().then(function(uri) {
							var xhr = new XMLHttpRequest();
							xhr.open('GET', uri);
							xhr.send();
							xhr.onload = function() {
								if (xhr.status != 200) { // analyze HTTP status of the response
									alert('Error ' + xhr.status + ': ' + xhr.statusText); // e.g. 404: Not Found
									reject(xhr.statusText)
								} else {
									var res = JSON.parse(xhr.response);
									var name = res.display;
									resolve(name)
								}
							};
						})
					})
				})
				promises.push(p)
			}
			// Support MemeBoi
			var p_meme = new Promise(function (resolve, reject) {
				MEME_contract.methods.balanceOf(account, MemeBoi_id).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("MemeBoi")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_meme)

			// Support YFI
			var p_yfi = new Promise(function (resolve, reject) {
				YFI_contract.methods.balanceOf(account).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Banteg")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_yfi)

			// Support PICKLE
			var p_pickle = new Promise(function (resolve, reject) {
				PICKLE_contract.methods.balanceOf(account).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Pickle")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_pickle)

			// Support SUSHI
			var p_sushi = new Promise(function (resolve, reject) {
				SUSHI_contract.methods.balanceOf(account).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Sushinobi")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_sushi)

			// Support USDT
			var p_usdt = new Promise(function (resolve, reject) {
				USDT_contract.methods.balanceOf(account).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Tether")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_usdt)

			// Support EM3D
			var p_em3d = new Promise(function (resolve, reject) {
				EM3D_contract.methods.balanceOf(account, Zeig_id).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Lord Zeig")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_em3d)

			// Support Ether
			var p_ether = new Promise(function (resolve, reject) {
				web3.eth.getBalance(account).then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Ether")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_ether)

			// Support Mai from TKSLE
			var p_mai = new Promise(function (resolve, reject) {
				TKSLE_contract.methods.balanceOf(account, Mai_id).call().then(function(balance) {
					balance = parseInt(balance)
					if (balance>0) {
						resolve("Mai")
					} else {
						resolve("")
					}
				})
			})
			promises.push(p_mai)

			Promise.all(promises).then(function(tokens){
				new Manager(package, buildinfo, tokens);
				document.getElementById('loading_img').style.display = "none";
			})
		}).catch(console.error)
	})
});
