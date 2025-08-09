'use strict';
//rem to confirm spellings
const words = ['ear', 'hear', 'rear','head','chair','character',
    'total','passion', 'which', 'where','whether','weather','wherever',
    'sad','confused','speaker','closer','farther','nearer','head','tree','group','had','do',
    'will','look','could','been','get','come','help','show','change','move','ask','found','study',
    'start','seem','carry','watch','began','thought','ought','should','spell','need','play','read',
    'word','time','number','place','sentence','end','letter','picture','air','animal','point','line',
    'back','world','night','story','idea','mountain','list','song','sea','example','earth','river','life',
    'family','state','another','different','below','almost','together','here','really','often','far','too',
    'with','between','into','down','these','him','more','something','because',
    'whatever', 'eye', 'teacher','heaven', 'happy', 'government',
    'environment','lawyer','tax', 'question','queue',
    'aeroplane','engine','trolley','market', 'trade','nearer','linear','doctor'
    ,'treat','work','rest','talk','walk','health','merchant','city',
    'alienate', 'squirrel','farmer', 'farm','soil','student','align','make',
    'iterate','educate','sports','young','above','honest','kind',
    'football','basketball','rugby','playground','referee','cake','juice', 'mango',
    'her','lake','apple','doughnut','tomato','orange','wardrobe','shirt','trousers',
    'socks','smartphone','charger','chocolate','biscuit','milk','armchair','bed','table',
    'stool','kitchen','utensils','mug','spoon','sweet','agile','neglect','shady','murky',
    'foolish','shrewd','wise','study','graduate','lecturer','university','staff','uniform',
    'army','rifle','picture','tool','candy','pineapple','hooligan','quiet','quit','concrete',
    'police','army','cloud','rain','ice','precipitate','understand','comprehension','hide','reveal',
    'closure'
];
//console.log(words.length)
let testRstrtBtn = document.querySelector('.js-test-restart-btn');
// for each word we want to split it and put each of its character
//in a div with class charDiv, then we put chardivs in a word container
let wordHtml = '';
let wordsHtml = '';
let startIndex = JSON.parse(localStorage.getItem('strtI')) || 0;
let endIndex = JSON.parse(localStorage.getItem('endI')) || 10;
function selectWords (){
    let selectedWords = words.slice(startIndex, endIndex);
    selectedWords.forEach( word => {
        wordHtml = '';
        let chars = word.split('');
        for(let char of chars){
            wordHtml += `
            <div class="charDiv">${char}</div>`
        };
        wordsHtml += `
        <div class="word-container">
        ${wordHtml}
        </div>
        <div class="charDiv white-space"> </div>
        `
    });
    if(endIndex < words.length) {
        startIndex += 10,
        endIndex += 10;
        localStorage.setItem('strtI', JSON.stringify(startIndex));
        localStorage.setItem('endI', JSON.stringify(endIndex));
    } else {
      startIndex = 0;
      endIndex = 10;
      localStorage.setItem('strtI', JSON.stringify(startIndex));
      localStorage.setItem('endI', JSON.stringify(endIndex));  
    };
    renderTestWords();
    wordsHtml = '';
};
let wordSection = document.querySelector('.js-word-section');
function renderTestWords () {
    wordSection.innerHTML = wordsHtml;
};
selectWords();

let caT = JSON.parse(localStorage.getItem('caT')) || 0; let maT = JSON.parse(localStorage.getItem('maT')) || 0;
let cbT = JSON.parse(localStorage.getItem('cbT')) || 0; let mbT = JSON.parse(localStorage.getItem('mbT')) || 0;
let ccT = JSON.parse(localStorage.getItem('ccT')) || 0; let mcT = JSON.parse(localStorage.getItem('mcT')) || 0;
let cdT = JSON.parse(localStorage.getItem('cdT')) || 0; let mdT = JSON.parse(localStorage.getItem('mdT')) || 0; 
let ceT = JSON.parse(localStorage.getItem('ceT')) || 0; let meT = JSON.parse(localStorage.getItem('meT')) || 0; 
let cfT = JSON.parse(localStorage.getItem('cfT')) || 0; let mfT = JSON.parse(localStorage.getItem('mfT')) || 0; 
let cgT = JSON.parse(localStorage.getItem('cgT')) || 0; let mgT = JSON.parse(localStorage.getItem('mgT')) || 0;
let chT = JSON.parse(localStorage.getItem('chT')) || 0; let mhT = JSON.parse(localStorage.getItem('mhT')) || 0; 
let ciT = JSON.parse(localStorage.getItem('ciT')) || 0; let miT = JSON.parse(localStorage.getItem('miT')) || 0;
let cjT = JSON.parse(localStorage.getItem('cjT')) || 0; let mjT = JSON.parse(localStorage.getItem('mjT')) || 0;
let ckT = JSON.parse(localStorage.getItem('ckT')) || 0; let mkT = JSON.parse(localStorage.getItem('mkT')) || 0;
let clT = JSON.parse(localStorage.getItem('clT')) || 0; let mlT = JSON.parse(localStorage.getItem('mlT')) || 0; 
let cmT = JSON.parse(localStorage.getItem('cmT')) || 0; let mmT = JSON.parse(localStorage.getItem('mmT')) || 0; 
let cnT = JSON.parse(localStorage.getItem('cnT')) || 0; let mnT = JSON.parse(localStorage.getItem('mnT')) || 0;
let coT = JSON.parse(localStorage.getItem('coT')) || 0; let moT = JSON.parse(localStorage.getItem('moT')) || 0;
let cpT = JSON.parse(localStorage.getItem('cpT')) || 0; let mpT = JSON.parse(localStorage.getItem('mpT')) || 0; 
let cqT = JSON.parse(localStorage.getItem('cqT')) || 0; let mqT = JSON.parse(localStorage.getItem('mqT')) || 0;
let crT = JSON.parse(localStorage.getItem('crT')) || 0; let mrT = JSON.parse(localStorage.getItem('mrT')) || 0; 
let csT = JSON.parse(localStorage.getItem('csT')) || 0; let msT = JSON.parse(localStorage.getItem('msT')) || 0; 
let ctT = JSON.parse(localStorage.getItem('ctT')) || 0; let mtT = JSON.parse(localStorage.getItem('mtT')) || 0; 
let cuT = JSON.parse(localStorage.getItem('cuT')) || 0; let muT = JSON.parse(localStorage.getItem('muT')) || 0;  
let cvT = JSON.parse(localStorage.getItem('cvT')) || 0; let mvT = JSON.parse(localStorage.getItem('mvT')) || 0;
let cwT = JSON.parse(localStorage.getItem('cwT')) || 0; let mwT = JSON.parse(localStorage.getItem('mwT')) || 0;
let cxT = JSON.parse(localStorage.getItem('cxT')) || 0; let mxT = JSON.parse(localStorage.getItem('mxT')) || 0;
let cyT = JSON.parse(localStorage.getItem('cyT')) || 0; let myT = JSON.parse(localStorage.getItem('myT')) || 0; 
let czT = JSON.parse(localStorage.getItem('czT')) || 0; let mzT = JSON.parse(localStorage.getItem('mzT')) || 0;
let clbnDivs = document.querySelectorAll('.clbn');

function calibrater(){
    if ((caT + maT) > 45) {
      let acc = (caT /(caT + maT)) * 100;
      if (acc < 65) {
        clbnDivs[0].style.backgroundColor = 'red';
      } else if (acc >= 65 && acc < 95) {
      clbnDivs[0].style.backgroundColor = 'goldenrod';
    } else if ( acc >= 95){
      clbnDivs[0].style.backgroundColor = 'blue';
    };
  };

  if ((cbT + mbT) > 45) {
    let acc = (cbT /(cbT + mbT)) * 100;
    if (acc < 65) {
      clbnDivs[1].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[1].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[1].style.backgroundColor = 'blue';
   };
  };

  if ((ccT + mcT) > 45) {
    let acc = (ccT /(ccT + mcT)) * 100;
    if (acc < 65) {
      clbnDivs[2].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[2].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[2].style.backgroundColor = 'blue';
   };
  };

  if ((cdT + mdT) > 45) {
    let acc = (cdT /(cdT + mdT)) * 100;
    if (acc < 65) {
      clbnDivs[3].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[3].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[3].style.backgroundColor = 'blue';
   };
  };

  if ((ceT + meT) > 45) {
    let acc = (ceT /(ceT + meT)) * 100;
    if (acc < 65) {
      clbnDivs[4].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[4].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[4].style.backgroundColor = 'blue';
   };
  };

  if ((cfT + mfT) > 45) {
    let acc = (cfT /(cfT + mfT)) * 100;
    if (acc < 65) {
      clbnDivs[5].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[5].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[5].style.backgroundColor = 'blue';
   };
  };

  if ((cgT + mgT) > 45) {
    let acc = (cgT /(cgT + mgT)) * 100;
    if (acc < 65) {
      clbnDivs[6].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[6].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[6].style.backgroundColor = 'blue';
   };
  };

  if ((chT + mhT) > 45) {
    let acc = (chT /(chT + mhT)) * 100;
    if (acc < 65) {
      clbnDivs[7].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[7].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[7].style.backgroundColor = 'blue';
   };
  };

  if ((ciT + miT) > 45) {
    let acc = (ciT /(ciT + miT)) * 100;
    if (acc < 65) {
      clbnDivs[8].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[8].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[8].style.backgroundColor = 'blue';
   };
  };

  if ((cjT + mjT) > 45) {
    let acc = (cjT /(cjT + mjT)) * 100;
    if (acc < 65) {
      clbnDivs[9].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[9].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[9].style.backgroundColor = 'blue';
   };
  };

  if ((ckT + mkT) > 45) {
    let acc = (ckT /(ckT + mkT)) * 100;
    if (acc < 65) {
      clbnDivs[10].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[10].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[10].style.backgroundColor = 'blue';
   };
  };

  if ((clT + mlT) > 45) {
    let acc = (clT /(clT + mlT)) * 100;
    if (acc < 65) {
      clbnDivs[11].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[11].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[11].style.backgroundColor = 'blue';
   };
  };

  if ((cmT + mmT) > 45) {
    let acc = (cmT /(cmT + mmT)) * 100;
    if (acc < 65) {
      clbnDivs[12].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[12].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[12].style.backgroundColor = 'blue';
   };
  };

  if ((cnT + mnT) > 45) {
    let acc = (cnT /(cnT + mnT)) * 100;
    if (acc < 65) {
      clbnDivs[13].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[13].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[13].style.backgroundColor = 'blue';
   };
  };

  if ((coT + moT) > 45) {
    let acc = (coT /(coT + moT)) * 100;
    if (acc < 65) {
      clbnDivs[14].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[14].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[14].style.backgroundColor = 'blue';
   };
  };

  if ((cpT + mpT) > 45) {
    let acc = (cpT /(cpT + mpT)) * 100;
    if (acc < 65) {
      clbnDivs[15].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[15].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[15].style.backgroundColor = 'blue';
   };
  };

  if ((cqT + mqT) > 45) {
    let acc = (cqT /(cqT + mqT)) * 100;
    if (acc < 65) {
      clbnDivs[16].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[16].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[16].style.backgroundColor = 'blue';
   };
  };

  if ((crT + mrT) > 45) {
    let acc = (crT /(crT + mrT)) * 100;
    if (acc < 65) {
      clbnDivs[17].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[17].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[17].style.backgroundColor = 'blue';
   };
  };

  if ((csT + msT) > 45) {
    let acc = (csT /(csT + msT)) * 100;
    if (acc < 65) {
      clbnDivs[18].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[18].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[18].style.backgroundColor = 'blue';
   };
  };

  if ((ctT + mtT) > 45) {
    let acc = (ctT /(ctT + mtT)) * 100;
    if (acc < 65) {
      clbnDivs[19].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[19].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[19].style.backgroundColor = 'blue';
   };
  };

  if ((cuT + muT) > 45) {
    let acc = (cuT /(cuT + muT)) * 100;
    if (acc < 65) {
      clbnDivs[20].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[20].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[20].style.backgroundColor = 'blue';
   };
  };

  if ((cvT + mvT) > 45) {
    let acc = (cvT /(cvT + mvT)) * 100;
    if (acc < 65) {
      clbnDivs[21].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[21].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[21].style.backgroundColor = 'blue';
   };
  };

  if ((cwT + mwT) > 45) {
    let acc = (cwT /(cwT + mwT)) * 100;
    if (acc < 65) {
      clbnDivs[22].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[22].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[22].style.backgroundColor = 'blue';
   };
  };

  if ((cxT + mxT) > 45) {
    let acc = (cxT /(cxT + mxT)) * 100;
    if (acc < 65) {
      clbnDivs[23].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[23].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[23].style.backgroundColor = 'blue';
   };
  };

  if ((cyT + myT) > 45) {
    let acc = (cyT /(cyT + myT)) * 100;
    if (acc < 65) {
      clbnDivs[24].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[24].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[24].style.backgroundColor = 'blue';
   };
  };

  if ((czT + mzT) > 45) {
    let acc = (czT /(czT + mzT)) * 100;
    if (acc < 65) {
      clbnDivs[25].style.backgroundColor = 'red';
    } else if (acc >= 65 && acc < 95) {
    clbnDivs[25].style.backgroundColor = 'goldenrod';
  } else if ( acc >= 95){
    clbnDivs[25].style.backgroundColor = 'blue';
   };
  };
};
calibrater();
function correctLtrUpdater (event){
  if (event.key == 'a'){
    caT++;
    localStorage.setItem('caT', JSON.stringify(caT));
  } else if (event.key == 'b'){
    cbT++;
    localStorage.setItem('cbT', JSON.stringify(cbT));
  }else if(event.key == 'c'){
    ccT++;
    localStorage.setItem('ccT', JSON.stringify(ccT));
  }else if(event.key == 'd'){
    cdT++;
    localStorage.setItem('cdT', JSON.stringify(cdT));
  }else if(event.key == 'e'){
    ceT++;
    localStorage.setItem('ceT', JSON.stringify(ceT));
  }else if (event.key == 'f'){
    cfT++;
    localStorage.setItem('cfT', JSON.stringify(cfT));
  }else if(event.key == 'g'){
    cgT++;
    localStorage.setItem('cgT', JSON.stringify(cgT));
  }else if (event.key == 'h'){
    chT++;
    localStorage.setItem('chT', JSON.stringify(chT));
  }else if(event.key == 'i'){
    ciT++;
    localStorage.setItem('ciT', JSON.stringify(ciT));
  }else if(event.key == 'j'){
    cjT++;
    localStorage.setItem('cjT', JSON.stringify(cjT));
  }else if(event.key == 'k'){
    ckT++;
    localStorage.setItem('ckT', JSON.stringify(ckT));
  }else if (event.key == 'l'){
    clT++;
    localStorage.setItem('clT', JSON.stringify(clT));
  }else if (event.key == 'm'){
    cmT++;
    localStorage.setItem('cmT', JSON.stringify(cmT));
  }else if(event.key == 'n'){
    cnT++;
    localStorage.setItem('cnT', JSON.stringify(cnT));
  }else if (event.key == 'o'){
    coT++;
    localStorage.setItem('coT', JSON.stringify(coT));
  }else if (event.key == 'p'){
    cpT++;
    localStorage.setItem('cpT', JSON.stringify(cpT));
  }else if(event.key == 'q'){
    cqT++;
    localStorage.setItem('cqT', JSON.stringify(cqT));
  }else if(event.key == 'r'){
    crT++;
    localStorage.setItem('crT', JSON.stringify(crT));
  }else if(event.key == 's'){
    csT++;
    localStorage.setItem('csT', JSON.stringify(csT));
  }else if(event.key == 't'){
    ctT++;
    localStorage.setItem('ctT', JSON.stringify(ctT));
  }else if(event.key == 'u'){
    cuT++;
    localStorage.setItem('cuT', JSON.stringify(cuT));
  }else if(event.key == 'v'){
    cvT++;
    localStorage.setItem('cvT', JSON.stringify(cvT));
  }else if(event.key == 'w'){
    cwT++;
    localStorage.setItem('cwT', JSON.stringify(cwT));
  }else if(event.key == 'x'){
    cxT++;
    localStorage.setItem('cxT', JSON.stringify(cxT));
  }else if(event.key == 'y'){
    cyT++;
    localStorage.setItem('cyT', JSON.stringify(cyT));
  }else if (event.key == 'z'){
    czT++;
    localStorage.setItem('czT', JSON.stringify(czT));
  };
};
function missedLtrUpdater(event){
  if (event.key == 'a'){
    maT++;
    localStorage.setItem('maT', JSON.stringify(maT));
  } else if (event.key == 'b'){
    mbT++;
    localStorage.setItem('mbT', JSON.stringify(mbT));
  }else if(event.key == 'c'){
    mcT++;
    localStorage.setItem('mcT', JSON.stringify(mcT));
  }else if(event.key == 'd'){
    mdT++;
    localStorage.setItem('mdT', JSON.stringify(mdT));
  }else if(event.key == 'e'){
    meT++;
    localStorage.setItem('meT', JSON.stringify(meT));
  }else if (event.key == 'f'){
    mfT++;
    localStorage.setItem('mfT', JSON.stringify(mfT));
  }else if(event.key == 'g'){
    mgT++;
    localStorage.setItem('mgT', JSON.stringify(mgT));
  }else if (event.key == 'h'){
    mhT++;
    localStorage.setItem('mhT', JSON.stringify(mhT));
  }else if(event.key == 'i'){
    miT++;
    localStorage.setItem('miT', JSON.stringify(miT));
  }else if(event.key == 'j'){
    mjT++;
    localStorage.setItem('mjT', JSON.stringify(mjT));
  }else if(event.key == 'k'){
    mkT++;
    localStorage.setItem('mkT', JSON.stringify(mkT));
  }else if (event.key == 'l'){
    mlT++;
    localStorage.setItem('mlT', JSON.stringify(mlT));
  }else if (event.key == 'm'){
    mmT++;
    localStorage.setItem('mmT', JSON.stringify(mmT));
  }else if(event.key == 'n'){
    mnT++;
    localStorage.setItem('mnT', JSON.stringify(mnT));
  }else if (event.key == 'o'){
    moT++;
    localStorage.setItem('moT', JSON.stringify(moT));
  }else if (event.key == 'p'){
    mpT++;
    localStorage.setItem('mpT', JSON.stringify(mpT));
  }else if(event.key == 'q'){
    mqT++;
    localStorage.setItem('mqT', JSON.stringify(mqT));
  }else if(event.key == 'r'){
    mrT++;
    localStorage.setItem('mrT', JSON.stringify(mrT));
  }else if(event.key == 's'){
    msT++;
    localStorage.setItem('msT', JSON.stringify(msT));
  }else if(event.key == 't'){
    mtT++;
    localStorage.setItem('mtT', JSON.stringify(mtT));
  }else if(event.key == 'u'){
    muT++;
    localStorage.setItem('muT', JSON.stringify(muT));
  }else if(event.key == 'v'){
    mvT++;
    localStorage.setItem('mvT', JSON.stringify(mvT));
  }else if(event.key == 'w'){
    mwT++;
    localStorage.setItem('mwT', JSON.stringify(mwT));
  }else if(event.key == 'x'){
    mxT++;
    localStorage.setItem('mxT', JSON.stringify(mxT));
  }else if(event.key == 'y'){
    myT++;
    localStorage.setItem('myT', JSON.stringify(myT));
  }else if(event.key == 'z') {
    mzT++;
    localStorage.setItem('mzT', JSON.stringify(mzT));
  };
};

function startTest (){
    i = 0;
    selectWords();
    selectChardivs();
    charDivs[0].focus();
};
let chrActvMssgTstToId;
let speedTest = document.querySelector('.js-speed-test');
let strtTestBtn = document.querySelector('.js-strt-test-btn');
let timer = document.querySelector('.js-timer');
let i = 0;
let charDivs;
let selEl = document.querySelector('#select');
let time = selEl.value * 60;
selEl.addEventListener('change', ()=>{
  time = selEl.value * 60;
});
let speedSec = document.querySelector('.js-speed-sec');
let accuracySec = document.querySelector('.js-accuracy-sec');
let strt = document.querySelector('.js-click-to-strt-btn');
let spdTxt = document.querySelector('.js-spd-txt');
let accTxt = document.querySelector('.js-acc-txt');
let restartBtn = document.querySelector('.js-restart-btn');
let timeOutId;
let missedChar = false;
let missedCharVal = '';
let stopOnError = true;
let correctLetters = 0;
let wrongLetters = 0;
let stpOnErrChck = document.querySelector('.js-stp-on-err-chck')//('.js-tst-stp-on-err-chck');
stpOnErrChck.addEventListener('change', ()=>{
    stopOnError = stpOnErrChck.checked ? true : false;
    reloader();
    strtTestBtn.style.display = 'inline';
    strtTestBtn.innerHTML = 'chars active';
    clearTimeout(chrActvMssgTstToId);
    chrActvMssgTstToId = setTimeout(()=>{
    strtTestBtn.innerHTML = '';
    }, 2000);
    i = 0;
});
function handleError (event){
    if(event.key === missedCharVal){
      if(event.target.textContent == " ") {
        event.target.style.backgroundColor = 'red';
        charDivs[i].style.opacity = 1;
        i++;
        if(i == charDivs.length){
              wordsHtml = '';
              startTest();
              i = 0;
          } else {
            charDivs[i].focus();
          };
      } else {
          event.target.style.color = "red";
          charDivs[i].style.opacity = 1;
          i++;
          wrongLetters++;
          missedLtrUpdater(event);
        if(i == charDivs.length){
              wordsHtml = '';
              startTest();
              i = 0;
          } else {
            charDivs[i].focus();
          };
      };
       missedChar = false;
    };
       
  };
function selectChardivs () {
    charDivs = document.querySelectorAll('.charDiv');
    focusIndicator();
    charDivs.forEach((charDiv, index) => {
      charDiv.setAttribute('tabindex', `${index}`);
      charDiv.addEventListener('keydown', (event)=>{  
           focusIndicator();
        if (!missedChar && event.key == event.target.textContent) {
            if(event.key == " ") {
              event.target.style.backgroundColor = 'gray';
              charDivs[i].style.opacity = 1;
              i++;
            } else {
              event.target.style.color = "black";
              correctLetters++;
              correctLtrUpdater(event);
              charDivs[i].style.opacity = 1;
              i++;
            };
            if(i == charDivs.length){
              wordsHtml = '';
              startTest();
              i = 0;
          } else {
            charDivs[i].focus();
          };
     } else {
      if(stopOnError) {
        missedChar = true;
        missedCharVal = event.target.textContent;
        handleError(event); 
      } else {
        if(event.target.textContent == " " && 
          event.key !== " "
        ) {
          event.target.style.backgroundColor = 'red';
          //increasing i here prevents stop on error
          //if you miss a white space
          charDivs[i].style.opacity = 1;
          i++;
        } else {
        //missed white spaces wont count as chars
        event.target.style.color = 'red';
        wrongLetters++;
        missedLtrUpdater(event);
        charDivs[i].style.opacity = 1;
        i++;
        };
        if(i == charDivs.length){
          wordsHtml = '';
          startTest();
          i = 0;
      } else {
        charDivs[i].focus();
      };
    };
   }; 
   calibrater();
  });
 });
};

function speedCalc (){
  return Math.floor(((wrongLetters + correctLetters)/5 )/(time/60));
};

function accuracyCalc (){
    return Math.floor(((correctLetters/ (correctLetters + wrongLetters))*100)); 
};
let intervalId;
let indctrIntvlId;
let indctrToId;
function reloader (){
    clearInterval(intervalId);
    timer.innerHTML = time;
    timer.style.opacity = 1;
    intervalId = setInterval(()=>{
        if(timer.innerHTML > 0) {
          timer.innerHTML -= 1;
        };
      }, 1000);
    wrongLetters = 0;
    correctLetters = 0;
    testRstrtBtn.style.display = 'none';
    spdTxt.classList.remove('spd-acc-txt-actv');
    accTxt.classList.remove('spd-acc-txt-actv');
    speedSec.classList.remove('speed-acc-active');
    accuracySec.classList.remove('speed-acc-active');
    startTest();
     focusIndicator();
    clearTimeout(timeOutId);
    timeOutId = setTimeout(()=>{
      document.querySelector('.js-word-section')
       .innerHTML = '';
      timer.style.opacity = 0;
      strtTestBtn.style.display = 'none';
      testRstrtBtn.style.display = 'inline';
      spdTxt.classList.add('spd-acc-txt-actv');
      accTxt.classList.add('spd-acc-txt-actv');
      speedSec.classList.add('speed-acc-active');
      accuracySec.classList.add('speed-acc-active');
      speedSec.innerHTML = `${speedCalc()} wpm`;
      accuracySec.innerHTML = `${accuracyCalc() ? accuracyCalc() + '%' : 0 +'%'}`;
      clearInterval(intervalId);
    }, time * 1000);
};

function focusIndicator(){
    clearInterval(indctrIntvlId);
     indctrIntvlId = setInterval(()=>{
      charDivs[i].style.opacity = 0.3;
      clearTimeout(indctrToId);
      indctrToId = setTimeout(()=>{
        charDivs[i].style.opacity = 1;
      }, 500)
     }, 1000);
};
let started = false;
function startInitialiser(){
  clearInterval(intervalId);
  timer.innerHTML = time;
  timer.style.opacity = 1;
  intervalId = setInterval(()=>{
      if(timer.innerHTML > 0) {
        timer.innerHTML -= 1;
      };
    }, 1000);
  wrongLetters = 0;
  correctLetters = 0;

  i = 0;
  selectChardivs();
  focusIndicator();
  charDivs[0].focus();

  clearTimeout(timeOutId);
    timeOutId = setTimeout(()=>{
      document.querySelector('.js-word-section')
       .innerHTML = '';
      timer.style.opacity = 0;
      strtTestBtn.style.display = 'none';
      testRstrtBtn.style.display = 'inline';
      spdTxt.classList.add('spd-acc-txt-actv');
      accTxt.classList.add('spd-acc-txt-actv');
      speedSec.classList.add('speed-acc-active');
      accuracySec.classList.add('speed-acc-active');
      speedSec.innerHTML = `${speedCalc()} wpm`;
      accuracySec.innerHTML = `${accuracyCalc() ? accuracyCalc() + '%' : 0 +'%'}`;
      clearInterval(intervalId);
    }, time * 1000);
    started = true;
};
function bodyClickOnsessionCtrl(){
  document.body.addEventListener('click',()=>{
    reloader();
  });
};
strtTestBtn.addEventListener('click', ()=>{
  if(started){
    reloader()
  }else{
    startInitialiser();
  }
  strtTestBtn.innerHTML = 'chars active';
  clearTimeout(chrActvMssgTstToId);
  chrActvMssgTstToId = setTimeout(()=>{
   strtTestBtn.innerHTML = '';
   strtTestBtn.style.display = 'none';
  }, 2000);
  //bodyClickOnsessionCtrl();
});

testRstrtBtn.addEventListener('click', ()=>{
  reloader();
  i = 0;
   strtTestBtn.style.display = 'inline';
   strtTestBtn.innerHTML = 'chars active';
   clearTimeout(chrActvMssgTstToId);
   chrActvMssgTstToId = setTimeout(()=>{
   strtTestBtn.innerHTML = '';
   strtTestBtn.style.display = 'none';
 }, 2000);
 
});

document.body.addEventListener('keydown', (event)=>{
  if (event.key == 'Enter'){
    if(started){
      reloader();
    } else{
      startInitialiser();
    };
    i = 0;
    strtTestBtn.innerHTML = 'chars active !';
    strtTestBtn.style.display = 'inline';
    clearTimeout(chrActvMssgTstToId);
    chrActvMssgTstToId = setTimeout(()=>{
        strtTestBtn.innerHTML = '';
      }, 2000);
    };
    //bodyClickOnsessionCtrl();
});
