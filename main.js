async function access(){
    var text = "";
    for(d = 0;d < 100;d++){
        var res = await fetch(`https://scratchstats.com/api2/scratchdb/topusers/followers?country=global&page=${d}`);
        var res = await res.json();
        for(c = 0;c < 100;c++){
            var text = `${text}${res[c].username} ${res[c].count}\n`; 
        }
        console.log(`${d}/100 complate`)
    }
    download_txt("followers-data", text);
}

function download_txt(file_name, data) {
    var blob = new Blob([data], {type: 'text/plain'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.download = file_name;
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

access();
