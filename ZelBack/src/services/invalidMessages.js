// these are known old invalid messages on the blockchain. Do not request them.
const invalidMessages = [
  {
    txid: 'e56e08a8dbe9523ad10ca328fca84ee1da775ea5f466abed06ec357daa192940',
    hash: 'b6f69f3e87d05eda6adc55942c4f589424d7d921e2c3aee25ed791fde2b77d09',
  },
  {
    txid: '3c5644120a2953ffca892b43fe3442ea0ed60ecde51ab3b9e5752d18bbdb8bb4',
    hash: '4558a998975ae982f23e7cb48ff1b567ebea8aca1de828ce663cf03250f3186c',
  },
  {
    txid: 'ebbb7b9137c0f92ab9e4a2c2f8845ae86eca011656f390f086a1c3a749fea304',
    hash: '63dd0a975ce153e540322bb0ed72ced18e715baff5f7de6ced3ebee7b6526c2d',
  },
  {
    txid: '516dca8adde5a0945604dc0e446cc5cc2b591a6235c35aaedcf3d32486be70ea',
    hash: 'e387f8721e83777c71783f24d5020c73fb26e6e9cec0bd12e4bf2f7fdf0e581e',
  },
  {
    txid: '41f07a100f8f6db6e69c2d7c3ea09e2ce6903c6fb3e8ae0171c74b390a41cfe3',
    hash: 'a3da9282480a650d369b70475d5ad82b1993ea4839bc27f0e9b5448d5138d34b',
  },
  {
    txid: '14ed83332e4f5658fe866d8b26144428709be686955a9a804f068ec98217fdb2',
    hash: '7a25ad18ec3cdb5356e62d9fc8da72aec715b6725b7fa7f540f0257dcedb2a45',
  },
  {
    txid: 'b6029e710a3a04adeb12cb1b38493d0e7e4fbb7444dfc36527856ff85fa37b3e',
    hash: '461cf48d6439a7279e80630864127ad0ae809a91f58b02dca0411ea32d612c33',
  },
  {
    txid: '5aaa2006b282b04c9f95463837617fb61e29a2ad94aed28a5f070ac259f6a5b8',
    hash: '9b9288ef3bd662991e63dc1052f84c8ff95b17bb282c0bc0a61d51240bd556ad',
  },
  {
    txid: '7bfb5fe37f615aa2c8bae5554a0904644de3a0a534a11526b6a368abbfe7e5b1',
    hash: '0ea7919aa9612e920151d7748cf99ceba3ff54731277f643ebd86a671d67778f',
  },
  {
    txid: '4495686a359461391501c9e807c01c71ac94cb73395fb4f588f3f1dbc2bd2be1',
    hash: '5e180cbcc0048eb8689f881f92cc66df76ac710111404ef458b53201f70c8827',
  },
  {
    txid: '4928c873736b75dfb9fcf932f9102281f987f29dc49f18d238eceb201e53b04f',
    hash: '8b9dcdd10765a5f71a29f67f53ac7c2b36c2097826cd7868f0d2e46ec9b91bb1',
  },
  {
    txid: '0827a105a4408af4409f0da8656f0ae9d95ed0b8795544379657579c57d1b006',
    hash: '5fcfdcead956da7971c5a9a1f20c9cf0a37f1af72f96b020c5c58da76233a3f1',
  },
  {
    txid: 'dc30a6483b9928b2e5cf3e91f949247654b635b1d8fe4f6c5ff91a4f25abb5ae',
    hash: '639d00faaf26e88322735d922a51fdb20ff56ef1f248a0ac86a932ac1d0bb313',
  },
  {
    txid: '9edc9ef7d2e8b8463c7ac49dd9e537860a1418b46afe919cdbc2279252eaf560',
    hash: '379a07f109c40f0fe8ed454edb8a8b22145169e115c2e7e682ec8b3381a1a901',
  },
  {
    txid: '2c0e7a91cb53d7d1162f062e07e7f946625ff30e885136c4bbe1d91ac42fcee1',
    hash: '61f91ffdb1a3d4dd39937519d4281623fbd6d1cccd7d32a04935ce118bb4da05',
  },
  {
    txid: '5518b9074218335708155d2ad21218c9d2c366d979bb134fb83d4c230ff9a6c4',
    hash: 'a2d4591e09ef8a9c7cc35b20ff021dae9d36f3fbcb306e4d106cb00f6bed3263',
  },
  {
    txid: '9834c9647b3db45204d3429af7cd41e0bb5c2317e49ed6934f9b175cedbb08be',
    hash: '7404bc3e5a1d5719655d153d936f37c1030fafe8fde4112779f59e11cf4e04e6',
  },
  {
    txid: 'ec9dd2ae188214adf3db27fe740e6194de7234b3ac4f311595dd7e5f9678b21e',
    hash: '0ac545ae7c90de751bbd9f31105c56a71d9e330cc9f1a9e5eaa183a2363918ad',
  },
  {
    txid: '140a3240e3bbb318951743708460fe0af639df5394b9944efe4663133648aec4',
    hash: 'b459e66709a720df216f721b198723f6c0a822f0d56979dcde4fced93bf52b36',
  },
  {
    txid: '0c477a2ffed4df8d89912adf89a7c99b6b0d96f18ee68485de721d5ebe2a29ef',
    hash: '028765a42c873727027710aa2dadecea7acf2c1bc4e82134a92172db448a91aa',
  },
  {
    txid: '1543410cb9694e35561886f60f9044f2f48571ab62f25c6ceaffbfd16490fa63',
    hash: '9bd4ff6b89b4557c07c5675e4993379cc1ab9cbd9614e570802334f920048136',
  },
  {
    txid: '2992a84c08cba26ba5252fce2b3ddb0979280d127ab7b0d9f9db93f9539baf5b',
    hash: 'd2563e299bbb73a8187d7d913d27366abbe7cd227093daf8f486c85685b48edb',
  },
  {
    txid: '4f6f8f697bdd43e26558d9e3c57f7333e2f8a6db85906dde461d5c76503da2b7',
    hash: '3d0d68423f9ed8502f2e3afa503926dd0e3eea141be9dc3c17a0e8c630610f3e',
  },
  {
    txid: '27b8e126bd396cb73eb441917d61d21b8c3bb82c749b83d2d23b80614095fcf4',
    hash: '93bfa36a7c31477997dc609a331442d50ac7a87daf43a78ef1255609c9865414',
  },
  {
    txid: 'edc99d07f262e81d469f6898efcfe4c03147c3076173447549bf5b2475e37667',
    hash: '905b9e185e4e52ae60492e6390cb73b34f01a9463ba686bc7640372449542a2e',
  },
  {
    txid: '612db717eda7d873744abeee6c637edff34f554b75383323107ba5a07c752221',
    hash: 'da8d234137a15c5c0c827256271c4d2e62a68d179e042368f33337599e94df83',
  },
  {
    txid: 'b6b6f47556275268186272e37b8e0790131092cd770a08bdec620d3d0e79f5ae',
    hash: '43fdb464552241e0ff1ed520c5dc861fbc10691766a3bb258436facfe769a1b7',
  },
  {
    txid: 'c1aa733ff1bde59fae54c4c138044814a60779c4d24da0008040af112917dbe9',
    hash: 'Fe65162d233a09f85840fee3c4c335034a52d51cb17cf9e349d6575b8f3e7611',
  },
];

module.exports = {
  invalidMessages,
};
