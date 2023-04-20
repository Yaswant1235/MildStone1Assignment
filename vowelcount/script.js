function countVowels(){
  const userName=document.querySelector("#inputSection").value;
  let vowelCount=0;
  for(let i=0;i<userName.length;i++){
    const char=userName.charAt(i).toLowerCase();
    if(char==='a' || char === 'i' || char=== '0'  || char=== 'u'){
      vowelCount++;
    }
  }
  document.querySelector('#blankContainer').textContent=`Number of vowel is your name is : ${vowelCount}`;
}