#!/usr/bin/env node
let fs = require("fs");
let inpArr = process.argv.slice(2);

if(inpArr.includes("-s") || inpArr.includes("-n") || inpArr.includes("-b")){
    if(inpArr.includes("-s")){
        if(inpArr.includes("-n")){
            let idx = inpArr.indexOf("-s");
            inpArr.splice(idx,1);
            idx = inpArr.indexOf("-n");
            inpArr.splice(idx,1);
            snHelper();
        }else if(inpArr.includes("-b")){
            let idx = inpArr.indexOf("-s");
            inpArr.splice(idx,1);
            idx = inpArr.indexOf("-b");
            inpArr.splice(idx,1);
            sbHelper();
        }else{
            let idx = inpArr.indexOf("-s")
            inpArr.splice(idx,1);
            sHelper();
        }
    }else if(inpArr.includes("-n")){
        if(inpArr.includes("-b")){
            console.log("Cannot perform -n and -b together, -n and -b commands works seprately");
            return;
        }
        let idx = inpArr.indexOf("-n")
        inpArr.splice(idx,1);
        nHelper();
    }else if(inpArr.includes("-b")){
        if(inpArr.includes("-n")){
            console.log("Cannot perform -n and -b command together, -n and -b commands work seprately");
            return;
        }
        let idx = inpArr.indexOf("-b")
        inpArr.splice(idx,1);
        bHelper();
    }
}else{
    fileHelper();
}

function fileHelper(){
    for(let i=0;i<inpArr.length;i++){
        if(inpArr[i]!=null || inpArr[i]!="-s" || inpArr[i]!="-n" || inpArr[i]!="-b"){
            if(fs.existsSync(inpArr[i]) == true && fs.lstatSync(inpArr[i]).isFile() == true){
                console.log(fs.readFileSync(inpArr[i]).toString());
            }else{
                console.log("One or more files path DOES NOT Exist");
                return;
            }
        }
    }
}

function sHelper(){
    for(let i=0;i<inpArr.length;i++){
        if(fs.existsSync(inpArr[i]) == true){
            let content = fs.readFileSync(inpArr[i]).toString();
            content = content.split('\n');
            for(let j=0;j<content.length;j++){
                if(content[j]!="\r"){
                    console.log(content[j]);
                    if(content[j+1]!=null)
                        console.log("\r");
                }
            }
        }else{
            console.log("One or more files path DOES NOT Exist");
            return;
        }
    }
}

function nHelper(){
    let count = 1;
    for(let i=0;i<inpArr.length;i++){
        if(fs.existsSync(inpArr[i]) == true){
            let content = fs.readFileSync(inpArr[i]).toString();
            content = content.split("\n");
            for(let j=0;j<content.length;j++){
                console.log(count + " " + content[j]);
                count++;
            }
        }else{
            console.log("One or more files path DOES NOT Exist");
            return;
        }
    }
}

function bHelper(){
    let count = 1;
    for(let i=0;i<inpArr.length;i++){
        if(fs.existsSync(inpArr[i]) == true){
            let content = fs.readFileSync(inpArr[i]).toString();
            content = content.split("\n");
            for(let j=0;j<content.length;j++){
                if(content[j]!="\r"){
                    console.log(count + " " + content[j]);
                    count++;
                }else{
                    console.log(content[j]);
                }
            }
        }else{
            console.log("One or more files path DOES NOT Exist");
            return;
        }
    }
}

function sbHelper(){
    let count = 1;
    for(let i=0;i<inpArr.length;i++){
        if(fs.existsSync(inpArr[i]) == true){
            let content = fs.readFileSync(inpArr[i]).toString();
            content = content.split("\n");
            for(let j=0;j<content.length;j++){
                if(content[j]!="\r"){
                    console.log(count + " " + content[j]);
                    count++;
                    if(content[j+1]!=null)
                        console.log("\r");
                }
            }
        }else{
            console.log("One or more files path DOES NOT Exist");
            return;
        }
    }
}

function snHelper(){
    let count = 1;
    for(let i=0;i<inpArr.length;i++){
        if(fs.existsSync(inpArr[i]) == true){
            let content = fs.readFileSync(inpArr[i]).toString();
            content = content.split("\n");
            for(let j=0;j<content.length;j++){
                if(content[j]!="\r"){
                    console.log(count + " " + content[j]);
                    count++;
                    if(content[j+1]!=null){
                    console.log(count + " " + "\r");
                    count++;
                    }
                }
            }
        }else{
            console.log("One or more files path DOES NOT Exist");
            return;
        }
    }
}