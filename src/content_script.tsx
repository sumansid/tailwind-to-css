import { getConvertedClasses } from "./helpers";
import HoverPopup from "./hoverPopup";
import React from "react";
import ReactDOM from "react-dom";

var app = window.document.getElementById("my-extension-root");

function getSelectionText() {
  const doc = document as any;
  var text = "";
  var selectionStyle: any;

  if (window.getSelection) {
    var selection = window.getSelection();
    text = selection!.toString();
  } else {
    text = doc.selection.createRange().text;
  }

  return text;
}

window.addEventListener("mouseup", (e: any) => {
  if (app && app.style.display == "block") {
    return;
  }
  var selectedtext = getSelectionText();

  var convertedClass = getConvertedClasses(selectedtext);
  if (!convertedClass) {
    return;
  }

  if (!chrome.runtime) {
    window.location.reload();
    return;
  }

  if (!app) {
    //Make the actual window
    app = document.createElement("div");
    app.id = "my-extension-root";
  }

  if (
    !window.getSelection()!.isCollapsed &&
    selectedtext.length > 0 &&
    !(selectedtext.trim() == "")
  ) {
    app!.style.left = e.clientX + 50 + window.scrollY + "px";
    app!.style.top = (e.clientY - 30 + window.scrollY).toString + "px";
    app!.style.display = "block";

    window.document.documentElement.appendChild(app!);
    ReactDOM.render(
      <HoverPopup
        leftDir={e.clientX + window.scrollX + 50 + "px"}
        topDir={e.clientY + window.scrollY - 50 + "px"}
        convertedClass={convertedClass}
      />,
      document.getElementById("my-extension-root")
    );
  }
});

// make popup/icon disappear when mouse clicks elsewhere
window.addEventListener("mousedown", function (event: any) {
  console.log("event.target ", event);

  if (app && app.style.display == "block" && !app.contains(event.target)) {
    app.style.display = "none";
    ReactDOM.unmountComponentAtNode(app);
  }
});
