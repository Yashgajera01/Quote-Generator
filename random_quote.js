
window.onload=function(){
  document.getElementById("generat").click();
};

function generat()
{
  fetch('https://quotes-api-self.vercel.app/quote')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(data);

      let q = data.quote;
      let a = data.author;

      document.getElementById("quote").innerHTML = q;
      document.getElementById("author").innerHTML = "~" + a;
    });
}

