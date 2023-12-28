let questions=[
    {
      question_title: 'Which snippet of CSS is commonly used to center a website horizontally?',
      options:[
        {
          opp1: 'site-align: center;',
          opp2: 'margin: center;',
          opp3: 'margin: auto 0;',
          opp4: 'margin: 0 auto;',
        }
      ],
      correct_option: 'margin: 0 auto;',
    },
    {
      question_title: 'Which is not a JavaScript data type?',
      options:[
        {
          opp1: 'boolean',
          opp2: 'undefined',
          opp3: 'string',
          opp4: 'double',
        }
      ],
      correct_option: 'double',
    },
    {
      question_title: 'Inside which HTML element do we put the JavaScript?',
      options:[
        {
          opp1: 'script',
          opp2: 'javascript',
          opp3: 'JS',
          opp4: 'link',
        }
      ],
      correct_option: 'script',
    },
    {
      question_title: 'what value is given for the left margin:<br>margin: 5px 10px 3px 8px;',
      options:[
        {
          opp1: '5px',
          opp2: '8px',
          opp3: '3px',
          opp4: '10px',
        }
      ],
      correct_option: '8px',
    },
    {
      question_title: 'What is jQuery?',
      options:[
        {
          opp1: 'A framework',
          opp2: 'A library',
          opp3: 'Query',
          opp4: 'none of these',
        }
      ],
      correct_option: 'A library',
    },
    {
      question_title: 'Which of the following function of Array object removes the last element from an array and returns that element?',
      options:[
        {
          opp1: 'push()',
          opp2: 'join()',
          opp3: 'pop()',
          opp4: 'map()',
        }
      ],
      correct_option: 'pop()',
    },
    {
      question_title: 'Which doctype is correct for HTML5?',
      options:[
        {
          opp1: '!DOCTYPE HTML5',
          opp2: '!DOCTYPE html',
          opp3: '!DOCTYPE H5',
          opp4: '!DOCTYPE',
        }
      ],
      correct_option: '!DOCTYPE html',
    },
    {
      question_title: 'The # symbol specifies that the selector is?',
      options:[
        {
          opp1: 'class',
          opp2: 'tag',
          opp3: 'id',
          opp4: 'first',
        }
      ],
      correct_option: 'id',
    },
    {
      question_title: 'Which HTML5 element defines navigation links?',
      options:[
        {
          opp1: 'navigate',
          opp2: 'nav',
          opp3: 'links',
          opp4: 'avigation',
        }
      ],
      correct_option: 'nav',
    },
    {
      question_title: 'How do you call the function \'myFunction\'?',
      options:[
        {
          opp1: 'myFunction',
          opp2: 'func myFunction()',
          opp3: 'myFunction()',
          opp4: 'None of those',
        }
      ],
      correct_option: 'myFunction()',
    }
  ];
  
  let ques=questions;
  let k=0;
  let score=0;
  let ele;
  document.getElementById('anskey').style.visibility='hidden';
  document.getElementById('res').style.visibility='hidden';
  next();
  
  function check(){
    let btn=document.querySelector('#btnS');
    if(btn.innerHTML=='Next')
      next();
    else
      if(k<10){
        let btndiv=document.querySelector('#h3');
        let radio=radi();
        if(radio){
          if(correct(radio)){
              btndiv.innerHTML="correct";
              btndiv.style.padding='10px 20px';
              btndiv.style.background='#abfdcd';
              btndiv.style.color='#54a154';
              score++;
              k++;
          }
          else{
              btndiv.innerHTML="Incorrect";
              btndiv.style.padding='10px 20px';
              btndiv.style.background='#f8d7da';
              btndiv.style.color='#721c24';
              k++;
          }
        }
      }
  }
  
  function radi() {
    ele = document.querySelectorAll('input');
    let x;
    let o=0;
    for(i of ele) {
      o++;
        if(i.checked){
          x=document.getElementsByTagName('label')[o].value;
        }
    }
    if(!x){
      alert('Please select an option');
    }
    else{
      let btn=document.querySelector('#btnS')
      btn.innerHTML='Next';
      btn.style.background='#00ff00';
      for(i=0; i < ele.length; i++)
        ele[i].disabled=true;
    }
    return x;
  }
  
  function correct(x){
    return x===ques[k].correct_option;
  }
  
  function next(){
    if(k<10){
      let qdiv=document.querySelector('#question');
      qdiv.innerHTML = ques[k].question_title;
  
      let opdiv=document.querySelector(`#option #op1`);
      opdiv.innerHTML = ques[k].options[0].opp1;
      opdiv.value = ques[k].options[0].opp1;
  
      opdiv=document.querySelector(`#option #op2`);
      opdiv.innerHTML = ques[k].options[0].opp2;
      opdiv.value = ques[k].options[0].opp2;
  
      opdiv=document.querySelector(`#option #op3`);
      opdiv.innerHTML = ques[k].options[0].opp3;
      opdiv.value = ques[k].options[0].opp3;
  
      opdiv=document.querySelector(`#option #op4`);
      opdiv.innerHTML = ques[k].options[0].opp4;
      opdiv.value = ques[k].options[0].opp4;
      
      enab();
    }
    else
      checkscore();
  }
  
  function enab(){
    let ele = document.getElementsByName('option');
    for(i = 0; i < ele.length; i++) {
      ele[i].checked=false;
      ele[i].disabled=false;
    }
    document.querySelector('#h3').innerHTML="";
    let btn=document.querySelector('#btnS');
    btn.innerHTML='Submit';
    btn.style.background='#f6ff20'
    let btndiv=document.querySelector('#h3');
    btndiv.style.padding='0px';
  }
  
  function checkscore(){
    let x=document.querySelector("#Qsec");
    x.innerHTML="";
    x.style.visibility='hidden';
    let div=document.querySelector('#top h1');
    div.innerHTML='Score: '+score;
    let anskey=document.getElementById('anskey');
    anskey.style.visibility='visible';
    anskey.style.paddingTop='70px';
    document.getElementById('res').style.visibility='visible';
    document.getElementById('container').style.padding='15px 10px';
    document.getElementById('container').style.height='100%';
    document.querySelector('body').style.gap='30px';
    let d=document.createElement('ul');
    d.id='ans';
    let b= document.querySelector('#container');
    b.appendChild(d);
    let qdiv,opdiv,j=0;
    let l=document.querySelector('#ans');
    for(let k=0;k<10;k++){
  
      qdiv=document.createElement('li');
      qdiv.innerHTML = ques[k].question_title;
      l.appendChild(qdiv)[j];
  
      opdiv=document.createElement('label');
      opdiv.innerHTML = ques[k].correct_option+'<br>';
      qdiv.appendChild(opdiv)[j];
    }
    document.getElementById("anskey").style.visibility="visible";
    document.getElementById("res").style.visibility="visible";
  }
  
  function restart(){
    location.reload();
  }