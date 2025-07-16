let web3;
let user;

window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      user = accounts[0];
      document.getElementById("walletAddress").innerText = `Connected: ${user}`;
      loadBalances();
    } catch (err) {
      console.error(err);
      document.getElementById("walletAddress").innerText = "❌ Connection failed.";
    }
  } else {
    alert("⚠️ Web3 wallet not detected. Please install MetaMask or Bitget.");
  }
});

document.getElementById("connectWallet").onclick = async () => {
  if (window.ethereum) {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      user = accounts[0];
      document.getElementById("walletAddress").innerText = `Connected: ${user}`;
      loadBalances();
    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet");
    }
  }
};

async function loadBalances() {
  const contractKJC = new web3.eth.Contract(tokenABI, kjcAddress);
  const balanceKJC = await contractKJC.methods.balanceOf(user).call();
  document.getElementById("kjcBalance").innerText = web3.utils.fromWei(balanceKJC, 'ether');

  const contractG3X = new web3.eth.Contract(tokenABI, g3x24Address);
  const balanceG3X = await contractG3X.methods.balanceOf(user).call();
  document.getElementById("g3x24Balance").innerText = web3.utils.fromWei(balanceG3X, 'ether');

  const contractLYDIA = new web3.eth.Contract(tokenABI, lydiaAddress);
  const balanceLYDIA = await contractLYDIA.methods.balanceOf(user).call();
  document.getElementById("lydiaBalance").innerText = web3.utils.fromWei(balanceLYDIA, 'ether');
}
