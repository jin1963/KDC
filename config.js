const kjcAddress = "0xd479ae350dc24168e8db863c5413c35fb2044ecd";
const g3x24Address = "0x6cfD8Fe423F20F94825b5edB1E94068fBea19dC9";
const lydiaAddress = "0x0fa662697d93Eb024f411E416f681EA7FECFcF96";

const tokenABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];
