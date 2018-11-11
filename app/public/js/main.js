function copy(value) {
        var tempInput = document.createElement("input");
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select();
        let status = document.execCommand("copy");
        document.body.removeChild(tempInput);
		if(status) alert("Text copied!");
		else alert("Can't copy the text!")
}