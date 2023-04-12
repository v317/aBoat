//aBoat main.js
//(C)2023 v317
document.getElementById("sendButton").addEventListener("click", function() {
  var webhookUrl = document.getElementById("WebHookURL").value;
  var messageContent = document.getElementById("botMessage").value;
  var imageUrl = document.getElementById("imageUrl").value;

  if (webhookUrl === '' || messageContent === '') {
    alert("p-pwease fill in all wequiwed fiewds (* ^ ω ^)");
    return;
  }

  var httpReq = new XMLHttpRequest();
  httpReq.open("POST", webhookUrl);
  httpReq.setRequestHeader("Content-Type", "application/json");

  var payload = { "content": messageContent };
  
  if (imageUrl !== '') {
    payload["embeds"] = [{ "image": { "url": imageUrl } }];
  }

  httpReq.onreadystatechange = function() {
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      if (httpReq.status === 204) {
        //alert("Notice: message sent!");
      } else {
        alert("error ");
      }
    }
  };

  httpReq.send(JSON.stringify(payload));
});