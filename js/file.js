


document.getElementById('btn-submit').addEventListener('click', function () {
    const text = document.getElementById('input-field').value;
    console.log(text);
})


document.getElementById('btn-submit').addEventListener('click',function(){
    // e.preventDefault();
    const url = document.getElementById('input-field').value;
  
    shortenUrl(url);
  });


async function shortenUrl(url) {

    const linkContainer = document.getElementById('link-container');
    linkContainer.innerHTML = '';
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      const newUrl = document.createElement("div");
    //   newUrl.classList.add("item");
      newUrl.innerHTML = `

     <div class="card bg-dark-subtle mx-auto" style="width: 50%;">
     <div class="card-body">
       <h5 class="card-title mb-2">Short Link generated!</h5>
       <h1 id="short-link" class="text-info mb-2">${data.result.short_link}</h1>
       <button onclick="myFunction()" class="btn btn-success my-3">Copy Short Link</button>

       <h5 class="card-title">Original link Link</h5>

       <h6 class="card-subtitle my-3 text-muted">${data.result.original_link}</h6>
       
     </div>
   </div>



     `;
     linkContainer.appendChild(newUrl);
     console.log(data.result.short_link);

            // copy link
            


    //   result.prepend(newUrl);
    //   const copyBtn = result.querySelector(".newUrl-btn");
    //   copyBtn.addEventListener("click", () => {
    //     navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
    //   });
    document.getElementById('input-field').value = "";
    } catch (err) {
      console.log(err);
    }
  }



//   copy link function
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("short-link");
    console.log('copy', copyText.innerText);
  
    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
  }