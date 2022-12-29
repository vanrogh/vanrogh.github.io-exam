fetch("informations.json")
.then(function(response){
   return response.json();
})
.then(function(informations){
   let placeholder = document.getElementById("information");
   let out = "";
   for(let info of informations){
      out += `
      <div class="blog">
      <img src=${info.image}>
      <div class="blog-text">
          <h4>
             <a href=${info.link} target="_blank">${info.header}</a> 
          </h4>
          
          <p>
              ${info.text}
          </p>
      </div>
        </div>
      `;
   }
 
   placeholder.innerHTML = out;
});
