    let indexColor=0;
    let time=null;
    let bandera=true; 
    let run=false;   
    const buttonPower = document.getElementById("power");
    const circles = document.querySelectorAll('.circulo')
    const buttons= document.querySelectorAll(".button");
    const img= document.querySelectorAll(".pointer");

    const changeColorLight=(color)=>{
        circles.item(indexColor).classList.add(color);
    }
    const changeColorButton=(color)=>{
        buttons.item(indexColor).classList.add(color);
    }
    const imgVisibility=()=>{
        img.item(indexColor).classList.add("visible");
    }
    const classListC=["circle-red","circle-yellow","circle-green"]
    const classListB=["button-red","button-yellow","button-green"]

    const power=()=>{
        // console.log(bandera)
        // console.log("entra condicion")
        run=true;
        if(bandera==true){
            // console.log("entra en true")
            buttons.forEach((button)=>{
                button.disabled = true;
                button.style.cursor="not-allowed";
            })
            time=setInterval(turnOn,2000);
            bandera=false;
        }else{
            // console.log("entra en false")
            clearInterval(time);
            bandera=true;
            circles.forEach(circle=>{
                circle.className="circulo";
            });
            buttons.forEach(button=>{
                button.className="button";
            });
            img.forEach(image=>{
                image.className="pointer";
            });
            indexColor=0;
            run=false;
            buttons.forEach((button)=>{
                button.style.cursor="pointer";
            })
        }
    }
    
    const turnOn=()=>{
        let lastIndex=(circles.length)-1;
        if(indexColor==0){
            circles[lastIndex].className = 'circulo'; 
            buttons[lastIndex].className = 'button'; 
            img[lastIndex].className="pointer";

            changeColorLight(classListC[indexColor]);
            changeColorButton(classListB[indexColor]);
            imgVisibility();
            indexColor++;
        }else{
            circles[indexColor-1].className = 'circulo';      
            buttons[indexColor-1].className = 'button'; 
            img[indexColor-1].className="pointer";

            changeColorLight(classListC[indexColor]);
            changeColorButton(classListB[indexColor])
            imgVisibility();
            indexColor++;
        }

        
        if(indexColor > 2) {
            indexColor = 0;
            lastIndex=2;
        }
    }
    var banderaColor=true;
    const assignColor=(index)=>{
        // console.log(index)
        if(run==false){
            buttons.forEach((button)=>{
                button.disabled = false;
            })
            if(banderaColor==true){
                indexColor=index;
                changeColorLight(classListC[indexColor]);
                changeColorButton(classListB[indexColor])
                imgVisibility();
                banderaColor=false;
                }else{
                    circles.forEach(circle=>{
                        circle.className="circulo";
                    });
                    buttons.forEach(button=>{
                        button.className="button";
                    });
                    img[indexColor].className="pointer";
                    indexColor=0;
                    banderaColor=true;
                    indexColor=index;
                    changeColorLight(classListC[indexColor]);
                    changeColorButton(classListB[indexColor])
                    imgVisibility();
                    banderaColor=false;
                }
        }
    }
    // buttons.addEventListener('click',assignColor(index))
    buttonPower.addEventListener("click", power);