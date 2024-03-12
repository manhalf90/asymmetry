"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1199],{81932:function(e,t,a){a.d(t,{$:function(){return u},s:function(){return i}});var l=a(52322),r=a(2784),o=a(41965);let n=(0,r.createContext)(void 0),u=e=>{let{children:t}=e,a=(0,o.Z)();return(0,l.jsx)(n.Provider,{value:{SafEth:a},children:t})},i=()=>{let e=(0,r.useContext)(n);if(!e)throw Error("useSafethContext must be used within a SafethProvider");return e}},71110:function(e,t,a){a.d(t,{Ec:function(){return f},L9:function(){return d},Mi:function(){return c},VA:function(){return i},_C:function(){return h},xQ:function(){return v}});var l=a(72942),r=a(91242),o=a(52060),n=a(59721);a(34406);let u=(e,t)=>{if(e&&0!==e.length)return null==e?void 0:e.reduce((e,a,r)=>{let o=Number((0,l.d)(a.result));return isNaN(o)&&(o=a.result),e[t[r]]={value:a,formattedValue:o},e},{})},i=["VOTIUM","rewarder","ethOwedToOwner","maxSingleQuickDeposit","maxSingleQuickWithdraw","paused","price","protocolFeeBps","quickDepositFeeBps","quickWithdrawFeeBps","sfrxStrategyShareBps","totalEthValue","totalSupply"],d=["availableCvx","unprocessedRewards"],c=async e=>{var t,a,r,o,c,s,v,f;let{afETHData:h,votiumStrategyData:m,ethUsdPrice:p}=e,g=u(h,i),S=u(m,d);return g.paused={staking:!0,withdraw:!1},g.ethUSDPrice={value:p,formattedValue:Number((0,l.d)(p))},g.totalETH={totalSupply:null===(t=g.totalSupply)||void 0===t?void 0:t.formattedValue,totalEthValue:null===(a=g.totalEthValue)||void 0===a?void 0:a.formattedValue,totalEthValueUSD:(null===(r=g.totalEthValue)||void 0===r?void 0:r.formattedValue)*Number((0,l.d)(p))},g.vStrategyData=S,g.vStratPrice={},g.vStratTVL={formattedValue:(null===(o=S.totalSupply)||void 0===o?void 0:o.formattedValue)*g.vStratPrice.formattedValue},g.afEthPrice={},g.afEthUSDPrice={},g.apy={value:n.qD||0,formattedValue:n.qD.value},g.votiumAPY={value:n.rx,formattedValue:n.rx.value},g.sfrxStrategyShare={value:(null==g?void 0:g.sfrxStrategyShareBps)?g.sfrxStrategyShareBps.value.result/1e4:0},g.quickDepositFeeBps={...g.quickDepositFeeBps,formattedValue:(null===(s=g.quickDepositFeeBps)||void 0===s?void 0:null===(c=s.value)||void 0===c?void 0:c.result)/1e4},g.quickWithdrawFeeBps={...g.quickWithdrawFeeBps,formattedValue:(null===(f=g.quickWithdrawFeeBps)||void 0===f?void 0:null===(v=f.value)||void 0===v?void 0:v.result)/1e4},g},s=(e,t)=>{if(0===t.length)return null;let a=BigInt(t[0].cumulativeUnlockThreshold),l=a>e?a-e:e-a;return t.forEach(t=>{let r=BigInt(t.cumulativeUnlockThreshold),o=r>e?r-e:e-r;o<l&&(l=o,a=r)}),a},v=(e,t,a)=>{let l=s((0,r.f)(e),t);return null!==l?f(l,a):(console.log("No matching threshold found."),null)},f=(e,t)=>{if(!t||!t.length)return null;let a=BigInt(0),l=null;for(let r=0;r<t.length;r++){let o=t[r];if(a+=o.amount,l=new Date(1e3*o.unlockTime),a>=e)break}return l},h=async(e,t)=>{try{let a=String((0,o.v)(e,t.decimals)),r=await fetch("/api/afeth/get0xquote?sellToken=".concat(t.address,"&sellAmount=").concat(a)),n=await r.json();if("0xdef1c0ded9bec7f1a1670819833240f027b25eff"!==n.allowanceTarget)return!1;{let{data:a,price:r}=n;return{quote:n,callData:a,price:r,amount:e,token:t,buyAmount:(0,l.d)(null==n?void 0:n.buyAmount)}}}catch(e){return console.log({error:e}),!1}}},83847:function(e,t,a){var l=a(2784),r=a(69702),o=a(72942),n=a(33315),u=a(10528),i=a(27440),d=a(71110),c=a(55997),s=a(49041),v=a(95244),f=a(59721);let h=v.ZP.MAINNET_NETWORK_NUMBER,m=v.ZP.MAINNET_CONFIG.AFETH_ADDRESS,p=v.ZP.MAINNET_CONFIG.AFETH_RELAYER_ADDRESS,g=v.ZP.MAINNET_CONFIG.CHAINLINK_ETHEREUM_USD_FEED_CONTRACT_ADDRESS,S=f.Un,w=f.Lz,T=f.$T,y=f.pD,E={currentTxToken:S[0]};function k(e,t){if("setCurrentTxToken"===t.type)return{...e,currentTxToken:t.payload};throw Error("Unhandled action type: ".concat(t.type))}t.Z=()=>{let{address:e,isConnected:t,connector:a}=(0,r.mA)(),[v,S]=(0,l.useState)([]),[D,N]=(0,l.useState)([]),[x,b]=(0,l.useState)(0),[V,A]=(0,l.useState)(!1),[q,B]=(0,l.useState)(null),[C,M]=(0,l.useState)({}),[_,F]=(0,l.useReducer)(k,E),[I,U]=(0,l.useState)(null),{chain:P}=(0,r.LN)(),R=(0,l.useMemo)(()=>({address:m,abi:w.abi}),[]),W=(0,l.useMemo)(()=>({address:p,abi:T.abi}),[]),z=(0,l.useMemo)(()=>({address:f.ST.address,abi:f.ST.abi}),[]),O=(0,l.useMemo)(()=>({address:y.address,abi:y.abi}),[]),L=(0,l.useMemo)(()=>({address:g,abi:i.Mt}),[]),{data:Q}=(0,r.KQ)({address:e,token:m,watch:!0}),{data:H}=(0,r.KQ)({address:e,watch:!0}),{data:Z}=(0,r.Dm)({contracts:v}),{data:$}=(0,r.Dm)({contracts:D}),{data:G}=(0,r.do)({...L,functionName:"latestRoundData",chainId:1,watch:!0,cacheTime:6e4}),{data:K}=(0,r.do)({...z,functionName:"lockedBalances",args:[O.address],watch:!0}),j=async function(t,a,l){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{let i=o?(0,c.uN)("afethRelayer"):(0,c.uN)("afeth"),d=await (0,c.Nu)(e,i,t,l&&!o&&(null==l?void 0:l.length)>0?l.map(e=>e&&u.O$.from(null==e?void 0:e.toString())):l,a||(o?u.O$.from("0"):null));console.log({txFee:d});let s={...o?W:R,functionName:t.split("(")[0],args:l||[],value:a||"",...r},v=await (0,n.$q)(s);return console.log({config:v}),{config:v,txFee:d}}catch(e){var i,d;throw console.log({error:e}),Error((null==e?void 0:null===(i=e.cause)||void 0===i?void 0:i.shortMessage)||(null==e?void 0:null===(d=e.cause)||void 0===d?void 0:d.message)||(null==e?void 0:e.reason))}},Y=async(e,t,a)=>{try{if(a){console.log("from config");let{hash:e}=await (0,n.n9)(a.request);return console.log("afeth deposit from config >>",e),{hash:e,callback:()=>null}}{var l,r;let a="deposit",o=null==q?void 0:null===(r=q.maxSingleQuickDeposit)||void 0===r?void 0:null===(l=r.value)||void 0===l?void 0:l.result;e<=o&&(a="quickDeposit");let u=Math.floor(Date.now()/1e3)+10800,i=(0,s.vz)(null==u?void 0:u.toString()),{config:d}=await j(a,e,[t,i]),{hash:c}=await (0,n.n9)(d.request);return console.log("afeth deposit hash >>",c),{hash:c,callback:()=>null}}}catch(e){throw console.log({error:e}),Error(e.message)}},J=async(e,t)=>{try{var a,l,r,u,i;let d="requestWithdraw",c=null==q?void 0:null===(a=q.sfrxStrategyShare)||void 0===a?void 0:a.value,v=null==q?void 0:null===(l=q.quickWithdrawFeeBps)||void 0===l?void 0:l.formattedValue,h=t&&Number(e)<=(null==q?void 0:null===(u=q.maxSingleQuickWithdraw)||void 0===u?void 0:null===(r=u.value)||void 0===r?void 0:r.result),m=(0,s.vz)(null===(i=Date.now()+108e5)||void 0===i?void 0:i.toString());h&&(d="quickWithdraw");let p=(0,s.vz)("".concat(+(0,o.d)(e)*(1-(f.zw+(h?v:0))))),g=(0,s.vz)("".concat(+(0,o.d)(e)*c*(1-f.zw)," ")),{config:S}=await j(d,null,h?[e,p,m]:[e,g,p,m]),{hash:w}=await (0,n.n9)(S.request);return console.log("afeth withdraw request hash >>",w),{hash:w,callback:()=>null}}catch(e){throw console.log({error:e}),Error(e.message)}};(0,l.useEffect)(()=>{(async()=>{try{U(!1);let e=d.VA.map(e=>({...R,functionName:e})),t=d.L9.map(e=>({...y,functionName:e}));S(e),N(t);let a=Math.round(new Date().getTime()/1e3)-72,l=await (0,c._h)(a);b(parseInt(l.toFixed())),U(!0)}catch(e){U(!1),console.log({error:e})}})()},[R]),(0,l.useEffect)(()=>{A((null==P?void 0:P.id)===h)},[null==P?void 0:P.id]),(0,l.useEffect)(()=>{(async()=>{e&&await ea()})()},[e]);let X=null==H?void 0:H.formatted,ee=null==Q?void 0:Q.formatted,et=(0,l.useMemo)(()=>({address:e,isConnected:t,ethBalance:{value:H&&(0,s.vz)(null==H?void 0:H.formatted,18),...H},balance:{value:Q&&(0,s.vz)(null==Q?void 0:Q.formatted,18),...Q}}),[t,X,ee,e]),ea=async()=>{try{if(!K)return;let t=e?await fetch("/api/afeth/mystats?id=".concat(e),{method:"GET"}):null;if(!t)return;let a=await (null==t?void 0:t.json());if(a&&a.partialAfethWithdrawals){let e=K[3],t=a.partialAfethWithdrawals.filter(e=>!e.claimed).map(t=>{let a=(0,d.Ec)(BigInt(t.cumulativeUnlockThreshold),e),l=new Date,r=a&&l.getTime()>=a.getTime()?"ready":t.claimed?"claimed":"pending";return{...t,unlocksDate:a||null,claimStatus:r}}),l=t.filter(e=>"pending"===e.claimStatus),r=l.filter(e=>"ready"===e.claimStatus);M({allWithdrawals:t,readyToClaimWithdrawals:r,pendingWithdrawals:l,pendingToClaim:l.length,readyToClaim:r.length})}else M({})}catch(e){M({}),console.log({error:e})}};return(0,l.useEffect)(()=>{(async()=>{try{let e=await (0,d.Mi)({afETHData:Z,votiumStrategyData:$,ethUsdPrice:G?(0,s.vz)(G[1].toString(),10):(0,s.vz)(null==x?void 0:x.toString())});B(e),U(!0)}catch(e){U(!1)}})()},[Z,$,G,x]),{afethContract:{contract:R,doDeposit:Y,doRequestWithdraw:J,currentTxToken:_.currentTxToken,updateCurrentTxToken:e=>{F({type:"setCurrentTxToken",payload:e})},read:q},votiumStrategyContract:{contract:O,read:{lockedBalances:K}},currentUser:{...et,afethStats:C},prepareMethod:a?j:null,getUserStats:ea,isRightChain:V,ready:t&&!!q&&I}}}}]);